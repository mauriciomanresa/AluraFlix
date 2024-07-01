import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Cabeza.module.css";
import logo from "./CMM_logo.png";
import CabezaLink from "../CabezaLink";

//Función que define el nav superior.
function Cabeza() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logoContainer}>
        <img src={logo} alt="logo-CMM" />
        <span>VIDEOTECA</span>
      </Link>
      <button className={styles.menuButton} onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
        <CabezaLink url="./" onClick={handleLinkClick}>
          HOME
        </CabezaLink>
        <CabezaLink url="./Nuevo" onClick={handleLinkClick}>
          NUEVO
        </CabezaLink>
      </nav>
    </header>
  );
}

export default Cabeza;
