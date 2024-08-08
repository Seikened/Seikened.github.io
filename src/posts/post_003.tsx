import React, { useContext } from 'react';
import { format, parseISO } from 'date-fns';
import { DayNightContext } from '../components/DayNightContext';

interface PostComponentWithMetadata extends React.FC {
  metadata?: {
    title: string;
    date: string;
  };
}

const DATE = "2024-03-05";
const TITLE = "Primer Despliegue en VPS";

const PostComponent: PostComponentWithMetadata = () => {
  const { isDay } = useContext(DayNightContext);

  const formattedDate = format(parseISO(DATE), 'dd-MM-yyyy');

  return (
    <div className={`max-w-4xl mx-auto rounded-md p-4 border-l-4 ${isDay ? 'bg-primary text-secondary border-secondary' : 'bg-secondary text-primary border-primary'}`}>
      <h1 className={`text-4xl font-bold mb-2 ${isDay ? 'text-secondary' : 'text-primary'}`}>{TITLE}</h1>
      <p className="text-sm text-gray-500">{formattedDate}</p>
      <p>En marzo de 2024, desplegué mi primera aplicación en un servidor VPS. Este hito marcó un gran avance en mi carrera como desarrollador, permitiéndome aprender más sobre servidores y la implementación de aplicaciones web en entornos de producción.</p>
    </div>
  );
};

PostComponent.metadata = {
  title: TITLE,
  date: DATE
};

export default PostComponent;
