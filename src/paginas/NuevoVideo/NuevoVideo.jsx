import { useState, useRef, useContext } from "react";
import { VideoContext } from "../../context/VideoContext";
import styles from "./Nuevo.module.css";
import CrearVideo from "../../componentes/CrearVideo";
import Categorias from "../../componentes/Categorias";

//Función que define la página de Nuevo con su formulario.
function Nuevo() {
  const { videos, agregarVideo } = useContext(VideoContext);

  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagen, setImagen] = useState("");
  const [video, setVideo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [renderNotice, setRenderNotice] = useState("");
  const formRef = useRef(null);

  const manejarEnvio = (e) => {
    e.preventDefault();
    const nuevoVideo = {
      id: videos.length + 1,
      titulo,
      categoria,
      imagen,
      link: video,
      descripcion,
    };

    agregarVideo(nuevoVideo);
    setRenderNotice("El video ha sido guardado.");
    setTimeout(() => setRenderNotice(""), 1000);
    limpiar();
  };

  const limpiar = () => {
    setTitulo("");
    setImagen("");
    setVideo("");
    setDescripcion("");
    setCategoria("");
    formRef.current.reset();
  };

  return (
    <div className={styles.fondo}>
      <section className={styles.crear}>
        <form onSubmit={manejarEnvio} ref={formRef}>
          <h2>Crear un nuevo video.</h2>
          <div className={styles.inputFila}>
            <CrearVideo
              titulo="Título"
              placeholder="Ingresar título"
              required
              valor={titulo}
              setValor={setTitulo}
            />
            <Categorias
              titulo="Categoría"
              valor={categoria}
              setValor={setCategoria}
            />
          </div>
          <div className={styles.inputFila}>
            <CrearVideo
              titulo="Imagen"
              placeholder="Ingresar enlace de la imagen"
              valor={imagen}
              setValor={setImagen}
            />
            <CrearVideo
              titulo="Video"
              placeholder="Ingresar enlace del video"
              required
              valor={video}
              setValor={setVideo}
            />
          </div>
          <div className={styles.mensajeCentrado}>
            {renderNotice && <p>{renderNotice}</p>}
          </div>
          <div className={styles.inputArea}>
            <label>Descripción :</label>
            <textarea
              placeholder="Cuenta de qué trata el video..."
              rows={3}
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            ></textarea>
          </div>
          <div className={styles.btn}>
            <button type="submit">GUARDAR</button>
            <button type="button" onClick={limpiar}>
              LIMPIAR
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Nuevo;
