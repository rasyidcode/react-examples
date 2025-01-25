import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import RecordList from "./components/RecordList.tsx";
import Form from "./components/Form.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<RecordList />} />
          <Route path="/edit/:id" element={<Form />} />
          <Route path="/new" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
