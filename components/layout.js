import BreadCrumb from "./breadCrumbs"
import Nav from "./nav"

const Layout = ({ children, categories, seo }) => (
  <>
    <Nav categories={categories} />
    <BreadCrumb />
    {children}
  </>
)

export default Layout
