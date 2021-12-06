import React, { useEffect, useRef } from "react";
import ActiveLink from "./ActiveLink";
import gsap from "gsap";

const Hamburger = ({ state }, categories) => {
  //vars for our animated DOM nodes
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let line1 = useRef();
  let line2 = useRef();
  let line3 = useRef();
  let line4 = useRef();
  let line5 = useRef();
  let line6 = useRef();

  useEffect(() => {
    if (state.clicked === false) {
      //close the menu
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
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
      gsap.to(menu, {
        duration: 0,
        css: { display: "block" },
      });
      gsap.fromTo(
        [revealMenuBackground, revealMenu],
        {
          height: 0,
        },
        {
          duration: 0.8,
          opacity: 1,
          height: "100%",
          stagger: {
            amount: 0.07,
          },
        }
      );
      staggerReveal(revealMenuBackground, revealMenu);
      staggerText(line1, line2, line3, line4, line5, line6);
    }
  }, [state]);

  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 0.8,
      transformOrigin: "right top",
      skewY: 2,
      ease: "power3.inOut",
      stagger: {
        amount: 0.1,
      },
    });
  };

  const staggerText = (node1, node2, node3, node4, node5, node6) => {
    gsap.from(
      [
        node1.current,
        node2.current,
        node3.current,
        node4.current,
        node5.current,
        node6.current,
      ],
      {
        duration: 0.8,
        y: 100,
        delay: 0.07,
        ease: "power3.inOut",
        stagger: {
          amount: 0.5,
        },
      }
    );
  };

  const handleHover = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: 3,
      skewX: 4,
      ease: "power3.inOut",
    });
  };

  const handleHoverExit = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: -3,
      skewX: 0,
      ease: "power3.inOut",
    });
  };

  return (
    <div ref={(el) => (menu = el)} className="hamburger-menu">
      <div
        ref={(el) => (revealMenuBackground = el)}
        className="menu-secondary-background-color"
      ></div>
      <div ref={(el) => (revealMenu = el)} className="menu-layer">
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <ActiveLink activeClassName="active" as="/actualites" href="/articles">
                      <a
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                        ref={line1}
                      >
                        Actualités
                      </a>
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink activeClassName="active" as="/membres" href="/">
                      <a
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                        ref={line2}
                      >
                        Membres
                      </a>
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink activeClassName="active" as="/category/fondateurs" href="/category/fondateurs">
                      <a
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                        ref={line3}
                      >
                        Spectacles
                      </a>
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink activeClassName="active" as="/podcast" href="/podcast">
                      <a
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                        ref={line4}
                      >
                        Podcast
                      </a>
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink activeClassName="active" as="/agenda" href="/agenda">
                      <a
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                        ref={line5}
                      >
                        Agenda
                      </a>
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink activeClassName="active" as="/contacts" href="/contacts">
                      <a
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                        ref={line6}
                      >
                        Contacts
                      </a>
                    </ActiveLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;