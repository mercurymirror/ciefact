import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import { fetchAPI } from "../../lib/api"
import Layout from "../../components/layout"
import NextImage from "../../components/image"
import Seo from "../../components/seo"
import { getStrapiMedia } from "../../lib/media"

const Spectacle = ({ spectacle, categories }) => {
  const imageUrl = getStrapiMedia(spectacle.image)

  const seo = {
    metaTitle: spectacle.title,
    metaDescription: spectacle.description,
    shareImage: spectacle.image,
    spectacle: true,
  }

  return (
    <Layout categories={categories}>
      <Seo seo={seo} />
      <div
        id="banner"
        className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
        data-src={imageUrl}
        data-srcset={imageUrl}
        data-uk-img
      >
        <h1>{spectacle.title}</h1>
      </div>
      <div className="uk-section">
        <div className="uk-container uk-container-small">
          <ReactMarkdown source={spectacle.description} escapeHtml={false} />
          <hr className="uk-divider-small" />
          <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
            <div>
              {spectacle.author.picture && (
                <NextImage image={spectacle.author.picture} />
              )}
            </div>
            <div className="uk-width-expand">
              <p className="uk-margin-remove-bottom">
                By {spectacle.author}
              </p>
              <p className="uk-text-meta uk-margin-remove-top">
                <Moment format="YYYY">{spectacle.year}</Moment>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const spectacles = await fetchAPI("/spectacles")

  return {
    paths: spectacles.map((spectacle) => ({
      params: {
        slug: spectacle.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const spectacles = await fetchAPI(`/spectacles?slug=${params.slug}`)
  const categories = await fetchAPI("/categories")

  return {
    props: { spectacle: spectacles[0], categories },
    revalidate: 1,
  }
}

export default Spectacle
