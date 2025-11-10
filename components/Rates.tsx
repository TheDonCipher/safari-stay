
import React from 'react';
import { MOCK_RATE_DATA } from '../constants';
import { RoomRate } from '../types';

const Rates: React.FC = () => {
  const dates: string[] = [];
  const today = new Date();
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push(date.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric' }));
  }

  return (
    <div className="bg-gray-800 rounded-2xl shadow-lg p-6">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h3 className="text-xl font-bold text-white">Rates & Availability</h3>
        <div className="flex items-center gap-4">
          <input type="date" defaultValue={today.toISOString().split('T')[0]} className="bg-gray-700 text-white rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-brand-primary" />
          <button className="bg-gray-700 hover:bg-brand-primary text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200">
            Bulk Update
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] text-center border-collapse">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left py-3 px-2 text-sm text-gray-400 uppercase">Room Type</th>
              {dates.map((date, index) => (
                <th key={index} className="py-3 px-2 text-sm text-gray-400 uppercase font-semibold">{date}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MOCK_RATE_DATA.map((room: RoomRate, roomIndex: number) => (
              <React.Fragment key={roomIndex}>
                <tr className="border-b border-gray-600">
                  <td className="text-left py-3 px-2 font-bold text-white align-top row-span-2">{room.name}</td>
                  {room.rates.map((rate, rateIndex) => (
                    <td key={rateIndex} className="p-1">
                      <input 
                        type="text" 
                        defaultValue={rate ? `$${rate}` : ''}
                        className="w-full bg-gray-700 text-white text-center rounded-md p-2 border border-transparent focus:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                      />
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-700">
                   <td className="text-left py-1 px-2 text-sm text-gray-500">Availability</td>
                   {room.availability.map((avail, availIndex) => (
                     <td key={availIndex} className="p-1">
                        <input 
                          type="text" 
                          defaultValue={avail !== null ? avail : ''}
                          className={`w-full text-center rounded-md p-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-brand-primary ${
                              avail === 0 ? 'bg-red-500/20 text-red-300' : 
                              avail !== null && avail <= 2 ? 'bg-yellow-500/20 text-yellow-300' : 
                              'bg-gray-900/50 text-gray-300'
                          }`}
                        />
                     </td>
                   ))}
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Rates;
