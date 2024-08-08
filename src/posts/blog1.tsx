import React from 'react';

const TestPost = () => (
  <div className="max-w-4xl mx-auto rounded-md p-4 border-l-4 border-secondary">
    <h1 className="text-4xl font-bold mb-2 text-secondary">Test Post</h1>
    <p className="text-sm text-gray-500">2024-08-06</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptas aspernatur minus accusantium, id saepe provident quasi. Excepturi aliquid ad recusandae minus libero officia vitae voluptate quos odit. Hic, laudantium?</p>
  </div>
);

// Definimos los metadatos como propiedades estáticas del componente
TestPost.metadata = {
  title: "Blog 2 de prueba pero veremos que tan largo se vuelve todo esto por que no seberia ser largo",
  date: "2024-08-06"
};

export default TestPost;
