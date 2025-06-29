import React from 'react';
import CartWidget from './CartWidget'; 

const NavBar = () => {
  return (
    <nav>
      <img className="d-block mx-auto logo" src="/CreaTuLanding-Rivero/img/logo.png" alt="logo" />
      <h1 className="text-white text-center fs-5">(Altar of Sacrifice)</h1>
      <ul className="d-flex justify-content-center list-unstyled gap-5 text-white">
        <li><img className="d-block mx-auto menu-icon" src="/CreaTuLanding-Rivero/img/home.png" alt="home" /></li>
        <li><img className="d-block mx-auto menu-icon" src="/CreaTuLanding-Rivero/img/catalog.png" alt="catalog" /></li>
        <li><img className="d-block mx-auto menu-icon" src="/CreaTuLanding-Rivero/img/contact.png" alt="contact" /></li>
      </ul>
      <CartWidget /> 
    </nav>
  );
};

export default NavBar;
