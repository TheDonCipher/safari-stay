import React from 'react';
import { MOCK_CHANNELS } from '../constants';
import { Channel } from '../types';
import CustomChannelLogo from './shared/CustomChannelLogo';

const ChannelCard: React.FC<{ channel: Channel }> = ({ channel }) => {
    const getStatusIndicator = (status: 'Connected' | 'Disconnected' | 'Pending') => {
        switch (status) {
            case 'Connected':
                return 'bg-green-500';
            case 'Pending':
                return 'bg-yellow-500';
            case 'Disconnected':
                return 'bg-red-500';
        }
    };
    return (
        <div className="bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
            <div className="relative mb-4">
                 {channel.logo ? (
                    <img src={channel.logo} alt={`${channel.name} logo`} className="h-16 w-32 object-contain brightness-0 invert" />
                ) : (
                    <CustomChannelLogo channelId={channel.id} className="h-16 w-32 object-contain text-white" />
                )}
                <span className={`absolute top-0 right-0 block h-3 w-3 rounded-full ${getStatusIndicator(channel.status)} border-2 border-gray-800`} title={channel.status}></span>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">{channel.name}</h4>
            {channel.status === 'Connected' ? (
                <div className="text-gray-400 text-sm w-full">
                    <div className="flex justify-between border-t border-gray-700 pt-2 mt-2">
                        <span>Bookings:</span>
                        <span className="font-semibold text-white">{channel.bookings}</span>
                    </div>
                    <div className="flex justify-between pt-1">
                        <span>Revenue:</span>
                        <span className="font-semibold text-white">${channel.revenue.toLocaleString()}</span>
                    </div>
                </div>
            ) : (
                <p className="text-gray-500 text-sm h-12 flex items-center">{channel.status === 'Pending' ? 'Awaiting confirmation' : 'Connection failed'}</p>
            )}

            <button className="mt-4 w-full bg-gray-700 hover:bg-brand-primary text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200">
                Manage
            </button>
        </div>
    );
}

const Channels: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                 <h3 className="text-xl font-bold text-white">Channel Manager</h3>
                 <button className="bg-brand-primary hover:bg-brand-secondary text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    Connect New Channel
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {MOCK_CHANNELS.map(channel => (
                    <ChannelCard key={channel.id} channel={channel} />
                ))}
            </div>
        </div>
    );
};

export default Channels;