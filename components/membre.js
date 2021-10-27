import { Col } from "react-bootstrap"
import Link from "next/link";
import { gsap } from "gsap/dist/gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { useEffect, useState } from "react";
import Router from "next/router";


const Membre = ({ types }) => {
    gsap.registerPlugin(ScrollToPlugin);

    useEffect(() => {
        gsap.to(window, {
            duration: 1,
            scrollTo: 400
        })
    })


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
                                            <div key={membres.id}>
                                                {/* <Link id="membre" href={`/membres/${membres.slug}`}
                                                    ariaLabel="Scroll to #membre-anchor"
                                                > */}
                                                    <a onClick={() => Router.push(`/membres/${membres.slug}`)}>

                                                        {membres.name}
                                                    </a>
                                                {/* </Link> */}
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
