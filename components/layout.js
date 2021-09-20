import Nav from "./nav"

const Layout = ({ children, spectacles, seo }) => (
  <>
    <Nav spectacles={spectacles} />
    {children}
  </>
)

export async function getStaticProps() {
  // Run API calls in parallel
  const [spectacles] = await Promise.all([
    fetchAPI("/spectacles"),
  ])

  return {
    props: { spectacles },
    revalidate: 1,
  }
}

export default Layout
