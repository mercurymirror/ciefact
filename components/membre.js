import { Col } from "react-bootstrap"
import Link from "next/link";
import { gsap } from "gsap/dist/gsap";
import { useEffect, useState } from "react";
import Router from "next/router";


const Membre = ({ types }) => {

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
            </Col>
        </>
    )
}

export default Membre
