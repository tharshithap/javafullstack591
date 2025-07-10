import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      
      <Link className="nav-link" to="/">🍴 Resto Delight</Link>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservations">Book Table</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>     {/* ✅ */}
        <li><Link to="/contact">Contact</Link></li>     {/* ✅ */}
         <li><Link to="/order">Order</Link></li>     {/* ✅ */}
      </ul>
    </nav>
  );
}
