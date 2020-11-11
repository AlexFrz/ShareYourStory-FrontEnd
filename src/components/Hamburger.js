import React, { useEffect, useRef } from "react";
import "./Hamburger.scss";
import { Link } from "react-router-dom";
import gsap from "gsap";
import africa from "../images/africanchild.jpg";
import india from "../images/indianwoman.jpg";
import market from "../images/market.jpeg";
import asia from "../images/monk.jpg";
import southamerica from "../images/southamerica.jpg";
import hijab from "../images/hijab.jpeg";

const cities = [
  { name: "Africa", image: market },
  { name: "India", image: india },
  { name: "South America", image: southamerica },
  { name: "Middle East", image: hijab },
  { name: "Asia", image: asia },
];

const Hamburger = ({ state }) => {
  // Vars for our handmaded dom nodes
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      // close our menu
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        eade: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });
      gsap.to(menu, {
        duration: 1,
        css: { display: "none" },
      });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // open the menu
      gsap.to(menu, {
        duration: 0,
        css: { display: "block" },
      });
      gsap.to([revealMenuBackground, revealMenu], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      staggerReveal(revealMenuBackground, revealMenu);
      fadeInUp(info);
      staggerText(line1, line2, line3);
    }
  }, [state]);

  const staggerText = (node1, node2, node3) => {
    gsap.from([node1, node2], {
      duration: 0.8,
      y: 100,
      delay: 0.1,
      ease: "power3.inOut",
      stagger: {
        amount: 0.3,
      },
    });
  };

  const fadeInUp = (node) => {
    gsap.from(node, {
      y: 60,
      duration: 1,
      delay: 0.2,
      opacity: 0,
      ease: "power3.inOut",
    });
  };

  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 0.8,
      height: 0,
      transformOrigin: "right top",
      skewY: 2,
      ease: "power3.inOut",
      stagger: {
        amount: 0.1,
      },
    });
  };

  const handleCity = (city) => {
    gsap.to(cityBackground, {
      duration: 0,
      background: `url(${city}) center center`,
    });
    gsap.to(cityBackground, {
      duration: 0.4,
      opacity: 1,
      ease: "power3.inOut",
    });
    gsap.from(cityBackground, {
      duration: 0.4,
      skewY: 2,
      transformOrigin: "right top",
    });
  };

  const handleCityReturn = () => {
    gsap.to(cityBackground, {
      duration: 0.4,
      opacity: 0,
    });
  };

  const handleHover = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: 3,
      skewX: 4,
      ease: "power1.inOut",
    });
  };

  const handleHoverExit = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: -3,
      skewX: 0,
      ease: "power1.inOut",
    });
  };

  return (
    <div ref={(el) => (menu = el)} className="hamburger-menu">
      <div
        ref={(el) => (revealMenuBackground = el)}
        className="menu-secondary-background-color"
      ></div>
      <div ref={(el) => (revealMenu = el)} className="menu-layer">
        <div
          ref={(el) => (cityBackground = el)}
          className="menu-city-background"
        ></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line1 = el)}
                      to="/opportunities"
                    >
                      They all
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line2 = el)}
                      to="/solutions"
                    >
                      have a
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line3 = el)}
                      to="/contact-us"
                    >
                      STORY...
                    </Link>
                  </li>
                </ul>
              </nav>
              <div ref={(el) => (info = el)} className="info">
                <h3>Our Promise</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eaque laboriosam pariatur omnis. Nisi possimus quos velit,
                  impedit porro, voluptatum autem eum debitis placeat omnis
                  error laboriosam ab esse nesciunt minima?
                </p>
              </div>
              <div className="locations">
                Locations:
                {cities.map((el) => (
                  <span
                    key={el.name}
                    onMouseEnter={() => handleCity(el.image)}
                    onMouseOut={handleCityReturn}
                  >
                    {el.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
