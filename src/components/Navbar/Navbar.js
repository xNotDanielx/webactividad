import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Aviones">Aviones</Link></li>
        <li><Link to="/Aeropuertos">Services</Link></li>
        <li><Link to="/Vuelos">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
