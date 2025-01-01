import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";


function Navbar() {
  return (
    <nav className="navbar">
      <img src= {`${process.env.PUBLIC_URL}/image1.png`} alt="amul" height={70} />
      <div className="logo">

        
        <h1>  PNSBA - Prawas Nepali Samparka Bibhag Australia</h1>
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
