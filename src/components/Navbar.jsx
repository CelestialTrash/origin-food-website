import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/Navbar.css";
const links = [
  { title: "Quienes Somos", link: "quienes-somos-container" },
  { title: "Productos y Servicios", link: "productos-servicios-section" },
  { title: "Oficinas", link: "oficinas-section" },
  { title: "Contacto", link: "contactenos-section" },
];
function Navbar() {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const [link, setLink] = useState(links[0].link);
  const handleNavigation = (sectionId) => {
    setLink(sectionId);
    navigate("/", { state: { targetSection: sectionId } }); // Redirige al landing page con la sección objetivo
  };
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
    <div id='navbar-container'>
      <div className='logo-holder' onClick={() => navigate("/")}>
        <img
          src='/assets/LOGO-ORIGIN-FOODS/PNG/ORIGIN-FOODS-4.png'
          alt='Logo-Origin-Foods'
          className='logo-clickable'
        />
      </div>
      {/* Desktop Navigation */}
      {width > 620 ? (
        <div className='links-container'>
          {links.map((l, i) => (
            <p
              key={i}
              className={link === l.link ? "active-link" : ""}
              onClick={() => handleNavigation(l.link)}
            >
              {l.title}
            </p>
          ))}
        </div>
      ) : (
        <div className='mobile-nav'>
          <button
            className='hamburger-icon text-2xl p-2'
            onClick={toggleDrawer}
          >
            &#9776; {/* Unicode for hamburger icon */}
          </button>

          {isDrawerOpen && (
            <div className='side-drawer'>
              <div className='close-div'>
                <button className='close-icon' onClick={toggleDrawer}>
                  &times; {/* Unicode for close icon */}
                </button>
              </div>
              <div className='drawer-links'>
                {links.map((l, i) => (
                  <p
                    key={i}
                    className={
                      link === l.link ? "active-link text-yellow-500" : ""
                    }
                    onClick={() => {
                      handleNavigation(l.link);
                      toggleDrawer();
                    }}
                  >
                    {l.title}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;
