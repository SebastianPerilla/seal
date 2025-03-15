import React from 'react';
import sealLogo from '../assets/images/seal_logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={sealLogo} alt="SEAL Logo" />
      </div>
      <div className="nav-links">
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
        <button className="try-seal-btn">Try SEAL</button>
      </div>
    </nav>
  );
}

export default Navbar;s