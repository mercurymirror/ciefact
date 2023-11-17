import React from "react"
import ActiveLink from "./ActiveLink"
import { Row, Col, Navbar } from "react-bootstrap"
import Header from "./header"

const Nav = (categories) => {
  return (
    <>
      <Navbar>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Navbar.Collapse className="navRow" id="responsive-navbar-nav">
          <style jsx>{`
            .nav-link {
              text-decoration: none;
            }

            .active {
              text-decoration: underline solid 0.14rem;
              text-underline-offset: 5px;
            }
          `}</style>
          <ul className="menu">
            <li>
              <ActiveLink activeClassName="active" href="/actualites">
                <a>Actualités</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName="active" href="/membres">
                <a>Membres</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                activeClassName="active"
                as={`/category/${categories.categories}`}
                href={`/category/${categories.categories}`}
              >
                <a>Spectacles</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                activeClassName="active"
                as="/podcast"
                href="/podcast"
              >
                <a>Podcast</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName="active" as="/agenda" href="/agenda">
                <a>Agenda</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                activeClassName="active"
                as="/contacts"
                href="/contacts"
              >
                <a>Contacts</a>
              </ActiveLink>
            </li>
          </ul>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Nav
