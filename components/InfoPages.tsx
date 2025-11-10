import React, { useState, useEffect } from 'react';
import { View } from '../types';

// SHARED COMPONENTS
// =============================================

interface HeaderProps {
    onEnterApp: () => void;
    onNavigate: (view: View) => void;
}

export const LandingHeader: React.FC<HeaderProps> = ({ onEnterApp, onNavigate }) => {
    const [headerVisible, setHeaderVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setHeaderVisible(true);
            } else {
                setHeaderVisible(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${headerVisible ? 'bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <button onClick={() => onNavigate('landing')} className="flex items-center">
                    <div className="bg-brand-primary p-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656-.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <h1 className="text-xl font-bold text-white ml-3">SafariStay</h1>
                </button>
                <nav className="hidden md:flex items-center space-x-8">
                    <button onClick={() => onNavigate('features')} className="text-gray-300 hover:text-brand-primary transition-colors">Features</button>
                    <button onClick={() => onNavigate('pricing')} className="text-gray-300 hover:text-brand-primary transition-colors">Pricing</button>
                    <button onClick={() => onNavigate('contact')} className="text-gray-300 hover:text-brand-primary transition-colors">Contact</button>
                </nav>
                <button onClick={onEnterApp} className="bg-brand-primary hover:bg-brand-secondary text-white font-bold py-2 px-6 rounded-lg transition-transform transform hover:scale-105">
                    Enter App Demo
                </button>
            </div>
        </header>
    );
};

export const LandingFooter: React.FC = () => (
    <footer id="contact" className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} SafariStay. All rights reserved.</p>
            <p className="text-sm mt-2">Empowering African Hospitality.</p>
        </div>
    </footer>
);

// PAGE COMPONENTS
// =============================================

export const FeaturesPage: React.FC<HeaderProps> = ({ onEnterApp, onNavigate }) => {
    const features = [
        { title: 'OTA Connectivity', description: 'Integrate with over 1,000 OTAs, including Booking.com, Airbnb, and Expedia.', icon: <GlobeIcon /> },
        { title: 'Two-Way Sync', description: 'Real-time, bi-directional synchronization of rates, inventory, and reservations.', icon: <SyncIcon /> },
        { title: 'Dynamic Pricing', description: 'Define rules-based pricing based on occupancy, lead time, and day of the week.', icon: <TrendingUpIcon /> },
        { title: 'Direct Booking Engine', description: 'A fully functional, integrated engine for commission-free direct reservations.', icon: <CreditCardIcon /> },
        { title: 'Advanced Reporting', description: 'Get insights on key metrics like revenue per channel, occupancy, and ADR.', icon: <ChartBarIcon /> },
        { title: 'User Access Control', description: 'Create multiple users with distinct roles and granular permissions.', icon: <UsersIcon /> },
    ];
    return (
        <div className="bg-gray-800 text-gray-100 min-h-screen">
            <LandingHeader onEnterApp={onEnterApp} onNavigate={onNavigate} />
            <main className="py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl font-extrabold text-white mb-4">Powerful Features, Built for You</h1>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">Everything you need to streamline operations, maximize revenue, and deliver unforgettable guest experiences.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {features.map(feature => (
                            <div key={feature.title} className="bg-gray-900 p-8 rounded-2xl">
                                <div className="bg-brand-primary/10 text-brand-primary inline-block p-4 rounded-full mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <LandingFooter />
        </div>
    );
};

export const PricingPage: React.FC<HeaderProps> = ({ onEnterApp, onNavigate }) => (
    <div className="bg-gray-800 text-gray-100 min-h-screen">
        <LandingHeader onEnterApp={onEnterApp} onNavigate={onNavigate} />
        <main className="py-20">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl font-extrabold text-white mb-4">Simple, Transparent Pricing</h1>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">Choose the plan that's right for your property. No hidden fees, no surprises.</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <PricingCard plan="Essential" price="99" features={['Up to 10 rooms', '5 Channel Connections', 'Booking Engine', 'Standard Reporting']} />
                    <PricingCard plan="Professional" price="299" features={['Up to 50 rooms', 'Unlimited Channels', 'Dynamic Pricing', 'Advanced Reporting']} popular />
                    <PricingCard plan="Enterprise" price="Custom" features={['Unlimited rooms', 'Multi-property support', 'Dedicated API access', 'Priority Support']} />
                </div>
            </div>
        </main>
        <LandingFooter />
    </div>
);

const PricingCard: React.FC<{ plan: string, price: string, features: string[], popular?: boolean }> = ({ plan, price, features, popular }) => (
    <div className={`bg-gray-900 p-8 rounded-2xl border-2 ${popular ? 'border-brand-primary' : 'border-gray-700'}`}>
        {popular && <span className="absolute -top-4 right-8 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Most Popular</span>}
        <h3 className="text-2xl font-bold text-white">{plan}</h3>
        <p className="text-4xl font-extrabold text-white my-4">{price !== 'Custom' ? `$${price}` : price}</p>
        <p className="text-gray-400 mb-6">{price !== 'Custom' ? 'per month' : 'Contact Us'}</p>
        <ul className="space-y-3 text-gray-300 text-left mb-8">
            {features.map(f => <li key={f} className="flex items-center"><CheckIcon className="h-5 w-5 text-green-400 mr-2" /> {f}</li>)}
        </ul>
        <button className={`w-full py-3 px-6 rounded-lg font-bold ${popular ? 'bg-brand-primary hover:bg-brand-secondary' : 'bg-gray-700 hover:bg-brand-primary'}`}>
            Get Started
        </button>
    </div>
);


export const ContactPage: React.FC<HeaderProps> = ({ onEnterApp, onNavigate }) => (
    <div className="bg-gray-800 text-gray-100 min-h-screen">
        <LandingHeader onEnterApp={onEnterApp} onNavigate={onNavigate} />
        <main className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-white mb-4">Get In Touch</h1>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">Have a question or want a personalized demo? We'd love to hear from you.</p>
                </div>
                <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-300 mb-2">Full Name</label>
                            <input type="text" id="name" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                            <input type="email" id="email" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                            <textarea id="message" rows={4} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-brand-primary hover:bg-brand-secondary text-white font-bold py-3 px-6 rounded-lg">Send Message</button>
                    </form>
                    <div className="text-gray-300">
                        <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                        <p className="mb-2">123 Safari Lane, Nairobi, Kenya</p>
                        <p className="mb-2">Email: hello@safaristay.app</p>
                        <p>Phone: +254 700 123 456</p>
                    </div>
                </div>
            </div>
        </main>
        <LandingFooter />
    </div>
);

// ICONS
// =============================================
export const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.293l.586-.586a2 2 0 012.828 0l2 2a2 2 0 010 2.828l-2 2a2 2 0 01-2.828 0l-2-2a2 2 0 010-2.828l.586-.586z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
export const TrendingUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);
export const CreditCardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
);
const SyncIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5M20 20v-5h-5M4 4l16 16" />
    </svg>
);
const ChartBarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);
const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);
const CheckIcon = ({ className }: { className: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);
