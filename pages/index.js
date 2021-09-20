import React from "react"
import Spectacles from "./spectacles";
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import Category from "./category/[slug]"

const Home = ({ spectacles, categories, homepage }) => {

  return (
    <Layout categories={categories}>
      <Seo seo={homepage.seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{homepage.hero.title}</h1>
          <Category categories={categories} />
          <Spectacles spectacles={spectacles} />
        </div>
      </div>
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
