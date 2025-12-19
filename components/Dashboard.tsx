
import React from 'react';
import { User, Page } from '../types';

interface DashboardProps {
  user: User;
  onLogout: () => void;
  onNavigate: (page: Page) => void;
}

interface TileProps {
  label: string;
  icon: React.ReactNode;
  color: string;
  sublabel?: string;
  onClick: () => void;
}

const Tile: React.FC<TileProps> = ({ label, icon, color, sublabel, onClick }) => (
  <button 
    onClick={onClick}
    className={`${color} flex flex-col items-center justify-center p-4 rounded-md shadow-lg transition-transform hover:scale-105 active:scale-95 group text-white border border-black/10`}
  >
    <div className="mb-2 group-hover:animate-pulse">
      {icon}
    </div>
    <span className="text-[10px] md:text-xs font-bold uppercase text-center leading-tight drop-shadow-sm">
      {label}
    </span>
    {sublabel && (
      <span className="text-[8px] mt-1 text-center opacity-90 leading-none px-1">
        {sublabel}
      </span>
    )}
  </button>
);

export const Dashboard: React.FC<DashboardProps> = ({ user, onLogout, onNavigate }) => {
  const handleTileClick = (label: string) => {
    if (label === 'Attendance Detail') {
      onNavigate(Page.ATTENDANCE_DETAIL);
      return;
    }
    if (label === 'Academic Record') {
      onNavigate(Page.ACADEMIC_RECORD);
      return;
    }
    // Simulated Admin Check for other tiles
    alert(`[Security Check]\nModule: ${label}\nAdmin ID: SIS-ADMIN-2025\nStatus: Authorized`);
  };

  const tiles = [
    { label: 'Rules & Regulations', color: 'bg-[#7b1fa2]', icon: <span className="text-2xl">⚖️</span> },
    { label: 'Notification', color: 'bg-[#f44336]', icon: <span className="text-2xl">🔔</span> },
    { label: 'Online Learning Aid', color: 'bg-[#b71c1c]', icon: <span className="text-2xl">💻</span> },
    { label: 'Student Services', color: 'bg-[#9e9e9e]', icon: <span className="text-2xl">🛠️</span> },
    { label: 'Advantage Need', color: 'bg-[#4caf50]', sublabel: 'Assessment Forms', icon: <span className="text-2xl">💰</span> },
    { label: 'Course Registration', color: 'bg-[#00c853]', icon: <span className="text-2xl">📖</span> },
    { label: 'Academic Record', color: 'bg-[#4a148c]', icon: <span className="text-2xl">📜</span> },
    { label: 'Fee Detail', color: 'bg-[#c62828]', icon: <span className="text-2xl">📑</span> },
    { label: 'Exam Slip', color: 'bg-[#00bcd4]', icon: <span className="text-2xl">🎟️</span> },
    { label: 'Exam Component', color: 'bg-[#ef6c00]', icon: <span className="text-2xl">📋</span> },
    { label: 'Attendance Detail', color: 'bg-[#2e7d32]', icon: <span className="text-2xl">✅</span> },
    { label: 'Financials', color: 'bg-[#9575cd]', icon: <span className="text-2xl">🏦</span> },
    { label: 'Time Table', color: 'bg-[#00acc1]', icon: <span className="text-2xl">🕒</span> },
    { label: 'LWYE Details', color: 'bg-[#303f9f]', icon: <span className="text-2xl">🎁</span> },
    { label: 'Semester Calendar', color: 'bg-[#fdd835]', icon: <span className="text-2xl">📅</span> },
    { label: 'Hostel Request', color: 'bg-[#3949ab]', icon: <span className="text-2xl">🛌</span> },
    { label: 'Transport Request', color: 'bg-[#26c6da]', icon: <span className="text-2xl">🚌</span> },
    { label: 'Refund Application', color: 'bg-[#d32f2f]', icon: <span className="text-2xl">🔄</span> },
  ];

  return (
    <div className="w-full flex-1 flex flex-col items-center justify-center py-8 px-4 relative">
      <div className="absolute top-4 right-4 z-10">
        <button 
          onClick={onLogout}
          className="bg-white/80 hover:bg-white px-3 py-1 rounded text-[10px] font-bold text-red-600 shadow border border-red-200 transition"
        >
          LOGOUT
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-5 max-w-[1200px] w-full animate-fadeIn">
        {tiles.map((tile, idx) => (
          <Tile key={idx} {...tile} onClick={() => handleTileClick(tile.label)} />
        ))}
      </div>
      
      {/* Decorative icons */}
      <div className="fixed top-1/2 left-4 -translate-y-1/2 hidden xl:block opacity-60">
        <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">🧠</div>
      </div>
      <div className="fixed top-1/2 right-4 -translate-y-1/2 hidden xl:block opacity-60">
         <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm text-green-400">⚛️</div>
      </div>
    </div>
  );
};
