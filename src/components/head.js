import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";


export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Head = ({pageTitle}) => {
    const {
        site: {
            siteMetadata: {
                title
            }
        }
    } = useStaticQuery(query)

    console.log('title > ', title);
    return (
        <Helmet title={` ${pageTitle} | ${title}`} />
    )
}

export default Head