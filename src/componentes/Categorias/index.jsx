import React from "react";
import styles from "./Categorias.module.css";

//Función que define las categorias de videos.
function Categorias(props) {
  const categoriaModificada = `${props.titulo} :`;
  const opciones = [
    "Front-End",
    "Back-End",
    "Programación",
    "Diseño UI-UX",
    "Maquetación",
  ];

  const elegirValor = (e) => {
    props.setValor(e.target.value);
  };

  return (
    <div className={styles.lista_categorias}>
      <label>{categoriaModificada}</label>
      <select value={props.valor} onChange={elegirValor}>
        <option value="" disabled hidden>
          Seleccionar categoría...
        </option>
        {opciones.map((opcion, index) => (
          <option key={index} value={opcion}>
            {opcion}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Categorias;
