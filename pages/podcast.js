import { Container, Row, Col } from "react-bootstrap"
import Link from "next/link";
import gsap from "gsap";
import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api"
import BreadCrumb from "../components/breadCrumbs";
import PodcastList from "../components/PodcastList";


const Podcast = ({ podcasts, categories }) => {


  return (
    <>
    <BreadCrumb />
    <PodcastList podcasts={podcasts} />
    </>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [podcasts, categories] = await Promise.all([
    fetchAPI("/podcasts"),
    fetchAPI("/categories"),
  ])

  return {
    props: { podcasts, categories },
    revalidate: 1,
  }
}

export default Podcast