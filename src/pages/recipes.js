import React from "react";
import recipeData from "../data/recipeData";
import { Link } from "react-router-dom";
import useScript from "../hooks/useScript";
import "../css/recipe.css"
import "../css/hover-effect.css"

function Recipes() {

    const snap_path = "https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/src/libs/Snap.svg-0.5.1/snap.svg.js";
    const snap_min_path = "https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/src/libs/Snap.svg-0.5.1/snap.svg-min.js";
    const svg_path = "https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/src/svg-effect.js";

    useScript(snap_path);
    useScript(snap_min_path);
    useScript(svg_path);

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