
import React, { useState } from 'react';
import { User, Page } from '../types';

interface LoginFormProps {
  onLogin: (user: User) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [isParent, setIsParent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      onLogin({
        id: userId || "SIS-2025-001",
        name: isParent ? 'Guardian' : 'Abdullah',
        role: isParent ? 'parent' : 'student',
        department: 'Department of Computer Science'
      });
      setLoading(false);
    }, 800);
  };

  return (
    <div className="w-full max-w-[500px] animate-fadeIn">
      <div className="bg-[#5c6bc0]/80 px-4 py-2 rounded-t-lg border-b border-indigo-200">
        <h2 className="text-white text-center font-bold text-sm md:text-base tracking-wide uppercase">
          Student Information System (SIS)
        </h2>
      </div>
      
      <div className="bg-white shadow-2xl rounded-b-lg p-6 md:p-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0">
            <label className="md:w-32 text-gray-600 font-medium text-sm">User ID</label>
            <input
              type="text"
              required
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="e.g. Abdullah_123"
              className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm transition"
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0">
            <label className="md:w-32 text-gray-600 font-medium text-sm">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm transition"
            />
          </div>

          <div className="flex items-center justify-end space-x-4 pt-2">
            <div className="flex items-center">
              <input
                id="parent-login"
                type="checkbox"
                checked={isParent}
                onChange={(e) => setIsParent(e.target.checked)}
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="parent-login" className="ml-2 text-xs text-gray-600 font-medium">
                Login as Parent
              </label>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-sm border border-gray-300 rounded shadow-sm transition-all active:transform active:scale-95 disabled:opacity-50"
            >
              {loading ? '...' : 'Login'}
            </button>
          </div>
        </form>

        <div className="mt-8 text-center">
          <a href="#" className="text-blue-200 md:text-white text-xs md:text-sm hover:underline font-medium drop-shadow-md transition">
            Forgot Your Password?
          </a>
        </div>
      </div>
    </div>
  );
};
