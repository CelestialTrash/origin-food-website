import React, { useEffect } from "react";
import "./Productoslacteos.css";

function Productoslacteos() {
  useEffect(() => {
    window.scrollTo(0, 0); // Mueve la vista al inicio al cargar la página
  }, []);

  return (
    <>
      <section id="hero-section-lacteos">
        <div className="hero-container-lacteos">
          <h4>Productos y Servicios</h4>
          <img
            src="src/assets/PNG ORIGIN FOOD/ORIGIN-FOODS-53.png"
            alt="slogan"
            className="hero-slogan-lacteos"
          />
        </div>
        <div id="productos-lacteos-container">
          <img
            src="src/assets/PNG ORIGIN FOOD/ICONOS/ORIGIN-FOODS-70.png"
            alt="icono-carton-leche"
            className="icono-producto-lacteo"
          />
          <h1 className="title-productos-lacteos">Productos Lacteos</h1>
          <p className="text-productos-lacteos">
            Mercoamerica es representante para Venezuela de Interfood BV, <br />{" "}
            una empresa Holandesa productora y comercializadora de <br />{" "}
            productos lácteos de alta calidad.
          </p>
        </div>
      </section>
      <section className="type-product-section">
        <div className="type-product-container">
          <div className="card-product">
            <h1>Productos en Polvo</h1>
            <p>
              Leche Entera con Vitaminas A y D,
              Leche en Polvo Descremada, 
              Mezclas Lácteas.
            </p>
          </div>
        </div>
        <div className="type-product-container">
          <div className="card-product">
            <h1>Productos Industriales</h1>
            <p>
              Grasa Butírica, Suero de Leche parcialmente Desmineralizado,
              Suero Dulce,
            </p>
          </div>
        </div>
        <div className="type-product-container">
          <div className="card-product">
            <h1>Quesos</h1>
            <p>
              Grasa Butírica, Suero de Leche parcialmente Desmineralizado,
              Suero Dulce,
            </p>
          </div>
        </div>
        <div className="type-product-container">
          <div className="card-product">
            <h1>Productos Líquidos</h1>
            <p>
              Leche UHT Entera y Descremada,
              Leche UHT de Almendras y Coco.
            </p>
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
    </>
  );
}

export default Productoslacteos;
