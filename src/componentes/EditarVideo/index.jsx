import React, { useState } from "react";
import styles from "./EditarVideo.module.css";

//Función que permite editar los videos.
function EditarVideo({ video, onSave, onCancel }) {
  const [titulo, setTitulo] = useState(video.titulo);
  const [categoria, setCategoria] = useState(video.categoria);
  const [imagen, setImagen] = useState(video.imagen);
  const [link, setLink] = useState(video.link);
  const [descripcion, setDescripcion] = useState(video.descripcion);

  const handleSave = () => {
    const editedVideo = {
      ...video,
      titulo,
      categoria,
      imagen,
      link,
      descripcion,
    };
    onSave(editedVideo);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Editar Video</h2>
        <div className={styles.inputFila}>
          <label>Título:</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className={styles.inputFila}>
          <label>Categoría:</label>
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="Front-End">Front-End</option>
            <option value="Back-End">Back-End</option>
            <option value="Programacion">Programacion</option>
            <option value="Diseño UI-UX">Diseño UI-UX</option>
            <option value="Maquetacion">Maquetacion</option>
          </select>
        </div>
        <div className={styles.inputFila}>
          <label>Imagen:</label>
          <input
            type="text"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          />
        </div>
        <div className={styles.inputFila}>
          <label>Link:</label>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <div className={styles.inputFila}>
          <label>Descripción:</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <div className={styles.botones}>
          <button onClick={handleSave}>Guardar</button>
          <button onClick={onCancel}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}

export default EditarVideo;
