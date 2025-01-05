import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/Clock2";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App time={new Date()} />
  </StrictMode>
);
