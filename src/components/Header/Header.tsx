import React, { useState } from 'react';
import JoinButton from '../JoinButton/JoinButton';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <img src="./assets/makeit_logo.png" alt="MakeITのロゴ" />
      <nav className={`menu ${menuOpen ? 'open' : ''}`}>
        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul>
          <li><a href="#">News</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">GitHub</a></li>
        </ul>
        <JoinButton />
      </nav>
    </header>
  );
}

export default Header;