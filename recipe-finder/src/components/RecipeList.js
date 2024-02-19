import React from 'react';
import "../assets/RecipeList.css"

const RecipeList = ({ recipes, onViewDetail }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.idMeal} className="recipe-card">
          <h3>{recipe.strMeal}</h3>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <button onClick={() => onViewDetail(recipe)}>View</button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
