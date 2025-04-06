import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Example4 from "./Example4.tsx";
import ExamplePage from "./pages/example/ExamplePage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/example" element={<ExamplePage />} />
        <Route path="/example4" element={<Example4 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
