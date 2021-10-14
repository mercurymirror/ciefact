import Nav from "./nav"
import dynamic from 'next/dynamic';


const DynamicComponentWithNoSSR = dynamic(
  () => import('./logo'), //ici j'importe le module ,enfin voulais importer

  { ssr: false }
)

const Layout = ({ children, categories, seo }) => (
  <>
    <div className="head-logo">
      <DynamicComponentWithNoSSR />
    </div>
    <Nav categories={categories} />
    {children}
  </>
)

export default Layout
