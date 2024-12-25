import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/Profile3";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App
      person={{
        name: "Dawyne Johnson",
        imageId: "tbn:ANd9GcQCM12Mcttv-ewdEIeSMI4iUC3btdnDX3fD2w&s",
      }}
      size={150}
      isSepia={true}
      thickBorder={true}
    />
  </StrictMode>
);
