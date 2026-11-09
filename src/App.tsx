import React, { useState, useEffect } from 'react';
import { Language, PageId } from './types';
import { Header } from './components/Header';
import { HomeView } from './components/HomeView';
import { ServicesView } from './components/ServicesView';
import { EcuFilesView } from './components/EcuFilesView';
import { ContactView } from './components/ContactView';
import { Footer } from './components/Footer';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('fr');
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [prefilledVehicle, setPrefilledVehicle] = useState<string>('');
  const [prefilledService, setPrefilledService] = useState<string>('');

  // Synchronize hash on load and popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'services', 'ecu-files', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId, prefillArg1?: string, prefillArg2?: string) => {
    setCurrentPage(page);
    window.location.hash = page;

    if (page === 'contact') {
      if (prefillArg1 && prefillArg2) {
        // From ECU Files: brand + ecu
        setPrefilledVehicle(`${prefillArg1} (${prefillArg2})`);
        setPrefilledService('Achat Fichier ECU WinOLS');
      } else if (prefillArg1) {
        // Could be a service name or a brand name
        if (prefillArg1.includes('Stage') || prefillArg1.includes('DPF') || prefillArg1.includes('EGR') || prefillArg1.includes('AdBlue') || prefillArg1.includes('Immobilizer')) {
          setPrefilledService(prefillArg1);
        } else {
          setPrefilledVehicle(prefillArg1);
          setPrefilledService('Achat Fichier ECU WinOLS');
        }
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050b17] text-slate-100 selection:bg-red-600 selection:text-white">
      {/* 1. Sticky Navigation Header */}
      <Header
        currentLang={currentLang}
        onSelectLang={setCurrentLang}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* 2. Main Page Content View */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomeView currentLang={currentLang} onNavigate={handleNavigate} />
        )}
        {currentPage === 'services' && (
          <ServicesView currentLang={currentLang} onNavigate={handleNavigate} />
        )}
        {currentPage === 'ecu-files' && (
          <EcuFilesView currentLang={currentLang} onNavigate={handleNavigate} />
        )}
        {currentPage === 'contact' && (
          <ContactView
            currentLang={currentLang}
            prefilledVehicle={prefilledVehicle}
            prefilledService={prefilledService}
          />
        )}
      </main>

      {/* 3. Floating WhatsApp quick button */}
      <a
        href="https://wa.me/261373824799?text=Bonjour%20CARECU%2C%20je%20souhaite%20des%20informations%20sur%20vos%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl hover:shadow-emerald-900/50 transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-emerald-400"
        title="Contacter CARECU sur WhatsApp"
        aria-label="WhatsApp CARECU"
      >
        <MessageSquare className="w-5 h-5 fill-white/20" />
        <span className="text-xs font-bold font-mono hidden sm:inline-block">037 38 247 99</span>
      </a>

      {/* 4. Footer */}
      <Footer currentLang={currentLang} onNavigate={handleNavigate} />
    </div>
  );
}
