import React, { useState, useMemo } from 'react';
import { CarBrand, Language, PageId } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { ECU_BRANDS } from '../data/ecuData';
import { BrandModal } from './BrandModal';
import { BrandLogo } from './BrandLogo';
import { Search, ChevronRight, MessageCircle, HelpCircle, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

interface EcuFilesViewProps {
  currentLang: Language;
  onNavigate: (page: PageId, prefilledBrand?: string, prefilledEcu?: string) => void;
}

export const EcuFilesView: React.FC<EcuFilesViewProps> = ({ currentLang, onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<CarBrand | null>(null);
  const t = TRANSLATIONS[currentLang];

  // Filter brands by name or by ECU model codes
  const filteredBrands = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return ECU_BRANDS;

    return ECU_BRANDS.filter((brand) => {
      const matchBrandName = brand.name.toLowerCase().includes(q);
      const matchEcu = brand.ecus.some((ecu) => ecu.toLowerCase().includes(q));
      return matchBrandName || matchEcu;
    });
  }, [searchQuery]);

  const handleBrandClick = (brand: CarBrand) => {
    setSelectedBrand(brand);
  };

  const handleSelectEcuForContact = (brandName: string, ecuName?: string) => {
    onNavigate('contact', brandName, ecuName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 sm:space-y-16">
      
      {/* 1. Header & Lead Statements */}
      <div className="space-y-4 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-wider">
          <span>{t.ecu.mainTitle}</span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display leading-tight text-balance">
          {t.ecu.introLead}
        </h1>

        <div className="space-y-2 text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
          <p>
            {t.ecu.introContactPrompt}
          </p>
          <p className="text-slate-400 text-xs sm:text-sm">
            {t.ecu.introGenerationNote}
          </p>
        </div>
      </div>

      {/* 2. Interactive Search Bar for Brand or ECU */}
      <div className="max-w-3xl mx-auto">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400 group-focus-within:text-red-500 transition-colors" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.ecu.searchPlaceholder}
            className="block w-full pl-12 pr-12 py-3.5 sm:py-4 bg-slate-900/90 border border-slate-700/80 rounded-xl text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 shadow-lg transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs font-semibold text-slate-400 hover:text-white"
            >
              Effacer
            </button>
          )}
        </div>

        {/* Live Filter Indicator */}
        <div className="flex items-center justify-between text-xs text-slate-400 mt-3 px-1">
          <div>
            <span>{filteredBrands.length}</span> {t.ecu.filteredCount}
            {searchQuery && <span className="text-red-400 font-mono"> («{searchQuery}»)</span>}
          </div>
          <div className="text-slate-500">
            Cliquez sur une marque pour voir tous les calculateurs
          </div>
        </div>
      </div>

      {/* 3. Section Title & Supported Brands Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
            {t.ecu.sectionTitle}
          </h2>
          <span className="text-xs font-mono text-slate-400">
            25 Marques · 400+ Calculateurs
          </span>
        </div>

        {filteredBrands.length === 0 ? (
          <div className="p-12 text-center bg-slate-900/40 border border-slate-800 rounded-2xl space-y-4">
            <p className="text-slate-300 font-medium">
              Aucune marque ou calculateur ne correspond à votre recherche « {searchQuery} ».
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="px-4 py-2 text-xs font-bold text-white bg-red-600 rounded-lg hover:bg-red-700"
            >
              Réinitialiser la recherche
            </button>
          </div>
        ) : (
          /* Responsive Presentation Grid:
             • 3 boîtes par ligne sur PC (lg:grid-cols-3)
             • 2 boîtes par ligne sur téléphone (grid-cols-2)
             • Forme carrée (aspect-square) avec logo/marque et calculateurs
          */
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {filteredBrands.map((brand) => {
              // Highlight matching ECUs if searching
              const matchingEcus = searchQuery
                ? brand.ecus.filter((e) => e.toLowerCase().includes(searchQuery.toLowerCase()))
                : brand.ecus;

              return (
                <div
                  key={brand.id}
                  onClick={() => handleBrandClick(brand)}
                  className="group relative flex flex-col justify-between p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-red-500/60 hover:shadow-xl hover:shadow-red-950/20 transition-all duration-300 aspect-square cursor-pointer overflow-hidden"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleBrandClick(brand);
                    }
                  }}
                >
                  {/* Subtle background brand water-crest */}
                  <div className="absolute -bottom-4 -right-4 text-slate-800/20 text-7xl font-black font-display pointer-events-none select-none">
                    {brand.name.substring(0, 3).toUpperCase()}
                  </div>

                  {/* Brand Top Info */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-slate-900/95 border border-slate-700/80 p-1.5 flex items-center justify-center shadow-inner group-hover:border-red-500/80 transition-colors shrink-0">
                        <BrandLogo brandId={brand.id} className="w-full h-full object-contain" />
                      </div>
                      <span className="text-[10px] sm:text-xs font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-slate-700">
                        {brand.country}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-lg font-bold text-white group-hover:text-red-400 transition-colors line-clamp-1">
                      {brand.name}
                    </h3>

                    <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5 font-medium">
                      {brand.ecus.length} calculateurs
                    </div>
                  </div>

                  {/* ECU Model Highlights preview */}
                  <div className="relative z-10 my-auto py-2">
                    <div className="flex flex-wrap gap-1 max-h-16 sm:max-h-20 overflow-hidden">
                      {matchingEcus.slice(0, 4).map((ecu, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] sm:text-xs font-mono px-1.5 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800"
                        >
                          {ecu}
                        </span>
                      ))}
                      {brand.ecus.length > 4 && (
                        <span className="text-[10px] sm:text-xs font-mono text-slate-500 px-1 py-0.5">
                          +{brand.ecus.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="relative z-10 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] sm:text-xs font-semibold text-slate-400 group-hover:text-white">
                    <span className="truncate">{t.ecu.viewEcuList}</span>
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-slate-800 group-hover:bg-red-600 flex items-center justify-center transition-all shrink-0">
                      <ChevronRight className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 4. "Vous ne trouvez pas votre véhicule ?" Callout Box */}
      <section className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#0d162a] via-slate-900 to-[#0d162a] border border-slate-800 shadow-xl">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Assistance Technique CARECU</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display">
            {t.ecu.notFoundTitle}
          </h3>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.ecu.notFoundDesc}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <span>{t.ecu.contactTeamBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/261373824799"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp : 037 38 247 99</span>
            </a>
          </div>
        </div>
      </section>

      {/* Brand Detailed Modal */}
      <BrandModal
        brand={selectedBrand}
        currentLang={currentLang}
        onClose={() => setSelectedBrand(null)}
        onSelectEcuForContact={handleSelectEcuForContact}
      />

    </div>
  );
};
