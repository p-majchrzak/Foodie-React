import React from 'react';

function Footer() {
  return (
    <footer 
      className="text-white text-center py-3 mt-auto" 
      style={{ background: 'linear-gradient(90deg, rgb(255, 54, 111) 0%, rgb(239, 111, 199) 35%, rgb(67, 215, 215) 100%)' }}
    >
      <div className="container">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Foodie. Wszystkie prawa zastrzeżone.
        </p>
        <p className="mb-0">
          Autor: Piotr Majchrzak<span>👨‍💻</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
