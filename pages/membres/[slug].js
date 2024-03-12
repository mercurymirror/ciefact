/* eslint-disable @next/next/no-img-element */
import { fetchAPI } from "../../lib/api"
import ReactMarkdown from "react-markdown"
import { Container, Col, Row } from "react-bootstrap"
import Membre from "../../components/membre"

export default function Member({ membre, quote, types, homepage, theatres }) {
  const hasImg = Boolean(homepage.homeImg)
  const hasImgMob = Boolean(homepage.homeImg_mobile)

  return (
    <>
      <Container className="member-container">
        <Row className="row-quote">
          <picture>
            {hasImgMob && (
              <source
                media="(max-width: 768px)"
                srcSet={homepage.homeImg_mobile.url}
              />
            )}
            {hasImg && <img src={homepage.homeImg.url} alt="homepage image" />}
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
        <a id="membre-anchor" className="anchor"></a>
        <Row className="col-membre">
          <Col className="img-membre">
            <img src={membre.img.url} width="200" alt="profil pic" />
          </Col>
          <Col className="text-membre">
            <p className="name">{membre.name}</p>
            <p className="fonction">{membre.fonctions}</p>
            <div>
              <ReactMarkdown>{membre.bio}</ReactMarkdown>
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
    paths: membres
      .filter((membre) => membre.slug)
      .map((membre) => ({
        params: {
          slug: membre.slug,
        },
      })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const membre = (await fetchAPI(`/membres?slug=${params.slug}`))[0]
  const [membres, categories, quote, types, homepage, theatres] =
    await Promise.all([
      fetchAPI("/membres"),
      fetchAPI("/categories"),
      fetchAPI("/quote"),
      fetchAPI("/types"),
      fetchAPI("/homepage"),
      fetchAPI("/theatres"),
    ])
  return {
    props: { membre, membres, categories, quote, types, homepage, theatres },
    revalidate: 1,
  }
}
