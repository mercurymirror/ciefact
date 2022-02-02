import { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import gsap from "gsap";
import { func } from "prop-types";


const ArticlesList = ({ homepage, articles, quote }) => {

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

  // Problème avec le [0] qui applique la condition à tous les articles  
  // const hasImg = Boolean(articles[0].image)
  // let img;
  // if (articles[0].image !== null) {
  //   img = articles[0].image.length;
  // }

  const hasImg = Boolean(homepage.homeImg)
  const hasImgMob = Boolean(homepage.homeImg_mobile)

  return (
    <div className="bloc-actu">
      <Container>
        <Row className="row-quote">
            <picture>
            {hasImgMob && (
              <source media="(max-width: 768px)" srcSet={homepage.home_actu_mobile.url} />
              )}
              {hasImg && (
              <img src={homepage.home_actu.url} />
              )}
            </picture>
          <p className="quote home">
            <ReactMarkdown source={quote.actu} />
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
        {articles.sort((a, b) => new Date(b.date) - new Date(a.date)).map((item) => (
          <Row key={item.id}
          >
            <Col className="widget" md={4}>
              <p>Posté par {item.author}</p>
              <Moment format="DD.MM.YYYY" className="date">{item.date}</Moment>
            </Col>
            <Col md={8} className="contentActu">
              {/* {img > 0 && ( */}
              <Col>
                <img className="imgActu" src={item.image.url}
                />
              </Col>
              {/* )} */}
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