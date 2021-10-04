import router, { useRouter } from 'next/router'


const BreadCrumb = () => {

    const pathname = useRouter().asPath.slice(1);

    return (
        <>
            <h1 className="breadcrumb">
                {pathname}
            </h1>
        </>
    )
}

export default BreadCrumb
