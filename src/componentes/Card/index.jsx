import { useState } from "react";
import styles from "./Card.module.css";
import Reproductor from "../Reproductor";

//Función que define cada tarjeta de video.
function Card({ video, onDelete, onEdit }) {
  const [showReproductor, setShowReproductor] = useState(false);

  const toggleReproductor = () => {
    setShowReproductor(!showReproductor);
  };

  return (
    <div className={styles.card}>
      <div className={styles.videoContainer}>
        <img
          src={video.imagen}
          alt={video.titulo}
          className={styles.thumbnail}
          onClick={toggleReproductor}
        />
      </div>
      <h4 className={styles.title}>{video.titulo}</h4>
      <p className={styles.description}>{video.descripcion}</p>
      <div className={styles.buttons}>
        <button onClick={() => onEdit(video)}>Editar</button>
        <button onClick={() => onDelete(video.id)}>Borrar</button>
      </div>
      <Reproductor
        isOpen={showReproductor}
        onClose={toggleReproductor}
        video={video}
      />
    </div>
  );
}

export default Card;
