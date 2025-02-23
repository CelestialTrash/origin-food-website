import React, { useEffect } from "react";

function Granosleguminosos() {
  useEffect(() => {
    window.scrollTo(0, 0); // Mueve la vista al inicio al cargar la página
  }, []);

  return (
    <div className='product-page-container'>
      <section id='hero-section'>
        <div className='hero-div'>
          <img src='/assets/grains-hero.webp' className='main-hero-img' />
        </div>

        <div className='product-hero-container'>
          <div className='center-slogan'>
            <p className='title'>Productos y Servicios</p>
            <p className='rounded-text'>Granos</p>
            <p className='rounded-text'>Leguminosos</p>
          </div>
        </div>
        <div className='hero-footer-container'>
          <img src='/assets/light-azucar.png' />
          <p className='title'>Granos Leguminosos</p>
          <p className='text'>
            Importamos y distribuimos una amplia variedad de granos, destinados
            <br></br>
            tanto para la industria del re-empaque como para la industria de
            <br></br>
            procesamiento de alimentos.
          </p>
        </div>
      </section>
      <section className='type-product-section'>
        <div className='type-product-container'>
          <div className='card-product'>
            <h1>Caraotas Rojas</h1>
            <p>
              Proveedor de alta calidad de caraotas rojas para diversas
              industrias.
            </p>
          </div>
        </div>
        <div className='type-product-container'>
          <div className='card-product'>
            <h1>Caraotas Rosadas</h1>
            <p>
              Caraotas rosadas de alta calidad listas para distribución y
              procesamiento.
            </p>
          </div>
        </div>
        <div className='type-product-container'>
          <div className='card-product'>
            <h1>Caraotas Blancas</h1>
            <p>
              Disponibilidad de caraotas blancas para re-empaque o
              procesamiento.
            </p>
          </div>
        </div>
        <div className='type-product-container'>
          <div className='card-product'>
            <h1>Caraotas Negras</h1>
            <p>
              Gran calidad en caratas negras para múltiples aplicaciones
              internacionales.
            </p>
          </div>
        </div>
        <div className='type-product-container'>
          <div className='card-product'>
            <h1>Garbanzos</h1>
            <p>
              Garbanzos de alta calidad listos para distribución en la
              industria.
            </p>
          </div>
        </div>
        <div className='type-product-container'>
          <div className='card-product'>
            <h1>Arvejas</h1>
            <p>
              Suministro de arvejas para re-empaque y procesamiento de
              alimentos.
            </p>
          </div>
        </div>
        <div className='type-product-container'>
          <div className='card-product'>
            <h1>Lentejas</h1>
            <p>
              Lentejas de primera calidad para diversas aplicaciones
              industriales.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Granosleguminosos;
