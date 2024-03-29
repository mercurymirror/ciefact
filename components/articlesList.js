/* eslint-disable @next/next/no-img-element */
import { useState, useRef } from "react"
import { Container, Row, Col } from "react-bootstrap"
import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import gsap from "gsap"

const ArticlesList = ({ homepage, articles, quote }) => {
  const showRef = useRef({})

  const [state, setState] = useState({
    initial: false,
    clicked: null,
    readMore: "Voir plus",
  })
  const [disabled, setDisabled] = useState(false)

  const handleShow = (e, id) => {
    disabledMenu()
    if (state.initial === false) {
      gsap.to(showRef.current[id], {
        duration: 1,
        display: "block",
      })
      setState({
        initial: null,
        clicked: true,
        readMore: "Voir moins",
      })
    } else if (state.clicked === true) {
      gsap.to(showRef.current[id], {
        duration: 0,
        display: "none",
      })
      setState({
        clicked: !state.clicked,
        readMore: "Voir plus",
      })
    } else if (state.clicked === false) {
      gsap.to(showRef.current[id], {
        duration: 0,
        display: "block",
      })
      setState({
        clicked: !state.clicked,
        readMore: "Voir moins",
      })
    }
  }

  const disabledMenu = () => {
    setDisabled(!disabled)
    setTimeout(() => {
      setDisabled(false)
    }, 1200)
  }

  const hasImg = Boolean(homepage.homeImg)
  const hasImgMob = Boolean(homepage.homeImg_mobile)

  return (
    <div className="bloc-actu">
      <Container>
        <Row className="row-quote">
          <picture>
            {hasImgMob && (
              <source
                media="(max-width: 768px)"
                srcSet={homepage.home_actu_mobile.url}
              />
            )}
            {hasImg && (
              <img src={homepage.home_actu.url} alt={homepage.home_actu.name} />
            )}
          </picture>
          <div className="quote home">
            <ReactMarkdown>{quote.actu}</ReactMarkdown>
          </div>
          <span className="section">
            <svg viewBox="0 0 20 20">
              <path
                fill="none"
                stroke="#eb1615"
                strokeMiterlimit={5}
                d="M5.55-.15l6.95 10L5.19 20"
              />
            </svg>
          </span>
        </Row>
        {articles
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((item) => {
            return (
              <Row key={item.id}>
                <Col className="widget" md={4}>
                  <p>Posté par {item.author}</p>
                  <Moment format="DD.MM.YYYY" className="date">
                    {item.date}
                  </Moment>
                </Col>
                <Col md={8} className="contentActu">
                  <Col>
                    <img
                      className="imgActu"
                      src={item.image.url}
                      alt={item.image.name}
                    />
                  </Col>
                  <Col className="titre">
                    <h1 className="titre">{item.title}</h1>
                    <h2 className="subtitle">{item.subtitle}</h2>
                    <div>
                      <ReactMarkdown>{item.Chapeau}</ReactMarkdown>
                      <a key={item.id} onClick={(e) => handleShow(e, item.id)}>
                        {item.texte === "" ? null : (
                          <span>... {state.readMore}</span>
                        )}
                      </a>
                    </div>
                  </Col>
                  <Col
                    className="article-content"
                    ref={(el) => (showRef.current[item.id] = el)}
                  >
                    <ReactMarkdown>{item.texte}</ReactMarkdown>
                  </Col>
                </Col>
              </Row>
            )
          })}
      </Container>
    </div>
  )
}

export default ArticlesList
