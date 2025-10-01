import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import LoginForm from "./components/forms/LoginForm";
// import SignUp from "./components/forms/SignUpForm";
import PatientForm from "./components/forms/PatientIntake";
// import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PatientForm />
  </StrictMode>
);
