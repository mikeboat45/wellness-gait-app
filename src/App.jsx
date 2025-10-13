import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landing-page/LandingPage";
import LoginForm from "./components/forms/LoginForm";
import SignUpForm from "./components/forms/SignUpForm";
import PatientIntakeForm from "./components/forms/PatientIntake";
import PatientRequest from "./components/forms/PatientRequest";
import DashPage from "./components/dashboard/DashPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/book-appointment" element={<PatientIntakeForm />} />

        {/* Authenticated Routes */}
        <Route path="/dashboard" element={<DashPage />} />
        <Route path="/dashboard/request-service" element={<PatientRequest />} />
      </Routes>
    </BrowserRouter>
  );
}
