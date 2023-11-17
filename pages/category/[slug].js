/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react"
import { fetchAPI } from "../../lib/api"
import { Container, Col, Row } from "react-bootstrap"
import Link from "next/link"
import gsap from "gsap"
import SubMenuDesk from "../../components/sousMenuDesk"
import SideBar from "../../components/sideBar"

const Category = ({ category, categories }) => {
  const imagesRef = useRef({})

  const handleHover = (e, id) => {
    gsap.to(imagesRef.current[id], {
      duration: 0,
      display: "block",
    })
  }

  const handleHoverExit = (e, id) => {
    gsap.to(imagesRef.current[id], {
      duration: 0,
      display: "none",
      delay: "none",
    })
  }

  return (
    <>
      <h1 className="breadcrumb">Spectacle</h1>
      <Container className="spect-list container">
        <Row>
          <SideBar categories={categories} />
          <Row className="right-row">
            <SubMenuDesk categories={categories} />
            <Col sm={11}>
              <div className="tableau">
                {category.spectacles
                  .sort((a, b) => b.year - a.year)
                  .map((item) => (
                    <Row
                      key={item.id}
                      onMouseEnter={(e) => handleHover(e, item.id)}
                      onMouseLeave={(e) => handleHoverExit(e, item.id)}
                    >
                      <img
                        className="imgCatalog"
                        src={item.image.url}
                        width="50%"
                        ref={(el) => (imagesRef.current[item.id] = el)}
                        alt={item.image.name}
                      />
                      <Link
                        as={`/spectacles/${item.slug}`}
                        href={`/spectacles/${item.id}`}
                      >
                        <a className="titre">{item.title} </a>
                      </Link>
                    </Row>
                  ))}
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  )
}

export async function getStaticPaths() {
  const categories = await fetchAPI("/categories")

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const category = (await fetchAPI(`/categories?slug=${params.slug}`))[0]
  const categories = await fetchAPI("/categories")

  return {
    props: { category, categories },
    revalidate: 1,
  }
}

export default Category
