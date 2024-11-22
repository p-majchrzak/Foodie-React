import React, { useState } from 'react';
import IngredientInput from '../components/IngredientInput';

function Inspiration() {
  const [availableIngredients, setAvailableIngredients] = useState([]);
  const [suggestedRecipes, setSuggestedRecipes] = useState([]);

  const handleAddIngredient = (ingredient) => {
    setAvailableIngredients([...availableIngredients, ingredient]);
  };

  const handleGenerateInspiration = () => {
    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    const matchingRecipes = recipes.filter((recipe) =>
      availableIngredients.every((ingredient) =>
        recipe.ingredients.includes(ingredient)
      )
    );
    setSuggestedRecipes(matchingRecipes);
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
      <h1 className="text-center mb-4">Generator Inspiracji</h1>
      <IngredientInput ingredients={availableIngredients} setIngredients={setAvailableIngredients} />
      <div className="mb-3">
        <strong>Składniki:</strong> {availableIngredients.join(', ')}
      </div>
      {/* Zmieniony kolor przycisku na biały */}
      <button
        className="btn"
        style={{
          backgroundColor: 'white', // Kolor przycisku na biały
          color: 'rgb(239, 111, 199)', // Kolor tekstu dopasowany do tła przycisku
          border: 'none', // Usuwamy obramowanie
          borderRadius: '25px', // Zaokrąglone rogi
          padding: '10px 20px', // Padding przycisku
          cursor: 'pointer', // Kursor zmienia się na wskazujący
          fontSize: '1rem', // Rozmiar czcionki
          transition: 'background-color 0.3s ease', // Płynna zmiana koloru przy najechaniu
        }}
        onClick={handleGenerateInspiration}
      >
        Generuj Inspiracje
      </button>
      <br></br><br></br>
      <div>
        {suggestedRecipes.length > 0 ? (
          suggestedRecipes.map((recipe) => (
            <div key={recipe.id} className="card mb-3" style={{ backgroundColor: 'white' }}>
              <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                <p className="card-text">
                  <strong>Składniki:</strong> {recipe.ingredients.join(', ')}
                </p>
                <p className="card-text">
                  <strong>Czas przygotowania:</strong> {recipe.time} min
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center" style={{ color: 'white' }}>Brak pasujących przepisów.</p>  
        )}
      </div>
    </div>
  );
}

export default Inspiration;
