import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap"
import Link from "next/link";
import gsap from "gsap";
import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api"
import Layout from "../components/layout"


const Agenda = ({ angendas, categories, representations }) => {


    return (
        <Layout categories={categories}>
            <Container>
                {angendas.map((agenda) => (
                    <div key={agenda.id}>
                        <p>
                            {agenda.name}
                        </p>
                        <p>
                            {agenda.author}
                        </p>
                        {agenda.representations.map((representation) =>
                        (
                        <div key={representation.id}>
                            <span>{representation.debutDate}</span> X <span>{representation.endDate}</span>
                            <p>
                                {representation.place}
                            </p>
                        </div>
                        ))}
                    </div>
                ))}
            </Container>
        </Layout>
    )
}

export async function getStaticProps() {
    // Run API calls in parallel
    const [angendas, categories, representations] = await Promise.all([
        fetchAPI("/angendas"),
        fetchAPI("/categories"),
        fetchAPI("/representations")
    ])

    return {
        props: { angendas, categories, representations },
        revalidate: 1,
    }
}

export default Agenda