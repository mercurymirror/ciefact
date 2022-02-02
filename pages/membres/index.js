import React from "react"
import Seo from "../../components/seo"
import { fetchAPI } from "../../lib/api"
import Homepage from "../../components/homepage";

const Home = ({ homepage, quote, types, theatres }) => {

  return (
    <>
      <Seo seo={homepage.seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{homepage.hero.title}</h1>
          <Homepage quote={quote}
          homepage={homepage}
          types={types}
          theatres={theatres} />
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [ homepage, quote, types, theatres] = await Promise.all([
    fetchAPI("/homepage"),
    fetchAPI("/quote"),
    fetchAPI("/types"),
    fetchAPI("/theatres"),
  ])

  return {
    props: { homepage, quote, types, theatres },
    revalidate: 1,
  }
}

export default Home
