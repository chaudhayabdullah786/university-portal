
import React from 'react';
import { Page } from '../types';

interface AcademicRecordProps {
  onBack: () => void;
  onNavigate: (page: Page) => void;
}

export const AcademicRecord: React.FC<AcademicRecordProps> = ({ onBack, onNavigate }) => {
  const sidebarItems = [
    { label: 'Academic Record', icon: '📜', active: true, page: Page.ACADEMIC_RECORD },
    { label: 'Attendance Detail', icon: '✅', page: Page.ATTENDANCE_DETAIL },
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
              onClick={() => item.page && onNavigate(item.page)}
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

        {/* Message Card */}
        <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden max-w-3xl">
          {/* Header Tab */}
          <div className="bg-indigo-900/10 px-6 py-3 border-b border-gray-100">
             <div className="bg-white inline-block px-4 py-1 rounded-t-lg border-x border-t border-gray-200 -mb-4 shadow-sm">
                <h3 className="text-indigo-900 font-bold text-xs uppercase tracking-wider">Academic Record</h3>
             </div>
          </div>

          <div className="p-10 flex flex-col items-center justify-center">
            <div className="w-full border-2 border-dotted border-gray-400 rounded-md p-8 bg-gray-50/50 text-center space-y-4">
              <h2 className="text-red-600 font-serif text-3xl font-bold italic">Sorry...!</h2>
              
              <div className="space-y-6">
                <p className="text-[#004d99] font-bold text-base md:text-lg">
                  Your academic record is blocked, due to following reasons:
                </p>

                <ul className="inline-block text-left text-[#004d99] font-bold text-base">
                  <li className="flex items-center">
                    <span className="mr-3 text-xl text-blue-800">•</span>
                    Outstanding Dues
                  </li>
                </ul>

                <div className="pt-2">
                   <a href="#" className="text-red-600 font-bold hover:underline text-lg">Click Here for more Details</a>
                </div>

                <div className="text-[#004d99] font-bold text-base max-w-lg mx-auto leading-tight">
                  For further details please contact Student Facilitation Center (SFC).
                </div>

                <div className="pt-6 border-t border-gray-200 text-[#004d99] font-semibold text-xs md:text-sm flex flex-wrap justify-center gap-x-4 gap-y-2">
                   <span>Contact/Email at 055-3892989</span>
                   <span>Ext: 191,193</span>
                   <a href="mailto:sfc@gift.edu.pk" className="hover:underline">Email: sfc@gift.edu.pk.</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
