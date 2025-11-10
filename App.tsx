import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Reservations from './components/Reservations';
import Channels from './components/Channels';
import Rates from './components/Rates';
import Settings from './components/Settings';
import LandingPage from './components/LandingPage';
import { FeaturesPage, PricingPage, ContactPage } from './components/InfoPages';
import { Page, View } from './types';


const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>('Dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState<View>('landing');

  const navigateTo = (view: View) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const renderMainContent = () => {
    switch (currentView) {
      case 'landing':
        return <LandingPage onEnterApp={() => navigateTo('app')} onNavigate={navigateTo} />;
      case 'features':
        return <FeaturesPage onEnterApp={() => navigateTo('app')} onNavigate={navigateTo} />;
      case 'pricing':
        return <PricingPage onEnterApp={() => navigateTo('app')} onNavigate={navigateTo} />;
      case 'contact':
        return <ContactPage onEnterApp={() => navigateTo('app')} onNavigate={navigateTo} />;
      case 'app':
        const renderPage = () => {
          switch (activePage) {
            case 'Dashboard': return <Dashboard />;
            case 'Reservations': return <Reservations />;
            case 'Channels': return <Channels />;
            case 'Rates': return <Rates />;
            case 'Settings': return <Settings />;
            default: return <Dashboard />;
          }
        };

        return (
          <div className="bg-gray-900 text-gray-100 font-sans antialiased">
            <div className="flex min-h-screen">
              {isSidebarOpen && (
                <div 
                  className="fixed inset-0 bg-black/60 z-20 lg:hidden"
                  onClick={() => setIsSidebarOpen(false)}
                  aria-hidden="true"
                ></div>
              )}
              <Sidebar 
                  activePage={activePage} 
                  setActivePage={setActivePage}
                  isOpen={isSidebarOpen}
                  setIsOpen={setIsSidebarOpen}
                  onGoHome={() => navigateTo('landing')}
              />
              <main className="flex-1 flex flex-col">
                <Header 
                  title={activePage}
                  onMenuClick={() => setIsSidebarOpen(true)}
                />
                <div className="flex-1 p-6 lg:p-8 overflow-y-auto">
                  {renderPage()}
                </div>
              </main>
            </div>
          </div>
        );
      default:
        return <LandingPage onEnterApp={() => navigateTo('app')} onNavigate={navigateTo} />;
    }
  };

  return <>{renderMainContent()}</>;
};

export default App;
