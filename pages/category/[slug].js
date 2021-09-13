import React from "react"
import Articles from "../articles"
import Spectacles from "../../components/spectacle"
import Agenda from "../agenda"
import { fetchAPI } from "../../lib/api"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Container, Col, Row }  from "react-bootstrap"


const Category = ({ category, categories }) => {
  const seo = {
    metaTitle: category.name,
    metaDescription: `All ${category.name} spectacles`,
  }

  return (
    <Layout categories={categories}>
      <Seo seo={seo} />
      <Container>
          <Row>
            <Col sm={1}>
          <h1 className="alert">{category.name}</h1>
          </Col>
          <Col sm={11}>
          <Spectacles spectacles={category.spectacles} />
          </Col>
          </Row>
          <style jsx>{`
        .alert {
          display: ${category.name == 'spectacles' ? 'block' : 'none'};
        }
      `}</style>
      </Container>
    </Layout>
  )
}

export async function getStaticPaths() {
  const categories = await fetchAPI("/categories")

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const category = (await fetchAPI(`/categories?slug=${params.slug}`))[0]
  const categories = await fetchAPI("/categories")

  return {
    props: { category, categories },
    revalidate: 1,
  }
}

export default Category
