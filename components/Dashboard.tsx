
import React from 'react';
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, PieChart, Pie, Cell } from 'recharts';
import { MOCK_CHART_DATA, MOCK_PIE_DATA, MOCK_RESERVATIONS } from '../constants';
import StatCard from './shared/StatCard';
import { Reservation } from '../types';

const Dashboard: React.FC = () => {
    const COLORS = ['#F97316', '#FB923C', '#FDBA74', '#FED7AA'];
    const recentReservations = MOCK_RESERVATIONS.slice(0, 4);

    return (
        <div className="space-y-8">
            {/* Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Total Revenue" value="$84,525" change="+12.5%" changeType="increase" />
                <StatCard title="Occupancy" value="78%" change="+2.1%" changeType="increase" />
                <StatCard title="Average Daily Rate" value="$185.70" change="-0.5%" changeType="decrease" />
                <StatCard title="New Bookings" value="25" change="+5 today" changeType="increase" />
            </div>

            {/* Main Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-gray-800 p-6 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-bold text-white mb-4">Revenue Overview (YTD)</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={MOCK_CHART_DATA}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                            <XAxis dataKey="name" stroke="#9CA3AF" />
                            <YAxis stroke="#9CA3AF" />
                            <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }} />
                            <Legend />
                            <Line type="monotone" dataKey="revenue" stroke="#F97316" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-bold text-white mb-4">Channel Mix</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={MOCK_PIE_DATA}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {MOCK_PIE_DATA.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }} />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Recent Reservations */}
            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-white mb-4">Recent Reservations</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="text-sm text-gray-400 uppercase border-b border-gray-700">
                            <tr>
                                <th className="py-3 px-4">Guest</th>
                                <th className="py-3 px-4 hidden md:table-cell">Dates</th>
                                <th className="py-3 px-4 hidden sm:table-cell">Channel</th>
                                <th className="py-3 px-4 hidden lg:table-cell">Room</th>
                                <th className="py-3 px-4">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentReservations.map((res: Reservation) => (
                                <tr key={res.id} className="border-b border-gray-700 hover:bg-gray-700/50">
                                    <td className="py-4 px-4 font-medium text-white">{res.guestName}</td>
                                    <td className="py-4 px-4 text-gray-300 hidden md:table-cell">{res.checkIn} to {res.checkOut}</td>
                                    <td className="py-4 px-4 text-gray-300 hidden sm:table-cell">{res.channel}</td>
                                    <td className="py-4 px-4 text-gray-300 hidden lg:table-cell">{res.roomType}</td>
                                    <td className="py-4 px-4">
                                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                                            res.status === 'Confirmed' ? 'bg-green-500/20 text-green-300' :
                                            res.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-300' :
                                            'bg-red-500/20 text-red-300'
                                        }`}>
                                            {res.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
