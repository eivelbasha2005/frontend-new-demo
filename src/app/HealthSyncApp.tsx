import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { healthSyncRoutes } from "@/app/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { AIInsightsPage } from "@/pages/AIInsightsPage";
import { AlertsPage } from "@/pages/AlertsPage";
import { DashboardPage } from "@/pages/DashboardPage";
import { HistoryPage } from "@/pages/HistoryPage";
import { LoginPage } from "@/pages/LoginPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { ResetPasswordPage } from "@/pages/ResetPasswordPage";
import { SignupPage } from "@/pages/SignupPage";
import { VitalDetailsPage } from "@/pages/VitalDetailsPage";
import { WelcomePage } from "@/pages/WelcomePage";

export function HealthSyncApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route element={<WelcomePage />} path={healthSyncRoutes.welcome} />
          <Route element={<LoginPage />} path={healthSyncRoutes.login} />
          <Route element={<SignupPage />} path={healthSyncRoutes.signup} />
          <Route
            element={<ResetPasswordPage />}
            path={healthSyncRoutes.resetPassword}
          />
        </Route>

        <Route element={<AppShell />}>
          <Route element={<DashboardPage />} path={healthSyncRoutes.dashboard} />
          <Route element={<AIInsightsPage />} path={healthSyncRoutes.aiAnalysis} />
          <Route element={<HistoryPage />} path={healthSyncRoutes.healthHistory} />
          <Route element={<AlertsPage />} path={healthSyncRoutes.notifications} />
          <Route element={<ProfilePage />} path={healthSyncRoutes.profile} />
          <Route element={<VitalDetailsPage />} path="/vitals/:vitalId" />
        </Route>

        <Route
          element={<Navigate replace to={healthSyncRoutes.welcome} />}
          path="*"
        />
      </Routes>
    </BrowserRouter>
  );
}
