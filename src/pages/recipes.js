import React from "react";
import recipeData from "./data/recipeData";
import { Link } from "react-router-dom";
import "../css/recipes.css"

function Recipes() {

    const recipes = recipeData.map(recipe => (
        <div key={recipe.id} className="recipe-card">
            <h3 className="recipe-card-title">{recipe.name}</h3>
            <Link to={`/recipes/${recipe.id}`} className="view-more-link"><p>View More</p></Link>
        </div>
    ))

    return (
        <div>
            <div className="recipe-cards-container">
                {recipes}
            </div>
        </div>
    )
}

export default Recipes;