
import React from 'react';
import { User } from '../types';

interface NavbarProps {
  user: User | null;
}

export const Navbar: React.FC<NavbarProps> = ({ user }) => {
  return (
    <header className="bg-[#1a237e] text-white shadow-md border-b border-blue-900">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 py-2">
        {/* Left: Logo & Title */}
        <div className="flex items-center space-x-3">
          <div className="bg-white p-1 rounded-sm w-10 h-10 md:w-14 md:h-14 flex items-center justify-center overflow-hidden">
            <img 
              src="https://picsum.photos/seed/abdullah-logo/100/100" 
              alt="Abdullah University Logo" 
              className="object-contain w-full h-full"
            />
          </div>
          <h1 className="text-lg md:text-2xl serif-font font-bold tracking-tight uppercase whitespace-nowrap">
            Abdullah University
          </h1>
        </div>

        {/* Right: Search and Profile */}
        <div className="flex flex-col items-end space-y-2">
          {user && (
            <div className="flex items-center space-x-3 text-[10px] md:text-xs">
              <div className="flex flex-col items-end">
                <div className="bg-blue-800 px-2 py-0.5 rounded text-blue-100 font-mono">
                  Roll #: SIS-2025-001
                </div>
                <div className="flex items-center mt-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></span>
                  <a href="#" className="font-bold hover:underline">{user.name}</a>
                </div>
              </div>
              <div className="w-10 h-12 md:w-12 md:h-14 bg-gray-300 rounded overflow-hidden border border-gray-400">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Abdullah" 
                  alt="User" 
                  className="w-full h-full object-cover bg-white"
                />
              </div>
            </div>
          )}
          
          <div className="flex items-center">
            <div className="relative flex">
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-white text-gray-800 text-xs px-2 py-1 w-32 md:w-64 focus:outline-none rounded-l border-r-0 border border-gray-300"
              />
              <button className="bg-blue-900 hover:bg-blue-800 px-2 py-1 rounded-r border border-blue-900 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
