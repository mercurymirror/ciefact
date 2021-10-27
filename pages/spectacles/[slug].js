import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import { fetchAPI } from "../../lib/api"
import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader



const Spectacle = ({ spectacle, spectacles, categories }) => {

 

  const slideRight = () => {
    const slider = document.querySelector('.gallery');
    console.log(slider);
    slider.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  }

  const slideLeft = () => {
    const slider = document.querySelector('.gallery');
    console.log(slider);
    slider.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    const bigTitle = document.getElementById('big-title');
    const vertTitle = document.getElementById('ver-title');
    const title = spectacle.title;
    if (title.length > 30) {
      bigTitle.style.fontSize = "8vw";
      vertTitle.style.fontSize = "3rem";
    }
  }, []);
  

  return (
    <>
      <div className="spectacle-header">
        <img src={spectacle.image.url} />
        <div className="spectacle-titles">
          <h1 id="big-title" className="big-title">{spectacle.title}</h1>
          <h5 className="subtitle">{spectacle.sousTitre}</h5>
        </div>
      </div>
      <Container className="spectacle-text">
        <Row className="bloc-mob">
          <Col className="ext a">
            <h1 id="ver-title" className="vertical-title red">{spectacle.title}</h1>
            <h2 className="quote shows">{spectacle.citation}</h2>
          </Col>
          <Col className="middle-col">
            <p className="">
              <Moment format="YYYY" className="date">{spectacle.year}</Moment>
            </p>
            <Row className="status">
              <Col>
                <span>{spectacle.status}</span>
              </Col>
              <Col>
                <span>{spectacle.category.name}</span>
              </Col>
            </Row>
            <Row>
              <p className="description">
                <ReactMarkdown source={spectacle.description} />
              </p>
            </Row>
          </Col>
          <Col className="ext b">
            <p className="generic">
              <ReactMarkdown source={spectacle.cast} />
            </p>
            <div className="scroll-down">
              Scroll down
              <img src="https://res.cloudinary.com/ciefact/image/upload/v1634668021/arrow_0e058f1520.svg"
                className="arrow-down" />
            </div>
          </Col>
        </Row>

        <Row className="gallery">

          {spectacle.galery.map((item) => (
            <img key={item.id} className="gallery-content" src={item.url} />
          ))}
        </Row>
        <button
          id="slideLeft"
          type="button"
          onClick={slideLeft}
        >
          <img src="https://res.cloudinary.com/ciefact/image/upload/v1634668021/arrow_0e058f1520.svg"
            className="arrow-down" />
        </button>
        <button
          id="slideRight"
          type="button"
          onClick={slideRight}
        >
          <img src="https://res.cloudinary.com/ciefact/image/upload/v1634668021/arrow_0e058f1520.svg"
            className="arrow-down" />
        </button>
      </Container>
    </>
  )
}

export async function getStaticPaths() {
  const spectacles = await fetchAPI("/spectacles")

  return {
    paths: spectacles.map((spectacle) => ({
      params: {
        slug: spectacle.slug,
      },
    })),
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  const spectacle = (await fetchAPI(`/spectacles?slug=${params.slug}`))[0]

  const [spectacles, categories] = await Promise.all([
    fetchAPI("/spectacles"),
    fetchAPI("/categories"),
  ])
  return {
    props: { spectacle: spectacle, spectacles, categories },
    revalidate: 1,
  }
}

export default Spectacle
