import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import { fetchAPI } from "../../lib/api"
import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import ModalImage from "react-modal-image";




const Spectacle = ({ spectacle, spectacles, categories }) => {



  const slideRight = () => {
    const slider = document.querySelector('.gallery');
    console.log(slider);
    slider.scrollBy({
      left: 450,
      behavior: 'smooth'
    });
  }

  const slideLeft = () => {
    const slider = document.querySelector('.gallery');
    console.log(slider);
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
      bigTitle.style.fontSize = "8vw";
      vertTitle.style.fontSize = "3rem";
    }
  }, []);

  const hasPdf = Boolean(spectacle.pdf);
  let pdf;
  if (spectacle.pdf !== null) {
    pdf = spectacle.pdf.url;
  }

  const hasIllu = spectacle.Illustration.length;
  console.log(hasIllu);

  return (
    <>
      <div className="spectacle-header">
        <img src={spectacle.image.url} />
        <div className="spectacle-titles">
          <h1 id="big-title" className="big-title">{spectacle.title}</h1>
          <h5 className="subtitle">{spectacle.sousTitre}</h5>
        </div>
      </div>
      <Container className="spectacle-text">
        <Row className="bloc-mob">
          <Col className="ext a">
            <h1 id="ver-title" className="vertical-title red">{spectacle.title}</h1>
            <h2 className="quote shows">{spectacle.citation}</h2>
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
              {hasPdf && (
                <a href={pdf} target="_blank"><h4>Télécharger le document</h4></a>
              )}

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
              <img src="https://res.cloudinary.com/ciefact/image/upload/v1634668021/arrow_0e058f1520.svg"
                className="arrow-down" />
            </div>
          </Col>
          {hasIllu > 0 && (
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
          <img src="https://res.cloudinary.com/ciefact/image/upload/v1634668021/arrow_0e058f1520.svg"
            className="arrow-down" />
        </button>
        <button
          id="slideRight"
          type="button"
          onClick={slideRight}
        >
          <img src="https://res.cloudinary.com/ciefact/image/upload/v1634668021/arrow_0e058f1520.svg"
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
  const spectacle = (await fetchAPI(`/spectacles?slug=${params.slug}`))[0]

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
