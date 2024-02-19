import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import Detail from './components/Detail';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    
    fetchRecipes();
  }, []); 
  useEffect(() => {
    
    if (query !== '') {
      fetchRecipes();
    }
  }, [query]);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      setRecipes(response.data.meals.slice(0, 6) || []);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleViewDetail = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBackToList = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="app">
      <p>Welcome to our Recipe Finder Website.</p>
      <p>Bon Apetite</p>
      <h1>Recipe Finder</h1>
      
      {selectedRecipe ? (
        <Detail recipe={selectedRecipe} onBack={handleBackToList} />
      ) : (
        <>
          <RecipeForm onSearch={setQuery} />
          <RecipeList recipes={recipes} onViewDetail={handleViewDetail} />
        </>
      )}
    </div>
  );
};

export default App;
