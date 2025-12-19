
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white/90 py-2 px-4 text-center text-[10px] md:text-xs font-semibold text-gray-700 shadow-inner mt-auto">
      <div className="flex flex-col md:flex-row justify-center items-center space-y-1 md:space-y-0 md:space-x-4">
        <span>All Rights Reserved Abdullah University - 2025</span>
        <span className="hidden md:block">|</span>
        <span>Developed By Muhammad Abdullah</span>
      </div>
    </footer>
  );
};
