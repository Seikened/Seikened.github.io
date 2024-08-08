import React from 'react';
import { Link } from 'react-router-dom';

const postFiles = require.context('../posts', true, /\.tsx$/);

const posts = postFiles.keys().map(path => {
  const module = postFiles(path).default;
  
  const metadata = module.metadata;

  return {
    name: path.match(/\/([^/]+)\.tsx$/)?.[1]?.toLowerCase(),
    displayName: metadata?.title || 'No Title',
    date: metadata?.date || 'No Date'
  };
});

const Sidebar: React.FC<{ isDay: boolean }> = ({ isDay }) => {
  return (
    <div className={`p-4 ${isDay ? 'bg-primary' : 'bg-secondary'} h-full`}>
      {posts.map(post => (
        <div key={post.name} className={`flex justify-between items-center mb-2 p-2 ${isDay ? 'bg-white' : 'bg-gray-800'} rounded-lg shadow-md`}>
          <Link to={`/blog/${post.name}`} className={`font-semibold ${isDay ? 'text-blue-600' : 'text-blue-300'} hover:underline`}>
            {post.displayName}
          </Link>
          <span className={`text-sm ${isDay ? 'text-gray-500' : 'text-gray-400'}`}>{post.date}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
