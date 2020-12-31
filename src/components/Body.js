import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home"
import Blog from "../pages/Blog"
import Projects from "../pages/Projects"
import Recipes from "../pages/Recipes"
import RecipeDetail from "../pages/RecipeDetail"
import Travelling from "../pages/Travelling"
import AboutMe from "../pages/AboutMe"
import '../css/App.css';

function Body() {
    return (
        <body>
            <div className="main-content-container">
                <Switch>
                    <Route exact path="/">
                        <Home />
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
    )
}

export default Body;