import React from 'react';
import { Language, PageId } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Carousel } from './Carousel';
import { 
  Cpu, 
  Binary, 
  Database, 
  ArrowRight, 
  PhoneCall 
} from 'lucide-react';

interface HomeViewProps {
  currentLang: Language;
  onNavigate: (page: PageId) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ currentLang, onNavigate }) => {
  const t = TRANSLATIONS[currentLang];

  const presentationBoxes = [
    {
      id: 1,
      title: t.home.box1Title,
      subtitle: t.home.box1Sub,
      action: t.home.box1Action,
      targetPage: 'services' as PageId,
      icon: Cpu,
      accentColor: 'border-red-500/30 hover:border-red-500 hover:shadow-red-950/40',
      badge: 'Services',
      gradient: 'from-red-950/40 via-slate-900/80 to-slate-900',
      iconBg: 'bg-red-500/10 text-red-500'
    },
    {
      id: 2,
      title: t.home.box2Title,
      subtitle: t.home.box2Sub,
      action: t.home.box2Action,
      targetPage: 'services' as PageId,
      icon: Binary,
      accentColor: 'border-sky-500/30 hover:border-sky-500 hover:shadow-sky-950/40',
      badge: 'WinOLS 3D',
      gradient: 'from-sky-950/40 via-slate-900/80 to-slate-900',
      iconBg: 'bg-sky-500/10 text-sky-400'
    },
    {
      id: 3,
      title: t.home.box3Title,
      subtitle: t.home.box3Sub,
      action: t.home.box3Action,
      targetPage: 'ecu-files' as PageId,
      icon: Database,
      accentColor: 'border-emerald-500/30 hover:border-emerald-500 hover:shadow-emerald-950/40',
      badge: 'Fichier ECU',
      gradient: 'from-emerald-950/40 via-slate-900/80 to-slate-900',
      iconBg: 'bg-emerald-500/10 text-emerald-400'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. Hero Carousel */}
      <Carousel currentLang={currentLang} onNavigate={onNavigate} />

      {/* 2. Les trois boîtes de présentation cliquables */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {presentationBoxes.map((box) => {
            const Icon = box.icon;
            return (
              <div
                key={box.id}
                onClick={() => onNavigate(box.targetPage)}
                className={`group relative flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-gradient-to-b ${box.gradient} border ${box.accentColor} transition-all duration-300 hover:-translate-y-1 cursor-pointer shadow-lg`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onNavigate(box.targetPage);
                  }
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-lg ${box.iconBg} border border-white/5`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded bg-slate-800/90 text-slate-300 border border-slate-700/60 font-mono">
                      {box.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors leading-snug">
                    {box.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {box.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-white">
                  <span>{box.action}</span>
                  <div className="w-7 h-7 rounded-full bg-slate-800 group-hover:bg-red-600 flex items-center justify-center transition-all group-hover:translate-x-1">
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Direct WhatsApp & Callout Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-red-950/60 via-slate-900 to-slate-900 border border-red-900/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              {t.home.bannerCtaTitle}
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              {t.home.bannerCtaDesc}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="https://wa.me/261373824799"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-lg shadow-emerald-950/50 transition-all cursor-pointer whitespace-nowrap active:scale-95"
            >
              <PhoneCall className="w-4 h-4" />
              <span>WhatsApp : 037 38 247 99</span>
            </a>

            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>{t.nav.contact}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
