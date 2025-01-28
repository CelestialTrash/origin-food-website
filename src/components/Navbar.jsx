import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const handleNavigation = (sectionId) => {
    navigate("/", { state: { targetSection: sectionId } }); // Redirige al landing page con la sección objetivo
  };

  return (
    <div id="navbar-container">
      <div className="logo-holder" onClick={() => navigate("/")}>
        <img
          src="src/assets/LOGO ORIGIN FOODS/PNG/ORIGIN-FOODS-4.png"
          alt="Logo-Origin-Foods"
          className="logo-clickable"
        />
      </div>
      <div className="links-container">
        <p
          className="quienes-somos-botton"
          onClick={() => handleNavigation("quienes-somos-container")}
        >
          Quienes Somos
        </p>
        <p onClick={() => handleNavigation("productos-servicios-section")}>
          Productos y Servicios
        </p>
        <p onClick={() => handleNavigation("oficinas-section")}>Oficinas</p>
        <p onClick={() => handleNavigation("contactenos-section")}>
          Contáctenos
        </p>
      </div>
    </div>
  );
}

export default Navbar;
