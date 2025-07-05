import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget'; 

const NavBar = () => {
  return (
    <nav>
      <img className="d-block mx-auto logo" src="/CreaTuLanding-Rivero/img/logo.png" alt="logo" />
      <h1 className="text-white text-center fs-5">(Altar of Sacrifice)</h1>
      <ul className="d-flex flex-wrap justify-content-center list-unstyled gap-5 text-white">
        <li>
          <Link to="/">
            <img className="d-block mx-auto menu-icon" src="/CreaTuLanding-Rivero/img/home.png" alt="home" />
          </Link>
        </li>
        <li>
          <Link to="/category/metallica">
            <img className="d-block mx-auto menu-icon" src="/CreaTuLanding-Rivero/img/metallica-logo.png" alt="metallica" />
          </Link>
        </li>
        <li>
          <Link to="/category/slayer">
            <img className="d-block mx-auto menu-icon" src="/CreaTuLanding-Rivero/img/slayer-logo.png" alt="slayer" />
          </Link>
        </li>
        <li>
          <Link to="/category/sepultura">
            <img className="d-block mx-auto menu-icon" src="/CreaTuLanding-Rivero/img/sepultura-logo.png" alt="sepultura" />
          </Link>
        </li>
        <li>
          <Link to="/category/megadeth">
            <img className="d-block mx-auto menu-icon" src="/CreaTuLanding-Rivero/img/megadeth-logo.png" alt="megadeth" />
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <img className="d-block mx-auto menu-icon" src="/CreaTuLanding-Rivero/img/contact.png" alt="contact" />
          </Link>
        </li>
      </ul>
      <CartWidget /> 
    </nav>
  );
};

export default NavBar;
