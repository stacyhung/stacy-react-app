import React from "react";
import { useParams } from "react-router-dom";
import recipeData from "./data/recipeData";
import "../css/recipes.css";

function RecipeDetail() {

    const { recipeId } = useParams();

    // get recipe data using id
    const thisRecipe = recipeData.find(recipe => recipe.id === recipeId)

    // map ingredients to JSX
    const ingredientsList = thisRecipe.ingredients.map(ingredient =>
        (<li>{ingredient}</li>)
    )

    // map instructions to JSX
    const preparationSteps = thisRecipe.preparation.map(step =>
        (<li>{step}</li>)
    )

    return (
        <div className="main-container">
            <h1>{thisRecipe.name}</h1>

            <div className="recipe recipe-content-container">

                <div className="recipe-quick-summary">
                    <div className="recipe-metric">
                        <p className="recipe-measure">Yield</p>
                        <p className="recipe-value">{thisRecipe.yield}</p>
                    </div>
                    <div className="recipe-metric">
                        <p className="recipe-measure">Time</p>
                        <p className="recipe-value">{thisRecipe.time}</p>
                    </div>
                </div>

                <div className="recipe-container recipe-intro">
                    <img src={thisRecipe.img_url} className="recipe-img" alt={thisRecipe.img_alt} />
                    <p className="recipe-desc">{thisRecipe.description}</p>
                </div>

                <div className="recipe-container recipe-main">
                    <div className="ingredients-container">
                        <h3>Ingredients</h3>
                        <ul>
                            {ingredientsList}
                        </ul>
                    </div>
                    <div className="instructions-container">
                        <h3>Preparation</h3>
                        <ol>
                            {preparationSteps}
                        </ol>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RecipeDetail;