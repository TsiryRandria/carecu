import React, { useState } from 'react';
import { CarBrand, Language, PageId } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { X, Search, Check, Copy, ArrowRight, Shield, Cpu, MessageSquare } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface BrandModalProps {
  brand: CarBrand | null;
  currentLang: Language;
  onClose: () => void;
  onSelectEcuForContact: (brandName: string, ecuName?: string) => void;
}

export const BrandModal: React.FC<BrandModalProps> = ({
  brand,
  currentLang,
  onClose,
  onSelectEcuForContact
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const t = TRANSLATIONS[currentLang];

  if (!brand) return null;

  const filteredEcus = brand.ecus.filter((ecu) =>
    ecu.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(text);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const handleCopyAll = () => {
    const allText = `${brand.name} ECUs:\n` + brand.ecus.join(', ');
    handleCopy(allText);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 bg-[#081226] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-13 h-13 rounded-xl bg-slate-950 border border-slate-700/80 p-2 flex items-center justify-center shadow-inner shrink-0">
              <BrandLogo brandId={brand.id} className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  {brand.name}
                </h3>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                  {brand.country}
                </span>
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {brand.ecus.length} {t.ecu.ecusCount}
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Search and Action bar */}
        <div className="p-4 bg-slate-900/90 border-b border-slate-800 flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filtrer un calculateur (ex: EDC17, DCM, Simos)..."
              className="w-full pl-9 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-red-500"
            />
          </div>

          <button
            onClick={handleCopyAll}
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
          >
            {copiedItem?.includes(brand.name) ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t.ecu.copiedNotice}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>{t.ecu.copyRefBtn}</span>
              </>
            )}
          </button>
        </div>

        {/* Modal List of ECUs */}
        <div className="p-6 overflow-y-auto space-y-3 flex-1">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Calculateurs disponibles ({filteredEcus.length})
          </div>

          {filteredEcus.length === 0 ? (
            <div className="text-center py-8 text-slate-500 text-sm">
              Aucun calculateur ne correspond à votre recherche "{searchTerm}".
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {filteredEcus.map((ecu) => (
                <div
                  key={ecu}
                  className="group relative p-3 rounded-lg bg-slate-950/70 border border-slate-800/80 hover:border-red-500/50 hover:bg-slate-950 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between gap-1 mb-2">
                    <span className="font-mono text-xs font-semibold text-slate-200 group-hover:text-red-400 break-all">
                      {ecu}
                    </span>
                    <button
                      onClick={() => handleCopy(ecu)}
                      title="Copier référence"
                      className="p-1 text-slate-500 hover:text-white transition-colors"
                    >
                      {copiedItem === ecu ? (
                        <Check className="w-3 h-3 text-emerald-400" />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      onClose();
                      onSelectEcuForContact(brand.name, ecu);
                    }}
                    className="w-full mt-1 pt-1.5 border-t border-slate-800/60 text-[10px] font-bold text-slate-400 group-hover:text-white flex items-center justify-between transition-colors"
                  >
                    <span>Commander</span>
                    <ArrowRight className="w-2.5 h-2.5 text-red-500" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer CTA */}
        <div className="p-5 border-t border-slate-800 bg-[#081226] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            Disponibilité immédiate pour reprogrammation ou vente de fichier.
          </div>

          <button
            onClick={() => {
              onClose();
              onSelectEcuForContact(brand.name);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-md transition-colors"
          >
            <span>{t.ecu.requestFileForBrand}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
