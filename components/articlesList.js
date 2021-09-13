import { Container, Row, Col } from "react-bootstrap"
import Link from "next/link";
import gsap from "gsap";
import { getStrapiMedia } from "../lib/media";


const ArticlesList = ({ articles, categories }) => {


  return (
    <div className="bloc-actu">
        <Container>
            {articles.map((item) => (
              <Row key={item.id}
                >
                  <Col className="widget" md={4}>
                    <p>Posté par {item.author}</p>
                    <p className="date">{item.date}</p>
                  </Col>
                  <Col md={8} className="contentActu">
                  <Col>
                   <img className="imgActu" src={getStrapiMedia(item.image.url)}
                  />
                  </Col>
                  <Col className="titre">
                  <h1 className="titre"
                  >{item.title}
                  </h1>
                <h2 className="subtitle">
                    {item.subtitle}
                  </h2>
                </Col>
                <Col>
                <p className="textArticle">
                  {item.texte}
                </p>
                </Col>
                </Col>
              </Row>
            ))}
            </Container>
      </div>
  )
}

export default ArticlesList