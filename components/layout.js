import Nav from "./nav"
import dynamic from 'next/dynamic';
import Link from "next/link";
import Footer from "./footer";

const DynamicCursor = dynamic(
  () => import('../components/Cursor'), 

  { ssr: false }
)

const DynamicComponentWithNoSSR = dynamic(
  () => import('./logo'), 

  { ssr: false }
)

const Layout = ({ children, categories, seo }) => (
  <>
      <DynamicCursor />
        <Link href="/membres">
    <div className="head-logo">
      <DynamicComponentWithNoSSR />
    </div>
    </Link>
    <Nav categories={categories} />
    {children}
    <Footer />
  </>
)

export default Layout
