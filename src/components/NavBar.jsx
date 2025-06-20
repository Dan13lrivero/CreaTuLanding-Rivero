import React from 'react';
import CartWidget from './CartWidget'; 

const NavBar = () => {
  return (
    <nav>
      <h1>Altar of Sacrifice</h1>
      <ul>
        <li>Home</li>
        <li>Catalog</li>
        <li>Contact</li>
      </ul>
      <CartWidget /> 
    </nav>
  );
};

export default NavBar;
