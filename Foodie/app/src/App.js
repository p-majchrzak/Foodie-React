import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './pages/RecipeList';
import AddRecipe from './pages/AddRecipe';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Inspiration from './pages/Inspiration';
import RecipeDetail from './pages/RecipeDetail'; // Importuj RecipeDetail
import EditRecipe from './pages/EditRecipe';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="container mt-4 flex-grow-1">
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/add" element={<AddRecipe />} />
            <Route path="/favorites" element={<FavoriteRecipes />} />
            <Route path="/inspiration" element={<Inspiration />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} /> {/* Trasa do szczegółów przepisu */}
            <Route path="/edit/:id" element={<EditRecipe />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
