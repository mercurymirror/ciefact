import React, { useContext } from "react";
import Link from "next/link";
import dynamic from 'next/dynamic';
import ActiveLink from './ActiveLink';
import { Row, Col, Navbar } from "react-bootstrap";
import Header from "./header";
import { MouseContext } from "../lib/context/mouse-context";
import DotRing from "../components/DotRing/DotRing";


const Nav = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  
  // const DynamicComponentWithNoSSR = dynamic(
  //   () => import('./logo'), //ici j'importe le module ,enfin voulais importer
    
  //   { ssr: false }
  // )
  
 

  return (
    <>
    <Navbar>
      <DotRing />
      <Row>
    {/* <DynamicComponentWithNoSSR /> */}
    </Row>
      <Row>
        <Col>
        <Header/>
        </Col>
      </Row>
      <Navbar.Collapse id="responsive-navbar-nav">
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
              <a
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
              >
                Actualités
              </a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink activeClassName="active" href="/membres"
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}>
              <a>
                Membres
              </a>
            </ActiveLink>
          </li>
          <li >
            <ActiveLink activeClassName="active" as="/spectacles" href="/spectacles">
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
