import { fetchAPI } from "../../lib/api";
import ReactMarkdown from "react-markdown";
import { Container, Col, Row } from "react-bootstrap";
import Membre from "../../components/membre";


export default function Member({ membre, membres, categories, quote, types }) {

  return (
    <>
      <Container className="member-container">
        <Row>
          <p className="quote">
            {quote.text}
          </p>
        </Row>
        <Row className="col-membre" id="membre-anchor">
              <Col className="img-membre">
                <img src={membre.img.url}
                  width="200" />
              </Col>
              <Col className="text-membre">
                <p className="name" >
                  {membre.name}
                </p>
                <p className="fonction">
                  {membre.fonctions}
                </p>
                <div>
                  <ReactMarkdown source={membre.bio} />
                </div>
              </Col>
              <Membre types={types} />
        </Row>
      </Container>
    </>
  )
}


export async function getStaticPaths() {
  const membres = await fetchAPI("/membres")

  return {
    paths: membres.filter(membre => membre.slug).map((membre) => ({
      params: {
        slug: membre.slug
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const membre = (await fetchAPI(`/membres?slug=${params.slug}`))[0]
  const [membres, categories, quote, types] = await Promise.all([
    fetchAPI("/membres"),
    fetchAPI("/categories"),
    fetchAPI("/quote"),
    fetchAPI("/types"),
  ])
  return {
    props: { membre, membres, categories, quote, types },
    revalidate: 1,
  }
}

