import React from "react"
import Seo from "../../components/seo"
import { fetchAPI } from "../../lib/api"
import Homepage from "../../components/homepage";

const Home = ({ categories, homepage, quote, types }) => {

  return (
    <>
      <Seo seo={homepage.seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{homepage.hero.title}</h1>
          <Homepage quote={quote}
          homepage={homepage}
          types={types} />
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [categories, homepage, quote, types] = await Promise.all([
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
    fetchAPI("/quote"),
    fetchAPI("/types"),
  ])

  return {
    props: { categories, homepage, quote, types },
    revalidate: 1,
  }
}

export default Home
