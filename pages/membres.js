import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap"
import Link from "next/link";
import gsap from "gsap";
import { getStrapiMedia } from "../lib/media";
import Layout from "../components/layout"


const Membres = ({ membres, categories }) => {


    return (
        <Layout categories={categories}>
            <h1 >
                Membres

            </h1>
        </Layout>
    )
}

export default Membres
