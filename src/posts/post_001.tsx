import React, { useContext } from 'react';
import { format, parseISO } from 'date-fns';
import { DayNightContext } from '../components/DayNightContext';

interface PostComponentWithMetadata extends React.FC {
  metadata?: {
    title: string;
    date: string;
  };
}

const DATE = "2023-01-15";
const TITLE = "Inicio en Inteligencia Artificial";

const PostComponent: PostComponentWithMetadata = () => {
  const { isDay } = useContext(DayNightContext);

  const formattedDate = format(parseISO(DATE), 'dd-MM-yyyy');

  return (
    <div className={`max-w-4xl mx-auto rounded-md p-4 border-l-4 ${isDay ? 'bg-primary text-secondary border-secondary' : 'bg-secondary text-primary border-primary'}`}>
      <h1 className={`text-4xl font-bold mb-2 ${isDay ? 'text-secondary' : 'text-primary'}`}>{TITLE}</h1>
      <p className="text-sm text-gray-500">{formattedDate}</p>
      <p>Comencé mi carrera en Inteligencia Artificial en enero de 2023. Desde entonces, me he apasionado por el aprendizaje automático y la ciencia de datos. Este post marca el inicio de un viaje emocionante en el campo de la tecnología.</p>
    </div>
  );
};

PostComponent.metadata = {
  title: TITLE,
  date: DATE
};

export default PostComponent;
