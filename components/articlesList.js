import { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import gsap from "gsap";
import { func } from "prop-types";


const ArticlesList = ({ articles }) => {

  const showRef = useRef({});

  const [state, setState] = useState({
    initial: false,
    clicked: null,
    readMore: "Voir plus",
  });
  const [disabled, setDisabled] = useState(false);
  
  const handleShow = (e, id) => {
    disabledMenu();
    const articleContent = document.querySelector('.article-content');
  console.log(articleContent);
    if (state.initial === false) {
      gsap.to(showRef.current[id], {
        duration: 1,
        display: "block",
      });
      setState({
        initial: null,
        clicked: true,
        readMore: "Voir moins",
      });
    } else if (state.clicked === true) {
      gsap.to(showRef.current[id], {
        duration: 0,
        display: "none",
      })
      setState({
        clicked: !state.clicked,
        readMore: "Voir plus",
      });
    } else if (state.clicked === false) {
      gsap.to(showRef.current[id], {
        duration: 0,
        display: "block",
      })
      setState({
        clicked: !state.clicked,
        readMore: "Voir moins",
      });
    }
  }


  const disabledMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <div className="bloc-actu">
      <Container>
        {articles.sort((a, b) => new Date(b.date) - new Date(a.date)).map((item) => (
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
                <p>
                <ReactMarkdown source={item.Chapeau} />
                <a
                    key={item.id}
                    onClick={(e) => handleShow(e, item.id)}
                  >
                  ... {state.readMore}
                </a>
              </p>
            </Col>
            <Col
              className="article-content"
              ref={(el) => (showRef.current[item.id] = el)}
            >
                <ReactMarkdown source={item.texte} 
                  />
              </Col>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  )
}

export default ArticlesList