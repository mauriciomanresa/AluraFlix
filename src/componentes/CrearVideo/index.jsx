import styles from "./CrearVideo.module.css";

//Función para crear nuevos videos.
function CrearVideo(props) {
  const manejarValor = (e) => {
    props.setValor(e.target.value);
  };

  const tituloModificado = `${props.titulo} :`;
  const placeholderModificado = `${props.placeholder}...`;

  return (
    <div className={styles.nuevo_video}>
      <label> {tituloModificado} </label>
      <input
        placeholder={placeholderModificado}
        required={props.required}
        value={props.valor}
        onChange={manejarValor}
      />
    </div>
  );
}

export default CrearVideo;
