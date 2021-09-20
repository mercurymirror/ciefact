import { fetchAPI } from "../../lib/api";
import ReactMarkdown from "react-markdown";
import { Container, Col, Row } from "react-bootstrap";
import Layout from '../../components/layout';
import Membre from "../../components/membre";


export default function Member({ membre, membres, categories, quote, types }) {
  return (
    <Layout categories={categories}>
      <Container>
        <Row>
          <p className="quote">
            {quote.text}
          </p>
        </Row>
        <Row className="col-membre">
              <Col className="img-membre">
                <img src={membre.img.url}
                  width="200" />
              </Col>
              <Col className="text-membre">
                <p className="name">
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
    </Layout>
  )
}


export async function getStaticPaths() {
  const membres = await fetchAPI("/membres")

  return {
    paths: membres.map((membre) => ({
      params: {
        id: membre.id.toString()
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const membre = (await fetchAPI(`/membres?id=${params.id}`))[0]
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
