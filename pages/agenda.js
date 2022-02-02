import React, { useEffect } from "react";
import { Container } from "react-bootstrap"
import Moment from "react-moment"
import Link from "next/link";
import { fetchAPI } from "../lib/api"
import BreadCrumb from "../components/breadCrumbs";


const Agenda = ({ angendas, categories }) => {


    return (
        <>
            <BreadCrumb />
            <Container className="contacts-container">
                <div className="agenda-bloc">
                    {angendas.sort((a, b) => new Date(a.representations[0].debutDate) - new Date(b.representations[0].debutDate))
                        .map((agenda) => (
                            <div key={agenda.id}>
                                <p className="agenda title">
                                    {agenda.name}
                                </p>
                                <p className="agenda author">
                                    {agenda.author}
                                </p>
                                <hr />
                                {agenda.representations.sort((a, b) => new Date(a.debutDate) - new Date(b.debutDate))
                                    .map((representation) => (
                                        <div className="agenda repres" key={representation.id}>
                                            <span><Moment format="DD.MM.YYYY" className="agenda dates">{representation.debutDate}</Moment></span>
                                            <span className="section">
                                                <svg viewBox="0 0 20 20">
                                                    <path
                                                        fill="none"
                                                        stroke="#eb1615"
                                                        strokeMiterlimit={10}
                                                        d="M5.55-.15l6.95 10L5.19 20"
                                                    />
                                                </svg>
                                            </span>
                                            <span><Moment format="DD.MM.YYYY" className="agenda dates">{representation.endDate}</Moment></span>
                                            <a href={representation.link} target="blank">
                                                <p className="agenda place">
                                                    {representation.place}
                                                </p>
                                            </a>
                                                <hr />                                        
                                        </div>
                                    ))}
                            </div>
                        ))}
                </div>
            </Container>
        </>
    )
}

export async function getStaticProps() {
    // Run API calls in parallel
    const [angendas, categories] = await Promise.all([
        fetchAPI("/angendas"),
        fetchAPI("/categories"),
    ])

    return {
        props: { angendas, categories },
        revalidate: 1,
    }
}

export default Agenda