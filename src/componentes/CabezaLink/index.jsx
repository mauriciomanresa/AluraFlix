import { Link } from "react-router-dom";
import styles from "./CabezaLink.module.css";

//Función que complementa el nav superior.
function CabezaLink({ url, children, onClick }) {
  return (
    <Link to={url} className={styles.link} onClick={onClick}>
      {children}
    </Link>
  );
}

export default CabezaLink;
