import React from "react"
import { Link } from "gatsby";
import Layout from '../components/layout'
import Head from "../components/head";

const IndexPage = () => {
  return (
    <Layout>
      <Head pageTitle={"Home"}/>
      <h1>Hello</h1>
      <h2>I'm Andrew </h2>
      <h2>Im Andrew, Full-stack Developer Livin in beautiful tehran</h2>
      <a href="/contact" >contact me</a>
      <br/>
      <Link to="/contact" >contact me</Link>
    </Layout>
  )
}

export default IndexPage