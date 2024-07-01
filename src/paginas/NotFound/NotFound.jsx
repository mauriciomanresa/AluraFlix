import styles from "./NotFound.module.css";

//Función que define la página 404
function NotFound() {
  return (
    <section className={styles.errorpage}>
      <p>ERROR !!!</p>
      <h2 className={styles.error}>404</h2>
      <p className={styles.text_error}>Página no encontrada.</p>
    </section>
  );
}

export default NotFound;
