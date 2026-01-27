import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Counter from "./Counter.jsx";

let counter = 1;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Counter counter={counter} />
  </StrictMode>,
);
