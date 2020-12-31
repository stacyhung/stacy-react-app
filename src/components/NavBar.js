import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logoDark from "../s-logo-dark.svg";
import logoLight from "../s-logo-light.svg";
import Toggler from "./Toggler";
import { ToggleContext } from "../ToggleContext";
import "../css/App.css";

function NavBar() {

    const { theme } = useContext(ToggleContext);

    return (
        <nav className={`App-navbar ${theme}-theme`}>
            <Link className="logo-link" to="/">
                <img src={theme === "light" ? logoDark : logoLight} className="App-logo" alt="logo" />
            </Link>
            <div className={`navbar-links ${theme}-theme`}>
                <Link className="navbar-link" to="/blog">Blog</Link>
                <Link className="navbar-link" to="/recipes">Recipes</Link>
                <Link className="navbar-link" to="/travelling">Travelling</Link>
                <Link className="navbar-link" to="/projects">Projects</Link>
                {/* <Link className="navbar-link" to="/about-me">About Me</Link> */}
                <Toggler />
            </div>
        </nav>
    )
}

export default NavBar;