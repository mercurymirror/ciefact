import Nav from "./nav"
import dynamic from 'next/dynamic';
import Link from "next/link";



const DynamicComponentWithNoSSR = dynamic(
  () => import('./logo'), //ici j'importe le module ,enfin voulais importer

  { ssr: false }
)

const Layout = ({ children, categories, seo }) => (
  <>
        <Link href="/membres">
    <div className="head-logo">
      <DynamicComponentWithNoSSR />
    </div>
    </Link>
    <Nav categories={categories} />
    {children}
  </>
)

export default Layout
