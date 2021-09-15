import React, { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { Container, Row, Col } from "react-bootstrap"
import Link from "next/link";
import gsap from "gsap";
import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api"
import Layout from "../components/layout"


const Membres = ({ membres, categories }) => {


    return (
        <Layout categories={categories}>
            <h1 >
                Membres

            </h1>
            <Container>
                {membres.map((membre) => (
                    <div key={membre.id}>
                        <p>
                            {membre.name}
                        </p>
                        <p>
                            {membre.fonctions}
                        </p>
                        <p>
                        <ReactMarkdown source={membre.bio} />
                        </p>
                        <img src={getStrapiMedia(membre.img.url)} />
                                
                            </div>
                ))}
            </Container>
        </Layout>
    )
}

export async function getStaticProps() {
    // Run API calls in parallel
    const [membres, categories] = await Promise.all([
        fetchAPI("/membres"),
        fetchAPI("/categories"),
    ])

    return {
        props: { membres, categories },
        revalidate: 1,
    }
}

export default Membres
