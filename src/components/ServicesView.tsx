import React from 'react';
import { Language, PageId } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { 
  Gauge, 
  Flame, 
  Wind, 
  RotateCcw, 
  Droplet, 
  Key, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle, 
  HelpCircle,
  FileCheck
} from 'lucide-react';

interface ServicesViewProps {
  currentLang: Language;
  onNavigate: (page: PageId, prefilledService?: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ currentLang, onNavigate }) => {
  const t = TRANSLATIONS[currentLang];

  const handleRequestService = (serviceName: string) => {
    onNavigate('contact', serviceName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Header section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-red-500 tracking-wider uppercase">
          <span>CARECU Engineering</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display">
          {t.services.mainTitle}
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          {t.services.mainSubtitle}
        </p>
      </div>

      {/* Section A: REPROGRAMMATION MOTEUR & PERFORMANCE */}
      <section className="space-y-6">
        <div className="border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-red-600/10 text-red-500">
              <Gauge className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
                {t.services.secATitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                {t.services.secASubtitle}
              </p>
            </div>
          </div>
        </div>

        {/* 2 Boxes: Stage 1 and Stage 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Stage 1 Box */}
          <div className="flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-red-500/50 transition-all shadow-lg hover:shadow-red-950/20 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-mono px-2.5 py-1 rounded bg-red-500/10 text-red-400 border border-red-500/20">
                  {t.services.stage1Badge}
                </span>
                <span className="text-xs text-slate-500 font-mono">01 / OEM+</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                {t.services.stage1Title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                {t.services.stage1Desc}
              </p>

              <div className="pt-2 space-y-2 border-t border-slate-800/80">
                {t.services.stage1Specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
              <button
                onClick={() => handleRequestService(t.services.stage1Title)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <span>{t.services.requestThisService}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Stage 2 Box */}
          <div className="flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 transition-all shadow-lg hover:shadow-sky-950/20 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-mono px-2.5 py-1 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  {t.services.stage2Badge}
                </span>
                <span className="text-xs text-slate-500 font-mono">02 / HARDWARE</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">
                {t.services.stage2Title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                {t.services.stage2Desc}
              </p>

              <div className="pt-2 space-y-2 border-t border-slate-800/80">
                {t.services.stage2Specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                    <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
              <button
                onClick={() => handleRequestService(t.services.stage2Title)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 rounded-lg transition-all active:scale-95 cursor-pointer"
              >
                <span>{t.services.requestThisService}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Section B: SYSTÈMES ÉLECTRONIQUES & FONCTIONS DU VÉHICULE */}
      <section className="space-y-6">
        <div className="border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-sky-600/10 text-sky-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
                {t.services.secBTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                {t.services.secBIntro}
              </p>
            </div>
          </div>
        </div>

        {/* 4 Boxes for electronic systems */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Box 1: DPF / FAP */}
          <div className="flex flex-col justify-between p-6 sm:p-7 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 transition-all shadow-md group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400">
                  <Flame className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-slate-500 uppercase">Filtre Particules</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                {t.services.dpfTitle}
              </h3>
              
              <div className="text-xs text-slate-400 font-medium">
                {t.services.dpfSubtitle}
              </div>

              <p className="text-slate-300 text-sm leading-relaxed pt-1">
                {t.services.dpfDesc}
              </p>
            </div>

            <div className="pt-4 mt-5 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => handleRequestService(t.services.dpfTitle)}
                className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>{t.services.requestThisService}</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>
          </div>

          {/* Box 2: EGR */}
          <div className="flex flex-col justify-between p-6 sm:p-7 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all shadow-md group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Wind className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-slate-500 uppercase">Recirculation Gaz</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                {t.services.egrTitle}
              </h3>

              <div className="text-xs text-slate-400 font-medium">
                {t.services.egrSubtitle}
              </div>

              <p className="text-slate-300 text-sm leading-relaxed pt-1">
                {t.services.egrDesc}
              </p>
            </div>

            <div className="pt-4 mt-5 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => handleRequestService(t.services.egrTitle)}
                className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>{t.services.requestThisService}</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
              </button>
            </div>
          </div>

          {/* Box 3: AdBlue / SCR */}
          <div className="flex flex-col justify-between p-6 sm:p-7 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/40 transition-all shadow-md group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400">
                  <Droplet className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-slate-500 uppercase">Catalyse Sélective</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                {t.services.adblueTitle}
              </h3>

              <div className="text-xs text-slate-400 font-medium">
                {t.services.adblueSubtitle}
              </div>

              <p className="text-slate-300 text-sm leading-relaxed pt-1">
                {t.services.adblueDesc}
              </p>
            </div>

            <div className="pt-4 mt-5 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => handleRequestService(t.services.adblueTitle)}
                className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>{t.services.requestThisService}</span>
                <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
              </button>
            </div>
          </div>

          {/* Box 4: Immobilizer */}
          <div className="flex flex-col justify-between p-6 sm:p-7 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 transition-all shadow-md group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400">
                  <Key className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-slate-500 uppercase">Antidémarrage</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                {t.services.immoTitle}
              </h3>

              <div className="text-xs text-slate-400 font-medium">
                {t.services.immoSubtitle}
              </div>

              <p className="text-slate-300 text-sm leading-relaxed pt-1">
                {t.services.immoDesc}
              </p>
            </div>

            <div className="pt-4 mt-5 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => handleRequestService(t.services.immoTitle)}
                className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>{t.services.requestThisService}</span>
                <ArrowRight className="w-3.5 h-3.5 text-purple-400" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Verification guarantee notice */}
      <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/80 flex items-start gap-3.5 text-slate-400 text-xs sm:text-sm">
        <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          {t.services.guaranteeNotice}
        </p>
      </div>

    </div>
  );
};
