// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="/" className="logo">Apple</a>
        <ul className="nav-links">
          <li><a href="/mac">Mac</a></li>
          <li><a href="/ipad">iPad</a></li>
          <li><a href="/iphone">iPhone</a></li>
          <li><a href="/watch">Watch</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
