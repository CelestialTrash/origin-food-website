import React, { useEffect } from "react";
import "./Granosleguminosos.css";

function Granosleguminosos() {
  useEffect(() => {
    window.scrollTo(0, 0); // Mueve la vista al inicio al cargar la página
  }, []);

  return (
    <>
      <section id="hero-section-granosleguminosos">
        <div className="hero-container-lacteos">
          <h4>Productos y Servicios</h4>
          <img
            src="src/assets/PNG ORIGIN FOOD/ORIGIN-FOODS-54.png"
            alt="slogan"
            className="hero-slogan-lacteos"
          />
        </div>
        <div id="productos-lacteos-container">
          <img
            src="src/assets/PNG ORIGIN FOOD/ICONOS/ORIGIN-FOODS-71.png"
            alt="icono-carton-leche"
            className="icono-producto-lacteo"
          />
          <h1 className="title-productos-lacteos">Granos Leguminosos</h1>
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
            <h1>Caraotas Rojas</h1>
            <p>
              Proveedor de alta calidad de caraotas
              rojas para diversas industrias.
            </p>
          </div>
        </div>
        <div className="type-product-container">
          <div className="card-product">
            <h1>Caraotas Rosadas</h1>
            <p>
              Caraotas rosadas de alta calidad listas para distribución y
              procesamiento.
            </p>
          </div>
        </div>
        <div className="type-product-container">
          <div className="card-product">
            <h1>Caraotas Blancas</h1>
            <p>
              Disponibilidad de caraotas blancas para
              re-empaque o procesamiento.
            </p>
          </div>
        </div>
        <div className="type-product-container">
          <div className="card-product">
            <h1>Caraotas Negras</h1>
            <p>
              Gran calidad en caratas negras
              para múltiples aplicaciones internacionales.
            </p>
          </div>
        </div>
        <div className="type-product-container">
          <div className="card-product">
            <h1>Garbanzos</h1>
            <p>
              Garbanzos de alta calidad listos para
              distribución en la industria.
            </p>
          </div>
        </div>
        <div className="type-product-container">
          <div className="card-product">
            <h1>Arvejas</h1>
            <p>
              Suministro de arvejas para re-empaque
              y procesamiento de alimentos.
            </p>
          </div>
        </div>
        <div className="type-product-container">
          <div className="card-product">
            <h1>Lentejas</h1>
            <p>
              Lentejas de primera calidad para diversas
              aplicaciones industriales.
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

export default Granosleguminosos;
