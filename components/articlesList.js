import { Container, Row, Col } from "react-bootstrap";
import Moment from "react-moment";
import ShowMoreText from "react-show-more-text";

const ArticlesList = ({ articles }) => {

  function executeOnClick() {
}

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
                  >{item.title}
                  </h1>
                <h2 className="subtitle">
                    {item.subtitle}
                  </h2>
                </Col>
                <Col>
                <ShowMoreText
                lines={5}
                more="Show more"
                less="Show less"
                className="textArticle"
                anchorClass="my-anchor-css-class"
                onClick={executeOnClick}
                expanded={false}
                truncatedEndingComponent={"... "}
            >
                <p className="textArticle">
                  {item.texte}
                </p>
                </ShowMoreText>
                </Col>
                </Col>
              </Row>
            ))}
            </Container>
      </div>
  )
}

export default ArticlesList