
import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, changeType }) => {
  const isIncrease = changeType === 'increase';
  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
      <p className="text-gray-400 text-sm font-medium">{title}</p>
      <div className="flex items-end justify-between mt-2">
        <p className="text-3xl font-bold text-white">{value}</p>
        <div className={`flex items-center text-sm font-semibold ${isIncrease ? 'text-green-400' : 'text-red-400'}`}>
          {isIncrease ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          )}
          <span>{change}</span>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
