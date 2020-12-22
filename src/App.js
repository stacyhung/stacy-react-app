import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import logo from './stripe-s-brands.svg';
import './App.css';
import Blog from "./pages/blog"
import Projects from "./pages/projects"
import Recipes from "./pages/recipes"
import Travelling from "./pages/travelling"
import AboutMe from "./pages/aboutMe"


function App() {
  return (
    <div className="App">
      <nav className="App-navbar">
        <Link className="logo-link" to="/">
          <div className="logo-container">
            <img src={logo} className="App-logo" alt="logo" />
            <h3 className="logo-title">Be Curious</h3>
          </div>
        </Link>
        <div className="navbar-links">
          <Link className="navbar-link" to="/blog">Blog</Link>
          <Link className="navbar-link" to="/recipes">Recipes</Link>
          <Link className="navbar-link" to="/travelling">Travelling</Link>
          <Link className="navbar-link" to="/projects">Projects</Link>
          <Link className="navbar-link" to="/about-me">About Me</Link>
        </div>
      </nav>

      <body>
        <div className="main-content-container">
          <Switch>
            <Route exact path="/">
              <h1>Home</h1>
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/recipes">
              <Recipes />
            </Route>
            <Route path="/travelling">
              <Travelling />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/about-me">
              <AboutMe />
            </Route>
          </Switch>
        </div>
      </body>

    </div>

  );
}

export default App;
