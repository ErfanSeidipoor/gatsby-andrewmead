import React from "react";
import {graphql} from "gatsby";

import Layout from "../../components/layout";

export const query = graphql`
    query (
        $slug:String
    ) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            id
            html
            frontmatter {
                title
                data
            }
        }
    }
`

const Blog = props =>{
    console.log("blogtemplate> props > ", props)

    return (
        <Layout>
           <h1>{props.data.markdownRemark.frontmatter.title}</h1>
           <p>{props.data.markdownRemark.frontmatter.data}</p>
           <div dangerouslySetInnerHTML={{__html:props.data.markdownRemark.html}} />
        </Layout>
    )
}

export default Blog