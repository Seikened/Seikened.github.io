import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { DayNightContext } from '../components/DayNightContext';

const postFiles = require.context('../posts', true, /\.tsx$/);

const componentsMap: { [key: string]: React.FC & { metadata?: { title: string, date: string } } } = postFiles.keys().reduce((map, path) => {
  const name = path.match(/\/([^/]+)\.tsx$/)?.[1]?.toLowerCase();
  if (name) {
    map[name] = postFiles(path).default;
  }
  return map;
}, {} as { [key: string]: React.FC & { metadata?: { title: string, date: string } } });

const Switch: React.FC<{ isOn: boolean, handleToggle: () => void }> = ({ isOn, handleToggle }) => {
  return (
    <div
      className={`switch ${isOn ? 'switch-on' : 'switch-off'} absolute top-2 right-2`} // Posición absoluta para el switch en la parte superior derecha
      onClick={handleToggle}
    >
      <div className="switch-handle" />
    </div>
  );
};

const Blog: React.FC = () => {
  const location = useLocation();
  const path = location.pathname.split("/").pop()?.toLowerCase();
  const { isDay, toggleDayNight } = useContext(DayNightContext);

  const PostComponent = path ? componentsMap[path] : null;

  return (
    <div className={`flex min-h-screen ${isDay ? 'bg-primary' : 'bg-secondary'}`}>
      <div className="w-1/4 relative"> {/* Hacemos el contenedor relativo para posicionar el switch */}
        <Switch isOn={isDay} handleToggle={toggleDayNight} /> {/* Incluimos el switch */}
        <Sidebar isDay={isDay} />
      </div>
      <div className="flex-1 p-8">
        {PostComponent ? <PostComponent /> : <p>Selecciona un post del menú lateral.</p>}
      </div>
    </div>
  );
};

export default Blog;

