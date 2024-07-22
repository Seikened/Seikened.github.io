import React, { useState, useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import './Switch.css'; // Importa el archivo CSS personalizado si es necesario

const Switch: React.FC<{ isOn: boolean, handleToggle: () => void }> = ({ isOn, handleToggle }) => {
  return (
    <div
      className={`switch ${isOn ? 'switch-on' : 'switch-off'} absolute top-2 left-2`} // Posición absoluta para el switch
      onClick={handleToggle}
    >
      <div className="switch-handle" />
    </div>
  );
};

const App: React.FC = () => {
  const [isDay, setIsDay] = useState(true);

  useEffect(() => {
    const hour = new Date().getHours();
    setIsDay(hour >= 6 && hour < 18);
  }, []);

  const toggleDayNight = () => {
    setIsDay((prev) => !prev);
  };

  return (
    <div className={`min-h-screen flex flex-col justify-center items-center ${isDay ? 'bg-primary'  : 'bg-secondary '}`}>
      <Switch isOn={isDay} handleToggle={toggleDayNight} />
      <h1 className="text-2xl font-semibold mb-4 ">
        {isDay ? 'Buenos Días ☀️' : 'Buenas noches 🌙'}
      </h1>
      <LandingPage
        nodeColor={isDay ? 'fill-secondary' : 'fill-primary'}
        linkColor={isDay ? 'stroke-secondary' : 'stroke-primary'}
        hoverColor="stroke-tertiary"
        textColor = {isDay ? 'fill-secondary text-lg font-bold' : 'fill-primary text-lg font-bold'}
        textOpacity={0.15}
        isDay={isDay}
      />
    </div>
  );
};

export default App;
