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
        <input
          type="text"
          className="form-control"
          placeholder="Dodaj składnik"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          style={{
            borderRadius: '25px', 
            padding: '10px',
            border: '1px solid #ced4da', 
            fontSize: '1rem',
            marginRight: '2px',
          }}
        />

        <button
          className="btn"
          style={{
            backgroundColor: 'white', 
            color: 'rgb(67, 215, 215)', 
            border: 'none',
            borderRadius: '25px', 
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
