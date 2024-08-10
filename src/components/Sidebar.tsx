import React from 'react';
import { Link } from 'react-router-dom';
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
  return (
    <div className={`p-4 ${isDay ? 'bg-secondary' : 'bg-primary'} h-full border-r-2`}>
      {posts.map(post => (
        <div 
          key={post.name} 
          className={`flex justify-between items-center mb-2 p-2 ${isDay ? 'bg-primary' : 'bg-secondary'} rounded-lg shadow-md transition duration-300 ease-in-out transform hover:border-l-4 hover:border-tertiary group sidebar-item`} // Añadimos la clase sidebar-item
        >
          <Link 
            to={`/blog/${post.name}`} 
            className={`flex-grow font-semibold truncate transition duration-300 ease-in-out sidebar-text ${isDay ? 'text-secondary' : 'text-primary'}`} // Añadimos la clase sidebar-text
          >
            <span className="block w-full overflow-hidden whitespace-nowrap overflow-ellipsis fade-out">
              {`#${post.id} - ${post.displayName}`}
            </span>
          </Link>
          <span className={`text-sm ${isDay ? 'text-gray-500' : 'text-gray-400'} ml-2 fixed-width`}>{post.formattedDate}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
