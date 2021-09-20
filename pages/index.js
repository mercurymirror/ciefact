import React from "react"
import Spectacles from "../components/spectacles";
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import Category from "./category/[slug]"

const Home = ({ spectacles, categories, homepage }) => {

  return (
    <Layout categories={categories}>
      <Seo seo={homepage.seo} />
          <Spectacles spectacles={spectacles} />
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [ spectacles, categories, homepage] = await Promise.all([
    fetchAPI("/spectacles"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ])

  return {
    props: { spectacles, categories, homepage },
    revalidate: 1,
  }
}

export default Home
