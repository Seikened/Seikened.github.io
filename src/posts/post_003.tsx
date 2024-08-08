import React, { useContext } from 'react';
import { format, parseISO } from 'date-fns';
import { DayNightContext } from '../components/DayNightContext';

interface PostComponentWithMetadata extends React.FC {
  metadata?: {
    title: string;     // Título del post
    date: string;      // Fecha del post en formato YYYY-MM-DD
  };
}

const DATE = "2024-08-30"; // Definimos la constante para la fecha

const PostComponent: PostComponentWithMetadata = () => {
  const { isDay } = useContext(DayNightContext);

  // Formatear la fecha a DD-MM-YYYY usando date-fns
  const formattedDate = format(parseISO(DATE), 'dd-MM-yyyy');

  return (
    <div className={`max-w-4xl mx-auto rounded-md p-4 border-l-4 ${isDay ? 'bg-primary text-secondary border-secondary' : 'bg-secondary text-primary border-primary'}`}>
      <h1 className={`text-4xl font-bold mb-2 ${isDay ? 'text-secondary' : 'text-primary'}`}>Blog 2</h1>
      <p className="text-sm text-gray-500">{formattedDate}</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptas aspernatur minus accusantium, id saepe provident quasi. Excepturi aliquid ad recusandae minus libero officia vitae voluptate quos odit. Hic, laudantium?</p>
    </div>
  );
};

// Definimos los metadatos como propiedades estáticas del componente
PostComponent.metadata = {
  title: "Blog 3",
  date: DATE // Fecha en formato YYYY-MM-DD
};

export default PostComponent;
