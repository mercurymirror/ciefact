import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import { fetchAPI } from "../../lib/api"
import Layout from "../../components/layout"
import { Container, Row, Col } from "react-bootstrap"

const Spectacle = ({ spectacle, categories }) => {


  return (
    <Layout categories={categories}>
      <Container className="spectacle">
        <img src={spectacle.image.url} />
        <div className="spectacle-titles">
          <h1 className="big-title">{spectacle.title}</h1>
          <h5 className="subtitle">{spectacle.sousTitre}</h5>
        </div>
      </Container>
      <Container className="spectacle-text">
      <Row>
        <Col sm="1">
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
        <Col>
        <p className="generic">
        Conception
 Clement Gœthals 
 Hélène Beutin
Interprétation
Lucile Charnier Mercedes Dassy Adèle Zouane
Collaboratrices techniques et artistiques Amélie Géhin Justine Denos
          </p>
          </Col>
      </Row>
      </Container>
    </Layout>
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
  const spectacles = (await fetchAPI(`/spectacles?slug=${params.slug}`))[0]

  const categories = await fetchAPI("/categories")

  return {
    props: { spectacle: spectacles, categories },
    revalidate: 1,
  }
}

export default Spectacle
