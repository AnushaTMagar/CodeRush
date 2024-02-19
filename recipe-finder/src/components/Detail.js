import React from 'react';

const Detail = ({ recipe, onBack }) => {
  return (
    <div className="detail">
      <h2>{recipe.strMeal}</h2>
      <p>Category: {recipe.strCategory}</p>
      <p>Area: {recipe.strArea}</p>
      <h3>Ingredients:</h3>
      <ul>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => (
          <li key={index}>{recipe[`strIngredient${index}`]}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.strInstructions}</p>
      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default Detail;
