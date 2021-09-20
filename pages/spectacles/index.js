import React, { useState, useRef } from "react";
import { Row, Col, Container } from "react-bootstrap"
import Link from "next/link";
import gsap from "gsap";
import { getStrapiMedia } from "../../lib/media";
import Layout from "../../components/layout";
import { fetchAPI } from "../../lib/api";


const Spectacles = ({ spectacles, categories }) => {

  const imagesRef = useRef({});

  //state for subtitle
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    subtitle: " ",
  });

  const handleHover = (e, id) => {
    gsap.to(imagesRef.current[id], {
      display: "block",
      delay: 0.8
    })
  }

  const handleHoverExit = (e, id) => {
    gsap.to(imagesRef.current[id], {
      display: "none",
      delay: "none"
    })
  }

  return (
    <Layout categories={categories}>
      <Container>
        <Row>
          <Col>
            <h1 className="vertical-title">Spéctacles</h1>
            <h5 className="vertical-title subtitle">{state.subtitle}</h5>
          </Col>
          <Col>
            <div className="tableau">
              {spectacles.map((item) => (
                <Row key={item.id}
                  onMouseEnter={(e) => handleHover(e, item.id)}
                  onMouseOut={(e) => handleHoverExit(e, item.id)}
                >
                  <Link as={`/spectacle/${item.title}`} href={`/spectacle/${item.id}`}>
                    <a className="titre"
                    >{item.title} </a>
                  </Link>
                  <img className="imgHome" src={item.image.url}
                    width="900"
                    ref={(el) => (imagesRef.current[item.id] = el)}
                  />
                </Row>

              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
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