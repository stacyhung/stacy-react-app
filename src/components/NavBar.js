import React from "react";
import { Link } from "react-router-dom";
import logo from '../stripe-s-brands.svg';
import '../css/App.css';

function NavBar() {
    return (
        <nav className="App-navbar">
            <Link className="logo-link" to="/">
                <img src={logo} className="App-logo" alt="logo" />
            </Link>
            <div className="navbar-links">
                <Link className="navbar-link" to="/blog">Blog</Link>
                <Link className="navbar-link" to="/recipes">Recipes</Link>
                <Link className="navbar-link" to="/travelling">Travelling</Link>
                <Link className="navbar-link" to="/projects">Projects</Link>
                <Link className="navbar-link" to="/about-me">About Me</Link>
            </div>
        </nav>
    )
}

export default NavBar;