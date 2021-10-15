import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";


const ArticlesList = ({ articles }) => {

//   const articleRef = useRef({});
// console.log(articleRef);

  const [isVisible, setIsVisible] = useState(false);

  const handleClick = (e => {
      setIsVisible(!isVisible)
  })

  return (
    <div className="bloc-actu">
      <Container>
        {articles.sort((a, b) => b.date - a.date).map((item) => (
          <Row key={item.id}
          >
            <Col className="widget" md={4}>
              <p>Posté par {item.author}</p>
              <Moment format="DD.MM.YYYY" className="date">{item.date}</Moment>
            </Col>
            <Col md={8} className="contentActu">
              <Col>
                <img className="imgActu" src={item.image.url}
                />
              </Col>
              <Col className="titre">
                <h1 className="titre"
                  onClick={(e) => handleClick(e)}
                >{item.title}
                </h1>
                <h2 className="subtitle">
                  {item.subtitle}
                </h2>
              </Col>
              <Col>
              {isVisible && (
                <ReactMarkdown source={item.texte}
                  ref={(el) => (articleRef.current = el)} />
              )}
              </Col>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  )
}

export default ArticlesList