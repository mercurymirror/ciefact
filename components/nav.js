import React, { useRef } from "react"
import Link from "next/link"
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
          <Link as="/spectacles" href="/spectacles">
              <a>
                Spectacles
              </a>
            </Link>
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
