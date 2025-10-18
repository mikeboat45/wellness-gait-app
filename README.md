# The Wellness Gait Center (Capstone Project)

## Project Description

This project involves building a responsive and user-friendly web app for a physical therapy center (The Wellness Gait) using ReactJS and TailwindCSS. The goal is to streamline the appointment booking process for patients by offering an intuitive interface and seamless backend integration

## Main Features

- Landing Page: Provide a welcoming interface that shows the services the hospital offers, why we do what we do and signu/signin button
- Login Page: Allowing users to sign in
- User Dashbaord: Allow users to tract appointments, read doctors note and access to wellness resources
- Appointment Request Form: Collects patient details for consultation scheduling.

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/the-wellness-gait-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd the-wellness-gait-app
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Environment Variables

To run this project, you will need to add the following environment variables to a `.env` file in the root of your project.

`VITE_SUPABASE_URL`=your_supabase_url
`VITE_SUPABASE_ANON_KEY`=your_supabase_anon_key

Create a new project in supabase. Create a `.env` file in the root directory and add the following:

```
VITE_SUPABASE_URL="YOUR_SUPABASE_URL"
VITE_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"
```

### Running the Application

To start the development server, run:

```bash
npm run dev
```

This will start the app on `http://localhost:5173`.

## Backend & API Integration

### Supabase

We use Supabase as the backend service for this project. It acts as the systme of record for all patients and appointment data. Supabse provides:

- Authentication: Secure login and signup for patients and therapists
- Database: PostgreSQL database for storing patient details, appointment requests, and user roles.
- Row-Level Security (RLS): Ensures users can only access their own data.
  Edge functions: Serverless functions used to securely integrate with third-party APIs (Google Calendar API)

### Google Calendar API

I integrate the Google Calendar API to handle scheduling and syncing of appointments. It ensures that appointments created in the app are seamlessly reflected in the clinic's existing scheduling system.

- Real-time scheduling: Appointment requests in Supabase are synced with Google Calendar
- Event management: Create, update, and cancel events directly in therapists' calendars
- Reminders and availability: Patients benefit from automatic reminders and therapist can avoid double-booking.

## Wireframe & Design Prototype

[Figma Prototype](https://www.figma.com/design/bxeU2OesXanhG4cwPwsZZO/First-Design?node-id=2099-2&p=f)

## Deployment

This project is deployed on Vercel. You can access the live application here: [The Wellness Gait App](https://the-wellness-gait-app.vercel.app/)
