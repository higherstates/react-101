import React from "react";
import Logo from "../images/oh-heroes.svg"

function Header() {
    return (
        <div className="header">
            <a href="index.html">
                <img src={Logo} alt="logo" />
            </a>
            <h2 className="header--title">Get Your Random Characters Here!</h2>
        </div>
    )
}

export default Header 