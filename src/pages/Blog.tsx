import React, { useState, useEffect, useContext } from 'react';
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

const Blog: React.FC = () => {
  const location = useLocation();
  const path = location.pathname.split("/").pop()?.toLowerCase();
  const { isDay } = useContext(DayNightContext);

  const PostComponent = path ? componentsMap[path] : null;

  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [isFullScreen, setFullScreen] = useState(false);

  const handlePostClick = () => {
    setSidebarVisible(false); // Oculta el sidebar al hacer clic en un post
    setFullScreen(true);
  };

  const handleExitFullScreen = () => {
    setFullScreen(false); // Regresa el sidebar al salir de la vista de pantalla completa
    setSidebarVisible(true);
  };

  return (
    <div className={`flex min-h-screen ${isDay ? 'bg-primary' : 'bg-secondary'}`}>
      
      {/* Sidebar Container */}
      <div className={isSidebarVisible ? 'block w-96' : 'hidden'}>
        {!isFullScreen && <Sidebar isDay={isDay} />} {/* Renderiza el Sidebar solo si no está en pantalla completa */}
      </div>

      {/* Main Content Area */}
      <div className={`flex-1 ${!isSidebarVisible || isFullScreen ? 'w-full' : ''}`}>
        {PostComponent ? (
          <div style={{ paddingTop: '2rem' }}>
            {!isFullScreen && (
              <button onClick={handlePostClick} className={`absolute top-4 right-4 ${isDay ? 'text-secondary' : 'text-primary'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4h8m-8 8h8m-8 8h8M4 12h8M4 4l8 8M4 20l8-8" />
                </svg>
              </button>
            )}
            {isFullScreen && (
              <button onClick={handleExitFullScreen} className={`absolute top-4 right-4 ${isDay ? 'text-secondary' : 'text-primary'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v16H4V4z" />
                </svg>
              </button>
            )}
            <div className="max-w-4xl mx-auto">
              <PostComponent />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className={`text-3xl font-semibold text-center ${isDay ? 'text-secondary' : 'text-primary'}`}>
              Selecciona un post para leer
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
