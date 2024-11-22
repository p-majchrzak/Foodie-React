import React, { useState } from 'react';
import '../styles/style.css';

function IngredientInput({ ingredients, setIngredients }) {
  const [ingredient, setIngredient] = useState('');

  const handleAdd = () => {
    if (ingredient.trim() && !ingredients.includes(ingredient.trim())) {
      setIngredients([...ingredients, ingredient.trim()]);
      setIngredient('');
    }
  };

  const handleRemove = (ingredientToRemove) => {
    setIngredients(ingredients.filter(ingredient => ingredient !== ingredientToRemove));
  };

  return (
    <div>
      <div className="input-group mb-3">
        {/* Zaokrąglony input z zachowanym oryginalnym kolorem obramowania i placeholdera */}
        <input
          type="text"
          className="form-control"
          placeholder="Dodaj składnik"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          style={{
            borderRadius: '25px', // Zaokrąglenie inputa
            padding: '10px', // Padding wewnętrzny
            border: '1px solid #ced4da', // Oryginalny kolor obramowania
            fontSize: '1rem',
            marginRight: '2px', // Odstęp 2px między inputem a przyciskiem
          }}
        />
        {/* Zmieniony kolor przycisku na rgb(239, 111, 199) */}
        <button
          className="btn"
          style={{
            backgroundColor: 'white', // Kolor tła przycisku
            color: 'rgb(67, 215, 215)', // Kolor tekstu
            border: 'none',
            borderRadius: '25px', // Zaokrąglony przycisk
            padding: '10px 20px',
            cursor: 'pointer',
            fontSize: '1rem',
            transition: 'background-color 0.3s ease',
          }}
          class="btn btn-action btn-primary btn-add"
          onClick={handleAdd}
        >
          Dodaj
        </button>
      </div>
      <ul className="list-group">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between">
            {ingredient}
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => handleRemove(ingredient)}
            >
              Usuń
            </button>
            
          </li>
        ))}
      </ul>
      <br></br>
    </div>
  );
}

export default IngredientInput;
