import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap"
import Link from "next/link";
import gsap from "gsap";
import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api"
import Layout from "../components/layout"


const Agenda = ({ agendas, categories }) => {


    return (
        <Layout categories={categories}>
            <Container>
                {/* {agendas.map((agenda) => (
                    <div key={agenda.id}>
                        <p>
                            {agenda.name}
                        </p>
                        <p>
                            {agenda.author}
                        </p>
                                <span>{agenda.representations.debutDate}</span> X <span>{representation.enDate}</span>
                                <p>
                                    {agenda.representations.place}
                                </p>
                            </div>
                ))} */}
            <h1>
                Agenda

            </h1>
            </Container>
        </Layout>
    )
}

export async function getStaticProps() {
    // Run API calls in parallel
    const [agendas, categories] = await Promise.all([
      fetchAPI("/agendas"),
      fetchAPI("/categories"),
    ])
  
    return {
      props: { agendas, categories },
      revalidate: 1,
    }
  }

export default Agenda