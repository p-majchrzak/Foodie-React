import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    const recipeDetail = storedRecipes.find((r) => r.id === parseInt(id));
    if (recipeDetail) {
      setRecipe(recipeDetail);
    } else {
      window.location.href = '/';
    }
  }, [id]);


  const handleFavorite = (id) => {
    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    const updatedRecipes = storedRecipes.map((recipe) =>
      recipe.id === id ? { ...recipe, favorite: !recipe.favorite } : recipe
    );


    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
    setRecipe(updatedRecipes.find((r) => r.id === id)); 
  };

  if (!recipe) return <p>Ładowanie...</p>; // Jeśli przepis się ładuje

  return (
    <div className="container" style={{
      background: 'linear-gradient(90deg, rgb(255, 54, 111) 0%, rgb(239, 111, 199) 35%, rgb(67, 215, 215) 100%)',
      padding: '20px',
      borderRadius: '12px',
      color: 'white',
    }}>
      <h1 className="text-center mb-4">{recipe.title}</h1>
      <div className="card" style={{
        backgroundColor: 'white', 
        color: 'black', 
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '15px',
      }}>
        <div className="card-body">
          <h5 className="card-title">Składniki:</h5>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h5 className="card-title">Kroki przygotowania:</h5>
          <ol>
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
          <p><strong>Czas przygotowania:</strong> {recipe.time} minut</p>

          <button
            className={`btn ${recipe.favorite ? 'btn-danger' : 'btn-outline-danger'} me-2`}
            onClick={() => handleFavorite(recipe.id)}
            style={{
              backgroundColor: recipe.favorite ? 'rgb(255, 54, 111)' : 'white', 
              color: recipe.favorite ? 'white' : 'rgb(255, 54, 111)', 
              borderRadius: '8px',
              padding: '8px 16px',
              border: recipe.favorite ? 'none' : '2px solid rgb(255, 54, 111)',
            }}
          >
            <FaHeart /> {recipe.favorite ? 'Usuń z ulubionych' : 'Dodaj do ulubionych'}
          </button>

          <Link to="/" className="btn btn-primary" style={{
            backgroundColor: 'rgb(67, 215, 215)', 
            color: 'white',
            borderRadius: '8px',
            padding: '8px 16px',
            border: '2px solid transparent', 
            boxShadow: '0 0 0 2px rgba(67, 215, 215, 0.5)', 
          }}>
            Powrót do listy przepisów
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
