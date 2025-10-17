import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landing-page/LandingPage";
import LoginForm from "./components/forms/LoginForm";
import SignUpForm from "./components/forms/SignUpForm";
import PatientIntakeForm from "./components/forms/PatientIntake";
import PatientRequest from "./components/forms/PatientRequest";
import DashPage from "./components/dashboard/DashPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Profile from "./components/dashboard/Profile";
import ContactUs from "./components/landing-page/ContactUs";
import ContactCard from "./components/landing-page/ContactCard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/book-appointment" element={<PatientIntakeForm />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* Authenticated Routes */}
        <Route
          path="/dashboard"
          element={<ProtectedRoute><DashPage /></ProtectedRoute>}
        />
        <Route
          path="/dashboard/request-service"
          element={<ProtectedRoute><PatientRequest /></ProtectedRoute>}
        />
        <Route
          path="/dashboard/profile"
          element={<ProtectedRoute><Profile /></ProtectedRoute>}
        />
        <Route
          path="/contact-card"
          element={<ProtectedRoute><ContactCard /></ProtectedRoute>}
        />
      </Routes>
    </BrowserRouter>
  );
}
