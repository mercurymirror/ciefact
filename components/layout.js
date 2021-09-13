import Nav from "./nav"

const Layout = ({ children, categories, seo }) => (
  <>
    <Nav categories={categories} />
    {children}
  </>
)

export async function getStaticProps() {
  // Run API calls in parallel
  const [categories] = await Promise.all([
    fetchAPI("/categories"),
  ])

  return {
    props: { categories },
    revalidate: 1,
  }
}

export default Layout
