
import React, { useState } from 'react';

interface AttendanceDetailProps {
  onBack: () => void;
}

export const AttendanceDetail: React.FC<AttendanceDetailProps> = ({ onBack }) => {
  const sidebarItems = [
    { label: 'Academic Record', icon: '📜' },
    { label: 'Attendance Detail', icon: '✅', active: true },
    { label: 'Exam Components', icon: '📝' },
    { label: 'Fee Detail', icon: '💰' },
    { label: 'Financials', icon: '🏦' },
    { label: 'Road Map', icon: '🗺️' },
    { label: 'Sports Enrollment', icon: '⚽' },
    { label: 'Sports Enrollment Detail', icon: '📋' },
    { label: 'Batch Advisor', icon: '👨‍🏫' },
    { label: 'Enrollment Detail', icon: '📝' },
    { label: 'Exam Slip', icon: '🎟️' },
    { label: 'Notifications', icon: '🔔' },
    { label: 'Semester Calendar', icon: '📅' },
    { label: 'Time Table', icon: '🕒' },
    { label: 'Student Specialization', icon: '🎓' },
    { label: 'CS - Road Map', icon: '📄', isPdf: true },
    { label: 'Rules and Regulations', icon: '📄', isPdf: true },
    { label: 'Online Learning Aid', icon: '💻' },
    { label: 'search', icon: '🔍' },
  ];

  return (
    <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row h-full min-h-[600px] mt-4 animate-fadeIn">
      {/* Left Sidebar */}
      <aside className="w-full md:w-64 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg shadow-xl overflow-hidden mb-4 md:mb-0">
        <div className="flex flex-col h-full overflow-y-auto max-h-[70vh] md:max-h-none scrollbar-hide">
          {sidebarItems.map((item, idx) => (
            <button
              key={idx}
              className={`flex items-center px-4 py-2 text-left transition-colors border-b border-gray-100 last:border-b-0
                ${item.active ? 'bg-blue-50 text-blue-900 border-l-4 border-l-blue-900 font-bold' : 'hover:bg-gray-50 text-gray-700'}
              `}
            >
              <span className="mr-3 text-sm">{item.icon}</span>
              <span className={`text-[11px] uppercase tracking-wide ${item.isPdf ? 'text-red-700 font-bold' : ''}`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-6 flex flex-col">
        {/* Navigation Buttons */}
        <div className="flex space-x-2 mb-4">
          <button 
            onClick={onBack}
            className="bg-gradient-to-b from-gray-100 to-gray-200 border border-gray-300 px-6 py-1 rounded-full text-[10px] font-bold text-gray-700 flex items-center shadow-sm hover:from-white hover:to-gray-100"
          >
            <span className="mr-1">←</span> Back
          </button>
          <button className="bg-gradient-to-b from-gray-100 to-gray-200 border border-gray-300 px-6 py-1 rounded-full text-[10px] font-bold text-gray-700 flex items-center shadow-sm opacity-50 cursor-not-allowed">
            Forward <span className="ml-1">→</span>
          </button>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden max-w-2xl">
          {/* Form Header */}
          <div className="bg-indigo-900/10 px-6 py-3 border-b border-gray-100">
             <div className="bg-white inline-block px-4 py-1 rounded-t-lg border-x border-t border-gray-200 -mb-4 shadow-sm">
                <h3 className="text-indigo-900 font-bold text-xs uppercase tracking-wider">Attendance Detail/Percentage</h3>
             </div>
          </div>

          <div className="p-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {/* Semester Dropdown */}
              <div className="flex items-center">
                <label className="w-24 text-blue-900 font-bold text-xs">Semester:</label>
                <select className="flex-1 bg-white border border-gray-300 rounded px-2 py-1 text-xs focus:ring-1 focus:ring-blue-500 outline-none">
                  <option>Fall(2025)</option>
                  <option>Spring(2025)</option>
                </select>
              </div>

              {/* View Option Dropdown */}
              <div className="flex items-center">
                <label className="w-28 text-blue-900 font-bold text-xs">View Option:</label>
                <select className="flex-1 bg-white border border-gray-300 rounded px-2 py-1 text-xs focus:ring-1 focus:ring-blue-500 outline-none">
                  <option>Detail</option>
                  <option>Summary</option>
                </select>
              </div>

              {/* From Date */}
              <div className="flex items-center">
                <label className="w-24 text-blue-900 font-bold text-xs">From Date:</label>
                <input 
                  type="text" 
                  defaultValue="22/10/2025" 
                  className="flex-1 bg-gray-50 border border-gray-300 rounded px-2 py-1 text-xs outline-none"
                />
              </div>

              {/* To Date */}
              <div className="flex items-center">
                <label className="w-28 text-blue-900 font-bold text-xs">To Date:</label>
                <input 
                  type="text" 
                  defaultValue="19/12/2025" 
                  className="flex-1 bg-gray-50 border border-gray-300 rounded px-2 py-1 text-xs outline-none"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-2 pt-4">
              <button 
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-[10px] px-6 py-1.5 rounded shadow-md uppercase tracking-wider transition-colors"
                onClick={() => alert('Processing Attendance Report...')}
              >
                Submit
              </button>
              <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold text-[10px] px-6 py-1.5 rounded shadow-sm uppercase tracking-wider transition-colors">
                Reset
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
