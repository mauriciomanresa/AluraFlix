import { useContext, useEffect, useState } from "react";
import { VideoContext } from "../../context/VideoContext";
import Area from "../../componentes/Area";
import Cuello from "../../componentes/Cuello";
import EditarVideo from "../../componentes/EditarVideo";

// Función que establece la página principal
function Inicio() {
  const { videos, setVideos } = useContext(VideoContext);
  const [videoEditar, setVideoEditar] = useState(null);

  // Lista de videos iniciales.
  const videosIniciales = [
    {
      id: 1,
      titulo: "Como utilizar el Display block, inline, inline-block",
      imagen:
        "https://caelum-online-public.s3.amazonaws.com/ESP-2052+-++React%3A+practicando+React+con+Js/282x425+-+Jean.png",
      link: "https://www.youtube.com/embed/AG2QssLpQzI?si=6Yn355wcxAqU7_Ld",
      categoria: "Front-End",
    },
    {
      id: 2,
      titulo: "Productividad en el trabajo remoto",
      imagen:
        "https://caelum-online-public.s3.amazonaws.com/ESP-2052+-++React%3A+practicando+React+con+Js/282x425+-+Gabi.png",
      link: "https://www.youtube.com/embed/AULPtYo25Lw?si=UGdKX1NSrEcQ0jfn",
      categoria: "Back-End",
    },
    {
      id: 3,
      titulo: "¿Cuáles son las principales áreas de la programación?",
      imagen:
        "https://caelum-online-public.s3.amazonaws.com/ESP-2052+-++React%3A+practicando+React+con+Js/282x425+-+Genesis.png",
      link: "https://www.youtube.com/embed/03cxUlwLVt4?si=zVCUQNO-eS2RZQTO",
      categoria: "Programacion",
    },
    {
      id: 4,
      titulo: "Detección de intruso con IA",
      imagen:
        "https://caelum-online-public.s3.amazonaws.com/ESP-2052+-++React%3A+practicando+React+con+Js/282x425+-+Ale.png",
      link: "https://www.youtube.com/embed/5T_Q_NtNLZE?si=M7D0JeagaKqsoaFs",
      categoria: "Programacion",
    },
  ];

  useEffect(() => {
    if (videos.length === 0) {
      setVideos(videosIniciales);
    }
  }, [setVideos, videos]);

  //Lista propiedades de cada area.
  const opciones = [
    {
      nombre: "Front-End",
      gradiente:
        "radial-gradient(circle, rgba(247,242,184,1) 0%, rgba(79,77,77,1) 100%)",
    },
    {
      nombre: "Back-End",
      gradiente:
        "radial-gradient(circle, rgba(205,207,249,1) 0%, rgba(79,77,77,1) 100%)",
    },
    {
      nombre: "Programacion",
      gradiente:
        "radial-gradient(circle, rgba(250,207,207,1) 0%, rgba(79,77,77,1) 100%)",
    },
    {
      nombre: "Diseño UI-UX",
      gradiente:
        "radial-gradient(circle, rgba(194,246,238,1) 0%, rgba(79,77,77,1) 100%)",
    },
    {
      nombre: "Maquetacion",
      gradiente:
        "radial-gradient(circle, rgba(250,209,244,1) 0%, rgba(79,77,77,1) 100%)",
    },
  ];

  const handleDelete = (id) => {
    setVideos(videos.filter((video) => video.id !== id));
  };

  const handleEdit = (video) => {
    setVideoEditar(video);
  };

  const handleSave = (editedVideo) => {
    setVideos(
      videos.map((video) => (video.id === editedVideo.id ? editedVideo : video))
    );
    setVideoEditar(null);
  };

  const handleCancel = () => {
    setVideoEditar(null);
  };

  const obtenerVideosPorCategoria = (categoria) => {
    return videos.filter((video) => video.categoria === categoria);
  };

  return (
    <main>
      <section>
        <Cuello />
        {opciones.map((opcion) => (
          <Area
            key={opcion.nombre}
            datos={opcion}
            videos={obtenerVideosPorCategoria(opcion.nombre)}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
        {videoEditar && (
          <EditarVideo
            video={videoEditar}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        )}
      </section>
    </main>
  );
}

export default Inicio;
