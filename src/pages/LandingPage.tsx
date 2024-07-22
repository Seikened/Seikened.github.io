import React from 'react';
import PhysicsGraph from '../components/PhysicsGraph';

interface LandingPageProps {
  nodeColor: string;
  linkColor: string;
  hoverColor: string;
  textColor: string;
  textOpacity: number;
  isDay: boolean;
}

// Componente de la página de inicio
const LandingPage: React.FC<LandingPageProps> = ({ nodeColor, linkColor, hoverColor,textColor, textOpacity, isDay }) => {
  const nodes = [
    { id: 'center', label: 'Fernando Leon Franco', radius: 30 },
    { id: 'Blog', label: 'Blog', url: '/blog', radius: 20 },
    { id: 'Portfolio', label: 'Portfolio', url: '/portfolio', radius: 20 },
    { id: 'About', label: 'About me', url: '/about', radius: 20 },
  ];

  const links = [
    { source: 'center', target: 'Blog' },
    { source: 'center', target: 'Portfolio' },
    { source: 'center', target: 'About' },
  ];

  return (
    <div className={`w-full h-full`}>
      <div className="w-full h-full">
        <PhysicsGraph
          nodes={nodes}
          links={links}
          centralNodeId="center"
          nodeColor={nodeColor}
          linkColor={linkColor}
          hoverColor={hoverColor}
          textColor={textColor}
          textOpacity={textOpacity}
          isDay={isDay}
        />
      </div>
    </div>
  );
};

export default LandingPage;
