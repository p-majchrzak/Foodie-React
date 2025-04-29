import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditRecipe() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [time, setTime] = useState('');


  useEffect(() => {
    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    const recipeToEdit = recipes.find((recipe) => recipe.id === parseInt(id));
    if (recipeToEdit) {
      setTitle(recipeToEdit.title);
      setIngredients(recipeToEdit.ingredients.join(', '));
      setSteps(recipeToEdit.steps.join('. '));
      setTime(recipeToEdit.time);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedRecipe = {
      id: parseInt(id),
      title,
      ingredients: ingredients.split(','),
      steps: steps.split('.'),
      time,
    };

    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    const updatedRecipes = recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );

    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
    navigate('/');
  };

  return (
    <div className="container" style={{
      background: 'linear-gradient(90deg, rgb(255, 54, 111) 0%, rgb(239, 111, 199) 35%, rgb(67, 215, 215) 100%)', 
      padding: '20px',
      borderRadius: '12px',
      color: 'white',  
    }}>
      <h1 className="text-center mb-4">Edytuj Przepis</h1>
      <form onSubmit={handleSubmit} style={{
        backgroundColor: 'white',  
        color: 'black', 
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}>
        <div className="mb-3">
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
        <div className="mb-3">
          <label htmlFor="ingredients" className="form-label">Składniki (oddzielone przecinkami)</label>
          <textarea
            className="form-control"
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="steps" className="form-label">Kroki przygotowania (oddzielone kropkami)</label>
          <textarea
            className="form-control"
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
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
            backgroundColor: 'rgb(239, 111, 199)', 
            borderRadius: '8px',  
            padding: '10px 20px', 
            color: 'white',
            border: 'none', 
            fontWeight: 'bold',
            textTransform: 'uppercase', 
            transition: 'background-color 0.3s, transform 0.3s', 
          }} 
          onMouseOver={(e) => e.target.style.backgroundColor = 'rgb(255, 54, 111)'} 
          onMouseOut={(e) => e.target.style.backgroundColor = 'rgb(239, 111, 199)'} 
        >
          Zapisz Zmiany
        </button>
      </form>
    </div>
  );
}

export default EditRecipe;
