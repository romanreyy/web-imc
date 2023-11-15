import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DropDownMenu () {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
  <div className="dropdown">
    <img  onClick={toggleMenu} src="https://www.lincheap.com/wp-content/uploads/2022/06/1619823421.webp" className="ImgMenu" />
      {isMenuOpen && (
        <div className="menu">
          {/* Contenido del menú */}
          <ul>
            <h1> Sobre IMC </h1>
            <li>
              <Link to="/question1Imc" onClick={closeMenu}>
                <div className='menu-section'>¿Como calcular el IMC?</div>
              </Link>
            </li>
            <li>
              <Link to="/question2Imc" onClick={closeMenu}>
                <div className='menu-section'>Correcciones al indice por edad y sexo </div>
              </Link>
            </li>
            <li>
              <Link to="/question3Imc" onClick={closeMenu}>
                <div className='menu-section'>No diferencias entre masa muscular y masa grasa </div>
              </Link>
            </li>
            <li>
              <Link to="/question4Imc" onClick={closeMenu}>
              <div className='menu-section'>Escala </div>
              </Link>
            </li>
            <li>
              <Link to="/question5Imc" onClick={closeMenu}>
              <div className='menu-section'>Variacion en relacion con la salud </div>
              </Link>
            </li>
          </ul>
          <ul>
            <h1>
              Calculadoras
            </h1>
            <li>
              <Link to="/calculatorCalories" onClick={closeMenu}>
                <div className='CaloriesCalculator'>Calculadora de calorias diarias </div>
              </Link>
            </li>
            <li>
              <Link to="/calculatorIdealWeight" onClick={closeMenu}>
                <div className=''>Calculadora de peso ideal</div>
              </Link>
            </li>
            <li>
              <Link to="/" onClick={closeMenu}>
                <div className=''>Calculadora IMC</div>
              </Link>
            </li>
          </ul>
          <ul>
            <h1>Calorias</h1>
            <li>
              <Link to="/question1Calories" onClick={closeMenu}>
                <div className='CaloriesItem-1'>Definiciones</div>
              </Link>
            </li>
            <li>
              <Link to="/question2Calories" onClick={closeMenu}>
                <div className='CaloriesItem-2'>Origen</div>
              </Link>
            </li>
            <li>
              <Link to="/question3Calories" onClick={closeMenu}>
                <div className=''>Metabolismo y calorías</div>
              </Link>
            </li>
            <li>
              <Link to="/question4Calories" onClick={closeMenu}>
                <div className=''>Caloría</div>
              </Link>
            </li>
          </ul>
        </div>
      )}
  </div>
  );
}