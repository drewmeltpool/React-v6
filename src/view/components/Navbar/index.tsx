import React from 'react';
import './navbar.scss';

const Navbar: React.FC = ({ children }) => (
  <header className="navbar">
    <div className="container">
      <div className="navbar__inner">{children}</div>
    </div>
  </header>
);

export default Navbar;
