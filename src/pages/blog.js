import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from '../components/layout'
import style from "./blog.module.scss";
import Head from "../components/head";

const BlogPage = ()=>{

    const data = useStaticQuery(graphql`
        {
            allMarkdownRemark {
            edges {
                node {
                id
                html
                frontmatter {
                    title
                    data
                }
                fields {
                    slug
                }
                }
            }
            }
        }
    `)
    
    return (
        <Layout>
            <Head pageTitle={"Blog"}/>
            <h1>Blog</h1>
            <ol className={style.posts}>
                {
                    data.allMarkdownRemark.edges.map( edge => {
                        return (
                            <li key={edge.node.id}  className={style.post}>
                                <Link to={`/blog/${edge.node.fields.slug}`}>
                                    <h2>{edge.node.frontmatter.title}</h2>
                                    <p>{edge.node.frontmatter.data}</p>
                                </Link>
                            </li>
                        )
                    })
                }
            </ol>
        </Layout>
    )
}

export default BlogPage