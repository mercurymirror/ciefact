/* eslint-disable @next/next/no-img-element */
import { Container, Row, Col } from "react-bootstrap"
import ReactMarkdown from "react-markdown"
import Moment from "react-moment"

const PodcastList = ({ podcasts, quote, homepage }) => {
  const hasImg = Boolean(homepage.homeImg)
  const hasImgMob = Boolean(homepage.homeImg_mobile)
  const podcastImgMob = homepage.home_podcast_mobile.url

  return (
    <div className="bloc-actu">
      <Container>
        <Row className="row-quote">
          <picture>
            {hasImgMob && (
              <source media="(max-width: 768px)" srcSet={podcastImgMob} />
            )}
            {hasImg && (
              <img
                src={homepage.home_podcast.url}
                alt={homepage.home_podcast.name}
              />
            )}
          </picture>
          <p className="quote home">
            <ReactMarkdown source={quote.podcast} />
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
        {podcasts
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((item) => (
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
                  <p></p>
                </Col>
                <Col>
                  <ReactMarkdown source={item.text} />
                </Col>
                <Col>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.mediaplayer }}
                  ></div>
                </Col>
              </Col>
            </Row>
          ))}
      </Container>
    </div>
  )
}

export default PodcastList
