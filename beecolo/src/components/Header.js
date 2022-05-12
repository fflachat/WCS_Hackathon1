import react from 'react';
import { Navlink, Link } from 'react-router-dom';
import style from '/Header.module.css';


const getActiveLinkStyle = ({ isActive }) => {
    if (isActive) return { color: 'yellow' };
  };
  function Header() {
    const [showLinks, setShowLinks] = useState(false);
    const handleShowLinks = () => {
      setShowLinks(!showLinks);
    };
    return (
      <nav className={style.all}>
        <nav className={`navbar ${showLinks ? 'show-nav' : 'hide-nav'}`}>
          <div className={style.navbar_logo}>
            <Link to="/">
              <div className={style.container}>
                <img className={style.logo} alt="" src="/bee.png" />
                <h1>Beecolo</h1>
              </div>
            </Link>
          </div>
          <ul className={style.navbar_links}>
            <li className={style.navbar_items}>
              <NavLink
                style={getActiveLinkStyle}
                to="/"
                className={style.navbar_link}
                onClick={handleShowLinks}
              >
                Accueil
              </NavLink>
            </li>
            <li className={style.navbar_items}>
              <NavLink
                style={getActiveLinkStyle}
                to="/simulateur"
                className={style .navbar_link}
                onClick={handleShowLinks}
              >
                Simulateur
              </NavLink>
            </li>
  
            <li className={style.navbar_items}>
              <NavLink
                style={getActiveLinkStyle}
                to="/contacts"
                className={style.navbar_link}
                onClick={handleShowLinks}
              >
                Contacts
              </NavLink>
            </li>
  
            <li className={style.navbar_items}>
              <NavLink
                style={getActiveLinkStyle}
                to="/conseils"
                className={style.navbar_link}
                onClick={handleShowLinks}
              >
                Conseils
              </NavLink>
            </li>
          </ul>
          <button
            type="button"
            className={style.navbar_burger}
            onClick={handleShowLinks}
          >
            <span className={style.burger_bar} />
          </button>
        </nav>
      </nav>
    );
  }
  
  export default Header;