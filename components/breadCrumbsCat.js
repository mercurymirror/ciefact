import router, { useRouter } from 'next/router'
import { useState, useEffect } from 'react';


const BreadCrumbCat = () => {

    const pathname = useRouter().asPath.slice(1);
    console.log('pathname is', pathname)
    const [isPathname, setIsPathname] = useState(pathname);

    useEffect(() => {
        if (pathname == "category/soutenu.e.s" || "category/fondateurs") {
            setIsPathname("Spectacle");
        }
        else {
            isPathname
        }
    }, []);

    return (
        <>
            <h1 className="breadcrumb">
                {isPathname}
            </h1>
        </>
    )
}

export default BreadCrumbCat