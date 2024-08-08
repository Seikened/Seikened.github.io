import React, { useContext } from 'react';
import { format, parseISO } from 'date-fns';
import { DayNightContext } from '../components/DayNightContext';

interface PostComponentWithMetadata extends React.FC {
  metadata?: {
    title: string;
    date: string;
  };
}

const DATE = "2023-08-10";
const TITLE = "Desarrollo de GestorPropiedades";

const PostComponent: PostComponentWithMetadata = () => {
  const { isDay } = useContext(DayNightContext);

  const formattedDate = format(parseISO(DATE), 'dd-MM-yyyy');

  return (
    <div className={`max-w-4xl mx-auto rounded-md p-4 border-l-4 ${isDay ? 'bg-primary text-secondary border-secondary' : 'bg-secondary text-primary border-primary'}`}>
      <h1 className={`text-4xl font-bold mb-2 ${isDay ? 'text-secondary' : 'text-primary'}`}>{TITLE}</h1>
      <p className="text-sm text-gray-500">{formattedDate}</p>
      <p>En agosto de 2023, comencé a desarrollar GestorPropiedades, una aplicación diseñada para ayudar en la gestión de propiedades inmobiliarias. Este proyecto ha sido una oportunidad increíble para aplicar mis conocimientos en Django y Tailwind CSS.</p>
    </div>
  );
};

PostComponent.metadata = {
  title: TITLE,
  date: DATE
};

export default PostComponent;
