import styles from "./Pie.module.css";
import logo from "../Cabeza/CMM_logo.png";

//Función que define el footer.
function Pie() {
  return (
    <footer className={styles.foot}>
      <h2>
        Desarrollado por: <img src={logo} alt="CMM-Design" />
      </h2>
    </footer>
  );
}

export default Pie;
