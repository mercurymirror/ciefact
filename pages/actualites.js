import { Container, Row, Col } from "react-bootstrap"
import Link from "next/link";
import gsap from "gsap";
import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api"
import ArticlesList from "../components/articlesList";
import BreadCrumb from "../components/breadCrumbs";


const Articles = ({ articles, categories, quote, homepage }) => {


  return (
    <>
    <ArticlesList 
    articles={articles}
    quote={quote} 
    homepage={homepage}
    />
    </>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, quote, homepage] = await Promise.all([
    fetchAPI("/articles"),
    fetchAPI("/categories"),
    fetchAPI("/quote"),
    fetchAPI("/homepage")
  ])

  return {
    props: { articles, categories, quote, homepage },
    revalidate: 1,
  }
}

export default Articles