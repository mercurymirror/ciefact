import React from "react"
import Spectacles from "../components/spectacle"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import Category from "./category/[slug]"

const Home = ({ articles, spectacles, categories, homepage, writer }) => {

  return (
    <Layout categories={categories}>
      <Seo seo={homepage.seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{homepage.hero.title}</h1>
          <Spectacles spectacles={spectacles} />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, spectacles, categories, homepage, writer] = await Promise.all([
    fetchAPI("/articles"),
    fetchAPI("/spectacles"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
    fetchAPI("/writer"),
  ])

  return {
    props: { articles, spectacles, categories, homepage, writer },
    revalidate: 1,
  }
}

export default Home
