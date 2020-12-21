import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import logo from './stripe-s-brands.svg';
import './App.css';
import Blog from "./pages/Blog"


function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">
          <div class="logo">
            <img src={logo} className="App-logo" alt="logo" />
            <h3>Be Curious</h3>
          </div>
        </Link>
        <div class="links">
          <Link to="/blog">Blog</Link>
          <Link to="/recipes">Recipes</Link>
          <Link to="/travelling">Travelling</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about-me">About Me</Link>
        </div>
      </nav>

      <header className="App-header">
        <h1>Stacy's Space</h1>
      </header>

      <body>
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
          <Route path="/blog">
            <h1>Stacy's Blog</h1>
          </Route>
          <Route path="/recipes">
            <h1>Recipes</h1>
          </Route>
          <Route path="/travelling">
            <h1>Stacy's Travelling Adventures</h1>
          </Route>
          <Route path="/projects">
            <h1>Stacy's Projects</h1>
          </Route>
          <Route path="/about-me">
            <h1>Hi, I'm Stacy!</h1>
          </Route>

        </Switch>
      </body>

    </div>

  );
}

export default App;
