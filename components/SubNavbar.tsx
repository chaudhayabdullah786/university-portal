
import React, { useState } from 'react';
import { Page } from '../types';

interface MenuItem {
  label: string;
  icon?: string;
  isNew?: boolean;
  isPdf?: boolean;
  targetPage?: Page;
}

interface SubNavbarProps {
  onNavigate: (page: Page) => void;
  activePage: Page;
}

export const SubNavbar: React.FC<SubNavbarProps> = ({ onNavigate, activePage }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const academicsItems: MenuItem[] = [
    { label: 'Academic Record', icon: '📜', targetPage: Page.ACADEMIC_RECORD },
    { label: 'Attendance Detail', icon: '✅', targetPage: Page.ATTENDANCE_DETAIL },
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
    { label: 'CS - Road Map', isPdf: true, icon: '📄' },
    { label: 'Rules and Regulations', isPdf: true, icon: '📄' },
    { label: 'Online Learning Aid', icon: '💻' },
    { label: 'search', icon: '🔍' },
  ];

  const servicesItems: MenuItem[] = [
    { label: 'User Guide', icon: '📖' },
    { label: 'Section Change', icon: '🔄', isNew: true },
    { label: 'Duplicate ID Card', icon: '💳' },
    { label: 'Fee Installment', icon: '💵' },
    { label: 'Certificates/Letter Issuance', icon: '📜' },
    { label: 'Fine Waive', icon: '💸' },
    { label: 'Change Particulars', icon: '✍️' },
    { label: 'Clearance', icon: '🧼' },
    { label: 'Semester Freeze', icon: '❄️' },
    { label: 'Early Departure Permission', icon: '🏃' },
    { label: 'Transport Request', icon: '🚌' },
    { label: 'Thesis Progress', icon: '📊' },
    { label: 'Thesis Registration', icon: '📑' },
    { label: 'General Application', icon: '📝' },
    { label: 'Refund Application', icon: '🔄' },
    { label: 'Degree Issuance', icon: '🎓' },
    { label: 'Transcript Issuance', icon: '📜' },
    { label: 'Makeup Exam', icon: '📝' },
    { label: 'Change of Discipline', icon: '🔀' },
    { label: 'Short Attendance', icon: '📉' },
    { label: 'Umrah Leave', icon: '🕋' },
    { label: 'Authority Letter', icon: '📄' },
    { label: 'Result Review', icon: '🔍' },
    { label: 'Complaints & Suggestions Portal', icon: '📥' },
    { label: 'Cafe Complaints & Suggestions', icon: '☕' },
    { label: 'International Tour', icon: '✈️' },
  ];

  const handleAction = (item: MenuItem) => {
    if (item.targetPage) {
      onNavigate(item.targetPage);
    } else {
      alert(`Verifying Admin Credentials for: ${item.label}\nAccess Granted: Proceeding to module...`);
    }
    setActiveDropdown(null);
  };

  return (
    <div className="bg-[#f0f0f0] border-b border-gray-300 shadow-sm relative z-40">
      <div className="max-w-[1400px] mx-auto flex justify-end">
        <div className="flex space-x-[1px]">
          {/* Dashboard Tab */}
          <button 
            onClick={() => onNavigate(Page.DASHBOARD)}
            className={`flex items-center space-x-1.5 px-4 py-1.5 text-[10px] md:text-xs font-bold border-x border-gray-300 uppercase tracking-wider transition-colors
              ${activePage === Page.DASHBOARD 
                ? 'bg-orange-400 text-white border-b-2 border-b-orange-600' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-100'}
            `}
          >
            <span>🏠</span>
            <span>Dashboard</span>
          </button>

          {/* FAQs Tab */}
          <button className="flex items-center space-x-1.5 px-4 py-1.5 text-[10px] md:text-xs font-bold border-x border-gray-300 bg-gray-200 text-gray-700 hover:bg-gray-100 uppercase tracking-wider">
            <span>👨‍🏫</span>
            <span>FAQs</span>
          </button>

          {/* Academics Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('academics')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className={`flex items-center space-x-1.5 px-4 py-1.5 text-[10px] md:text-xs font-bold border-x border-gray-300 uppercase tracking-wider transition-colors 
              ${(activeDropdown === 'academics' || activePage === Page.ATTENDANCE_DETAIL || activePage === Page.ACADEMIC_RECORD) ? 'bg-white text-blue-900 border-b-2 border-b-blue-900' : 'bg-gray-200 text-gray-700 hover:bg-gray-100'}`}>
              <span>🎓</span>
              <span>Academics</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            
            {activeDropdown === 'academics' && (
              <div className="absolute top-full left-0 w-64 bg-white shadow-2xl border border-gray-200 py-1 flex flex-col animate-fadeIn">
                {academicsItems.map((item, i) => (
                  <button 
                    key={i} 
                    onClick={() => handleAction(item)}
                    className="flex items-center px-4 py-2 hover:bg-gray-100 text-left transition-colors border-b border-gray-50 last:border-b-0"
                  >
                    <span className="mr-3 text-sm">{item.icon}</span>
                    <span className={`text-[11px] font-medium text-gray-700 ${item.isPdf ? 'text-red-700 font-bold' : ''}`}>
                      {item.label}
                    </span>
                    {item.isPdf && <span className="ml-auto text-[8px] bg-red-100 text-red-600 px-1 rounded uppercase">PDF</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className={`flex items-center space-x-1.5 px-4 py-1.5 text-[10px] md:text-xs font-bold border-x border-gray-300 uppercase tracking-wider transition-colors ${activeDropdown === 'services' ? 'bg-white text-blue-900 border-b-2 border-b-blue-900' : 'bg-gray-200 text-gray-700 hover:bg-gray-100'}`}>
              <span>⚙️</span>
              <span>Services</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>

            {activeDropdown === 'services' && (
              <div className="absolute top-full right-0 w-72 bg-white shadow-2xl border border-gray-200 py-1 flex flex-col max-h-[80vh] overflow-y-auto animate-fadeIn scrollbar-thin">
                {servicesItems.map((item, i) => (
                  <button 
                    key={i}
                    onClick={() => handleAction(item)}
                    className="flex items-center px-4 py-2 hover:bg-gray-100 text-left transition-colors border-b border-gray-50 last:border-b-0"
                  >
                    <span className="mr-3 text-sm">{item.icon}</span>
                    <span className="text-[11px] font-medium text-gray-700">{item.label}</span>
                    {item.isNew && (
                      <span className="ml-2 text-[8px] bg-red-500 text-white px-1 font-bold rounded animate-pulse">NEW!</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Account Tab */}
          <button className="flex items-center space-x-1.5 px-4 py-1.5 text-[10px] md:text-xs font-bold border-x border-gray-300 bg-gray-200 text-gray-700 hover:bg-gray-100 uppercase tracking-wider">
            <span>👤</span>
            <span>Account</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
};
