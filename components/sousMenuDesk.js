import ActiveLink from './ActiveLink';



const SubMenuDesk = ({ categories }) => {


    return (
        <>
            <ul className="sous-menu">
                {categories.map((cat) => (
                    <li key={cat.id}>
                        <ActiveLink activeClassName="active" href={`/category/${cat.slug}`}>
                        <a>
                            {cat.name}
                        </a>
                        </ActiveLink>
                    </li>

                ))}
            </ul>
        </>
    )
}


export default SubMenuDesk