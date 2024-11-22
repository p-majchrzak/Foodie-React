import React, { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';
import '../styles/style.css';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [filter, setFilter] = useState(''); // Przechowuje wartość filtra

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    setRecipes(storedRecipes);
  }, []);

  const handleDelete = (id) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
  };

  const handleFavorite = (id) => {
    const updatedRecipes = recipes.map((recipe) =>
      recipe.id === id ? { ...recipe, favorite: !recipe.favorite } : recipe
    );
    setRecipes(updatedRecipes);
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
  };

  return (
    <div 
      className="recipe-list-container"
      style={{
        marginBottom: '30px', // Dodajemy odstęp dolny
      }}
    >
      <h1 className="text-center mb-4 title">Lista Przepisów</h1>

      {/* Pasek wyszukiwania */}
      <div className="input-group mb-3 search-bar">
        <input
          type="text"
          className="form-control search-input"
          placeholder="Szukaj przepisów..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <div className="row">
        {recipes
          .filter((recipe) =>
            recipe.title.toLowerCase().includes(filter.toLowerCase()) // Filtrowanie po tytule
          )
          .map((recipe) => (
            <div className="col-md-4 mb-3" key={recipe.id}>
              <RecipeCard
                recipe={recipe}
                onDelete={handleDelete}
                onFavorite={handleFavorite}
                isFavoritePage={false} // Na tej stronie mamy wszystkie funkcje
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default RecipeList;
