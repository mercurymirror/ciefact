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
            <Container className="contacts-container">
                {contacts.map((contacts) => (
                    <Row className="contacts" key="contacts.id">
                         <Col className="image">
                <img className="imgContacts" src={contacts.img.url}
                  />
                </Col>
                        <Col className="text">
                <p >
                    {contacts.name}
                </p>
                <p>
                    {contacts.adress}
                </p>
                <p>
                    {contacts.mail}
                </p>
                <p className="social">
                    <a href={contacts.fb} target="_blank" style={{marginRight: "2vw"}}>Facebook</a> <a href={contacts.ig} target="_blank">Instagram</a>
                </p>
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