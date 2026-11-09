import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Phone, 
  Mail, 
  Facebook, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  Car,
  FileCode2
} from 'lucide-react';

interface ContactViewProps {
  currentLang: Language;
  prefilledVehicle?: string;
  prefilledService?: string;
}

export const ContactView: React.FC<ContactViewProps> = ({
  currentLang,
  prefilledVehicle = '',
  prefilledService = ''
}) => {
  const t = TRANSLATIONS[currentLang];

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    vehicle: prefilledVehicle,
    serviceType: prefilledService,
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (prefilledVehicle) {
      setFormData((prev) => ({ ...prev, vehicle: prefilledVehicle }));
    }
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, serviceType: prefilledService }));
    }
  }, [prefilledVehicle, prefilledService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      // Web3Forms endpoint with user's provided access key
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: 'ae331315-b393-45fd-9668-91f3d6de18c2',
          from_name: 'CARECU Website',
          subject: `Demande CARECU : ${formData.vehicle || 'Véhicule'} — ${formData.serviceType || 'Service'}`,
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          vehicle: formData.vehicle,
          service_requested: formData.serviceType,
          message: formData.message
        })
      });

      const result = await response.json();

      if (response.status === 200 && result.success) {
        setStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          vehicle: '',
          serviceType: '',
          message: ''
        });
      } else {
        setStatus('error');
        setErrorMessage(result.message || t.contact.errorMessage);
      }
    } catch (err: unknown) {
      console.error('Contact submission error:', err);
      setStatus('error');
      setErrorMessage(t.contact.errorMessage);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 sm:space-y-16">
      
      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-wider">
          <span>CARECU Contact & Support</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
          {t.contact.title}
        </h1>
        <p className="text-slate-300 text-sm sm:text-base">
          {t.contact.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Form (7 cols on desktop) */}
        <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white font-display">
                {t.contact.formTitle}
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Remplissez les champs ci-dessous pour recevoir une réponse rapide.
              </p>
            </div>
            <FileCode2 className="w-6 h-6 text-red-500" />
          </div>

          {/* Success banner */}
          {status === 'success' && (
            <div className="p-4 mb-6 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-300 flex items-start gap-3 animate-in fade-in">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-emerald-200">{t.contact.successTitle}</h4>
                <p className="text-xs text-emerald-300/90 mt-1">{t.contact.successMessage}</p>
              </div>
            </div>
          )}

          {/* Error banner */}
          {status === 'error' && (
            <div className="p-4 mb-6 rounded-xl bg-red-950/60 border border-red-800 text-red-300 flex items-start gap-3 animate-in fade-in">
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-red-200">{t.contact.errorTitle}</h4>
                <p className="text-xs text-red-300/90 mt-1">{errorMessage || t.contact.errorMessage}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Nom complet */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold text-slate-300 mb-1.5">
                {t.contact.nameLabel} <span className="text-red-500">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder={t.contact.namePlaceholder}
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
              />
            </div>

            {/* Email & Phone side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {t.contact.emailLabel} <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.contact.emailPlaceholder}
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {t.contact.phoneLabel} <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t.contact.phonePlaceholder}
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                />
              </div>
            </div>

            {/* Marque et modèle du véhicule */}
            <div>
              <label htmlFor="vehicle" className="block text-xs font-semibold text-slate-300 mb-1.5">
                {t.contact.vehicleLabel} <span className="text-red-500">*</span>
              </label>
              <input
                id="vehicle"
                name="vehicle"
                type="text"
                required
                value={formData.vehicle}
                onChange={handleChange}
                placeholder={t.contact.vehiclePlaceholder}
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
              />
            </div>

            {/* Type de service demandé */}
            <div>
              <label htmlFor="serviceType" className="block text-xs font-semibold text-slate-300 mb-1.5">
                {t.contact.serviceLabel} <span className="text-red-500">*</span>
              </label>
              <select
                id="serviceType"
                name="serviceType"
                required
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
              >
                <option value="">{t.contact.serviceDefault}</option>
                <option value="Stage 1 — Reprogrammation">Stage 1 — Reprogrammation moteur</option>
                <option value="Stage 2 — Calibration avancée">Stage 2 — Calibration avancée</option>
                <option value="Achat Fichier ECU WinOLS">Achat / Vente Fichier ECU calibré</option>
                <option value="DPF / FAP — Filtre à particules">DPF / FAP — Filtre à particules</option>
                <option value="EGR — Recirculation des gaz">EGR — Recirculation gaz d'échappement</option>
                <option value="AdBlue / SCR">AdBlue / SCR — Réduction catalytique</option>
                <option value="Immobilizer — Système antidémarrage">Immobilizer — Système antidémarrage</option>
                <option value="Clonage & Réparation Calculateur">Clonage & Récupération Calculateur</option>
                <option value="Autre demande technique">Autre demande technique</option>
              </select>
            </div>

            {/* Votre message */}
            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                {t.contact.messageLabel} <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder={t.contact.messagePlaceholder}
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors resize-y"
              />
            </div>

            {/* Bouton : Envoyer le message */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-red-600 hover:bg-red-700 active:scale-95 disabled:opacity-60 rounded-lg shadow-lg shadow-red-950/40 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{status === 'sending' ? t.contact.sendingButton : t.contact.submitButton}</span>
              </button>
            </div>

            <div className="pt-2 text-center">
              <p className="text-[11px] text-slate-500">
                Formulaire sécurisé directement connecté au support technique CARECU.
              </p>
            </div>
          </form>
        </div>

        {/* Right Column: Contact direct (5 cols on desktop) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="border-b border-slate-800 pb-4">
              <h2 className="text-lg sm:text-xl font-bold text-white font-display">
                {t.contact.directTitle}
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Choisissez votre canal de communication préféré.
              </p>
            </div>

            {/* WhatsApp */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/50 transition-all group">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-emerald-600/10 text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-white">
                      {t.contact.whatsappTitle}
                    </h3>
                    <span className="text-[11px] font-mono text-emerald-400 font-bold">Réponse rapide</span>
                  </div>
                  <div className="text-sm font-bold text-emerald-400 font-mono">
                    037 38 247 99
                  </div>
                  <p className="text-xs text-slate-400">
                    {t.contact.whatsappDesc}
                  </p>
                  <div className="pt-2">
                    <a
                      href="https://wa.me/261373824799"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-md transition-colors"
                    >
                      <span>{t.contact.whatsappBtn}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* E-mail */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-sky-500/50 transition-all group">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-sky-600/10 text-sky-400 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1 flex-1">
                  <h3 className="text-sm font-bold text-white">
                    {t.contact.emailTitle}
                  </h3>
                  <div className="text-xs sm:text-sm font-bold text-sky-400 font-mono break-all">
                    carecu.contact@gmail.com
                  </div>
                  <p className="text-xs text-slate-400">
                    {t.contact.emailDesc}
                  </p>
                  <div className="pt-2">
                    <a
                      href="mailto:carecu.contact@gmail.com"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 rounded-md transition-colors"
                    >
                      <span>Envoyer un e-mail</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Facebook */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-blue-500/50 transition-all group">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-blue-600/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </div>
                <div className="space-y-1 flex-1">
                  <h3 className="text-sm font-bold text-white">
                    {t.contact.facebookTitle}
                  </h3>
                  <div className="text-xs sm:text-sm font-bold text-blue-400 font-mono">
                    carecu
                  </div>
                  <p className="text-xs text-slate-400">
                    {t.contact.facebookDesc}
                  </p>
                  <div className="pt-2">
                    <a
                      href="https://facebook.com/carecu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-colors"
                    >
                      <span>Page Facebook CARECU</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Technical advice box */}
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
              <Clock className="w-4 h-4 text-red-500" />
              <span>Délai de traitement des fichiers</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pour les commandes de fichiers WinOLS, la livraison des calibrations s'effectue en général en moins de 30 minutes après réception du fichier original (.bin / .ori).
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
