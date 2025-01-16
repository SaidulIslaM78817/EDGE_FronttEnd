import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Hero from "./Component/Hero.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Hero />
  </StrictMode>
);
