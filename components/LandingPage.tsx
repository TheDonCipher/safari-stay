import React from 'react';
import { View } from '../types';
import { LandingHeader, LandingFooter, GlobeIcon, TrendingUpIcon, CreditCardIcon } from './InfoPages';

interface LandingPageProps {
  onEnterApp: () => void;
  onNavigate: (view: View) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnterApp, onNavigate }) => {
  return (
    <div className="bg-gray-900 text-gray-100 font-sans antialiased">
      <LandingHeader onEnterApp={onEnterApp} onNavigate={onNavigate} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1548912443-6b5b74b351f7?q=80&w=2940&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
            Effortless Management, Maximum Revenue.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            The all-in-one hotel management system built for Africa. Connect to 1,000+ OTAs, automate pricing, and boost your direct bookings instantly.
          </p>
          <button onClick={onEnterApp} className="bg-brand-primary hover:bg-brand-secondary text-white font-bold py-4 px-10 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-2xl">
            Explore the Demo
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-800 scroll-mt-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Unlock Africa's Tourism Potential</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">SafariStay provides all the tools you need to streamline your operations and grow your business.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-2xl transform hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-brand-primary/10 text-brand-primary inline-block p-4 rounded-full mb-4">
                <GlobeIcon />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Reach Millions of Travelers</h3>
              <p className="text-gray-400">Instantly connect with over 1,000 OTAs like Booking.com, Airbnb, and Expedia with our seamless two-way channel manager.</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl transform hover:-translate-y-2 transition-transform duration-300">
               <div className="bg-brand-primary/10 text-brand-primary inline-block p-4 rounded-full mb-4">
                <TrendingUpIcon />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Automate Rates, Maximize Profit</h3>
              <p className="text-gray-400">Use rule-based dynamic pricing to automatically adjust your rates based on occupancy, lead time, and day of the week.</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl transform hover:-translate-y-2 transition-transform duration-300">
               <div className="bg-brand-primary/10 text-brand-primary inline-block p-4 rounded-full mb-4">
                <CreditCardIcon />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Capture Commission-Free Bookings</h3>
              <p className="text-gray-400">Integrate our powerful booking engine directly into your website and connect to Google Free Booking Links to drive direct revenue.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl">
           <div className="bg-gray-800 rounded-2xl p-8 md:p-12 text-center">
             <img src="https://picsum.photos/seed/manager/100/100" alt="Hotel Manager" className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-brand-primary"/>
             <blockquote className="text-xl md:text-2xl text-white italic leading-relaxed">
              "SafariStay has been a game-changer for our lodge. We've seen a 40% increase in bookings and saved countless hours on administrative work. It's the simple, powerful solution we always needed."
             </blockquote>
             <cite className="block mt-6 text-gray-400 not-italic">
                <span className="font-bold text-white">Fatima Al-Khatib</span><br />
                Manager, Serengeti Sunrise Lodge
             </cite>
           </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="pricing" className="py-20 bg-gray-800 scroll-mt-20">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Elevate Your Property?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Join dozens of other properties across Africa who trust SafariStay to manage their business.</p>
            <button onClick={onEnterApp} className="bg-brand-primary hover:bg-brand-secondary text-white font-bold py-4 px-10 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-2xl">
                Explore the Demo
            </button>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default LandingPage;