// src/components/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full h-14 bg-gray-800 bg-opacity-60 backdrop-blur-md shadow-md flex justify-center items-center">
      <ul className="flex space-x-8 text-white font-bold">
        <li className="pt-3"><a href="#portfolio">Portfolio</a></li>
        <li className="pt-3" id="logo"><a href="/">👾</a></li>
        <li className="pt-3"><a href="#blog">Blog</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
