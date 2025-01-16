import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Footer from "./Component/Footer.jsx";
import Navbar from "./Component/Navbar.jsx";
import HomePage from "./Component/home.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar/>
    <HomePage/>
    <Footer/>
  </StrictMode>
);
