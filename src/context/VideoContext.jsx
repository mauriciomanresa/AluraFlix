import { createContext, useState } from "react";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  const agregarVideo = (video) => {
    setVideos((prevVideos) => [...prevVideos, video]);
  };

  return (
    <VideoContext.Provider value={{ videos, setVideos, agregarVideo }}>
      {children}
    </VideoContext.Provider>
  );
};
