import React, { useState, useRef, useEffect } from "react"
import { fetchAPI } from "../../lib/api"
import { Container, Col, Row }  from "react-bootstrap"
import Link from "next/link";
import gsap from "gsap";
import SubMenu from "../../components/sousMenu";
import BreadCrumb from "../../components/breadCrumbs";






const Category = ({ category, categories }) => {

  const imagesRef = useRef({});


//state for subtitle
const [state, setState] = useState({
  clicked: null,
  subtitle: " ",
});

const handleHover = (e, id) => {
  gsap.to(imagesRef.current[id], {
    display: "block",
  })
}

const handleHoverExit = (e, id) => {
  gsap.to(imagesRef.current[id], {
    display: "none",
    delay: "none"
  })
}

const [toggle, setToggle] = useState(false)

useEffect(() => {
  const path = window.location.pathname;
  if (path === "/spectacles") {
    setToggle(true);
  }
}, []);


  return (
    <>
      <Container>
        <Row>
          <Col sm={1}>
            <h1 className="vertical-title">Spectacles</h1>
            <h5 className="vertical-title subtitle">{category.name}</h5>
          </Col>
          <Col sm={11}>
            <div className="tableau">
              {category.spectacles.sort((a, b) => b.year - a.year)
              .map((item) => (
                <Row key={item.id}
                  onMouseEnter={(e) => handleHover(e, item.id)}
                  onMouseLeave={(e) => handleHoverExit(e, item.id)}
                >
                    <img className="imgCatalog" src={item.image.url}
                    width="50%"
                    ref={(el) => (imagesRef.current[item.id] = el)}
                  />
                  <Link as={`/spectacles/${item.slug}`} href={`/spectacles/${item.id}`}>
                    <a className="titre"
                    >{item.title} </a>
                  </Link>
                
                </Row>

              ))}
            </div>
          </Col>
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
