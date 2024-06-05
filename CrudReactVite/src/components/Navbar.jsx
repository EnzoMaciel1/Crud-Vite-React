import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/form">Formulário de Cadastro</Link>
        </li>
        <li>
          <Link to="/items">Listagem de Itens</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
