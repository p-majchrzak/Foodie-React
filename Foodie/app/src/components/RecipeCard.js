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


        {!isFavoritePage && (
          <div className="button-group" style={{ display: 'flex', gap: '8px' }}>
            <button
              className="btn btn-action"
              style={{
                backgroundColor: 'rgb(255, 54, 111)', 
                color: 'white',
                borderRadius: '12px',
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
                backgroundColor: 'rgb(239, 111, 199)',
                color: 'white',
                borderRadius: '12px', 
                padding: '8px 16px',
                textDecoration: 'none'
              }}
            >
              <FaEdit /> Edytuj
            </Link>

            <button
              className={`btn ${recipe.favorite ? 'btn-danger' : 'btn-outline-danger'}`}
              onClick={() => onFavorite(recipe.id)}
              style={{
                color: recipe.favorite ? 'white' : 'rgb(255, 54, 111)', 
                backgroundColor: recipe.favorite ? 'rgb(255, 54, 111)' : 'white', 
                borderRadius: '12px', // Zaokrąglone rogi
                padding: '8px 16px',
                border: recipe.favorite ? 'none' : '2px solid rgb(255, 54, 111)', 
              }}
            >
              <FaHeart /> {recipe.favorite ? 'Usuń z ulubionych' : 'Dodaj do ulubionych'}
            </button>
          </div>
        )}


        {isFavoritePage && (
          <div className="button-group" style={{ display: 'flex', gap: '8px' }}>
            <button
              className="btn btn-action btn-danger"
              style={{
                backgroundColor: 'rgb(255, 54, 111)', 
                color: 'white',
                borderRadius: '12px',
                padding: '8px 16px',
                border: 'none'
              }}
              onClick={() => onDelete(recipe.id)}
            >
              <FaTrash /> Usuń z ulubionych
            </button>
          </div>
        )}

        <div className="button-details-container" style={{ marginTop: '15px' }}>
          <Link
            to={`/recipe/${recipe.id}`}
            className="btn btn-action"
            style={{
              backgroundColor: 'rgb(67, 215, 215)', 
              color: 'white',
              borderRadius: '12px', 
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
