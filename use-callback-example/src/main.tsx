import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import ExamplePage from "./pages/example/ExamplePage.tsx";
import HomePage from "./pages/home/HomePage.tsx";
import Example2Page from "./pages/example2/Example2Page.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/example" element={<ExamplePage />} />
          <Route path="/example2" element={<Example2Page />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
