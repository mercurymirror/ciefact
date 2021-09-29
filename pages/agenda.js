import React from "react";
import { Container } from "react-bootstrap"
import Moment from "react-moment"
import Link from "next/link";
import { fetchAPI } from "../lib/api"
import Layout from "../components/layout"

const section = ">";
const Agenda = ({ angendas, categories }) => {


    return (
        <Layout categories={categories}>
            <Container>
                <div className="agenda-bloc">
                    {angendas.sort((a, b) => b.published_at - a.published_at)
                    .map((agenda) => (
                        <div key={agenda.id}>
                            <p className="agenda title">
                                {agenda.name}
                            </p>
                            <p className="agenda author">
                                {agenda.author}
                            </p>
                            <hr />
                            {agenda.representations.sort((a, b) => b.debutDate - a.debutDate)
                            .map((representation) =>
                            (
                                <div className="agenda repres" key={representation.id}>
                                    <span><Moment format="DD.MM.YYYY" className="agenda dates">{representation.debutDate}</Moment></span>
                                    <span className="section">{section}</span> <span><Moment format="DD.MM.YYYY" className="agenda dates">{representation.endDate}</Moment></span>
                                    <p className="agenda place">
                                        {representation.place}
                                    </p>
                                    <hr />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </Container>
        </Layout>
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