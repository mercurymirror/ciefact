import React, { useRef } from "react"
import Link from "next/link"
import { Row, Col, Navbar, Dropdown, DropdownButton } from "react-bootstrap";

const Nav = ({ categories }) => {

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
        <ul className="menu">
          <li>
            <Link as="/actualites" href="/articles">
              <a>
                Actualitées
              </a>
            </Link>
          </li>
          <li>
            <Link as="/membres" href="/membres">
              <a>
                Membres
              </a>
            </Link>
          </li>
          <li>
            <DropdownButton className="" id="dropdown-basic-button" title="Spectacles">
              {categories.sort(function (a, b) {
                return a.nb - b.nb;
              }).map((category) => {
                return (
                  <Dropdown.Item>
                    <li key={category.id}>
                      <Link as={`/category/${category.slug}`} href="/category/[id]">
                        <a
                        >{category.name}
                        </a>
                      </Link>
                    </li>
                  </Dropdown.Item>
                )
              })}
            </DropdownButton>

          </li>
          <li>
            <Link as="/podcast" href="/podcast">
              <a>
                Podcast
              </a>
            </Link>
          </li>
          <li>
            <Link as="/agenda" href="/agenda">
              <a>
                Agenda
              </a>
            </Link>
          </li>
          <li>
            <Link as="/contacts" href="/contacts">
              <a>
                Contacts
              </a>
            </Link>
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Nav
