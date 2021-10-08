import React, { useRef } from "react";
import { Row, Col, Container } from "react-bootstrap"
import Link from "next/link";
import gsap from "gsap";
// import SubMenu from "../../components/sousMenu";
import { fetchAPI } from "../../lib/api";


const Spectacles = ({ spectacles, categories }) => {

  const imagesRef = useRef({});

  //state for subtitle
  // const [state, setState] = useState({
  //   clicked: null,
  //   subtitle: " ",
  // });

  const handleHover = (e, id) => {
    gsap.to(imagesRef.current[id], {
      display: "block",
    })
  }

  const handleHoverExit = (e, id) => {
    gsap.to(imagesRef.current[id], {
      display: "none",
      delay: "none"
    })
  }

  // const [toggle, setToggle] = useState(false)

  // useEffect(() => {
  //   const path = window.location.pathname;
  //   if (path === "/spectacles") {
  //     setToggle(true);
  //   }
  // }, []);

  return (
    <>
        {/* {toggle && (
      <SubMenu 
      spectacles={spectacles}
      categories={categories} 
      />
      )} */}
      <Container>
        <Row>
          <Col sm="1">
            <h1 className="vertical-title">Spéctacles</h1>
            {/* <h5 className="vertical-title subtitle">{state.subtitle}</h5> */}
          </Col>
          <Col sm="11">
            <div className="tableau">
              {spectacles.sort((a, b) => b.year - a.year)
              .map((item) => (
                <Row key={item.id}
                  onMouseEnter={(e) => handleHover(e, item.id)}
                  onMouseLeave={(e) => handleHoverExit(e, item.id)}
                >
                  <Link as={`/spectacles/${item.slug}`} href={`/spectacles/${item.id}`}>
                    <a className="titre"
                    >{item.title} </a>
                  </Link>
                  <img className="imgCatalog" src={item.image.url}
                    width="50%"
                    ref={(el) => (imagesRef.current[item.id] = el)}
                  />
                </Row>

              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [spectacles, categories] = await Promise.all([
    fetchAPI("/spectacles"),
    fetchAPI("/categories"),
  ])

  return {
    props: { spectacles, categories },
    revalidate: 1,
  }
}

export default Spectacles