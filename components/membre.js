import { Col } from "react-bootstrap"
import Link from "next/link";



const Membre = ({ types }) => {


    return (
        <>
            <Col id="membre-types">
                {types.map((type) => (
                    <div key={type.id} className="type">
                        <table>
                            <thead>
                                <tr>
                                    <th>{type.membreType}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        {type.membres.map((membres) => (
                                            <div key="membres.id">
                                                <Link href={`/membres/${membres.slug}#membre-anchor`}
                                                >
                                                    <a>
                                                        {membres.name}
                                                    </a>
                                                </Link>
                                            </div>
                                        ))}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ))}
            </Col>
        </>
    )
}

export default Membre
