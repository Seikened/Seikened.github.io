import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';

// Automatizar la búsqueda de componentes en la carpeta 'posts'
const postFiles = require.context('../posts', true, /\.tsx$/);

const posts = postFiles.keys().map(path => {
  const module = postFiles(path).default;
  
  const element = React.createElement(module);
  const htmlString = ReactDOMServer.renderToString(element);

  const titleMatch = htmlString.match(/<h1>(.*?)<\/h1>/);
  const dateMatch = htmlString.match(/<p>(\d{4}-\d{2}-\d{2})<\/p>/);

  return {
    name: path.match(/\/([^/]+)\.tsx$/)?.[1]?.toLowerCase(),
    displayName: titleMatch ? titleMatch[1] : 'No Title',
    date: dateMatch ? dateMatch[1] : 'No Date'
  };
});

const Sidebar = () => {
  return (
    <div className="p-4 bg-gray-100 h-full">
      {posts.map(post => (
        <div key={post.name} className="flex justify-between items-center mb-2 p-2 bg-white rounded-lg shadow-md">
          <Link to={`/blog/${post.name}`} className="font-semibold text-blue-600 hover:underline">
            {post.displayName}
          </Link>
          <span className="text-sm text-gray-500">{post.date}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
