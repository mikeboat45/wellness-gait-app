import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import LoginForm from "./components/forms/LoginForm";
// import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoginForm />
  </StrictMode>
);
