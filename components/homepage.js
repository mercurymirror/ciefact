import { fetchAPI } from "../lib/api";
import ReactMarkdown from "react-markdown";
import { Container, Col, Row } from "react-bootstrap";
import Membre from "./membre";


export default function Homepage({ homepage, quote, types }) {
  return (
      <Container>
        <Row>
          <p className="quote">
            {quote.text}
          </p>
        </Row>
        <Row className="col-membre">
          <Col>
                <div>
                  <ReactMarkdown source={homepage.hero[0].bio} />
                </div>
              </Col>
              <Membre types={types} />
        </Row>
      </Container>
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



