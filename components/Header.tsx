
import React from 'react';

interface HeaderProps {
  title: string;
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onMenuClick }) => {
  return (
    <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 p-4 lg:p-6 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center">
        <button onClick={onMenuClick} className="lg:hidden text-gray-400 hover:text-white mr-4" aria-label="Open menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h2 className="text-xl md:text-2xl font-bold text-white">{title}</h2>
      </div>
      
      <div className="flex items-center space-x-2 md:space-x-4 lg:space-x-6">
        <div className="relative hidden sm:block">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-full py-2 pl-10 pr-4 w-32 sm:w-64 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all duration-300 focus:w-48 sm:focus:w-72"
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        
        <button className="relative text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-700" aria-label="Notifications">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-1 right-1 block h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-gray-800"></span>
        </button>

        <div className="flex items-center space-x-3">
          <img src="https://picsum.photos/seed/user1/40/40" alt="User" className="h-8 w-8 md:h-10 md:w-10 rounded-full border-2 border-brand-primary" />
          <div className='hidden sm:block'>
            <p className="text-white font-semibold">Jomo Kenyatta</p>
            <p className="text-xs text-gray-400">Hotel Manager</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
