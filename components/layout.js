import Nav from "./nav"
import dynamic from "next/dynamic"
import Link from "next/link"
import Footer from "./footer"
import { fetchAPI } from "../lib/api"
import React, { useEffect, useState } from "react"

const DynamicCursor = dynamic(
  () => import("../components/Cursor"),

  { ssr: false }
)

const DynamicComponentWithNoSSR = dynamic(
  () => import("./logo"),

  { ssr: false }
)
const Layout = ({ children }) => {
  const [firstCategorySlug, setFirstCategorySlug] = useState("")

  useEffect(() => {
    const fetchFirstCategorySlug = async () => {
      try {
        const categories = await fetchAPI("/categories")
        console.log(categories)
        if (categories && categories.length > 0) {
          const firstCategory = categories.find((cat) => (cat.nb = 1))
          console.log(firstCategory)
          setFirstCategorySlug(firstCategory.slug)
        }
      } catch (error) {
        console.error("Error fetching first category:", error)
      }
    }

    fetchFirstCategorySlug()
  }, [])
  return (
    <>
      <DynamicCursor />
      <Link passHref href="/membres">
        <div className="head-logo">
          <DynamicComponentWithNoSSR />
        </div>
      </Link>
      <Nav categories={firstCategorySlug} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
