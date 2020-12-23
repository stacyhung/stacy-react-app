import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import logo from './stripe-s-brands.svg';
import Blog from "./pages/Blog"
import Projects from "./pages/Projects"
import Recipes from "./pages/Recipes"
import RecipeDetail from "./pages/RecipeDetail"
import Travelling from "./pages/Travelling"
import AboutMe from "./pages/AboutMe"
import './css/App.css';


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
              <h1>Welcome to Stacy's Space!</h1>
            </Route>
            <Route exact path="/blog">
              <Blog />
            </Route>
            <Route exact path="/recipes">
              <Recipes />
            </Route>

            <Route path="/recipes/:recipeId">
              <RecipeDetail />
            </Route>

            <Route exact path="/travelling">
              <Travelling />
            </Route>
            <Route exact path="/projects">
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
