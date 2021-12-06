import { fetchAPI } from "../lib/api";
import ReactMarkdown from "react-markdown";
import { Container, Col, Row } from "react-bootstrap";
import Membre from "./membre";
import BreadCrumb from "./breadCrumbs";


export default function Homepage({ homepage, quote, types }) {
  return (
    <>
    <BreadCrumb className="bread-membre" />
      <Container>
        <Row className= "row-quote">
          <p className="quote">
          Site en Construction. Retrouvez-nous très vite
            {/* {quote.text} */}
          </p>
          {/* <span className="section">
            <svg viewBox="0 0 20 20">
              <path
                fill="none"
                stroke="#eb1615"
                strokeMiterlimit={10}
                d="M5.55-.15l6.95 10L5.19 20"
              />
            </svg>
          </span> */}
        </Row>
        
        {/* <Row className="col-membre">
          <Col className="presentation">
                <div>
                  <ReactMarkdown source={homepage.hero[0].bio} />
                </div>
              </Col>
              <Membre types={types} />
        </Row> */}
      </Container>
      </>
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



