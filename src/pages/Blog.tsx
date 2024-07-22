// src/pages/Blog.tsx
import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8 text-blue-600">Blog</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Primer Post</h2>
        <p className="text-gray-600">
          Este es un párrafo de prueba para ver cómo se aplican los estilos de Tailwind CSS.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Leer más
        </button>
      </div>
      <div className="bg-white p-6 mt-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Segundo Post</h2>
        <p className="text-gray-600">
          Otro párrafo de prueba con diferentes estilos aplicados.
        </p>
        <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">
          Leer más
        </button>
      </div>
    </div>
  );
};

export default Blog;
