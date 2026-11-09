import { Language } from '../types';

export interface TranslationDictionary {
  nav: {
    home: string;
    services: string;
    ecuFiles: string;
    contact: string;
    langSelect: string;
    tagline: string;
    directCall: string;
    requestQuote: string;
  };
  home: {
    heroTag: string;
    badgePill: string;
    box1Title: string;
    box1Sub: string;
    box1Action: string;
    box2Title: string;
    box2Sub: string;
    box2Action: string;
    box3Title: string;
    box3Sub: string;
    box3Action: string;
    slide1Title: string;
    slide1Desc: string;
    slide1Badge: string;
    slide2Title: string;
    slide2Desc: string;
    slide2Badge: string;
    techTitle: string;
    techSubtitle: string;
    kpi1Number: string;
    kpi1Label: string;
    kpi2Number: string;
    kpi2Label: string;
    kpi3Number: string;
    kpi3Label: string;
    kpi4Number: string;
    kpi4Label: string;
    bannerCtaTitle: string;
    bannerCtaDesc: string;
    bannerCtaButton: string;
    contactWhatsappText: string;
  };
  services: {
    mainTitle: string;
    mainSubtitle: string;
    secATitle: string;
    secASubtitle: string;
    stage1Title: string;
    stage1Badge: string;
    stage1Desc: string;
    stage1Specs: string[];
    stage2Title: string;
    stage2Badge: string;
    stage2Desc: string;
    stage2Specs: string[];
    secBTitle: string;
    secBSubtitle: string;
    secBIntro: string;
    dpfTitle: string;
    dpfSubtitle: string;
    dpfDesc: string;
    egrTitle: string;
    egrSubtitle: string;
    egrDesc: string;
    adblueTitle: string;
    adblueSubtitle: string;
    adblueDesc: string;
    immoTitle: string;
    immoSubtitle: string;
    immoDesc: string;
    requestThisService: string;
    guaranteeNotice: string;
  };
  ecu: {
    mainTitle: string;
    introLead: string;
    introContactPrompt: string;
    introGenerationNote: string;
    sectionTitle: string;
    searchPlaceholder: string;
    allBrands: string;
    filteredCount: string;
    ecusCount: string;
    viewEcuList: string;
    requestFileForBrand: string;
    notFoundTitle: string;
    notFoundDesc: string;
    contactTeamBtn: string;
    copyRefBtn: string;
    copiedNotice: string;
  };
  contact: {
    title: string;
    subtitle: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    vehicleLabel: string;
    vehiclePlaceholder: string;
    serviceLabel: string;
    serviceDefault: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    sendingButton: string;
    successTitle: string;
    successMessage: string;
    errorTitle: string;
    errorMessage: string;
    directTitle: string;
    whatsappTitle: string;
    whatsappDesc: string;
    whatsappBtn: string;
    emailTitle: string;
    emailDesc: string;
    facebookTitle: string;
    facebookDesc: string;
  };
  footer: {
    disclaimerTitle: string;
    disclaimerText: string;
    rights: string;
    slogan: string;
    quickLinks: string;
    directPhone: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  fr: {
    nav: {
      home: 'Home',
      services: 'Services',
      ecuFiles: 'Fichier ECU',
      contact: 'Contact',
      langSelect: 'Langue',
      tagline: 'Performance • Precision • Innovation',
      directCall: 'Contact rapide',
      requestQuote: 'Demander un devis'
    },
    home: {
      heroTag: 'Ingénierie & Électronique Automobile',
      badgePill: 'Atelier Spécialisé ECU & WinOLS',
      box1Title: 'Reprogrammation calculateur toutes marques',
      box1Sub: 'Optimisation et calibrage sur mesure pour tous les véhicules légers, utilitaires et spécifiques.',
      box1Action: 'Découvrir nos services',
      box2Title: 'Modification fichier sur WinOLS',
      box2Sub: 'Développement de cartographies professionnelles 2D/3D avec tables d\'injection et limiteurs précis.',
      box2Action: 'En savoir plus',
      box3Title: 'VENTES DES FICHIERS ECU',
      box3Sub: 'Fichiers testés et certifiés pour plus de 25 marques automobiles. Disponibilité rapide.',
      box3Action: 'Consulter la base ECU',
      slide1Title: 'Reprogrammation calculateur toutes marques',
      slide1Desc: 'Espace professionnel dédié à la reproduction, au clonage et à la programmation de calculateurs automobiles. Équipements de pointe KTAG, bancs de diagnostic et interventions multi-marques.',
      slide1Badge: 'Programmation & Clonage Multi-marques',
      slide2Title: 'Modification fichier sur WinOLS',
      slide2Desc: 'Espace professionnel dédié à la calibration avancée des fichiers ECU. Visualisation 3D des cartographies d\'injection, pression turbo et couples pour un rendement optimal.',
      slide2Badge: 'Calibration Haute Précision WinOLS',
      techTitle: 'Excellence technique & Matériel de pointe',
      techSubtitle: 'Nous utilisons les protocoles officiels de communication électronique (Boot, OBD, Bench, BDM) pour garantir une intégrité absolue de votre calculateur moteur.',
      kpi1Number: '25+',
      kpi1Label: 'Marques automobiles couvertes',
      kpi2Number: '100%',
      kpi2Label: 'Fichiers calibrés sur WinOLS',
      kpi3Number: '400+',
      kpi3Label: 'Protocoles & calculateurs supportés',
      kpi4Number: '24/7',
      kpi4Label: 'Assistance technique & disponibilité',
      bannerCtaTitle: 'Besoin d\'un fichier ou d\'une reprogrammation ?',
      bannerCtaDesc: 'Contactez directement nos ingénieurs pour vérifier la compatibilité de votre calculateur et recevoir une offre sur mesure.',
      bannerCtaButton: 'Prendre contact via WhatsApp',
      contactWhatsappText: 'Discuter sur WhatsApp : 0373824799'
    },
    services: {
      mainTitle: 'Nos services professionnels',
      mainSubtitle: 'Solutions d\'ingénierie logicielle et électronique automobile conformes aux normes techniques les plus exigeantes.',
      secATitle: 'A. REPROGRAMMATION MOTEUR & PERFORMANCE',
      secASubtitle: 'Calibrations sur mesure adaptées aux spécificités mécaniques de chaque motorisation.',
      stage1Title: 'Stage 1 — Reprogrammation',
      stage1Badge: 'Optimisation d\'origine',
      stage1Desc: 'Calibration moteur adaptée à la configuration d\'origine du véhicule, dans le respect des limites mécaniques et des réglementations applicables.',
      stage1Specs: [
        'Gain de couple et de puissance progressif',
        'Réduction de la consommation de carburant à conduite égale',
        'Respect total des tolérances constructeur',
        'Aucune modification mécanique requise'
      ],
      stage2Title: 'Stage 2 — Calibration avancée',
      stage2Badge: 'Configuration modifiée',
      stage2Desc: 'Calibration destinée aux véhicules disposant de modifications matérielles compatibles. Chaque demande nécessite une étude technique préalable.',
      stage2Specs: [
        'Pour véhicules équipés (downpipe, admission directe, échangeur)',
        'Cartographie sur mesure adaptée aux pièces installées',
        'Étude préalable des logs et paramètres moteurs',
        'Rendement thermique et mécanique sécurisé'
      ],
      secBTitle: 'B. SYSTÈMES ÉLECTRONIQUES & FONCTIONS DU VÉHICULE',
      secBSubtitle: 'Diagnostic et solutions électroniques pour calculateurs moteur',
      secBIntro: 'Nous étudions les demandes relatives à différents systèmes électroniques et fonctions du véhicule.',
      dpfTitle: 'DPF / FAP — Filtre à particules',
      dpfSubtitle: 'Système d\'échappement diesel',
      dpfDesc: 'Diagnostic et solutions de maintenance du système de filtration des particules.',
      egrTitle: 'EGR — Recirculation des gaz d\'échappement',
      egrSubtitle: 'Gestion des émissions & flux gazeux',
      egrDesc: 'Diagnostic et assistance technique concernant le système EGR.',
      adblueTitle: 'AdBlue / SCR',
      adblueSubtitle: 'Réduction catalytique sélective',
      adblueDesc: 'Diagnostic et assistance technique concernant le système de réduction catalytique sélective.',
      immoTitle: 'Immobilizer — Système antidémarrage',
      immoSubtitle: 'Sécurité et autorisation de démarrage',
      immoDesc: 'Diagnostic et interventions autorisées sur les systèmes antidémarrage, après vérification de la propriété du véhicule.',
      requestThisService: 'Demander un devis pour ce service',
      guaranteeNotice: 'Toutes nos interventions sont précédées d\'une vérification technique de l\'intégrité de l\'ECU et de la santé mécanique globale du véhicule.'
    },
    ecu: {
      mainTitle: 'PAGE FICHIER ECU véhicules',
      introLead: 'Voici toutes les marques automobiles sur lesquelles nous pouvons intervenir et pour lesquelles nous pouvons également vendre des fichiers.',
      introContactPrompt: 'CARECU propose des solutions de fichiers ECU et des services de programmation pour un large éventail de marques automobiles. Contactez-nous pour les prix chaque fois que vous le souhaitez.',
      introGenerationNote: 'Nous intervenons sur différentes générations de calculateurs moteur et systèmes électroniques, selon les références et les caractéristiques de chaque véhicule.',
      sectionTitle: 'Marques prises en charge',
      searchPlaceholder: 'Rechercher une marque (ex: BMW, Audi...) ou un calculateur (ex: EDC17, Simos, MD1CS)...',
      allBrands: 'Toutes les marques',
      filteredCount: 'marques affichées',
      ecusCount: 'calculateurs supportés',
      viewEcuList: 'Voir tous les calculateurs',
      requestFileForBrand: 'Demander un fichier pour cette marque',
      notFoundTitle: 'Vous ne trouvez pas votre véhicule ?',
      notFoundDesc: 'Contactez notre équipe CARECU. Nous étudierons votre demande et vérifierons la compatibilité avant toute intervention.',
      contactTeamBtn: 'Contacter l\'équipe CARECU',
      copyRefBtn: 'Copier les références',
      copiedNotice: 'Références copiées !'
    },
    contact: {
      title: 'Envoyez-nous un message',
      subtitle: 'Pour toute demande de service ou de devis, veuillez remplir le formulaire ci-dessous.',
      formTitle: 'Formulaire de demande de service ou devis',
      nameLabel: 'Nom complet',
      namePlaceholder: 'Votre prénom et nom',
      emailLabel: 'Adresse e-mail',
      emailPlaceholder: 'exemple@domaine.com',
      phoneLabel: 'Numéro WhatsApp / Téléphone',
      phonePlaceholder: '037 38 247 99 ou numéro international',
      vehicleLabel: 'Marque et modèle du véhicule',
      vehiclePlaceholder: 'Ex: Audi A4 2.0 TDI 150ch 2018',
      serviceLabel: 'Type de service demandé',
      serviceDefault: 'Sélectionnez un service...',
      messageLabel: 'Votre message',
      messagePlaceholder: 'Précisez votre demande, références du calculateur si connues (ex: Bosch EDC17C64), symptômes ou souhaits de calibration...',
      submitButton: 'Envoyer le message',
      sendingButton: 'Envoi en cours...',
      successTitle: 'Message envoyé avec succès !',
      successMessage: 'Merci pour votre demande. L\'équipe technique CARECU vous répondra dans les plus brefs délais.',
      errorTitle: 'Une erreur est survenue',
      errorMessage: 'Impossible d\'envoyer le message pour le moment. Veuillez réessayer ou nous contacter directement via WhatsApp ou e-mail.',
      directTitle: 'Contact direct',
      whatsappTitle: 'WhatsApp',
      whatsappDesc: 'Contactez-nous directement pour obtenir une réponse rapide.',
      whatsappBtn: 'Ouvrir WhatsApp',
      emailTitle: 'E-mail',
      emailDesc: 'Envoyez-nous vos demandes et informations techniques.',
      facebookTitle: 'Facebook',
      facebookDesc: 'Suivez CARECU pour découvrir nos services et actualités.'
    },
    footer: {
      disclaimerTitle: 'Informations',
      disclaimerText: 'Chaque demande fait l\'objet d\'une vérification de compatibilité selon les caractéristiques du véhicule et les références du calculateur.',
      rights: '© 2026 CARECU. Tous droits réservés.',
      slogan: 'Performance • Precision • Innovation',
      quickLinks: 'Navigation rapide',
      directPhone: 'Tél / WhatsApp : 0373824799'
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      ecuFiles: 'ECU Files',
      contact: 'Contact',
      langSelect: 'Language',
      tagline: 'Performance • Precision • Innovation',
      directCall: 'Quick Contact',
      requestQuote: 'Request a Quote'
    },
    home: {
      heroTag: 'Automotive Electronic Engineering',
      badgePill: 'Specialized ECU & WinOLS Workshop',
      box1Title: 'ECU Remapping for all car brands',
      box1Sub: 'Custom calibration and performance tuning for all passenger cars, commercial and specialty vehicles.',
      box1Action: 'Explore our services',
      box2Title: 'File modification on WinOLS',
      box2Sub: 'Professional 2D/3D engine map calibration with precise injection, boost and torque limiters.',
      box2Action: 'Learn more',
      box3Title: 'ECU FILES SALES',
      box3Sub: 'Certified, dyno-tested ECU files for over 25 car brands. Fast delivery & instant support.',
      box3Action: 'Browse ECU database',
      slide1Title: 'ECU Remapping for all car brands',
      slide1Desc: 'State-of-the-art facility dedicated to cloning, reproduction, and remapping of automotive engine control units. KTAG hardware, diagnostics, and multi-brand coverage.',
      slide1Badge: 'Multi-Brand ECU Programming & Cloning',
      slide2Title: 'File modification on WinOLS',
      slide2Desc: 'Professional environment dedicated to precision ECU file calibration. 3D maps visualization for injection, boost pressure, and torque for optimum efficiency.',
      slide2Badge: 'WinOLS High Precision Calibration',
      techTitle: 'Technical Precision & Advanced Hardware',
      techSubtitle: 'We employ official electronic communication protocols (Boot, OBD, Bench, BDM) ensuring total integrity of your engine management unit.',
      kpi1Number: '25+',
      kpi1Label: 'Automotive brands supported',
      kpi2Number: '100%',
      kpi2Label: 'WinOLS verified calibrations',
      kpi3Number: '400+',
      kpi3Label: 'ECU models & protocols covered',
      kpi4Number: '24/7',
      kpi4Label: 'Technical advisory & quick turnaround',
      bannerCtaTitle: 'Need a calibrated ECU file or custom remapping?',
      bannerCtaDesc: 'Speak directly with our engineers to verify compatibility with your vehicle and receive a tailored quote.',
      bannerCtaButton: 'Chat on WhatsApp',
      contactWhatsappText: 'Contact via WhatsApp: 0373824799'
    },
    services: {
      mainTitle: 'Our Professional Services',
      mainSubtitle: 'Software engineering and automotive electronics solutions adhering to the strictest engineering tolerances.',
      secATitle: 'A. ENGINE REMAPPING & PERFORMANCE',
      secASubtitle: 'Bespoke calibrations adapted to the mechanical specifications of each powertrain.',
      stage1Title: 'Stage 1 — Remapping',
      stage1Badge: 'Original configuration',
      stage1Desc: 'Engine calibration adapted to the original vehicle configuration, strictly respecting mechanical safety limits and applicable standards.',
      stage1Specs: [
        'Smooth power and torque delivery increase',
        'Improved fuel economy under normal driving conditions',
        'Total respect of manufacturer safety margins',
        'No hardware modification required'
      ],
      stage2Title: 'Stage 2 — Advanced Calibration',
      stage2Badge: 'Hardware modified setup',
      stage2Desc: 'Calibration tailored for vehicles with compatible hardware upgrades. Each application undergoes preliminary technical evaluation.',
      stage2Specs: [
        'For upgraded vehicles (exhaust downpipe, intake, intercooler)',
        'Custom map calibration adapted to upgraded components',
        'In-depth review of diagnostic data and sensor logs',
        'Thermal reliability and mechanical safety safeguarded'
      ],
      secBTitle: 'B. ELECTRONIC SYSTEMS & VEHICLE FUNCTIONS',
      secBSubtitle: 'Diagnostics and electronic solutions for engine control units',
      secBIntro: 'We study requests concerning various electronic automotive systems and vehicle functions.',
      dpfTitle: 'DPF / FAP — Diesel Particulate Filter',
      dpfSubtitle: 'Exhaust particulate management',
      dpfDesc: 'Diagnostic and maintenance solutions for particulate filtration systems.',
      egrTitle: 'EGR — Exhaust Gas Recirculation',
      egrSubtitle: 'Gas recirculation and emission control',
      egrDesc: 'Diagnostic and technical assistance regarding EGR valve systems.',
      adblueTitle: 'AdBlue / SCR',
      adblueSubtitle: 'Selective Catalytic Reduction',
      adblueDesc: 'Diagnostic and technical assistance regarding selective catalytic reduction systems.',
      immoTitle: 'Immobilizer — Anti-Theft System',
      immoSubtitle: 'Authorized start sequence solutions',
      immoDesc: 'Diagnostic and authorized interventions on vehicle immobilizer systems, upon formal verification of vehicle ownership.',
      requestThisService: 'Request a quote for this service',
      guaranteeNotice: 'All interventions begin with electronic diagnostic verification of ECU health and overall vehicle operating state.'
    },
    ecu: {
      mainTitle: 'Vehicle ECU Files Catalog',
      introLead: 'Here are all the automotive brands we support for remapping, diagnostic services, and ECU file sales.',
      introContactPrompt: 'CARECU provides custom ECU file solutions and programming services for a comprehensive selection of vehicle manufacturers. Feel free to contact us anytime for pricing.',
      introGenerationNote: 'We work across multiple generations of engine control units and automotive electronics according to specific part references and vehicle specifications.',
      sectionTitle: 'Supported Brands',
      searchPlaceholder: 'Search brand (e.g. BMW, Audi...) or ECU model (e.g. EDC17, Simos, MD1CS)...',
      allBrands: 'All Brands',
      filteredCount: 'brands displayed',
      ecusCount: 'supported ECUs',
      viewEcuList: 'View all ECUs',
      requestFileForBrand: 'Request file for this brand',
      notFoundTitle: 'Cannot find your vehicle model?',
      notFoundDesc: 'Get in touch with our CARECU engineering team. We will review your ECU part numbers and confirm compatibility prior to any work.',
      contactTeamBtn: 'Contact CARECU Team',
      copyRefBtn: 'Copy ECU references',
      copiedNotice: 'References copied to clipboard!'
    },
    contact: {
      title: 'Send Us a Message',
      subtitle: 'For service requests or pricing quotes, please complete the form below.',
      formTitle: 'Service & Quotation Request Form',
      nameLabel: 'Full Name',
      namePlaceholder: 'Your first and last name',
      emailLabel: 'Email Address',
      emailPlaceholder: 'example@domain.com',
      phoneLabel: 'WhatsApp / Phone Number',
      phonePlaceholder: '037 38 247 99 or international number',
      vehicleLabel: 'Vehicle Brand & Model',
      vehiclePlaceholder: 'E.g. Audi A4 2.0 TDI 150hp 2018',
      serviceLabel: 'Requested Service Type',
      serviceDefault: 'Select a service...',
      messageLabel: 'Your Message',
      messagePlaceholder: 'Please specify your requirements, known ECU part references (e.g. Bosch EDC17C64), symptoms, or calibration goals...',
      submitButton: 'Send Message',
      sendingButton: 'Sending...',
      successTitle: 'Message Sent Successfully!',
      successMessage: 'Thank you for your message. The CARECU technical team will review your inquiry and respond shortly.',
      errorTitle: 'Submission Error',
      errorMessage: 'Could not send message. Please retry or contact us directly via WhatsApp or email.',
      directTitle: 'Direct Contact',
      whatsappTitle: 'WhatsApp',
      whatsappDesc: 'Contact us directly for fast technical turnaround.',
      whatsappBtn: 'Open WhatsApp',
      emailTitle: 'E-mail',
      emailDesc: 'Send technical requests and calibration files.',
      facebookTitle: 'Facebook',
      facebookDesc: 'Follow CARECU to explore our latest works and news.'
    },
    footer: {
      disclaimerTitle: 'Information',
      disclaimerText: 'Every request undergoes electronic compatibility verification tailored to specific vehicle characteristics and ECU references.',
      rights: '© 2026 CARECU. All rights reserved.',
      slogan: 'Performance • Precision • Innovation',
      quickLinks: 'Quick Navigation',
      directPhone: 'Tel / WhatsApp: 0373824799'
    }
  },
  mg: {
    nav: {
      home: 'Fandraisana',
      services: 'Tolotra',
      ecuFiles: 'Raki-tahiry ECU',
      contact: 'Fifandraisana',
      langSelect: 'Fiteny',
      tagline: 'Performance • Precision • Innovation',
      directCall: 'Antsoy haingana',
      requestQuote: 'Mangataha tombana vidiny'
    },
    home: {
      heroTag: 'Elektronika sy Injenieria Maotera',
      badgePill: 'Atrikasa manokana ho an\'ny ECU & WinOLS',
      box1Title: 'Fandrindrana solosaina maotera (ECU) ho an\'ny marika rehetra',
      box1Sub: 'Fanatsarana sy fanitsiana manokana ho an\'ny fiara maivana, fiara fitaterana ary fiara samihafa.',
      box1Action: 'Hijery ny tolotra',
      box2Title: 'Fanovàna sy fanitsiana raki-tahiry amin\'ny WinOLS',
      box2Sub: 'Famantarana sy fanitsiana sarintany 2D/3D matihanina amin\'ny fampidirana solika sy tsindry turbo.',
      box2Action: 'Hahafantatra bebe kokoa',
      box3Title: 'FIVAROTANA RAKI-TAHIRY ECU',
      box3Sub: 'Raki-tahiry efa voasedra sy voamarina ho an\'ny marika fiara mihoatra ny 25. Valiny haingana.',
      box3Action: 'Hijery ny lisitra ECU',
      slide1Title: 'Fandrindrana solosaina maotera ho an\'ny marika rehetra',
      slide1Desc: 'Toerana matihanina natokana ho an\'ny fanaovana dika mitovy (clonage) sy fandrindrana solosaina maotera fiara rehetra. Fitaovana KTAG manara-penitra sy fitiliana.',
      slide1Badge: 'Fandrindrana & Clonage Marika Rehetra',
      slide2Title: 'Fanovàna raki-tahiry amin\'ny WinOLS',
      slide2Desc: 'Toerana matihanina natokana ho an\'ny fanitsiana avo lenta ny raki-tahiry ECU amin\'ny WinOLS. Fijerena sary 3D an\'ny fandrindrana solika sy herin\'ny maotera.',
      slide2Badge: 'Fanitsiana Avo Lenta amin\'ny WinOLS',
      techTitle: 'Fahaiza-manao ara-teknika & Fitaovana manara-penitra',
      techSubtitle: 'Mampiasa fomba fifandraisana elektronika ofisialy izahay (Boot, OBD, Bench, BDM) mba hiantohana ny fiarovana tanteraka ny solosaina maoteranao.',
      kpi1Number: '25+',
      kpi1Label: 'Marika fiara voaray an-tanana',
      kpi2Number: '100%',
      kpi2Label: 'Raki-tahiry voasedra amin\'ny WinOLS',
      kpi3Number: '400+',
      kpi3Label: 'Karazana ECU sy protocole voafehy',
      kpi4Number: '24/7',
      kpi4Label: 'Fanampiana sy fandraisana haingana',
      bannerCtaTitle: 'Mila raki-tahiry na fanovana fandrindrana ECU ve ianao ?',
      bannerCtaDesc: 'Mifandraisa mivantana amin\'ny injenieranay mba hanamarinana ny solosaina maoteranao sy hahazoanao tolotra manokana.',
      bannerCtaButton: 'Handefa hafatra amin\'ny WhatsApp',
      contactWhatsappText: 'Hiresaka amin\'ny WhatsApp : 0373824799'
    },
    services: {
      mainTitle: 'Ireo tolotra matihanina atolotray',
      mainSubtitle: 'Vahaolana ara-kajy mirindra sy elektronika fiara manaraka ny fenitra ara-teknika avo lenta indrindra.',
      secATitle: 'A. FANDRINDRAM-PAHEFANA SY HERIN\'NY MAOTERA',
      secASubtitle: 'Fanitsiana manokana mifanaraka amin\'ny toetry ny maoteran\'ny fiara tsirairay.',
      stage1Title: 'Stage 1 — Fandrindrana maotera',
      stage1Badge: 'Fiara araka ny fiavian\'ny orinasa',
      stage1Desc: 'Fanitsiana maotera mifanaraka amin\'ny fitaovana tany am-boalohany, manaja tanteraka ny fetra ara-mekanika sy ny fitsipika rehetra.',
      stage1Specs: [
        'Fitomboan\'ny hery sy tanjaky ny maotera',
        'Fampihenana ny fanjifana solika amin\'ny fandehanana milamina',
        'Fanajana tanteraka ny fetra napetraky ny mpanamboatra',
        'Tsy mila fanovana kojakoja mekanika'
      ],
      stage2Title: 'Stage 2 — Fanitsiana maotera efa nisy fanovana',
      stage2Badge: 'Fitaovana mekanika efa novaina',
      stage2Desc: 'Fanitsiana natokana ho an\'ny fiara efa nisy fanovana fitaovana mekanika (echappement, admission). Ilaina ny fandinihana mialoha.',
      stage2Specs: [
        'Ho an\'ny fiara efa manana fanatsarana (downpipe, intercooler, filtre)',
        'Fandrindrana manokana mifanaraka amin\'ireo kojakoja napetraka',
        'Fijerena sy fandinihana lalina ny fandrefesana maotera',
        'Fiarovana ny mari-pana sy ny faharetan\'ny maotera'
      ],
      secBTitle: 'B. RAFITRA ELEKTRONIKA SY FOTSINY AMIN\'NY FIARA',
      secBSubtitle: 'Fitiliana sy vahaolana elektronika ho an\'ny solosaina maotera',
      secBIntro: 'Mandray an-tanana ny fangatahana rehetra mikasika ny rafitra elektronika sy ny fiasan\'ny fiara izahay.',
      dpfTitle: 'DPF / FAP — Sivana fandoroana setroka',
      dpfSubtitle: 'Fitantanana ny sivana amin\'ny maotera diesel',
      dpfDesc: 'Fitiliana sy vahaolana ara-pahasalamana ho an\'ny rafitra sivana setroka.',
      egrTitle: 'EGR — Fampodiana sy fanadiovana entona',
      egrSubtitle: 'Fitantanana ny fivoahan\'ny setroka sy valva EGR',
      egrDesc: 'Fitiliana sy fanampiana ara-teknika mikasika ny rafitra valva EGR.',
      adblueTitle: 'AdBlue / SCR',
      adblueSubtitle: 'Fampihenana ny loto amin\'ny alalan\'ny tsindry simika',
      adblueDesc: 'Fitiliana sy fanampiana ara-teknika momba ny rafitra AdBlue / SCR.',
      immoTitle: 'Immobilizer — Rafitra fiarovana tsy hisian\'ny fiaingana',
      immoSubtitle: 'Fiarovana sy fanomezana alalana hiainga',
      immoDesc: 'Fitiliana sy asa ara-dalàna amin\'ny rafitra antidémarrage, aorian\'ny fanamarinana ny maha-tompon\'ny fiara.',
      requestThisService: 'Mangataha tombam-bidy amin\'ity tolotra ity',
      guaranteeNotice: 'Ny asa rehetra dia ialohavan\'ny fitiliana ara-elektronika mba hiantohana ny fahasalamana sy ny fiasan\'ny maotera.'
    },
    ecu: {
      mainTitle: 'Pejy Raki-tahiry ECU ho an\'ny fiara',
      introLead: 'Indreto ireo marika fiara rehetra azonay iasana sy ividianana raki-tahiry ECU.',
      introContactPrompt: 'Manolotra vahaolana raki-tahiry ECU sy tolotra fandrindrana ho an\'ny marika fiara maro ny CARECU. Mifandraisa aminay amin\'ny fotoana rehetra hahazoana ny vidiny.',
      introGenerationNote: 'Miasa amin\'ny taranaka solosaina maotera samihafa sy rafitra elektronika izahay, arakaraka ny laharana sy ny mombamomba ny fiara tsirairay.',
      sectionTitle: 'Marika voaray an-tanana',
      searchPlaceholder: 'Hikaroka marika (oh: BMW, Audi...) na solosaina ECU (oh: EDC17, Simos, MD1CS)...',
      allBrands: 'Marika rehetra',
      filteredCount: 'marika hita',
      ecusCount: 'solosaina ECU voaray',
      viewEcuList: 'Hijery ny lisitry ny ECU rehetra',
      requestFileForBrand: 'Hangataka raki-tahiry ho an\'ity marika ity',
      notFoundTitle: 'Tsy hitanao ve ny fiaranao ?',
      notFoundDesc: 'Mifandraisa amin\'ny ekipan\'ny CARECU. Hodinihinay ny fangatahanao ary ho hamarininay ny fahafahana miasa mialoha ny fidiran\'ny tanana.',
      contactTeamBtn: 'Hifandray amin\'ny ekipa CARECU',
      copyRefBtn: 'Handika ny laharana ECU',
      copiedNotice: 'Voadikan\'ny fitadidiana !'
    },
    contact: {
      title: 'Mandefasa hafatra ho anay',
      subtitle: 'Ho an\'ny fangatahana tolotra na tombana vidiny, fenoy azafady ity taratasy eto ambany ity.',
      formTitle: 'Taratasy fangatahana tolotra na tombana vidiny',
      nameLabel: 'Anarana feno',
      namePlaceholder: 'Anarana sy fanampin\'anarana',
      emailLabel: 'Adiresy mailaka',
      emailPlaceholder: 'ohatra@domaine.com',
      phoneLabel: 'Laharana WhatsApp / Finday',
      phonePlaceholder: '037 38 247 99 na laharana hafa',
      vehicleLabel: 'Marika sy karazan\'ny fiara',
      vehiclePlaceholder: 'Oh: Audi A4 2.0 TDI 150ch 2018',
      serviceLabel: 'Karazan\'ny tolotra ilaina',
      serviceDefault: 'Fidio ny tolotra ilainao...',
      messageLabel: 'Hafatrao',
      messagePlaceholder: 'Hazavao tsara ny ilainao, ny laharan\'ny ECU raha fantatrao (oh: Bosch EDC17C64), ny olana na ny fanatsarana tadiavinao...',
      submitButton: 'Handefa ny hafatra',
      sendingButton: 'Eo am-pandefasana...',
      successTitle: 'Lasa soa aman-tsara ny hafatrao !',
      successMessage: 'Misaotra anao tamin\'ny hafatrao. Hamaly anao haingana araka izay tratra ny ekipa teknikan\'ny CARECU.',
      errorTitle: 'Nisy olana nitranga',
      errorMessage: 'Tsy afaka nalefa ny hafatra tamin\'ity fotoana ity. Manandrama indray na mifandraisa mivantana amin\'ny WhatsApp na mailaka.',
      directTitle: 'Fifandraisana mivantana',
      whatsappTitle: 'WhatsApp',
      whatsappDesc: 'Mifandraisa mivantana aminay hahazoana valiny haingana.',
      whatsappBtn: 'Hanokatra WhatsApp',
      emailTitle: 'Mailaka',
      emailDesc: 'Alefaso aminay ny fangatahanao sy ny antontan-taratasy teknika.',
      facebookTitle: 'Facebook',
      facebookDesc: 'Araho ny pejy CARECU hahitana ireo tolotra sy vaovao farany.'
    },
    footer: {
      disclaimerTitle: 'Fampahafantarana',
      disclaimerText: 'Ny fangatahana tsirairay dia iharan\'ny fanamarinana ny fifanarahan\'ny fitaovana arakaraka ny toetry ny fiara sy ny laharana solosaina maotera.',
      rights: '© 2026 CARECU. Zo rehetra voatokana.',
      slogan: 'Performance • Precision • Innovation',
      quickLinks: 'Fijerena haingana',
      directPhone: 'Finday / WhatsApp : 0373824799'
    }
  }
};
