import React from "react";
import Layout from '../components/layout'
import Head from "../components/head";

const ContactPage = ()=>{
    return (
        <Layout>
            <Head pageTitle={"Contact"}/>
            <h1>Contact</h1>
            <p>contact me</p>
            <a href="https://twitter.com/@andrew_j_mead">twitter</a>
        </Layout>
    )
}

export default ContactPage