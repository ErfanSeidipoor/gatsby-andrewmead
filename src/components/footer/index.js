import React from "react";
import { graphql , useStaticQuery } from 'gatsby'
import style from "./index.module.scss"

export const query = graphql`
  {
    site {
      id
      siteMetadata {
        author
        title
      }
    }
  }
`

const Footer = ()=>{

    
    const {
        site:{
            siteMetadata
        }
    } = useStaticQuery(query)

    return (
        <div className={style.footer}>
            <footer>
                <p>
                    {`created by ${siteMetadata.author} © 2020`}
                </p>
            </footer>
        </div>
    )
}

export default Footer