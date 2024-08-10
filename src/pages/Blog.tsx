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
  const [isPostVisible, setPostVisible] = useState(true);

  useEffect(() => {
    if (PostComponent) {
      setPostVisible(false);
      setTimeout(() => setPostVisible(true), 100);
    }
  }, [PostComponent]);

  const handlePostClick = () => {
    setSidebarVisible(false);
    setFullScreen(true);
  };

  const handleExitFullScreen = () => {
    setFullScreen(false);
    setSidebarVisible(true);
  };

  return (
    <div className={`flex min-h-screen ${isDay ? 'bg-primary' : 'bg-secondary'}`}>
      <div
        className={`overflow-hidden transition-transform duration-500 ease-in-out ${
          isSidebarVisible ? 'w-1/4 translate-x-0' : 'w-0 -translate-x-full'
        }`}
        style={{ transitionProperty: 'width, transform' }}
      >
        {!isFullScreen && <Sidebar isDay={isDay} />}
      </div>
      <div className={`flex-1 transition-all duration-500 ${!isSidebarVisible || isFullScreen ? 'w-full' : ''}`}>
        {PostComponent ? (
          <div
            className={`relative transition-opacity duration-900 transform ${
              isPostVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } ${isFullScreen ? 'max-w-4xl mx-auto' : 'max-w-4xl mx-auto'}`}
            style={{ paddingTop: '2rem' }}
          >
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
