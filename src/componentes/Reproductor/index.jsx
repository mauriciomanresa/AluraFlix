import React from "react";
import styles from "./Reproductor.module.css";

//Función que permite reproducir los videos.
function Reproductor({ isOpen, onClose, video }) {
  if (!isOpen) return null;

  return (
    <div className={styles.reproductor} onClick={onClose}>
      <div
        className={styles.reproductorContainer}
        style={{ width: "800px", height: "600px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <iframe
          width="800"
          height="600"
          src={video.link}
          title={video.titulo}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Reproductor;
