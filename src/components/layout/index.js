import React from "react";
import Footer from "../footer";
import Header from "../header";
import "../../styles/index.scss";
import style from "./index.module.scss";

const Layout = ({children})=> {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <Header />
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout