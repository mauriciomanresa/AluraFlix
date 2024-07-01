import { VideoProvider } from "./context/VideoContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio/Inicio";
import Nuevo from "./paginas/NuevoVideo/NuevoVideo";
import NotFound from "./paginas/NotFound/NotFound";
import Cabeza from "./componentes/Cabeza";
import Pie from "./componentes/Pie";

function App() {
  return (
    <VideoProvider>
      <BrowserRouter>
        <Cabeza />
        <Routes>
          <Route path="/" exact element={<Inicio />} />
          <Route path="/nuevo" element={<Nuevo />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Pie />
      </BrowserRouter>
    </VideoProvider>
  );
}

export default App;
