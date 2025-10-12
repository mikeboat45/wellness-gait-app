import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import LoginForm from "./components/forms/LoginForm";
// import SignUp from "./components/forms/SignUpForm";
// import PatientForm from "./components/forms/PatientIntake";
// import PatientRequest from "./components/forms/PatientRequest";
import LandingPage from "./components/landing-page/LandingPage";
// import Dashboard from "./components/dashboard/DashPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>
);
