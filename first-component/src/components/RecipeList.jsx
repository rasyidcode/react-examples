/* eslint-disable react/prop-types */
import { Fragment } from "react";
import { recipes } from "../data";

function RecipeSection({ name, ingredients }) {
  return (
    <Fragment>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>RecipeList</h1>
      {recipes.map((recipe) => (
        <RecipeSection
          key={recipe.id}
          name={recipe.name}
          ingredients={recipe.ingredients}
        />
      ))}
    </div>
  );
}
