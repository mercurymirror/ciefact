import { useRouter } from "next/router"
import { useState, useEffect } from "react"

const BreadCrumbCat = () => {
  const pathname = useRouter().asPath.slice(1)
  const [isPathname, setIsPathname] = useState(pathname)

  useEffect(() => {
    // eslint-disable-next-line no-constant-condition
    if (pathname == "category/soutenu.e.s" || "category/fondateurs") {
      setIsPathname("Spectacle")
    } else {
      isPathname
    }
  }, [isPathname, pathname])

  return (
    <>
      <h1 className="breadcrumb">{isPathname}</h1>
    </>
  )
}

export default BreadCrumbCat
