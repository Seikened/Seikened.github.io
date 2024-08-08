import React, { useContext } from 'react';
import { format, parseISO } from 'date-fns';
import { DayNightContext } from '../components/DayNightContext';

interface PostComponentWithMetadata extends React.FC {
  metadata?: {
    title: string;
    date: string;
  };
}

const DATE = "2024-07-12";
const TITLE = "Hackathon de Inteligencia Artificial";

const PostComponent: PostComponentWithMetadata = () => {
  const { isDay } = useContext(DayNightContext);

  const formattedDate = format(parseISO(DATE), 'dd-MM-yyyy');

  return (
    <div className={`max-w-4xl mx-auto rounded-md p-4 border-l-4 ${isDay ? 'bg-primary text-secondary border-secondary' : 'bg-secondary text-primary border-primary'}`}>
      <h1 className={`text-4xl font-bold mb-2 ${isDay ? 'text-secondary' : 'text-primary'}`}>{TITLE}</h1>
      <p className="text-sm text-gray-500">{formattedDate}</p>
      <p>En julio de 2024, participé en un hackathon de Inteligencia Artificial donde pude colaborar con otros desarrolladores y trabajar en soluciones innovadoras utilizando aprendizaje automático. Fue una experiencia increíblemente enriquecedora y un gran paso en mi carrera.</p>
    </div>
  );
};

PostComponent.metadata = {
  title: TITLE,
  date: DATE
};

export default PostComponent;
