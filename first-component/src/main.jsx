import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/ScientistList";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
