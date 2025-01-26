// src/components/Navbar.js
import './navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/images/logo.svg" alt="Seal Logo" />
        <span>Seal</span>
      </div>
      <div className="nav-buttons">
        <a href="#home" className="nav-btn">Home</a>
        <a href="#about" className="nav-btn">About</a>
        <a href="#contact" className="nav-btn">Contact</a>
        <a href="#login" className="nav-btn">Login</a>
        <a href="#signup" className="nav-btn special-btn">Sign Up</a>
      </div>
    </nav>
  );
}
