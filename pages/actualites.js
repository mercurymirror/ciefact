import { Container, Row, Col } from "react-bootstrap"
import Link from "next/link";
import gsap from "gsap";
import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api"
import ArticlesList from "../components/articlesList";
import BreadCrumb from "../components/breadCrumbs";


const Articles = ({ articles, categories }) => {


  return (
    <>
    <BreadCrumb />
    <ArticlesList articles={articles} />
    </>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories] = await Promise.all([
    fetchAPI("/articles"),
    fetchAPI("/categories"),
  ])

  return {
    props: { articles, categories },
    revalidate: 1,
  }
}

export default Articles