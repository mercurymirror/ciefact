import { fetchAPI } from "../lib/api"
import ArticlesList from "../components/articlesList"

const Articles = ({ articles, quote, homepage }) => {
  return (
    <>
      <ArticlesList articles={articles} quote={quote} homepage={homepage} />
    </>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, quote, homepage] = await Promise.all([
    fetchAPI("/articles"),
    fetchAPI("/quote"),
    fetchAPI("/homepage"),
  ])

  return {
    props: { articles, quote, homepage },
    revalidate: 1,
  }
}

export default Articles
