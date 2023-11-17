/* eslint-disable @next/next/no-img-element */
import { fetchAPI } from "../lib/api"
import ReactMarkdown from "react-markdown"
import { Container, Col, Row } from "react-bootstrap"
import Membre from "./membre"

export default function Homepage({ homepage, quote, types, theatres }) {
  const hasImg = Boolean(homepage.homeImg)
  const hasImgMob = Boolean(homepage.homeImg_mobile)

  return (
    <>
      <Container>
        <Row className="row-quote">
          <picture>
            {hasImgMob && (
              <source
                media="(max-width: 768px)"
                srcSet={homepage.homeImg_mobile.url}
              />
            )}
            {hasImg && (
              <img src={homepage.homeImg.url} alt={homepage.homeImg.name} />
            )}
          </picture>
          <p className="quote home">
            {/* Site en Construction. Retrouvez-nous très vite */}
            {quote.home}
          </p>
          <span className="section">
            <svg viewBox="0 0 20 20">
              <path
                fill="none"
                stroke="#eb1615"
                strokeMiterlimit={10}
                d="M5.55-.15l6.95 10L5.19 20"
              />
            </svg>
          </span>
        </Row>

        <Row className="col-membre">
          <Col className="presentation">
            <div>
              <ReactMarkdown source={homepage.hero[0].bio} />
            </div>
          </Col>
          <Membre types={types} theatres={theatres} />
        </Row>
      </Container>
    </>
  )
}

export async function getStaticPaths() {
  const membres = await fetchAPI("/membres")

  return {
    paths: membres.map((membre) => ({
      params: {
        id: membre.id.toString(),
      },
    })),
    fallback: false,
  }
}
