import { fetchAPI } from "../lib/api"
import PodcastList from "../components/PodcastList"

const Podcast = ({ podcasts, quote, homepage }) => {
  return (
    <>
      <PodcastList podcasts={podcasts} quote={quote} homepage={homepage} />
    </>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [podcasts, categories, quote, homepage] = await Promise.all([
    fetchAPI("/podcasts"),
    fetchAPI("/categories"),
    fetchAPI("/quote"),
    fetchAPI("/homepage"),
  ])

  return {
    props: { podcasts, categories, quote, homepage },
    revalidate: 1,
  }
}

export default Podcast
