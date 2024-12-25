import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from './App.jsx'
// import App from "./TodoList";
// import App from "./Bio";
import App from './TodoList2'
// import App from "./Avatar";
// import App from "./TodoList3";
// import App from "./TodoList4";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
