import React, { useContext } from "react";
import ActiveLink from './ActiveLink';
import { Row, Col, Navbar } from "react-bootstrap";
import Header from "./header";
import { MouseContext } from "../lib/context/mouse-context";
// import DotRing from "../components/DotRing/DotRing";


const Nav = () => {
  
 
  return (
    <>
    <Navbar>
      {/* <DotRing /> */}
      <Row>
        <Col>
        <Header/>
        </Col>
      </Row>
      <Navbar.Collapse className="navRow" id="responsive-navbar-nav">
        <style jsx>{`
      .nav-link {
        text-decoration: none;
      }

      .active {
        text-decoration: underline solid .14rem;
        text-underline-offset: 5px;
      }
    `}</style>
        <ul className="menu">
          <li>
            <ActiveLink activeClassName="active" href="/actualites">
              <a>
                Actualités
              </a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink activeClassName="active" href="/membres">
              <a>
                Membres
              </a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink activeClassName="active" as="/category/fondateurs" href="/category/fondateurs">
              <a>
                Spectacles
              </a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink activeClassName="active" as="/podcast" href="/podcast">
              <a>
                Podcast
              </a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink activeClassName="active" as="/agenda" href="/agenda">
              <a>
                Agenda
              </a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink activeClassName="active" as="/contacts" href="/contacts">
              <a>
                Contacts
              </a>
            </ActiveLink>
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
    </>
  )
}

export default Nav
