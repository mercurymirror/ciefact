import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { getStrapiMedia } from "../lib/media"
import { fetchAPI } from "../lib/api"
import { Container, Row, Col } from "react-bootstrap"
import BreadCrumb from "../components/breadCrumbs";


const Contacts = ({ contacts, categories }) => {


    return (
        <>
        <BreadCrumb />
            <Container>
                {contacts.map((contacts) => (
                    <Row className="contacts" key="contacts.id">
                        <Col>
                <p >
                    {contacts.name}
                </p>
                <p>
                    {contacts.adress}
                </p>
                <p>
                    {contacts.mail}
                </p>
                </Col>
                <Col>
                <img className="imgContacts" src={contacts.img.url}
                  />
                </Col>
                </Row>
                ))}
            </Container>
        </>
    )
}

export async function getStaticProps() {
    // Run API calls in parallel
    const [contacts, categories] = await Promise.all([
        fetchAPI("/contacts"),
        fetchAPI("/categories"),
    ])

    return {
        props: { contacts, categories },
        revalidate: 1,
    }
}

export default Contacts