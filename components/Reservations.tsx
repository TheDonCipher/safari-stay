
import React from 'react';
import { MOCK_RESERVATIONS } from '../constants';
import { Reservation } from '../types';

const Reservations: React.FC = () => {
    const getStatusBadge = (status: 'Confirmed' | 'Pending' | 'Cancelled') => {
        switch (status) {
            case 'Confirmed':
                return 'bg-green-500/20 text-green-300';
            case 'Pending':
                return 'bg-yellow-500/20 text-yellow-300';
            case 'Cancelled':
                return 'bg-red-500/20 text-red-300';
        }
    };
    
    return (
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <h3 className="text-xl font-bold text-white">All Reservations</h3>
                <div className="flex items-center gap-4">
                     <select className="bg-gray-700 text-white rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-brand-primary">
                        <option>All Channels</option>
                        <option>Booking.com</option>
                        <option>Airbnb</option>
                        <option>Direct</option>
                    </select>
                    <button className="bg-brand-primary hover:bg-brand-secondary text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200">
                        New Reservation
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="text-sm text-gray-400 uppercase border-b border-gray-700">
                        <tr>
                            <th className="py-3 px-4">Guest</th>
                            <th className="py-3 px-4 hidden md:table-cell">Check-in</th>
                            <th className="py-3 px-4 hidden md:table-cell">Check-out</th>
                            <th className="py-3 px-4 hidden sm:table-cell">Channel</th>
                            <th className="py-3 px-4 hidden lg:table-cell">Room Type</th>
                            <th className="py-3 px-4">Total</th>
                            <th className="py-3 px-4">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {MOCK_RESERVATIONS.map((res: Reservation) => (
                            <tr key={res.id} className="border-b border-gray-700 hover:bg-gray-700/50">
                                <td className="py-4 px-4 font-medium text-white">{res.guestName}</td>
                                <td className="py-4 px-4 text-gray-300 hidden md:table-cell">{res.checkIn}</td>
                                <td className="py-4 px-4 text-gray-300 hidden md:table-cell">{res.checkOut}</td>
                                <td className="py-4 px-4 text-gray-300 hidden sm:table-cell">{res.channel}</td>
                                <td className="py-4 px-4 text-gray-300 hidden lg:table-cell">{res.roomType}</td>
                                <td className="py-4 px-4 font-medium text-white">${res.total.toFixed(2)}</td>
                                <td className="py-4 px-4">
                                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadge(res.status)}`}>
                                        {res.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Reservations;
