import styles from "./Cuello.module.css";

//Función que define la imagen entre el nav y el body.
function Cuello({ img, color }) {
  return (
    <div
      className={styles.imagenSuperior}
      style={{ backgroundImage: `url('/img/imagen-superior.jpg')` }}
    ></div>
  );
}

export default Cuello;
