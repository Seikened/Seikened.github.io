import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { format, parseISO } from 'date-fns';

const postFiles = require.context('../posts', true, /\.tsx$/);

const posts = postFiles.keys().map(path => {
  const module = postFiles(path).default;
  
  const metadata = module.metadata;

  return {
    name: path.match(/\/([^/]+)\.tsx$/)?.[1]?.toLowerCase(),
    displayName: metadata?.title || 'Sin título',
    date: metadata?.date || 'Sin fecha',
    dateObj: parseISO(metadata?.date), // Convertimos la fecha en objeto Date
  };
})
.sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime()) // Ordenamos por fecha ascendente para asignar IDs correctamente
.map((post, index) => ({
  ...post,
  id: index + 1, // Asignamos un ID incremental basado en el orden ascendente
  formattedDate: format(post.dateObj, 'dd-MM-yyyy'), // Formateamos la fecha para mostrarla como DD-MM-YYYY
}))
.sort((a, b) => b.dateObj.getTime() - a.dateObj.getTime()); // Ordenamos por fecha descendente para mostrar en el orden correcto

const Sidebar: React.FC<{ isDay: boolean }> = ({ isDay }) => {
  const location = useLocation(); // Usamos useLocation para obtener la ruta actual

  return (
    <div className={`p-4 ${isDay ? 'bg-primary border-secondary' : 'bg-secondary border-primary'} h-full border-r-2`}>
      {posts.map(post => {
        const isSelected = post.name ? location.pathname.includes(post.name) : false; // Verificamos si la ruta actual incluye el nombre del post
        return (
          <div 
            key={post.name} 
            className={`flex justify-between items-center mb-2 p-2 ${isDay ? 'bg-secondary' : 'bg-primary'} rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:border-l-4 hover:border-tertiary group sidebar-item ${isSelected ? 'selected-sidebar-item' : ''}`}
          >
            <Link 
              to={`/blog/${post.name}`} 
              className={`flex-grow font-semibold truncate transition duration-300 ease-in-out
                          ${isSelected ? (!isDay ? 'text-primary' : 'text-secondary') : (isDay ? 'text-primary' : 'text-secondary')}`}
            >
              <span className="block w-full overflow-hidden whitespace-nowrap overflow-ellipsis fade-out sidebar-text">
                {`#${post.id} - ${post.displayName}`}
              </span>
            </Link>
            <span className={`text-sm ${isSelected ? (!isDay ? 'text-gray-400' : 'text-gray-700') : (isDay ? 'text-gray-400' : 'text-gray-700')} ml-2 fixed-width`}>
              {post.formattedDate}
            </span>

          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
