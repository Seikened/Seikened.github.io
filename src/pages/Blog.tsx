import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar'; 
import { DayNightContext } from '../components/DayNightContext';
import { motion } from 'framer-motion';

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
    setSidebarVisible(false);  // Oculta el sidebar al hacer clic en un post
    setFullScreen(true);
  };

  const handleExitFullScreen = () => {
    setFullScreen(false);  // Muestra el sidebar al salir de la vista de pantalla completa
    setSidebarVisible(true);
  };

  return (
    <div className={`flex min-h-screen ${isDay ? 'bg-primary' : 'bg-secondary'}`}>
      
      {/* Sidebar Container */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isSidebarVisible && !isFullScreen ? '0%' : '-100%' }} 
        transition={{ type: 'spring', stiffness: 300, damping: 30, duration: 0.5 }}
        className={`w-1/4 h-full fixed top-0 left-0 z-10`}
      >
        <Sidebar isDay={isDay} />
      </motion.div>

      {/* Main Content Area */}
      <motion.div
        className={`flex-1 transition-all duration-500 ease-in-out ${isSidebarVisible ? 'ml-0 lg:ml-64' : 'ml-0'}`}
        animate={{ paddingLeft: isSidebarVisible ? '16rem' : '0', width: isSidebarVisible ? 'calc(100% - 16rem)' : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30, duration: 0.5 }}
        style={{ paddingTop: '2rem' }}
      >
        {PostComponent ? (
          <div className="max-w-4xl mx-auto">
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
            <div>
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
      </motion.div>
    </div>
  );
};

export default Blog;
