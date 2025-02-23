import React, { useEffect } from "react";
// import "./Productoslacteos.css";

function Productoslacteos() {
  useEffect(() => {
    window.scrollTo(0, 0); // Mueve la vista al inicio al cargar la página
  }, []);

  return (
    <div className='product-page-container'>
      <section id='hero-section'>
        <div className='hero-div'>
          <img src='/assets/milk-hero.webp' className='main-hero-img' />
        </div>

        <div className='product-hero-container'>
          <div className='center-slogan'>
            <p className='title'>Productos y Servicios</p>
            <p className='rounded-text'>Lácteos</p>
          </div>
        </div>
        <div className='hero-footer-container'>
          <img src='/assets/light-milk.png' />
          <p className='title'>Productos Lácteos</p>
          <p className='text'>
            Mercoamerica es representante para Venezuela de Interfood BV,
            <br></br>
            una empresa Holandesa productora y comercializadora de<br></br>
            productos lácteos de alta calidad.
          </p>
        </div>
      </section>
      {/* <section id="hero-section-lacteos">
        <div className="hero-container-lacteos">
          <h4>Productos y Servicios</h4>
          <img
            src="src/assets/PNG-ORIGIN-FOOD/ORIGIN-FOODS-53.png"
            alt="slogan"
            className="hero-slogan-lacteos"
          />
        </div>
        <div id="productos-lacteos-container">
          <img
            src="src/assets/PNG-ORIGIN-FOOD/ICONOS/ORIGIN-FOODS-70.png"
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
      </section> */}
      <section className='type-product-section'>
        <div className='type-product-container'>
          <div className='card-product'>
            <h1>Productos en Polvo</h1>
            <p>
              Leche Entera con Vitaminas A y D, Leche en Polvo Descremada,
              Mezclas Lácteas.
            </p>
          </div>
        </div>
        <div className='type-product-container'>
          <div className='card-product'>
            <h1>Productos Industriales</h1>
            <p>
              Grasa Butírica, Suero de Leche parcialmente Desmineralizado, Suero
              Dulce,
            </p>
          </div>
        </div>
        <div className='type-product-container'>
          <div className='card-product'>
            <h1>Quesos</h1>
            <p>
              Grasa Butírica, Suero de Leche parcialmente Desmineralizado, Suero
              Dulce,
            </p>
          </div>
        </div>
        <div className='type-product-container'>
          <div className='card-product'>
            <h1>Productos Líquidos</h1>
            <p>Leche UHT Entera y Descremada, Leche UHT de Almendras y Coco.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Productoslacteos;
