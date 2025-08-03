import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { useContext } from 'react';
import { CartContext } from '../providers/CartProvider';


const NavBar = ({ categories }) => {
  const result = useContext(CartContext); 
  return (
    <nav>
      <img className="d-block mx-auto logo" src="/img/logo.png" alt="logo" />
      <h1 className="text-white text-center fs-5">(Altar of Sacrifice)</h1>
      <ul className="d-flex flex-wrap justify-content-center list-unstyled gap-5 text-white">
        <li>
          <Link to="/">
            <img className="d-block mx-auto menu-icon" src="/img/home.png" alt="home" />
          </Link>
        </li>

        {categories.map(category => (
          <li key={category}>
            <Link to={`/category/${category}`}>
              <img
                className="d-block mx-auto menu-icon"
                src={`/img/${category}-logo.png`}
                alt={category}
              />
            </Link>
          </li>
        ))}
        <li>
          <Link to="/cart">
            <CartWidget />
            
          </Link>
        </li>
      </ul>
      
    </nav>
  );
};

export default NavBar;
