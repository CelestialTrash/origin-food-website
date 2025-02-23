import React, { useEffect } from "react";
import "./Azucar.css";

function Azucar() {
  useEffect(() => {
    window.scrollTo(0, 0); // Mueve la vista al inicio al cargar la página
  }, []);

  return (
    <div className='product-page-container'>
      <section id='hero-section'>
        <div className='hero-div'>
          <img src='/assets/azucar.webp' className='main-hero-img' />
        </div>

        <div className='product-hero-container'>
          <div className='center-slogan'>
            <p className='title'>Productos y Servicios</p>
            <p className='rounded-text'>Azúcar</p>
          </div>
        </div>
        <div className='hero-footer-container'>
          <img src='/assets/light-azucar.png' />
          <p className='title'>Productos de Azúcar</p>
          <p className='text'>
            Nos especializamos en la importación y distribución de una amplia
            variedad de productos de azúcar refinada y sin refinar para diversas
            industrias.<br></br>
            Trabajamos con los mejores proveedores a nivel mundial, asegurando
            calidad y tiempos de despacho eficientes.
          </p>
        </div>
      </section>
      <section className='type-product-section'>
        <div className='type-product-container'>
          <div className='card-product'>
            <h1>Azúcar Refinada</h1>
            <p>
              Azúcar blanca refinada de alta pureza, ideal para repostería,
              bebidas y otras aplicaciones industriales.
            </p>
          </div>
        </div>
        <div className='type-product-container'>
          <div className='card-product'>
            <h1>Azúcar Morena</h1>
            <p>
              Azúcar morena natural, perfecta para la producción de alimentos y
              bebidas que requieren un sabor caramelizado.
            </p>
          </div>
        </div>
        <div className='type-product-container'>
          <div className='card-product'>
            <h1>Azúcar Orgánica</h1>
            <p>
              Azúcar orgánica producida de manera sostenible, con certificación
              de comercio justo y orgánico.
            </p>
          </div>
        </div>
        <div className='type-product-container'>
          <div className='card-product'>
            <h1>Azúcar Líquida</h1>
            <p>
              Soluciones de azúcar líquida para la industria alimentaria, con
              opciones de diferentes grados de concentración.
            </p>
          </div>
        </div>
        <div className='type-product-container'>
          <div className='card-product'>
            <h1>Azúcar en Polvo</h1>
            <p>
              Azúcar en polvo, ideal para repostería, confitería y decoraciones
              finas en productos de panadería.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Azucar;
