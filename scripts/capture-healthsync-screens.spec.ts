import { mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { expect, test, type Page } from "@playwright/test";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const previewRoot = "http://localhost:5173/preview/healthsync";
const mockupsDir = path.join(
  repoRoot,
  "src",
  "components",
  "mockups",
  "healthsync",
);
const outputDir = path.join(repoRoot, "ui-screens");

type RouteMeta = {
  order: number;
  purpose: string;
  screenshotSlug: string;
  note?: string;
};

type ScreenRecord = {
  componentName: string;
  inferredPurpose: string;
  routePath: string;
  screenshotFile: string;
  status: "success" | "failure";
  note?: string;
  error?: string;
};

const knownRoutes: Record<string, RouteMeta> = {
  Splash: {
    order: 1,
    purpose: "splash screen",
    screenshotSlug: "splash",
  },
  Onboarding1: {
    order: 2,
    purpose: "onboarding heart health",
    screenshotSlug: "onboarding-heart-health",
    note: "Inferred from the screen title 'Monitor Your Heart Health'.",
  },
  Onboarding2: {
    order: 3,
    purpose: "onboarding blood oxygen",
    screenshotSlug: "onboarding-blood-oxygen",
    note: "Inferred from the screen title 'Track Blood Oxygen Levels'.",
  },
  Onboarding3: {
    order: 4,
    purpose: "onboarding ai insights",
    screenshotSlug: "onboarding-ai-insights",
    note: "Inferred from the screen title 'AI-Powered Health Insights'.",
  },
  Onboarding4: {
    order: 5,
    purpose: "onboarding smart alerts",
    screenshotSlug: "onboarding-smart-alerts",
    note: "Inferred from the screen title 'Smart Alerts & Notifications'.",
  },
  Login: {
    order: 6,
    purpose: "login",
    screenshotSlug: "login",
  },
  Signup: {
    order: 7,
    purpose: "signup account details",
    screenshotSlug: "signup-account-details",
    note: "Inferred from the screen title 'Account details'.",
  },
  SignupStep2: {
    order: 8,
    purpose: "signup health information",
    screenshotSlug: "signup-health-information",
    note: "Inferred from the screen title 'Health information'.",
  },
  ResetPassword: {
    order: 9,
    purpose: "reset password",
    screenshotSlug: "reset-password",
  },
  ResetSuccess: {
    order: 10,
    purpose: "reset email sent",
    screenshotSlug: "reset-email-sent",
    note: "Inferred from the confirmation title 'Email Sent!'.",
  },
  Dashboard: {
    order: 11,
    purpose: "dashboard",
    screenshotSlug: "dashboard",
  },
  AIAnalysis: {
    order: 12,
    purpose: "ai analysis",
    screenshotSlug: "ai-analysis",
  },
  HealthHistory: {
    order: 13,
    purpose: "health history",
    screenshotSlug: "health-history",
  },
  VitalHeartRate: {
    order: 14,
    purpose: "vital heart rate",
    screenshotSlug: "vital-heart-rate",
  },
  VitalBP: {
    order: 15,
    purpose: "vital blood pressure",
    screenshotSlug: "vital-blood-pressure",
  },
  VitalOxygen: {
    order: 16,
    purpose: "vital blood oxygen",
    screenshotSlug: "vital-blood-oxygen",
  },
  VitalGlucose: {
    order: 17,
    purpose: "vital blood glucose",
    screenshotSlug: "vital-blood-glucose",
  },
  Notifications: {
    order: 18,
    purpose: "notifications",
    screenshotSlug: "notifications",
    note: "The component is named 'Notifications' but the visible screen title is 'Alerts'.",
  },
  Profile: {
    order: 19,
    purpose: "profile",
    screenshotSlug: "profile",
  },
};

function toKebabCase(value: string): string {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    .replace(/(\d+)/g, "-$1")
    .replace(/^-+|-+$/g, "")
    .replace(/--+/g, "-")
    .toLowerCase();
}

async function discoverComponentNames(): Promise<string[]> {
  const entries = await readdir(mockupsDir, { withFileTypes: true });

  return entries
    .filter(
      (entry) =>
        entry.isFile() &&
        entry.name.endsWith(".tsx") &&
        !entry.name.startsWith("_"),
    )
    .map((entry) => path.basename(entry.name, ".tsx"));
}

function getRouteMeta(componentName: string): RouteMeta {
  return (
    knownRoutes[componentName] ?? {
      order: 10_000,
      purpose: toKebabCase(componentName).replaceAll("-", " "),
      screenshotSlug: toKebabCase(componentName),
      note: "Used fallback naming because no explicit mapping was defined.",
    }
  );
}

function padOrder(order: number): string {
  return String(order).padStart(2, "0");
}

async function waitForRenderedScreen(page: Page): Promise<void> {
  await page.waitForSelector("#root", { state: "visible" });
  await page.waitForFunction(() => {
    const root = document.querySelector("#root");
    return Boolean(root && root.firstElementChild);
  });

  await page.evaluate(async () => {
    if ("fonts" in document && document.fonts.status !== "loaded") {
      await document.fonts.ready;
    }

    await new Promise<void>((resolve) => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => resolve());
      });
    });
  });

  const frame = page.locator("#root > div").first();
  await frame.waitFor({ state: "visible" });

  let stableReads = 0;
  let lastBox:
    | { x: number; y: number; width: number; height: number }
    | null = null;

  for (let attempt = 0; attempt < 12; attempt += 1) {
    const box = await frame.boundingBox();

    if (
      box &&
      lastBox &&
      Math.abs(box.width - lastBox.width) < 0.5 &&
      Math.abs(box.height - lastBox.height) < 0.5
    ) {
      stableReads += 1;
    } else {
      stableReads = 0;
    }

    lastBox = box;

    if (stableReads >= 2) {
      break;
    }

    await page.waitForTimeout(150);
  }

  await page.waitForTimeout(250);
}

test.describe("HealthSync preview capture", () => {
  test.describe.configure({ mode: "serial" });
  test.setTimeout(10 * 60 * 1000);

  test("discover and capture HealthSync preview screens", async ({ browser }) => {
    await mkdir(outputDir, { recursive: true });

    const discoveredComponents = await discoverComponentNames();
    const orderedComponents = discoveredComponents.sort((left, right) => {
      const leftMeta = getRouteMeta(left);
      const rightMeta = getRouteMeta(right);

      return leftMeta.order - rightMeta.order || left.localeCompare(right);
    });

    const context = await browser.newContext({
      viewport: { width: 430, height: 932 },
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      colorScheme: "light",
    });

    const page = await context.newPage();
    const report: ScreenRecord[] = [];

    for (const componentName of orderedComponents) {
      const meta = getRouteMeta(componentName);
      const routePath = `/preview/healthsync/${componentName}`;
      const screenshotFile = `${padOrder(meta.order)}-${meta.screenshotSlug}.png`;
      const screenshotPath = path.join(outputDir, screenshotFile);

      try {
        await page.goto(`${previewRoot}/${componentName}`, {
          waitUntil: "networkidle",
        });
        await waitForRenderedScreen(page);

        const rootTag = await page.locator("#root").evaluate((root) => {
          return root.firstElementChild?.tagName ?? null;
        });

        if (!rootTag || rootTag.toLowerCase() === "pre") {
          const previewError = await page.locator("#root").innerText();
          throw new Error(
            previewError || "Preview route rendered an error instead of a screen.",
          );
        }

        await page.locator("#root > div").first().screenshot({
          path: screenshotPath,
          animations: "disabled",
        });

        report.push({
          componentName,
          inferredPurpose: meta.purpose,
          routePath,
          screenshotFile,
          status: "success",
          note: meta.note,
        });
      } catch (error) {
        report.push({
          componentName,
          inferredPurpose: meta.purpose,
          routePath,
          screenshotFile,
          status: "failure",
          note: meta.note,
          error: error instanceof Error ? error.message : String(error),
        });
      }
    }

    await context.close();

    const jsonReportPath = path.join(outputDir, "mapping-report.json");
    const markdownReportPath = path.join(outputDir, "mapping-report.md");

    await writeFile(
      jsonReportPath,
      JSON.stringify(report, null, 2) + "\n",
      "utf8",
    );

    const markdown = [
      "# HealthSync Screenshot Mapping",
      "",
      "| Route Path | Screenshot File | Status | Notes |",
      "| --- | --- | --- | --- |",
      ...report.map((record) => {
        const notes = [record.note, record.error].filter(Boolean).join(" ");
        return `| \`${record.routePath}\` | \`${record.screenshotFile}\` | ${record.status} | ${notes || "-"} |`;
      }),
      "",
    ].join("\n");

    await writeFile(markdownReportPath, markdown, "utf8");

    expect(report).toHaveLength(19);
    expect(report.filter((record) => record.status === "failure")).toEqual([]);
  });
});
