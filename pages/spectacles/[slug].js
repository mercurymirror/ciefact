import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import { fetchAPI } from "../../lib/api"
import { Container, Row, Col, Carousel } from "react-bootstrap"

const Spectacle = ({ spectacle, spectacles, categories }) => {


  return (
    <>
      <div className="spectacle-header">
        <img src={spectacle.image.url} />
        <div className="spectacle-titles">
          <h1 className="big-title">{spectacle.title}</h1>
          <h5 className="subtitle">{spectacle.sousTitre}</h5>
        </div>
      </div>
      <Container className="spectacle-text">
        <Row className= "bloc-mob">
          <Col className="ext a">
            <h1 className="vertical-title red">{spectacle.title}</h1>
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
          </Col>
        </Row>
        <Row className="gallery">
          {spectacle.galery.map((item) => (
            <img src={item.url} />
          ))} 

        </Row>
        <Row>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </Row>
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
    fallback: false,
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
