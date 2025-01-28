import React, { useEffect } from "react";
import "./Azucar.css";

function Azucar() {
  useEffect(() => {
    window.scrollTo(0, 0); // Mueve la vista al inicio al cargar la página
  }, []);

  return (
    <>
      <section id="hero-section-azucar">
        <div className="hero-container-lacteos">
          <h4>Productos y Servicios</h4>
          <img
            src="src/assets/PNG ORIGIN FOOD/ORIGIN-FOODS-52.png"
            alt="slogan"
            className="hero-slogan-lacteos"
          />
        </div>
        <div id="productos-lacteos-container">
          <img
            src="src/assets/PNG ORIGIN FOOD/ICONOS/ORIGIN-FOODS-69.png"
            alt="icono-carton-leche"
            className="icono-producto-lacteo"
          />
          <h1 className="title-productos-lacteos">Azucar</h1>
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
            <h1>Azúcar Refinada</h1>
            <p>
              Azúcar blanca refinada de alta pureza, ideal para repostería,
              bebidas y otras aplicaciones industriales.
            </p>
          </div>
        </div>
        <div className="type-product-container">
          <div className="card-product">
            <h1>Azúcar Morena</h1>
            <p>
              Azúcar morena natural, perfecta para la producción de
              alimentos y bebidas que requieren un sabor caramelizado.
            </p>
          </div>
        </div>
        <div className="type-product-container">
          <div className="card-product">
            <h1>Azúcar Orgánica</h1>
            <p>
              Azúcar orgánica producida de manera sostenible,
              con certificación de comercio justo y orgánico.
            </p>
          </div>
        </div>
        <div className="type-product-container">
          <div className="card-product">
            <h1>Azúcar Líquida</h1>
            <p>
              Soluciones de azúcar líquida para la industria alimentaria,
              con opciones de diferentes grados de concentración.
            </p>
          </div>
        </div>
        <div className="type-product-container">
          <div className="card-product">
            <h1>Azúcar en Polvo</h1>
            <p>
              Azúcar en polvo, ideal para repostería, confitería y
              decoraciones finas en productos de panadería.
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

export default Azucar;