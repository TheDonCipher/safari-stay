
import React, { useState } from 'react';

type SettingsTab = 'Users' | 'API' | 'Integrations' | 'Billing';

const Settings: React.FC = () => {
    const [activeTab, setActiveTab] = useState<SettingsTab>('Users');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'Users': return <UsersTab />;
            case 'API': return <ApiTab />;
            case 'Integrations': return <IntegrationsTab />;
            case 'Billing': return <BillingTab />;
            default: return null;
        }
    };

    return (
        <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Settings</h3>
            <div className="border-b border-gray-700">
                <div className="overflow-x-auto whitespace-nowrap">
                    {(['Users', 'API', 'Integrations', 'Billing'] as SettingsTab[]).map(tab => (
                        <button 
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`py-3 px-6 font-semibold transition-colors duration-200 inline-block ${
                                activeTab === tab 
                                ? 'text-brand-primary border-b-2 border-brand-primary' 
                                : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>
            <div className="bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
                {renderTabContent()}
            </div>
        </div>
    );
};

const UsersTab = () => (
    <div>
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <h4 className="text-xl font-bold text-white">User Access Control</h4>
            <button className="bg-brand-primary hover:bg-brand-secondary text-white font-bold py-2 px-4 rounded-lg w-full sm:w-auto">Invite User</button>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[500px]">
                <thead className="text-sm text-gray-400 uppercase border-b border-gray-700">
                    <tr>
                        <th className="py-3 px-4">Name</th>
                        <th className="py-3 px-4 hidden sm:table-cell">Email</th>
                        <th className="py-3 px-4">Role</th>
                        <th className="py-3 px-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-gray-700">
                        <td className="py-4 px-4 font-medium text-white">Jomo Kenyatta</td>
                        <td className="py-4 px-4 text-gray-300 hidden sm:table-cell">j.kenyatta@safaristay.com</td>
                        <td className="py-4 px-4"><span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-500/20 text-green-300">Admin</span></td>
                        <td className="py-4 px-4 text-brand-secondary cursor-pointer hover:underline">Edit</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                        <td className="py-4 px-4 font-medium text-white">Amina Mohamed</td>
                        <td className="py-4 px-4 text-gray-300 hidden sm:table-cell">a.mohamed@safaristay.com</td>
                        <td className="py-4 px-4"><span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-300">Manager</span></td>
                        <td className="py-4 px-4 text-brand-secondary cursor-pointer hover:underline">Edit</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
);

const ApiTab = () => (
    <div>
        <h4 className="text-xl font-bold text-white mb-4">API Access</h4>
        <p className="text-gray-400 mb-6">Use this API key to connect with external Property Management Systems (PMS) or other services.</p>
        <div className="bg-gray-900 p-4 rounded-lg flex items-center justify-between">
            <code className="text-gray-300 overflow-x-auto whitespace-nowrap">sk_live_******************1234</code>
            <button className="text-brand-secondary hover:text-white ml-4 flex-shrink-0">Copy</button>
        </div>
        <button className="mt-6 bg-gray-700 hover:bg-brand-primary text-white font-bold py-2 px-4 rounded-lg">Generate New Key</button>
    </div>
);

const IntegrationsTab = () => (
    <div>
        <h4 className="text-xl font-bold text-white mb-6">Integrations</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-700/50 p-4 rounded-lg flex items-center justify-between">
                <div>
                    <h5 className="font-bold text-white">Stripe</h5>
                    <p className="text-sm text-gray-400">Payment Gateway</p>
                </div>
                <button className="bg-green-500 text-white font-bold py-1 px-3 rounded-full text-sm">Connected</button>
            </div>
            <div className="bg-gray-700/50 p-4 rounded-lg flex items-center justify-between">
                <div>
                    <h5 className="font-bold text-white">GuestTalk</h5>
                    <p className="text-sm text-gray-400">Guest Messaging</p>
                </div>
                <button className="bg-gray-600 hover:bg-brand-primary text-white font-bold py-1 px-3 rounded-full text-sm">Connect</button>
            </div>
        </div>
    </div>
);

const BillingTab = () => (
    <div>
        <h4 className="text-xl font-bold text-white mb-4">Billing & Plan</h4>
        <div className="bg-gray-700/50 p-6 rounded-lg">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div>
                    <h5 className="text-lg font-bold text-white">Professional Plan</h5>
                    <p className="text-gray-400">Next payment of $299 on Sep 1, 2024.</p>
                </div>
                <button className="bg-brand-primary hover:bg-brand-secondary text-white font-bold py-2 px-4 rounded-lg w-full sm:w-auto flex-shrink-0">Manage Plan</button>
            </div>
        </div>
    </div>
);


export default Settings;
