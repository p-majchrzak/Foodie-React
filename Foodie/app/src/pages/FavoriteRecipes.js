import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';

function FavoriteRecipes() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    const favoriteRecipes = storedRecipes.filter((recipe) => recipe.favorite); // Przepisy, które są ulubione
    setFavorites(favoriteRecipes);
  }, []);

  const handleRemoveFavorite = (id) => {
    const updatedFavorites = favorites.filter((recipe) => recipe.id !== id);
    setFavorites(updatedFavorites);

    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    const updatedRecipes = storedRecipes.map((recipe) =>
      recipe.id === id ? { ...recipe, favorite: false } : recipe
    );

    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
  };

  return (
    <div 
      className="container" 
      style={{
        background: 'linear-gradient(90deg, rgb(255, 54, 111) 0%, rgb(239, 111, 199) 35%, rgb(67, 215, 215) 100%)',
        padding: '20px',
        borderRadius: '12px',
        color: 'white', // Biały tekst na tle gradientu
      }}
    >
      <h1 className="text-center mb-4">Ulubione Przepisy</h1>
      <div className="row">
        {favorites.length > 0 ? (
          favorites.map((recipe) => (
            <div className="col-md-4 mb-3" key={recipe.id}>
              <RecipeCard
                recipe={recipe}
                onDelete={handleRemoveFavorite} // Usuń z ulubionych
                isFavoritePage={true} // Na tej stronie tylko opcja usuwania z ulubionych
              />
            </div>
          ))
        ) : (
          <p className="text-white text-center">Brak ulubionych przepisów.</p> 
        )}
      </div>
    </div>
  );
}

export default FavoriteRecipes;
