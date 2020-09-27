import React from "react";
// import { Link } from "gatsby";
import Layout from "../components/layout";
import Head from "../components/head";


const NotFound = ()=>{
    return (
        <Layout>
            <Head pageTitle={"404"}/>
            <h1>Not Found Page</h1>
        </Layout>
    )
}

export default NotFound