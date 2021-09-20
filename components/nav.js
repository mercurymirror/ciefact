import React, { useRef } from "react";
import Link from "next/link";
import ActiveLink from './ActiveLink';
import { Row, Col, Navbar, Dropdown, DropdownButton } from "react-bootstrap";

const Nav = ({ spectacles }) => {

  return (
    <Navbar>
      <Row>
        <Navbar.Brand>
          <Link href="/actualites">
            <a className="logo"> FACT</a>
          </Link>
        </Navbar.Brand>
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
            <ActiveLink activeClassName="active" as="/actualites" href="/articles">
              <a>
                Actualitées
              </a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink activeClassName="active" as="/membres" href="/membres">
              <a>
                Membres
              </a>
            </ActiveLink>
          </li>
          <li>
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
        <Row>
          {/* {spectacles.category.map((category) => {
                return (
                  <div key={category.id}>
                      <Link as={`/category/${category.slug}`} href="/category/[id]">
                        {category.name}
                      </Link>
                  </div>
                )
              })} */}
        </Row>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Nav