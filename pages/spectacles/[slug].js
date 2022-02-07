import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import { fetchAPI } from "../../lib/api"
import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import ModalImage from "react-modal-image";




const Spectacle = ({ spectacle, spectacles, categories }) => {



  const slideRight = () => {
    const slider = document.querySelector('.gallery');
    slider.scrollBy({
      left: 450,
      behavior: 'smooth'
    });
  }

  const slideLeft = () => {
    const slider = document.querySelector('.gallery');
    slider.scrollBy({
      left: -450,
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    const bigTitle = document.getElementById('big-title');
    const vertTitle = document.getElementById('ver-title');
    const title = spectacle.title;
    if (title.length > 30) {
      bigTitle.style.fontSize = "6.5vw";
      vertTitle.style.fontSize = "3rem";
    }
    if (title.length > 30 && screen.width < 768) {
      bigTitle.style.fontSize = "10vw";
      bigTitle.style.wordBreak = "unset";
    }
  }, []);

  useEffect(() => {
    const generic = document.getElementById('generic');
    const desc = document.getElementById('desc');
    console.log("generic :" + generic.offsetHeight);
    console.log(desc.offsetHeight);
    const scrollDown = document.querySelector('.scroll-down');
    if (generic.scrollHeight <= generic.offsetHeight) {
    scrollDown.style.display = 'none';
    }
    if (generic.offsetHeight < desc.offsetHeight) {
      generic.style.height = desc.offsetHeight+'px'
    }
    console.log(generic.height);
  }, []);

  const hasPdf = Boolean(spectacle.pdf);
  let pdf;
  if (spectacle.pdf !== null) {
    pdf = spectacle.pdf;
  }

  const hasIllu = Boolean(spectacle.Illustration)
  let illu;
  if (spectacle.Illustration !== null) {
    illu = spectacle.Illustration;
  }
  
  const hasImg = Boolean(spectacle.image)
  const hasImgMob = Boolean(spectacle.image_mobile)

  return (
    <>
      <div className="spectacle-header">
      <picture>
        {hasImgMob && (
              <source media="(max-width: 768px)" srcSet={spectacle.image_mobile.url} />
              )}
              {hasImg && (
                <img src={spectacle.image.url} />              )}
            </picture>
        
        <div className="spectacle-titles">
          <h1 id="big-title" className="big-title">{spectacle.title}</h1>
          <h5 className="subtitle">{spectacle.sousTitre}</h5>
        </div>
      </div>
      <Container className="spectacle-text">
        <Row className="bloc-mob">
          <Col className="ext a">
            <h1 id="ver-title" className="vertical-title red">{spectacle.title}</h1>
            <h2 className="quote shows"> <ReactMarkdown source={spectacle.citation}/></h2>
          </Col>
          <Col className="middle-col">
            <p className="">
              <Moment format="YYYY" className="date">{spectacle.year}</Moment>
            </p>
            <Row className="status">
              <Col>
                <span>{spectacle.status}</span>
              </Col>
              <Col>
                <span>{spectacle.category.name}</span>
              </Col>
            </Row>
            <div>
              <p className="description" id='desc'>
                <ReactMarkdown source={spectacle.description} />
              </p>
              {pdf.map((item) => (
              hasPdf && (
                <a href={item.url} target="_blank"><h4>{item.name.split('.pdf')}</h4></a>
              )
              ))}

              <div className="video"
                dangerouslySetInnerHTML={{ __html: spectacle.video }} >
              </div>
            </div>
          </Col>
          <Col className="ext b">
            <p className="generic" id="generic">
              <ReactMarkdown source={spectacle.cast} />
            </p>


            <div className="scroll-down">
              Scroll down
              <img src="/arrow.svg"
                className="arrow-down" />
            </div>
          </Col>
          {hasIllu && (
            <Col className="illu">
              <img src={spectacle.Illustration.url} />
            </Col>
          )}
        </Row>

        <Row className="gallery">
          {spectacle.galery.map((item) => (
            <ModalImage
              key={item.id}
              small={item.url}
              large={item.url}
              alt={item.title}
              hideZoom={true}
              hideDownload={true}
            />
          ))}
        </Row>
        <button
          id="slideLeft"
          type="button"
          onClick={slideLeft}
        >
          <img src="/arrow.svg"
            className="arrow-down" />
        </button>
        <button
          id="slideRight"
          type="button"
          onClick={slideRight}
        >
          <img src="/arrow.svg"
            className="arrow-down" />
        </button>
      </Container>
    </>
  )
}

export async function getStaticPaths() {
  const spectacles = await fetchAPI("/spectacles")

  return {
    paths: spectacles.map((spectacle) => ({
      params: {
        slug: spectacle.slug,
      },
    })),
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  const spectacle = (await fetchAPI(`/spectacles?slug=${params.slug}`))[0];

  const [spectacles, categories] = await Promise.all([
    fetchAPI("/spectacles"),
    fetchAPI("/categories"),
  ])
  return {
    props: { spectacle: spectacle, spectacles, categories },
    revalidate: 1,
  }
}

export default Spectacle
