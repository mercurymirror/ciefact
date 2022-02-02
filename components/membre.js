import { Col, Row } from "react-bootstrap"
import Link from "next/link";
import { gsap } from "gsap/dist/gsap";
import { useEffect } from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";



const Membre = ({ types, theatres }) => {

    useEffect(() => {
        gsap.from('.img-membre' , {
            duration: 1.3,
            opacity: 0,
            delay: .5
        })
        gsap.from('.text-membre' , {
            duration: 1.3,
            opacity: 0,
            delay: .5
        })
    })


    return (
        <>
            <Col id="membre-types">
            <Row>
                {types.sort((a, b) => (a.id) - (b.id)).map((type) => (
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
                                            <div key={membres.id}>
                                                <a onClick={() => Router.push(`/membres/${membres.slug}#membre-anchor`)}>
                                                    {membres.name}
                                                </a>
                                            </div>
                                        ))}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ))}
                </Row>
            <Row>
            <ReactMarkdown source={theatres.theatres} />
            </Row>
            </Col>
        </>
    )
}

export default Membre
