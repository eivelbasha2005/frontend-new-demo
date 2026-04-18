# HealthSync Responsive Web App

A React + Vite healthcare mockup that was refactored from a mobile-style interface into a fully responsive web application.

The app is frontend-only and uses static mock data only. It does not include:

- Backend
- Database
- API calls

## Tech Stack

- React
- Vite
- TypeScript
- React Router
- Tailwind CSS

## Pages in Order

### 1. Welcome Page `/`

This is the first page of the app. It includes:

- A HealthSync introduction
- A short explanation of the responsive web redesign
- Quick overview cards about the system
- Shortcut buttons to:
  - Dashboard
  - Login
  - Signup
  - Reset Password
  - AI Analysis

File:

- [src/pages/WelcomePage.tsx](C:/Users/M.Alaa/Desktop/mockup-sandbox/src/pages/WelcomePage.tsx)

### 2. Login Page `/login`

This page includes:

- A large hero section on desktop
- A static sign-in form
- A button that navigates to the Dashboard
- A reset-password link
- A signup link
- Mock social login buttons

File:

- [src/pages/LoginPage.tsx](C:/Users/M.Alaa/Desktop/mockup-sandbox/src/pages/LoginPage.tsx)

### 3. Signup Page `/signup`

This page includes:

- A mock account creation form
- Personal and health-related fields
- A short explanation of the new web-based structure
- A button to create a mock account
- A link back to login

File:

- [src/pages/SignupPage.tsx](C:/Users/M.Alaa/Desktop/mockup-sandbox/src/pages/SignupPage.tsx)

### 4. Reset Password Page `/reset-password`

This page includes:

- An email field
- A mock reset action
- A button to return to the login page

File:

- [src/pages/ResetPasswordPage.tsx](C:/Users/M.Alaa/Desktop/mockup-sandbox/src/pages/ResetPasswordPage.tsx)

### 5. Dashboard `/dashboard`

This is the main page after entering the app. It includes:

- A daily health overview
- Health score
- Vital cards for:
  - Heart Rate
  - Blood Pressure
  - Blood Oxygen
  - Blood Glucose
- A short AI insight
- Follow-up and care-plan reminders
- A prioritized alerts section

File:

- [src/pages/DashboardPage.tsx](C:/Users/M.Alaa/Desktop/mockup-sandbox/src/pages/DashboardPage.tsx)

### 6. AI Analysis `/ai-analysis`

This page includes:

- AI analysis summary
- Health score summary
- Analysis cards such as:
  - Cardiovascular outlook
  - Metabolic health
  - Respiratory status
- A main recommendation for the day

File:

- [src/pages/AIInsightsPage.tsx](C:/Users/M.Alaa/Desktop/mockup-sandbox/src/pages/AIInsightsPage.tsx)

### 7. History Page `/history`

This page includes:

- Reading summary stats
- A blood pressure trend chart
- Daily reading logs
- Metrics such as:
  - Blood Pressure
  - Heart Rate
  - SpO2
  - Glucose
- Reading status labels such as:
  - Normal
  - Elevated
  - High

File:

- [src/pages/HistoryPage.tsx](C:/Users/M.Alaa/Desktop/mockup-sandbox/src/pages/HistoryPage.tsx)

### 8. Alerts Page `/alerts`

This page includes:

- Alert summary cards
- Priority-based alert sections
- Detailed alert cards
- Quick links to related pages

File:

- [src/pages/AlertsPage.tsx](C:/Users/M.Alaa/Desktop/mockup-sandbox/src/pages/AlertsPage.tsx)

### 9. Profile Page `/profile`

This page includes:

- Basic patient information
- Member ID
- Blood type
- Age
- Height, weight, and adherence
- Diagnosed conditions
- Doctor and settings information
- Care team details

File:

- [src/pages/ProfilePage.tsx](C:/Users/M.Alaa/Desktop/mockup-sandbox/src/pages/ProfilePage.tsx)

### 10. Vital Details Pages `/vitals/:vitalId`

This is a dynamic route used for each vital from the dashboard.

Examples:

- `/vitals/heart-rate`
- `/vitals/blood-pressure`
- `/vitals/blood-oxygen`
- `/vitals/blood-glucose`

Each page includes:

- Current reading
- Target range
- Current status
- Last update time
- Weekly trend chart
- Short interpretation and notes

File:

- [src/pages/VitalDetailsPage.tsx](C:/Users/M.Alaa/Desktop/mockup-sandbox/src/pages/VitalDetailsPage.tsx)

## Important App Structure

### App Shell

The main internal application layout includes:

- Desktop sidebar
- Top header
- Right-side support rail
- Mobile bottom navigation

File:

- [src/components/layout/AppShell.tsx](C:/Users/M.Alaa/Desktop/mockup-sandbox/src/components/layout/AppShell.tsx)

### Public Layout

Used for public pages before entering the main app, including:

- Welcome
- Login
- Signup
- Reset Password

File:

- [src/components/layout/PublicLayout.tsx](C:/Users/M.Alaa/Desktop/mockup-sandbox/src/components/layout/PublicLayout.tsx)

### Mock Data

All static data is stored here, including:

- Vitals
- Alerts
- Analysis cards
- History readings
- Profile data
- Care team data

File:

- [src/data/healthData.ts](C:/Users/M.Alaa/Desktop/mockup-sandbox/src/data/healthData.ts)

## Local Run Commands

### 1. Install dependencies

```bash
npm install
```

### 2. Run locally

```bash
npm run dev
```

Vite usually starts on:

```bash
http://localhost:5173
```

### 3. Run TypeScript check

```bash
npm run typecheck
```

### 4. Build for production

```bash
npm run build
```

## Notes

- The app uses no real API integration
- All displayed data is mock data
- Navigation is handled with React Router
- The UI is designed to work across desktop, tablet, and mobile
