import { useRouter } from "next/router"

const BreadCrumb = () => {
  const pathname = useRouter().asPath.slice(1)
  // console.log('pathname is', pathname)
  // const [isPathname, setIsPathname] = useState(pathname);

  // useEffect(() => {
  //     if (pathname == "category/soutenues" || "category/fondateurs") {
  //         setIsPathname("Spectacle");
  //     }
  //     else {
  //         isPathname
  //     }
  // }, []);

  return (
    <>
      <h1 className="breadcrumb">{pathname}</h1>
    </>
  )
}

export default BreadCrumb
