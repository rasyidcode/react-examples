import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/TeaSet";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
