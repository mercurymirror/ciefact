import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap"
import Link from "next/link";
import gsap from "gsap";
import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api"
import Layout from "../components/layout"


const Articles = ({ articles, categories }) => {


  return (
    <Layout categories={categories}>
    <div className="bloc-actu">
            {/* {articles.map((item) => (
              <Row key={item.id}
                >
                  <Col className="widget" md={4}>
                    <p>Posté par {item.writer}</p>
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
            ))} */}
      </div>
    </Layout>
  )
}


export async function getArticles() {
  const articles = await fetchAPI("/articles");
  return {
    props: {
      articles,
    },
  }}

export default Articles