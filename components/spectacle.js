import React, { useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap"
import Link from "next/link";
import gsap from "gsap";
import { getStrapiMedia } from "../lib/media";


const Spectacles = ({ spectacles }) => {

  const imagesRef = useRef({});

  const handleHover = (e, id) => {
    gsap.to(imagesRef.current[id], {
      display: "block",
      delay: "none"
    })
  }

  const handleHoverExit = (e, id) => {
    gsap.to(imagesRef.current[id], {
      display: "none",
      delay: "none"
    })
  }

  return (
    <div>
      <div className="tableau">
            {spectacles.map((item) => (
              <Row key={item.id}
              onMouseEnter={(e) => handleHover(e, item.id)}
              onMouseOut={(e) => handleHoverExit(e, item.id)}
                >
                <Link href={`/spectacle/${item.id}`}>
                  <a className="titre"
                  >{item.title} </a>
                </Link>
                <img className="imgHome" src={getStrapiMedia(item.image.url)}
                  width="900"
                  ref={(el) => (imagesRef.current[item.id] = el)} 
                  />
              </Row>
             
            ))}
      </div>
    </div>
  )
}

export default Spectacles