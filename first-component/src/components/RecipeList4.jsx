/* eslint-disable react/prop-types */
import { recipes } from "../data";

function Recipe({ id, name, ingredients }) {
  return (
    <div key={id}>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>RecipeList</h1>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} {...recipe} />
      ))}
    </div>
  );
}
