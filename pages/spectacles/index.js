import React, { useRef, useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap"
import Link from "next/link";
import gsap from "gsap";
import SubMenu from "../../components/sousMenu";
import { fetchAPI } from "../../lib/api";
import BreadCrumb from "../../components/breadCrumbs";


const Spectacles = ({ spectacles, categories }) => {

  const imagesRef = useRef({});

  //state for subtitle
  const [state, setState] = useState({
    clicked: null,
    subtitle: " ",
  });

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
      delay: "none"
    })
  }

  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/spectacles" || "/spectacles/soutenues" || "/spectacles/fondateurs") {
      setToggle(true);
    }
  }, []);

  return (
    <>
        {toggle && (
      <SubMenu 
      categories={categories} 
      />
      )}
      <BreadCrumb style={{backgroundColor: "lightblue"}} />
      <Container>
        <Row>
          <Col sm={1}>
            <h1 className="vertical-title">Spectacles</h1>
          </Col>
          <Col sm={11} className="wrapper-spectacle">
            <div className="tableau">
              {spectacles.sort((a, b) => b.year - a.year)
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

export async function getStaticProps() {
  // Run API calls in parallel
  const [spectacles, categories] = await Promise.all([
    fetchAPI("/spectacles"),
    fetchAPI("/categories"),
  ])

  return {
    props: { spectacles, categories },
    revalidate: 1,
  }
}

export default Spectacles