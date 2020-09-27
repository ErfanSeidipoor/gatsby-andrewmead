import React from "react";
import { Link } from 'gatsby'
import Head from "../components/head";
import Layout from '../components/layout'

const AboutPage = ()=>{
    return (
        <Layout>
            <Head pageTitle={"About"}/>
            <h1>about</h1>
            <p>I Currently teach ....</p>
            <Link to="/contact" >contact</Link>
        </Layout>
    )
}

export default AboutPage