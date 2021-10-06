import { Container, Row, Col } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";

const ArticlesList = ({ articles }) => {

  const [readMore,setReadMore] = useState(false);


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
                <ReactMarkdown source={item.texte} />
                </Col>
                </Col>
              </Row>
            ))}
            </Container>
      </div>
  )
}

export default ArticlesList