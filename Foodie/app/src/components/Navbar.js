import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav 
      className="navbar navbar-expand-lg navbar-dark" 
      style={{
        background: 'linear-gradient(90deg, rgb(255, 54, 111) 0%, rgb(239, 111, 199) 35%, rgb(67, 215, 215) 100%)'
      }}
    >
      <div className="container">
        <Link 
          className="navbar-brand" 
          to="/" 
          style={{
            fontFamily: 'Poppins, sans-serif', // Zastosowanie czcionki Poppins
            fontWeight: '700', // Pogrubienie tekstu
            fontSize: '2rem', // Zwiększenie rozmiaru tekstu
            letterSpacing: '1px', // Rozszerzenie liter
          }}
        >
          FOODIE
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Lista Przepisów
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/add">
                Dodaj Przepis
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/favorites">
                Ulubione
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/inspiration">
                Inspiracje
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
