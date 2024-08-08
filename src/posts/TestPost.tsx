import React from 'react';

const TestPost = () => (
  <div className="p-4 bg-white rounded shadow-md">
    <h1 className="text-2xl font-bold mb-2 text-secondary">Test Post</h1>
    <p className="text-sm text-gray-500">2024-08-06</p>
    <p>Este es el contenido del post de prueba.</p>
  </div>
);

// Definimos los metadatos como propiedades estáticas del componente
TestPost.metadata = {
  title: "Test Post",
  date: "2024-08-06"
};

export default TestPost;
