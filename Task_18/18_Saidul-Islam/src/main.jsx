import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Hello from "./Component/Hello.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Hello />
  </StrictMode>
);
