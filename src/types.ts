export type Language = 'fr' | 'en' | 'mg';

export type PageId = 'home' | 'services' | 'ecu-files' | 'contact';

export interface CarBrand {
  id: string;
  name: string;
  country: string;
  ecus: string[];
  popularCount?: number;
  badgeSymbol: string;
}

export interface ServiceItem {
  id: string;
  category: 'performance' | 'electronics';
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  icon: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  vehicle: string;
  serviceType: string;
  message: string;
}
