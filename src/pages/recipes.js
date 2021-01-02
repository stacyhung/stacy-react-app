import React from "react";
import recipeData from "../data/recipeData";
import { Link } from "react-router-dom";
import useScript from "../hooks/useScript";
import "../css/recipe.css"
import "../css/svg-effect.css"

function Recipes() {

    const snap_path = "../libs/Snap.svg-0.5.1/snap.svg.js";
    const snap_min_path = "../libs/Snap.svg-0.5.1/snap.svg-min.js";
    const svg_path = "../svg-effect.js";

    useScript(snap_path);
    useScript(snap_min_path);
    useScript(svg_path);

    const recipes = recipeData.map(recipe => (
        <Link
            key={recipe.id}
            to={`/recipes/${recipe.id}`}
            className="recipe-link"
            data-path-hover="m 180,34.57627 -180,0 L 0,0 180,0 z"
        >
            <figure>
                <img src={recipe.img_url} alt={recipe.img_alt} />
                <svg viewBox="0 0 180 320" preserveAspectRatio="none">
                    <path d="M 180,160 0,218 0,0 180,0 z" />
                </svg>
                <figcaption>
                    <h2>{recipe.short_name}</h2>
                    <p>{recipe.key_words}</p>
                    <button>View</button>
                </figcaption>
            </figure>
        </Link>
    ))

    return (

        <section id="grid" className="grid recipe-cards-container">
            {recipes}
        </section>

    )
}

export default Recipes;