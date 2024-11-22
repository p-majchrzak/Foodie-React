import { Link } from 'react-router-dom';
import { FaTrash, FaHeart, FaEdit } from 'react-icons/fa';
import '../styles/style.css';

function RecipeCard({ recipe, onDelete, onFavorite, isFavoritePage }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{recipe.title}</h5>
        <p className="card-text">
          <strong>Składniki:</strong> {recipe.ingredients.join(', ')}
        </p>
        <p className="card-text">
          <strong>Czas przygotowania:</strong> {recipe.time} min
        </p>

        {/* Przyciski usuwania i edytowania dostępne tylko na stronie RecipeList */}
        {!isFavoritePage && (
          <div className="button-group" style={{ display: 'flex', gap: '8px' }}>
            <button
              className="btn btn-action"
              style={{
                backgroundColor: 'rgb(255, 54, 111)', // Jaskrawy różowy
                color: 'white',
                borderRadius: '12px', // Zaokrąglone rogi
                padding: '8px 16px',
                border: 'none'
              }}
              onClick={() => onDelete(recipe.id)}
            >
              <FaTrash /> Usuń
            </button>

            <Link
              to={`/edit/${recipe.id}`}
              className="btn btn-action"
              style={{
                backgroundColor: 'rgb(239, 111, 199)', // Delikatny różowy
                color: 'white',
                borderRadius: '12px', // Zaokrąglone rogi
                padding: '8px 16px',
                textDecoration: 'none'
              }}
            >
              <FaEdit /> Edytuj
            </Link>

            {/* Przycisk do dodawania lub usuwania z ulubionych */}
            <button
              className={`btn ${recipe.favorite ? 'btn-danger' : 'btn-outline-danger'}`}
              onClick={() => onFavorite(recipe.id)}
              style={{
                color: recipe.favorite ? 'white' : 'rgb(255, 54, 111)', // Czerwony tekst, jeśli nie jest ulubiony
                backgroundColor: recipe.favorite ? 'rgb(255, 54, 111)' : 'white', // Różowe tło, jeśli ulubiony
                borderRadius: '12px', // Zaokrąglone rogi
                padding: '8px 16px',
                border: recipe.favorite ? 'none' : '2px solid rgb(255, 54, 111)', // Czerwona ramka, jeśli nie ulubiony
              }}
            >
              <FaHeart /> {recipe.favorite ? 'Usuń z ulubionych' : 'Dodaj do ulubionych'}
            </button>
          </div>
        )}

        {/* Przyciski dostępne tylko na stronie FavoriteRecipes */}
        {isFavoritePage && (
          <div className="button-group" style={{ display: 'flex', gap: '8px' }}>
            <button
              className="btn btn-action btn-danger"
              style={{
                backgroundColor: 'rgb(255, 54, 111)', // Jaskrawy różowy
                color: 'white',
                borderRadius: '12px', // Zaokrąglone rogi
                padding: '8px 16px',
                border: 'none'
              }}
              onClick={() => onDelete(recipe.id)}
            >
              <FaTrash /> Usuń z ulubionych
            </button>
          </div>
        )}

        {/* Link do szczegółów przepisu */}
        <div className="button-details-container" style={{ marginTop: '15px' }}>
          <Link
            to={`/recipe/${recipe.id}`}
            className="btn btn-action"
            style={{
              backgroundColor: 'rgb(67, 215, 215)', // Turkusowy
              color: 'white',
              borderRadius: '12px', // Zaokrąglone rogi
              padding: '8px 16px',
              textDecoration: 'none'
            }}
          >
            Szczegóły
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
