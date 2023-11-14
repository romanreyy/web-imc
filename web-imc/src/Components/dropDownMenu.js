import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DropDownMenu () {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="dropdown">
    <img  onClick={toggleMenu} src="https://www.lincheap.com/wp-content/uploads/2022/06/1619823421.webp" className="ImgMenu" />

      {isMenuOpen && (
        <div className="menu">
          {/* Contenido del menú */}
          <ul>
            <li><Link to="/question1"> ¿Como calcular el IMC?</Link></li>
            <li><Link to="/question2">Correcciones al indice por edad y sexo</Link></li>
            <li><Link to="/question3">No diferencias entre masa muscular y masa grasa</Link></li>
            <li><Link to="/question4">Escala</Link></li>
            <li><Link to="/question5">Variacion en relacion con la salud</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
}