import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/RecipeList";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
