import React, { useState } from 'react';
import { Language, PageId } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Menu, X, MessageSquare, Globe } from 'lucide-react';

interface HeaderProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onSelectLang,
  currentPage,
  onNavigate
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[currentLang];

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'services', label: t.nav.services },
    { id: 'ecu-files', label: t.nav.ecuFiles },
    { id: 'contact', label: t.nav.contact }
  ];

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#060c18]/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo CARECU */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-lg p-1 transition-transform"
          >
            <img
              src="/assets/aistudio/logo_690f8d7f.png"
              alt="CARECU Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </button>

          {/* Center: Language selector (Français, Anglais, Malagasy) */}
          <div className="hidden md:flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-lg shadow-inner">
            <div className="flex items-center px-2 py-1 text-slate-400 text-xs font-medium">
              <Globe className="w-3.5 h-3.5 mr-1 text-slate-400" />
            </div>
            <button
              onClick={() => onSelectLang('fr')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                currentLang === 'fr'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              Français
            </button>
            <button
              onClick={() => onSelectLang('en')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                currentLang === 'en'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              Anglais
            </button>
            <button
              onClick={() => onSelectLang('mg')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                currentLang === 'mg'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              Malagasy
            </button>
          </div>

          {/* Right: Navigation buttons (Home, Services, Fichier ECU, Contact) */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-all ${
                    isActive
                      ? 'bg-slate-800 text-white border border-slate-700 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900/80'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            {/* Quick WhatsApp direct button */}
            <a
              href="https://wa.me/261373824799"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-emerald-600 to-green-600 rounded-lg hover:from-emerald-500 hover:to-green-500 transition-all shadow-md hover:shadow-green-900/30 active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>037 38 247 99</span>
            </a>
          </nav>

          {/* Mobile hamburger & mini lang button */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile language cycle */}
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5">
              {(['fr', 'en', 'mg'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => onSelectLang(lang)}
                  className={`px-2 py-1 text-xs font-bold uppercase rounded ${
                    currentLang === lang
                      ? 'bg-red-600 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070e1c] border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-red-600 text-white'
                      : 'text-slate-200 hover:bg-slate-800/80'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-white"></span>}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800 space-y-2">
            <a
              href="https://wa.me/261373824799"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp : 037 38 247 99</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
