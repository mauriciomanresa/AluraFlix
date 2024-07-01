import React from "react";
import styles from "./Area.module.css";
import Card from "../Card";

//Función que define el area de cada categoría.
function Area({ datos, videos, onDelete, onEdit }) {
  const { nombre, gradiente } = datos;
  const colorFondo = { background: gradiente };

  return (
    <section className={styles.area} style={colorFondo}>
      <h3>{nombre}</h3>
      <div className={styles.videos}>
        {videos.map((video) => (
          <Card
            key={video.id}
            video={video}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>
    </section>
  );
}

export default Area;
