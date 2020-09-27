import React from "react";
import { Link, graphql , useStaticQuery } from 'gatsby'
import style from "./index.module.scss";

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

const Header = () => {

    const {
        site:{
            siteMetadata
        }
    } = useStaticQuery(query)

    console.log(siteMetadata)
    
    return (
        <header className={style.header}>
            <h1 >
                <Link to="/" className={style.title}>
                    {siteMetadata.title}
                </Link>
            </h1>
            <nav>
                <ul className={style.navList}>
                    <li><Link className={style.navItem} activeClassName={style.navItemActive} to="/" >Home</Link></li>
                    <li><Link className={style.navItem} activeClassName={style.navItemActive} to="/contact">Contact</Link></li>
                    <li><Link className={style.navItem} activeClassName={style.navItemActive} to="/about">About</Link></li>
                    <li><Link className={style.navItem} activeClassName={style.navItemActive} to="/blog">Blog</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header