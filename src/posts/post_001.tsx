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
      
      <p className="mb-4">Desde que comenzó su carrera en Inteligencia Artificial en enero de 2023, el autor ha experimentado un profundo y creciente interés por el aprendizaje automático y la ciencia de datos, dos campos que se han convertido en pilares fundamentales dentro del vasto mundo de la tecnología moderna. Este inicio, marcado por un interés innato y una curiosidad insaciable, ha llevado al autor a embarcarse en un viaje que no solo es emocionante, sino también lleno de desafíos y oportunidades inigualables. La fecha del 15 de enero de 2023, fecha en la que se tomó la decisión de adentrarse en este campo, se ha convertido en un hito en su vida, simbolizando no solo un nuevo comienzo, sino también un compromiso con el desarrollo continuo y la mejora constante de habilidades en un área que evoluciona a un ritmo vertiginoso.</p>

      <p className="mb-4">El autor, consciente de la importancia de mantenerse actualizado en un campo tan dinámico como el de la Inteligencia Artificial, ha dedicado innumerables horas al estudio de algoritmos, modelos predictivos, y técnicas avanzadas de procesamiento de datos. Esta dedicación no es solo una prueba de su interés, sino también una manifestación de su deseo de contribuir de manera significativa al campo. Cada nueva comprensión, cada concepto dominado, y cada técnica aplicada representa un paso más en la construcción de una base sólida que permitirá al autor enfrentar los desafíos más complejos que este campo tiene por ofrecer.</p>

      <p className="mb-4">El entorno en el que se desarrolla este viaje también juega un papel crucial. El uso del contexto de día y noche, simbolizado por los colores primarios y secundarios en el diseño del post, no es solo una elección estilística, sino también un reflejo del equilibrio entre la luz y la oscuridad, entre el aprendizaje y la aplicación práctica de los conocimientos adquiridos. En este sentido, el autor no solo se preocupa por el aprendizaje teórico, sino también por la implementación práctica de lo aprendido, una fase que muchas veces se lleva a cabo durante largas horas de trabajo, que pueden extenderse hasta altas horas de la noche.</p>

      <p className="mb-4">Además, la elección del formato y el estilo del post refleja un enfoque metodológico en el aprendizaje. La estructura del post, con un título claro y conciso, seguido de una fecha bien formateada que sitúa al lector en el contexto temporal adecuado, demuestra una preocupación por la claridad y la precisión, características esenciales en el campo de la Inteligencia Artificial. El uso de una paleta de colores contrastantes no solo mejora la legibilidad, sino que también refuerza la dualidad entre la teoría y la práctica, entre el conocimiento y la aplicación.</p>

      <p className="mb-4">Este viaje en Inteligencia Artificial es solo el comienzo de lo que promete ser una trayectoria llena de descubrimientos y logros. Cada día ofrece una nueva oportunidad para aprender algo nuevo, para enfrentarse a un nuevo reto, y para contribuir al vasto y creciente corpus de conocimiento en este campo. El autor está decidido a no solo seguir el camino que otros han trazado, sino también a forjar su propio camino, innovando y explorando nuevas fronteras en la inteligencia artificial, el aprendizaje automático, y la ciencia de datos.</p>

      <p className="mb-4">A medida que avanza en este viaje, el autor se enfrenta no solo a desafíos técnicos, sino también a dilemas éticos y morales que son inherentes al desarrollo y la implementación de tecnologías tan poderosas como la Inteligencia Artificial. Estos dilemas, que abarcan desde la privacidad de los datos hasta el impacto social de la automatización, requieren una reflexión profunda y un enfoque equilibrado, algo que el autor está dispuesto a abordar con el mismo rigor y dedicación que aplica a los aspectos técnicos de su formación.</p>

      <p className="mb-4">En resumen, este post no solo marca el inicio de una carrera en Inteligencia Artificial, sino que también es un testimonio del compromiso del autor con la excelencia, la innovación, y el desarrollo continuo. Es un recordatorio de que cada pequeño paso, cada nuevo conocimiento adquirido, y cada desafío superado, son todos componentes esenciales de un viaje mucho más grande y significativo, uno que tiene el potencial de cambiar no solo la vida del autor, sino también el mundo en el que vivimos.</p>
    </div>
  );
};

PostComponent.metadata = {
  title: TITLE,
  date: DATE
};

export default PostComponent;
