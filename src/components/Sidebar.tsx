import React from 'react';
import { Link } from 'react-router-dom';

const postFiles = require.context('../posts', true, /\.tsx$/);

const posts = postFiles.keys().map(path => {
  const module = postFiles(path).default;
  
  const metadata = module.metadata;

  return {
    name: path.match(/\/([^/]+)\.tsx$/)?.[1]?.toLowerCase(),
    displayName: metadata?.title || 'Sin título',
    date: metadata?.date || 'Sin fecha'
  };
});

const Sidebar: React.FC<{ isDay: boolean }> = ({ isDay }) => {
  return (
    <div className={`p-4 ${isDay ? 'bg-secondary' : 'bg-secondary'} h-full border-r-2`}>
      {posts.map(post => (
        <div 
          key={post.name} 
          className={`flex justify-between items-center mb-2 p-2 ${isDay ? 'bg-primary' : 'bg-secondary'} rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:border-l-4 hover:border-tertiary group`}
        >
          <Link 
            to={`/blog/${post.name}`} 
            className={`flex-grow font-semibold ${isDay ? 'text-secondary' : 'text-primary'} group-hover:text-tertiary transition duration-300 ease-in-out`}
          >
            {post.displayName}
          </Link>
          <span className={`text-sm ${isDay ? 'text-gray-500' : 'text-gray-400'}`}>{post.date}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
