import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "../pages/Landingpage.css";

// IMPORTS DE IMÁGENES
import ORIGIN_FOODS_55 from "../assets/PNG ORIGIN FOOD/ORIGIN-FOODS-55.png";
import ORIGIN_FOODS_65 from "../assets/PNG ORIGIN FOOD/ORIGIN-FOODS-65.png";
import ORIGIN_FOODS_61 from "../assets/PNG ORIGIN FOOD/ORIGIN-FOODS-61.png";
import ORIGIN_FOODS_26 from "../assets/PNG ORIGIN FOOD/ORIGIN-FOODS-26.png";
import ORIGIN_ICON from "../assets/PNG ORIGIN FOOD/ICONOS/ORIGIN-FOODS.png";
import ICON_01 from "../assets/PNG ORIGIN FOOD/ICONOS/ORIGIN-FOODS-01.png";
import ICON_02 from "../assets/PNG ORIGIN FOOD/ICONOS/ORIGIN-FOODS-02.png";
import ICON_03 from "../assets/PNG ORIGIN FOOD/ICONOS/ORIGIN-FOODS-03.png";
import ICON_04 from "../assets/PNG ORIGIN FOOD/ICONOS/ORIGIN-FOODS-04.png";
import ICON_23 from "../assets/PNG ORIGIN FOOD/ICONOS/ORIGIN-FOODS-23.png";
import SECTION_63 from "../assets/PNG ORIGIN FOOD/SECCIONES/ORIGIN-FOODS-63.png";
import SECTION_62 from "../assets/PNG ORIGIN FOOD/SECCIONES/ORIGIN-FOODS-62.png";
import SECTION_64 from "../assets/PNG ORIGIN FOOD/SECCIONES/ORIGIN-FOODS-64.png";

function Landingpage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.targetSection) {
      const sectionId = location.state.targetSection;
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.state]);

  return (
    <div className="landing-page-container">
      {/* HERO SECTION */}
      <section id="hero-section">
        <div className="hero-container">
          <img
            src={ORIGIN_FOODS_55}
            alt="slogan"
            className="hero-slogan"
          />
          <div className="icon-down-container">
            <img
              src={ORIGIN_ICON}
              alt="icono"
              className="icon-down-hero-section"
            />
          </div>
        </div>
        <div id="quienes-somos-container">
          <img
            src={ORIGIN_FOODS_65}
            alt="quienes somos"
            className="quienes-somos-title"
          />
          <p>
            Origin Foods es una empresa fundada en el año 2004 y dedicada desde
            sus inicios a la importación y distribución de productos
            relacionados con la industria de alimentos, posicionándose como una
            empresa <strong>confiable, seria y responsable.</strong> <br />
            <br />
            Nuestras áreas de acción han estado enfocadas en{" "}
            <strong>
              proveer materias primas para la industria nacional de alimentos,
              así como la importación de productos terminados listos para el
              consumo de los venezolanos.
            </strong>{" "}
            <br />
            <br />
            En los últimos años, Origin Foods ha contribuido activamente con el
            abastecimiento nacional, suministrando{" "}
            <strong>más de 5 mil toneladas de productos</strong> tanto para la
            industria nacional como para la red de distribución de productos
            terminados.
          </p>
          <button className="button-quienes-somos-section">CONÓCENOS!</button>
        </div>
      </section>

      {/* PRODUCTOS Y SERVICIOS */}
      <section id="productos-servicios-section">
        <div className="productos-servicios-title">
          <img
            src={ORIGIN_FOODS_61}
            alt="productos-servicios"
          />
        </div>
        <div className="products-container">
          <div className="products-card-container">
            <Link to="/productoslacteos">
              <img
                src={SECTION_63}
                alt=""
                className="card"
              />
            </Link>
            <Link to="/granosleguminosos">
              <img
                src={SECTION_62}
                alt=""
                className="card"
              />
            </Link>
            <Link to="/azucar">
              <img
                src={SECTION_64}
                alt=""
                className="card"
              />
            </Link>
          </div>
        </div>
        <div className="productos-slogan">
          <h1>
            IMPORTACIÓN DE PRODUCTOS{" "}
            <span className="figura">figuraaaaaaaaaaaaaaa</span>
            <br /> <span className="figura">figuraaaaaaaaaaaaaaa</span>LISTOS
            PARA EL CONSUMO
            <br /> DE LOS VENEZOLANOS{" "}
            <span className="figura">figuraaaaaaaaaaaaaaa</span>
          </h1>
        </div>
      </section>

      {/* NUESTROS VALORES */}
      <section id="nuestro-valores-section">
        <div className="nuestros-valores-title">
          <img
            src={ORIGIN_FOODS_26}
            alt="Nuestros Valores"
          />
        </div>
        <div className="valores-container">
          <img src={ICON_01} alt="Conexion" className="valores-card" />
          <img src={ICON_02} alt="Seguridad" className="valores-card" />
          <img src={ICON_03} alt="Compromiso" className="valores-card" />
          <img src={ICON_04} alt="Efectividad" className="valores-card" />
        </div>
      </section>

      {/* OFICINAS */}
      <section id="oficinas-section">
        <div className="oficinas-title">
          <img
            src={ICON_23}
            alt="oficina-icon"
          />
          <h1>OFICINAS</h1>
        </div>
      </section>

      {/* CONTACTENOS */}
      <section id="contactenos-section">
        <div>
          <a
            href="mailto:contacto@originfoods.com?subject=Consulta%20desde%20la%20página%20web"
            className="contactenos-button"
          >
            Contáctenos
          </a>
        </div>
      </section>
    </div>
  );
}

export default Landingpage;
