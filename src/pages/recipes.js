import React from "react";
import recipeData from "../data/recipeData";
import { Link } from "react-router-dom";
import "../css/recipe.css"
import "../css/hover-effect.css"

function Recipes() {

    const recipes = recipeData.map(recipe => (
        <Link key={recipe.id} to={`/recipes/${recipe.id}`} className="hover-link">
            <figure className="effect-sadie">
                <img src={recipe.img_url} alt={recipe.img_alt} />
                <figcaption>
                    <h2>{recipe.short_name}</h2>
                    <p>{recipe.key_words}</p>
                </figcaption>
            </figure>
        </Link >

    ))

    return (
        <div className="grid">
            {recipes}
        </div>
    )
}

export default Recipes;