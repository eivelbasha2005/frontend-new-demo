import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: ".",
  testMatch: /capture-healthsync-screens\.spec\.ts/,
  fullyParallel: false,
  use: {
    browserName: "chromium",
    channel: "chrome",
    headless: true,
  },
  reporter: [["line"]],
});
