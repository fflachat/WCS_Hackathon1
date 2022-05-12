import React, { useState } from 'react';
import './Header.css';
import { NavLink, Link } from 'react-router-dom';

const getActiveLinkStyle = ({ isActive }) => {
  if (isActive) return { color: '#FFC700' };
};
export default function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
      <nav className={`navbar ${showLinks ? 'show-nav' : 'hide-nav'}`}>
        <div className="navbar_logo">
          <Link to="/">
            <div className="headerContainer">
              <img className="logo" alt="bee" src="/bee.png" />
              <h1 className='headerTitle'>Beecolo</h1>
            </div>
          </Link>
        </div>
        <ul className="navbar_links">
          <li className="navbar_items">
            <NavLink
              style={getActiveLinkStyle}
              to="/"
              className="navbar_link"
              onClick={handleShowLinks}
            >
              Accueil
            </NavLink>
          </li>
          <li className="navbar_items">
            <NavLink
              style={getActiveLinkStyle}
              to="/simulateur"
              className="navbar_link"
              onClick={handleShowLinks}
            >
              Simulateur
            </NavLink>
          </li>

          <li className="navbar_items">
            <NavLink
              style={getActiveLinkStyle}
              to="/contacts"
              className="navbar_link"
              onClick={handleShowLinks}
            >
              Contacts
            </NavLink>
          </li>

          <li className="navbar_items">
            <NavLink
              style={getActiveLinkStyle}
              to="/conseils"
              className="navbar_link"
              onClick={handleShowLinks}
            >
              Conseils
            </NavLink>
          </li>
          <img className="bee" alt="bee" src="/bee.png" />

        </ul>
        <button
          type="button"
          className="navbar_burger"
          onClick={handleShowLinks}
        >
          <span className="burger_bar" />
        </button>
      </nav>
  );
}
