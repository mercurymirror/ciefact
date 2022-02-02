import { Container, Row, Col } from "react-bootstrap"
import Link from "next/link";
import gsap from "gsap";
import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api"
import BreadCrumb from "../components/breadCrumbs";
import PodcastList from "../components/PodcastList";


const Podcast = ({ podcasts, categories, quote, homepage }) => {


  return (
    <>
    <PodcastList 
    podcasts={podcasts}
    quote ={quote}
    homepage={homepage} />
    </>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [podcasts, categories, quote, homepage] = await Promise.all([
    fetchAPI("/podcasts"),
    fetchAPI("/categories"),
    fetchAPI("/quote"),
    fetchAPI("/homepage")
  ])

  return {
    props: { podcasts, categories, quote, homepage },
    revalidate: 1,
  }
}

export default Podcast