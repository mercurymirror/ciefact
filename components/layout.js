import Nav from "./nav"
import dynamic from 'next/dynamic';
import Link from "next/link";



const DynamicComponentWithNoSSR = dynamic(
  () => import('./logo'), 

  { ssr: false }
)

const DynamicCursor = dynamic(
  () => import('./Cursor'), 

  { ssr: false }
)

const Layout = ({ children, categories, seo }) => (
  <>
        <Link href="/membres">
    <div className="head-logo">
      <DynamicComponentWithNoSSR />
    </div>
    </Link>
    <div className="cursor">
    {/* <DynamicCursor /> */}
    </div>
    <Nav categories={categories} />
    {children}
  </>
)

export default Layout
