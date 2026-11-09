import React from 'react';
import { Language, PageId } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { ShieldAlert, Phone, Mail, Facebook, MessageSquare, ArrowUp } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onNavigate }) => {
  const t = TRANSLATIONS[currentLang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040812] border-t border-slate-800 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
        
        {/* Top footer row: Brand, Slogan, Quick links, and Direct contacts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand & Slogan column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/logo_690f8d7f.png"
                alt="CARECU Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
            
            <p className="text-sm text-slate-300 font-medium">
              Programmation calculateur toutes marques pour tous les véhicules & Modification fichier sur WinOLS.
            </p>

            <div className="text-xs text-red-500 font-bold uppercase tracking-wider font-mono">
              Performance • Precision • Innovation
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/261373824799"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:border-emerald-500 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
              </a>
              <a
                href="mailto:carecu.contact@gmail.com"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:border-sky-500 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-sky-400" />
              </a>
              <a
                href="https://facebook.com/carecu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:border-blue-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-blue-400" />
              </a>
            </div>
          </div>

          {/* Quick links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('services');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.services} (Stage 1 / 2)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('ecu-files');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.ecuFiles} (25 Marques)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Direct contacts (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Contact direct
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <span className="text-white font-mono font-bold">037 38 247 99</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                <span>carecu.contact@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Facebook className="w-4 h-4 text-slate-500 shrink-0" />
                <span>facebook.com/carecu</span>
              </div>
              <p className="pt-2 text-[11px] text-slate-500">
                Interventions en atelier ou vente de fichiers en ligne avec support technique dédié.
              </p>
            </div>
          </div>

        </div>

        {/* Cahier des charges: Informations section */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
            <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0" />
            <span>{t.footer.disclaimerTitle}</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            {t.footer.disclaimerText}
          </p>
        </div>

        {/* Bottom row: Copyright & Slogan */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            {t.footer.rights}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-500 font-mono">
              0373824799
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Retour en haut"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
