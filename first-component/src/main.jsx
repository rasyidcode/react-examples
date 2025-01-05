import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/Story2";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
