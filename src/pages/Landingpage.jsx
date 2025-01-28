import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom"; // Se agregó la importación de Link
import "../pages/Landingpage.css";

//MEDIA
import fotoPrincipal from "/Users/aquileshr/Desktop/Programming/Projects/origin-food-website/src/assets/PNG ORIGIN FOOD/SECCIONES/ORIGIN-FOODS-48.png"

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
            src="src/assets/PNG ORIGIN FOOD/ORIGIN-FOODS-55.png"
            alt="slogan"
            className="hero-slogan"
          />
          <div className="icon-down-container">
            <img
              src={fotoPrincipal}
              alt=""
              className="icon-down-hero-section"
            />
          </div>
        </div>
        <div id="quienes-somos-container">
          <img
            src="src/assets/PNG ORIGIN FOOD/ORIGIN-FOODS-65.png"
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
            src="src/assets/PNG ORIGIN FOOD/ORIGIN-FOODS-61.png"
            alt="productos-servicios"
          />
        </div>
        <div className="products-container">
          <div className="products-card-container">
            <Link to="/productoslacteos">
              <img
                src="src/assets/PNG ORIGIN FOOD/SECCIONES/ORIGIN-FOODS-63.png"
                alt=""
                className="card"
              />
            </Link>
            <Link to="/granosleguminosos">
              <img
                src="src/assets/PNG ORIGIN FOOD/SECCIONES/ORIGIN-FOODS-62.png"
                alt=""
                className="card"
              />
            </Link>
            <Link to="/azucar">
              <img
                src="src/assets/PNG ORIGIN FOOD/SECCIONES/ORIGIN-FOODS-64.png"
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
            src="src/assets/PNG ORIGIN FOOD/ORIGIN-FOODS-26.png"
            alt="Nuestros Valores"
          />
        </div>
        <div className="valores-container">
          <img
            src="src/assets/PNG ORIGIN FOOD/ICONOS/ORIGIN-FOODS-01.png"
            alt="Conexion"
            className="valores-card"
          />
          <img
            src="src/assets/PNG ORIGIN FOOD/ICONOS/ORIGIN-FOODS-02.png"
            alt="Seguridad"
            className="valores-card"
          />
          <img
            src="src/assets/PNG ORIGIN FOOD/ICONOS/ORIGIN-FOODS-03.png"
            alt="Compromiso"
            className="valores-card"
          />
          <img
            src="src/assets/PNG ORIGIN FOOD/ICONOS/ORIGIN-FOODS-04.png"
            alt="Efectividad"
            className="valores-card"
          />
        </div>
      </section>

      {/* OFICINAS */}
      <section id="oficinas-section">
        <div className="oficinas-title">
          <img
            src="src/assets/PNG ORIGIN FOOD/ICONOS/ORIGIN-FOODS-23.png"
            alt="oficina-icon"
          />
          <h1>OFICINAS</h1>
        </div>
        <div className="oficinas-card-container">
          <div className="oficina-panama-card">
            <div className="card-info">
              <div className="card-info-title">
                <h1>OFICINA CENTRAL</h1>
              </div>
              <div className="card-info-text">
                <p>
                  123 Calle xx, Ciudad de Panamá, Panamá <br />
                  Teléfono: +507 123-4567 <br />
                  Email: contacto@originfoods.com
                </p>
              </div>
            </div>
          </div>
          <div className="oficina-caracas-card">
            <div className="card-info">
              <div className="card-info-title">
                <h1>OFICINA REGIONAL</h1>
              </div>
              <div className="card-info-text">
                <p>
                  456 Avenida xx, Caracas, Venezuela <br />
                  Teléfono: +58 212-1234567 <br />
                  Email: venezuela@originfoods.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTENOS SECTION */}
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
