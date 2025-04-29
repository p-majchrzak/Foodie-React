import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddRecipe() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [time, setTime] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split(','),
      steps: steps.split('.'),
      time,
    };
    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    storedRecipes.push(newRecipe);
    localStorage.setItem('recipes', JSON.stringify(storedRecipes));
    navigate('/');
  };

  return (
    <div className="container" style={{
      background: 'linear-gradient(90deg, rgb(255, 54, 111) 0%, rgb(239, 111, 199) 35%, rgb(67, 215, 215) 100%)',
      padding: '20px',
      borderRadius: '12px',
      color: 'white',  
    }}>
      <div className="add-recipe-header">
        <h1>Dodaj Nowy Przepis</h1>
      </div>
      <form onSubmit={handleSubmit} className="recipe-form" style={{
        backgroundColor: 'white',  
        color: 'black',           
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}>
        <div className="mb-4">
          <label htmlFor="title" className="form-label">Tytuł Przepisu</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ingredients" className="form-label">Składniki (oddzielone przecinkami)</label>
          <textarea
            className="form-control"
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="steps" className="form-label">Kroki przygotowania (oddzielone kropkami)</label>
          <textarea
            className="form-control"
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="form-label">Czas przygotowania (w minutach)</label>
          <input
            type="number"
            className="form-control"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-action"
          style={{
            backgroundColor: 'rgb(255, 54, 111)', 
            color: 'white',
            borderRadius: '8px',
            padding: '8px 16px',
          }}
        >
          Dodaj Przepis
        </button>
      </form>
    </div>
  );
}

export default AddRecipe;
