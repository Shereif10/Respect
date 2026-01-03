import React from 'react'
import logo from '../../assets/logo.png'


export default function Navbar() {
  return (
    <nav className="navbar-container mt-5">
      <div>
        <img src={logo} className="navbar-shape" alt="respect logo" />
      </div>

      <div className="navbar-inner">
        <div className="navbar-green">
          <ul className="nav-links">
            <li>Home</li>
            <li className="active">Values</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Case Studies</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
