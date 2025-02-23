import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom"; // Se agregó la importación de Link
import "../pages/Landingpage.css";

//MEDIA
const products = [
  {
    to: "/granosleguminosos",
    src: "/assets/PNG-ORIGIN-FOOD/SECCIONES/ORIGIN-FOODS-62.png",
  },
  {
    to: "/productoslacteos",
    src: "/assets/PNG-ORIGIN-FOOD/SECCIONES/ORIGIN-FOODS-63.png",
  },
  {
    to: "/azucar",
    src: "/assets/PNG-ORIGIN-FOOD/SECCIONES/ORIGIN-FOODS-64.png",
  },
];

//valores

const valores = [
  {
    src: "/assets/PNG-ORIGIN-FOOD/ICONOS/ORIGIN-FOODS-01.png",
    alt: "Conexion",
  },
  {
    src: "/assets/PNG-ORIGIN-FOOD/ICONOS/ORIGIN-FOODS-02.png",
    alt: "Seguridad",
  },
  {
    src: "/assets/PNG-ORIGIN-FOOD/ICONOS/ORIGIN-FOODS-03.png",
    alt: "Compromiso",
  },
  {
    src: "/assets/PNG-ORIGIN-FOOD/ICONOS/ORIGIN-FOODS-04.png",
    alt: "Efectividad",
  },
];

const locations = [
  {
    src: "assets/PNG-ORIGIN-FOOD/panama.png",
    h1: "OFICINA CENTRAL",
    p: ` 123 Calle xx, Ciudad de Panamá, Panamá <br />
                  Teléfono: <a href="tel:+507-123-4567">+507 123-4567</a> <br />
                  Email: <a href="mailto:contacto@originfoods.com">contacto@originfoods.com</a>`,
  },
  {
    src: "assets/PNG-ORIGIN-FOOD/caracas.png",
    h1: "OFICINA REGIONAL",
    p: `456 Avenida xx, Caracas, Venezuela <br />
                  Teléfono: <a href="tel:+507-123-4567">+58 212-1234567</a> <br />
                  Email: <a href="mailto:venezuela@originfoods.com">venezuela@originfoods.com</a>`,
  },
];

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

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures it only runs once on mount

  return (
    <div className='landing-page-container'>
      {/* HERO SECTION */}
      <section id='hero-section'>
        <div className='hero-div'>
          <img src='/assets/hero.webp' className='main-hero-img' />
          <img
            src='/assets/PNG-ORIGIN-FOOD/ICONOS/ORIGIN-FOODS.png'
            alt=''
            className='icon-down-hero-section'
          />
        </div>

        <div className='hero-container'>
          <div className='hero-slogan'>
            <p>
              <span>Nutriendo</span> el mundo,
            </p>
            <p>
              cultivando <span>confianza.</span>
            </p>
          </div>
        </div>
        <div id='quienes-somos-container'>
          <p className='rounded-text'>¿QUIÉNES SOMOS?</p>
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
          <button className='button-quienes-somos-section'>¡CONÓCENOS!</button>
        </div>
      </section>
      <div className='separator'></div>
      {/* PRODUCTOS Y SERVICIOS */}
      <section id='productos-servicios-section'>
        <div className='productos-servicios-title'>
          <img
            src='/assets/PNG-ORIGIN-FOOD/ORIGIN-FOODS-61.png'
            alt='productos-servicios'
          />
        </div>
        <div className='products-container'>
          <div className='products-card-container'>
            {products.map((p, i) => {
              return (
                <Link key={i} to={p.to}>
                  <img src={p.src} alt={p.to} className='card' />
                </Link>
              );
            })}
          </div>
        </div>
        <div className='productos-slogan'>
          <h1>
            IMPORTACIÓN DE PRODUCTOS{" "}
            <span className='figura'>
              {width > 480 ? "figuraaaaaaaaaaaaa" : "figuraaaaa"}
            </span>
            <br />{" "}
            <span className='figura'>
              {width > 480 ? "figuraaaaaaaaaaaaaaa" : "figuraaaa"}
            </span>{" "}
            LISTOS PARA EL CONSUMO
            <br /> DE LOS VENEZOLANOS{" "}
            <span className='figura'>
              {width > 480 ? "figuraaaaaaaaaaaaaaa" : "figuraaaa"}
            </span>
          </h1>
        </div>
      </section>

      {/* NUESTROS VALORES */}
      <section id='nuestro-valores-section'>
        <div className='nuestros-valores-title'>
          <img
            src='/assets/PNG-ORIGIN-FOOD/ORIGIN-FOODS-26.png'
            alt='Nuestros Valores'
          />
        </div>
        <div className='valores-container'>
          {valores.map((v, i) => {
            return (
              <img key={i} src={v.src} alt={v.alt} className='valores-card' />
            );
          })}
        </div>
      </section>

      {/* OFICINAS */}
      <section id='oficinas-section'>
        <div className='oficinas-title'>
          <img
            src='assets/FOTOS-ORIGIN-FOOD/pinpoint.png'
            alt='oficina-icon'
            className='pinpoint-img'
          />
          <h1>OFICINAS</h1>
        </div>
        <div className='oficinas-card-container'>
          {locations.map((l, i) => {
            return (
              <div className='oficina-card' key={i}>
                <img src={l.src} />
                <div className='card-info'>
                  <div className='card-info-title'>
                    <h1>{l.h1}</h1>
                  </div>
                  <div className='card-info-text'>
                    <p dangerouslySetInnerHTML={{ __html: l.p }}></p>
                  </div>
                </div>
              </div>
            );
          })}
          {/* <div className="oficina-card">
            <img src="assets/PNG-ORIGIN-FOOD/panama.png"/>
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
          <div className="oficina-card">
            <img src="assets/PNG-ORIGIN-FOOD/caracas.png"/>
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
          </div> */}
        </div>
      </section>

      {/* CONTACTENOS SECTION */}
      <section id='contactenos-section'>
        <div>
          <a
            href='mailto:contacto@originfoods.com?subject=Consulta%20desde%20la%20página%20web'
            className='contactenos-button'
          >
            <img src='assets/PNG-ORIGIN-FOOD/ICONOS/ORIGIN-FOODS-29.png' />
            <span>Contáctenos</span>
          </a>
        </div>
      </section>

      <section className='footer'>
        <a className={"footer-icon-link logo"}>
          <img src={"assets/footer-logo.jpg"} />
        </a>
        {/* <div className='social-media-container'> */}
        <div className='social-media'>
          <a
            className={"footer-icon-link"}
            href='https://facebook.com'
            target='_blank'
          >
            <img src={"assets/fb-icon.png"} />
          </a>
          <a
            className={"footer-icon-link"}
            href='https://instagram.com'
            target='_blank'
          >
            <img src={"assets/insta-icon.png"} />
          </a>{" "}
          <a
            className={"footer-icon-link"}
            href='https://x.com'
            target='_blank'
          >
            <img src={"assets/x-icon.png"} />
          </a>
          {width > 768 ? <div className='empty-div'></div> : null}
        </div>
        {/* </div> */}
      </section>
    </div>
  );
}

export default Landingpage;
