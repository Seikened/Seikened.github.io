// src/components/Node.tsx
import React from 'react';

interface NodeProps {
  label: string;
  href: string;
}

const Node: React.FC<NodeProps> = ({ label, href }) => {
  return (
    <a href={href} className="relative group">
      <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center group-hover:bg-purple-800 transition">
        <span className="text-white">{label}</span>
      </div>
    </a>
  );
};

export default Node;
