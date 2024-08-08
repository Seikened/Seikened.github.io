import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface DayNightContextProps {
  isDay: boolean;
  toggleDayNight: () => void;
}

export const DayNightContext = createContext<DayNightContextProps>({
  isDay: true,
  toggleDayNight: () => {},
});

interface DayNightProviderProps {
  children: ReactNode;
}

export const DayNightProvider: React.FC<DayNightProviderProps> = ({ children }) => {
  const [isDay, setIsDay] = useState(true);

  useEffect(() => {
    const hour = new Date().getHours();
    setIsDay(hour >= 6 && hour < 18);
  }, []);

  const toggleDayNight = () => {
    setIsDay((prev) => !prev);
  };

  return (
    <DayNightContext.Provider value={{ isDay, toggleDayNight }}>
      {children}
    </DayNightContext.Provider>
  );
};
