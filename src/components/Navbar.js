import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>PNSBA - Prawas Nepali Samparka Bibhag Australia</h1>
      </div>
      <ul className="nav-links">
        <li><Link to="#hero">Home</Link></li>
        <li><Link to="#about">About</Link></li>
        <li><Link to="#services">Services</Link></li>
        <li><Link to="#contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
export { Navbar };
export default Navbar;
