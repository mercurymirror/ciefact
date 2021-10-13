import Link from "next/link";


const SubMenu = ({ categories }) => {


    return (
        <>
            <ul className="sous-menu">
                {categories.map((cat) => (
                    <li key={cat.id}>
                        <Link href={`/category/${cat.slug}`}>
                        <a>
                            {cat.name}
                        </a>
                        </Link>
                    </li>

                ))}
            </ul>
        </>
    )
}


export default SubMenu