
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LoginForm } from './components/LoginForm';
import { AIChatBot } from './components/AIChatBot';
import { Dashboard } from './components/Dashboard';
import { SubNavbar } from './components/SubNavbar';
import { AttendanceDetail } from './components/AttendanceDetail';
import { AcademicRecord } from './components/AcademicRecord';
import { User, Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.LOGIN);
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (userData: User) => {
    setUser(userData);
    setCurrentPage(Page.DASHBOARD);
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage(Page.LOGIN);
  };

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
  };

  const renderContent = () => {
    if (currentPage === Page.LOGIN) {
      return (
        <div className="w-full h-full flex justify-center items-center py-12 px-4">
          <LoginForm onLogin={handleLogin} />
        </div>
      );
    }

    switch (currentPage) {
      case Page.ATTENDANCE_DETAIL:
        return <AttendanceDetail onBack={() => setCurrentPage(Page.DASHBOARD)} />;
      case Page.ACADEMIC_RECORD:
        return <AcademicRecord onBack={() => setCurrentPage(Page.DASHBOARD)} onNavigate={navigateTo} />;
      case Page.DASHBOARD:
      default:
        return user && <Dashboard user={user} onLogout={handleLogout} onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col hero-bg">
      <Navbar user={user} />
      {currentPage !== Page.LOGIN && <SubNavbar onNavigate={navigateTo} activePage={currentPage} />}
      
      <main className="flex-1 flex flex-col items-center">
        {renderContent()}
      </main>

      <Footer />
      <AIChatBot />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hero-bg {
          background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1541339907198-e08759df9a73?auto=format&fit=crop&q=80&w=2000');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          background-repeat: no-repeat;
        }
      `}</style>
    </div>
  );
};

export default App;
