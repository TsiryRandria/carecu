import React from 'react';

interface BrandLogoProps {
  brandId: string;
  className?: string;
  size?: number;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ brandId, className = 'w-8 h-8', size = 32 }) => {
  switch (brandId.toLowerCase()) {
    // 1. AUDI - Four interlocking silver rings
    case 'audi':
      return (
        <svg viewBox="0 0 100 50" className={className} width={size * 2} height={size}>
          <defs>
            <linearGradient id="audi-chrome" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="50%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
          </defs>
          <circle cx="21" cy="25" r="16" fill="none" stroke="url(#audi-chrome)" strokeWidth="4.5" />
          <circle cx="40" cy="25" r="16" fill="none" stroke="url(#audi-chrome)" strokeWidth="4.5" />
          <circle cx="60" cy="25" r="16" fill="none" stroke="url(#audi-chrome)" strokeWidth="4.5" />
          <circle cx="79" cy="25" r="16" fill="none" stroke="url(#audi-chrome)" strokeWidth="4.5" />
        </svg>
      );

    // 2. BMW - Roundel with blue and white quarters
    case 'bmw':
      return (
        <svg viewBox="0 0 100 100" className={className} width={size} height={size}>
          <circle cx="50" cy="50" r="48" fill="#1e293b" stroke="#cbd5e1" strokeWidth="2.5" />
          <circle cx="50" cy="50" r="34" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1.5" />
          {/* Blue quarters */}
          <path d="M 50 16 A 34 34 0 0 1 84 50 L 50 50 Z" fill="#0066B1" />
          <path d="M 50 84 A 34 34 0 0 1 16 50 L 50 50 Z" fill="#0066B1" />
          {/* White quarters */}
          <path d="M 16 50 A 34 34 0 0 1 50 16 L 50 50 Z" fill="#ffffff" />
          <path d="M 84 50 A 34 34 0 0 1 50 84 L 50 50 Z" fill="#ffffff" />
          {/* Subtle cross hair divider */}
          <line x1="16" y1="50" x2="84" y2="50" stroke="#94a3b8" strokeWidth="1" />
          <line x1="50" y1="16" x2="50" y2="84" stroke="#94a3b8" strokeWidth="1" />
          <text x="50" y="12" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="900" fontFamily="sans-serif">BMW</text>
        </svg>
      );

    // 3. CHEVROLET - Gold bowtie emblem with chrome edge
    case 'chevrolet':
      return (
        <svg viewBox="0 0 100 45" className={className} width={size * 2} height={size}>
          <defs>
            <linearGradient id="chevy-gold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="50%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
            <linearGradient id="chevy-border" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>
          </defs>
          <g transform="translate(5, 5)">
            <polygon points="0,12 88,6 90,22 2,28" fill="url(#chevy-border)" />
            <polygon points="30,0 60,0 58,34 28,34" fill="url(#chevy-border)" />
            <polygon points="3,14 85,9 87,20 5,25" fill="url(#chevy-gold)" />
            <polygon points="32,2 58,2 56,32 30,32" fill="url(#chevy-gold)" />
          </g>
        </svg>
      );

    // 4. CITROËN - Double chrome chevrons
    case 'citroen':
      return (
        <svg viewBox="0 0 80 80" className={className} width={size} height={size}>
          <defs>
            <linearGradient id="citroen-silver" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
          </defs>
          {/* Top Chevron */}
          <polygon points="40,8 68,26 60,33 40,20 20,33 12,26" fill="url(#citroen-silver)" stroke="#334155" strokeWidth="0.5" />
          {/* Bottom Chevron */}
          <polygon points="40,36 68,54 60,61 40,48 20,61 12,54" fill="url(#citroen-silver)" stroke="#334155" strokeWidth="0.5" />
        </svg>
      );

    // 5. FORD - Blue Oval with classic white cursive
    case 'ford':
      return (
        <svg viewBox="0 0 100 56" className={className} width={size * 1.8} height={size}>
          <defs>
            <linearGradient id="ford-blue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00479b" />
              <stop offset="50%" stopColor="#002b66" />
              <stop offset="100%" stopColor="#00183b" />
            </linearGradient>
          </defs>
          <ellipse cx="50" cy="28" rx="48" ry="26" fill="#cbd5e1" />
          <ellipse cx="50" cy="28" rx="45" ry="23" fill="url(#ford-blue)" />
          <ellipse cx="50" cy="28" rx="42" ry="20" fill="none" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.8" />
          <text x="50" y="35" textAnchor="middle" fill="#ffffff" fontSize="22" fontWeight="900" fontStyle="italic" fontFamily="cursive, serif">
            Ford
          </text>
        </svg>
      );

    // 6. HONDA - Bold stylized chrome H
    case 'honda':
      return (
        <svg viewBox="0 0 80 80" className={className} width={size} height={size}>
          <defs>
            <linearGradient id="honda-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>
          </defs>
          {/* Trapezoidal rounded border */}
          <path d="M 12 16 Q 40 10 68 16 Q 74 44 68 68 Q 40 72 12 68 Q 6 44 12 16 Z" fill="none" stroke="url(#honda-grad)" strokeWidth="4" />
          {/* Stylized H */}
          <path d="M 22 22 L 28 62 L 35 62 L 35 44 L 45 44 L 45 62 L 52 62 L 58 22 L 50 22 L 46 38 L 34 38 L 30 22 Z" fill="url(#honda-grad)" />
        </svg>
      );

    // 7. HYUNDAI - KIA - Slanted H and KIA mark
    case 'hyundai-kia':
      return (
        <svg viewBox="0 0 100 60" className={className} width={size * 1.7} height={size}>
          <defs>
            <linearGradient id="hyundai-silver" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
          </defs>
          {/* Slanted oval */}
          <ellipse cx="50" cy="30" rx="44" ry="24" transform="rotate(-8 50 30)" fill="none" stroke="url(#hyundai-silver)" strokeWidth="4.5" />
          {/* Slanted H */}
          <path d="M 33 44 C 36 30 40 22 43 18 C 45 18 43 28 41 33 C 48 30 54 28 59 31 C 60 25 61 18 64 16 C 66 16 64 28 60 44 C 58 44 59 36 57 34 C 52 35 46 37 42 39 C 40 42 39 44 33 44 Z" fill="url(#hyundai-silver)" />
        </svg>
      );

    // 8. ISUZU - Red bold twin pillar logo
    case 'isuzu':
      return (
        <svg viewBox="0 0 90 60" className={className} width={size * 1.5} height={size}>
          <g fill="#ea1c24">
            <polygon points="12,10 32,10 24,50 4,50" />
            <polygon points="40,10 60,10 52,50 32,50" />
            <polygon points="68,10 88,10 80,50 60,50" opacity="0.9" />
          </g>
          <text x="46" y="58" textAnchor="middle" fill="#ea1c24" fontSize="10" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">
            ISUZU
          </text>
        </svg>
      );

    // 9. IVECO - Bold blue emblem
    case 'iveco':
      return (
        <svg viewBox="0 0 100 45" className={className} width={size * 2} height={size}>
          <rect x="2" y="6" width="96" height="33" rx="4" fill="#003b7a" stroke="#cbd5e1" strokeWidth="1" />
          <text x="50" y="29" textAnchor="middle" fill="#ffffff" fontSize="18" fontWeight="900" fontFamily="sans-serif" letterSpacing="2">
            IVECO
          </text>
        </svg>
      );

    // 10. JEEP - 7-Slot Grille & Round Lights
    case 'jeep':
      return (
        <svg viewBox="0 0 90 50" className={className} width={size * 1.8} height={size}>
          <rect x="4" y="8" width="82" height="34" rx="6" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
          {/* Headlights */}
          <circle cx="15" cy="25" r="7" fill="#fbbf24" stroke="#ffffff" strokeWidth="1" />
          <circle cx="75" cy="25" r="7" fill="#fbbf24" stroke="#ffffff" strokeWidth="1" />
          {/* 7 Vertical Grille Slots */}
          {[28, 35, 42, 49, 56, 63].map((x, i) => (
            <rect key={i} x={x - 2} y="15" width="4" height="20" rx="2" fill="#94a3b8" />
          ))}
          <text x="50" y="47" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="900" fontFamily="sans-serif">
            JEEP
          </text>
        </svg>
      );

    // 11. LAND ROVER - Green oval with silver script
    case 'land-rover':
      return (
        <svg viewBox="0 0 100 55" className={className} width={size * 1.8} height={size}>
          <ellipse cx="50" cy="27" rx="48" ry="25" fill="#cbd5e1" />
          <ellipse cx="50" cy="27" rx="45" ry="22" fill="#005a2b" />
          <ellipse cx="50" cy="27" rx="42" ry="19" fill="none" stroke="#e2e8f0" strokeWidth="1" />
          <text x="50" y="24" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">
            LAND
          </text>
          <text x="50" y="36" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">
            ROVER
          </text>
        </svg>
      );

    // 12. LEXUS - Stylized L inside oval
    case 'lexus':
      return (
        <svg viewBox="0 0 90 60" className={className} width={size * 1.5} height={size}>
          <defs>
            <linearGradient id="lexus-chrome" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
          </defs>
          <ellipse cx="45" cy="30" rx="40" ry="24" fill="none" stroke="url(#lexus-chrome)" strokeWidth="4.5" />
          {/* Stylized L */}
          <path d="M 58 16 C 44 24 35 34 33 46 L 62 46 L 62 40 L 41 40 C 42 34 49 26 58 21 Z" fill="url(#lexus-chrome)" />
        </svg>
      );

    // 13. MAZDA - Winged M inside oval
    case 'mazda':
      return (
        <svg viewBox="0 0 90 65" className={className} width={size * 1.4} height={size}>
          <defs>
            <linearGradient id="mazda-chrome" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
          </defs>
          <ellipse cx="45" cy="32" rx="40" ry="28" fill="none" stroke="url(#mazda-chrome)" strokeWidth="4.5" />
          {/* Winged M */}
          <path d="M 24 24 C 30 38 45 46 45 46 C 45 46 60 38 66 24 C 54 36 45 36 45 36 C 45 36 36 36 24 24 Z" fill="url(#mazda-chrome)" />
        </svg>
      );

    // 14. MERCEDES-BENZ - 3-Pointed star in silver ring
    case 'mercedes':
      return (
        <svg viewBox="0 0 80 80" className={className} width={size} height={size}>
          <defs>
            <linearGradient id="mb-silver" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>
            <linearGradient id="mb-dark" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>
          </defs>
          <circle cx="40" cy="40" r="36" fill="none" stroke="url(#mb-silver)" strokeWidth="4" />
          {/* Top ray */}
          <polygon points="40,6 40,40 37,38" fill="url(#mb-dark)" />
          <polygon points="40,6 40,40 43,38" fill="url(#mb-silver)" />
          {/* Bottom right ray */}
          <polygon points="69,57 40,40 43,43" fill="url(#mb-dark)" />
          <polygon points="69,57 40,40 40,37" fill="url(#mb-silver)" />
          {/* Bottom left ray */}
          <polygon points="11,57 40,40 40,37" fill="url(#mb-dark)" />
          <polygon points="11,57 40,40 37,43" fill="url(#mb-silver)" />
        </svg>
      );

    // 15. MINI COOPER - Winged emblem
    case 'mini-cooper':
      return (
        <svg viewBox="0 0 100 45" className={className} width={size * 2} height={size}>
          <g fill="#94a3b8">
            {/* Left Wings */}
            <polygon points="35,14 6,20 8,24 35,18" />
            <polygon points="35,19 12,25 14,28 35,22" />
            <polygon points="35,23 20,29 22,32 35,26" />
            {/* Right Wings */}
            <polygon points="65,14 94,20 92,24 65,18" />
            <polygon points="65,19 88,25 86,28 65,22" />
            <polygon points="65,23 80,29 78,32 65,26" />
          </g>
          {/* Center Circle */}
          <circle cx="50" cy="22" r="15" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2" />
          <text x="50" y="26" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="900" fontFamily="sans-serif">
            MINI
          </text>
        </svg>
      );

    // 16. MITSUBISHI - 3 Red diamonds
    case 'mitsubishi':
      return (
        <svg viewBox="0 0 80 80" className={className} width={size} height={size}>
          <g fill="#e60012">
            {/* Top diamond */}
            <polygon points="40,10 52,32 40,54 28,32" />
            {/* Bottom left diamond */}
            <polygon points="28,32 40,54 28,76 16,54" transform="rotate(120 40 54)" />
            {/* Bottom right diamond */}
            <polygon points="28,32 40,54 28,76 16,54" transform="rotate(-120 40 54)" />
          </g>
        </svg>
      );

    // 17. NISSAN - Chrome circular emblem with central horizontal bar
    case 'nissan':
      return (
        <svg viewBox="0 0 80 80" className={className} width={size} height={size}>
          <defs>
            <linearGradient id="nissan-chrome" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
          </defs>
          <circle cx="40" cy="40" r="34" fill="none" stroke="url(#nissan-chrome)" strokeWidth="4.5" />
          <rect x="4" y="32" width="72" height="16" rx="2" fill="#0f172a" stroke="url(#nissan-chrome)" strokeWidth="2.5" />
          <text x="40" y="44" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">
            NISSAN
          </text>
        </svg>
      );

    // 18. PEUGEOT - Standing Lion Heraldic Shield
    case 'peugeot':
      return (
        <svg viewBox="0 0 70 80" className={className} width={size * 0.9} height={size}>
          <defs>
            <linearGradient id="peugeot-blue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>
            <linearGradient id="peugeot-lion" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>
          </defs>
          {/* Shield outline */}
          <path d="M 6 6 L 64 6 L 64 48 C 64 66 35 76 35 76 C 35 76 6 66 6 48 Z" fill="url(#peugeot-blue)" stroke="#94a3b8" strokeWidth="2.5" />
          {/* Peugeot Lion Roar / Silhouette */}
          <path d="M 28 20 C 35 15 48 18 52 24 C 48 26 42 27 40 31 C 45 31 50 33 52 38 C 45 37 40 40 38 46 C 42 47 48 50 46 56 C 42 54 38 52 34 56 C 34 50 31 46 27 44 C 30 38 29 28 28 20 Z" fill="url(#peugeot-lion)" />
          <text x="35" y="68" textAnchor="middle" fill="#ffffff" fontSize="6.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">
            PEUGEOT
          </text>
        </svg>
      );

    // 19. PORSCHE - Stuttgart crest with horse and stripes
    case 'porsche':
      return (
        <svg viewBox="0 0 70 85" className={className} width={size * 0.85} height={size}>
          <defs>
            <linearGradient id="porsche-gold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#a16207" />
            </linearGradient>
          </defs>
          {/* Crest shape */}
          <path d="M 6 8 L 64 8 L 64 50 C 64 70 35 80 35 80 C 35 80 6 70 6 50 Z" fill="url(#porsche-gold)" stroke="#78350f" strokeWidth="2" />
          {/* Red & Black quarters */}
          <rect x="12" y="18" width="20" height="22" fill="#dc2626" />
          <rect x="38" y="42" width="20" height="22" fill="#dc2626" />
          <line x1="12" y1="24" x2="32" y2="24" stroke="#000000" strokeWidth="2.5" />
          <line x1="12" y1="32" x2="32" y2="32" stroke="#000000" strokeWidth="2.5" />
          <line x1="38" y1="48" x2="58" y2="48" stroke="#000000" strokeWidth="2.5" />
          <line x1="38" y1="56" x2="58" y2="56" stroke="#000000" strokeWidth="2.5" />
          {/* Center inner shield with prancing horse */}
          <rect x="25" y="28" width="20" height="26" rx="3" fill="#eab308" stroke="#000000" strokeWidth="1" />
          <path d="M 33 46 C 31 42 34 35 37 34 C 36 38 41 37 40 42 C 37 44 38 48 35 50 Z" fill="#000000" />
          <text x="35" y="15" textAnchor="middle" fill="#000000" fontSize="6" fontWeight="900" fontFamily="sans-serif">
            PORSCHE
          </text>
        </svg>
      );

    // 20. RENAULT - Geometric chrome diamond (losange)
    case 'renault':
      return (
        <svg viewBox="0 0 70 85" className={className} width={size * 0.85} height={size}>
          <defs>
            <linearGradient id="renault-silver" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>
          </defs>
          {/* Outer Diamond */}
          <polygon points="35,6 64,42 35,78 6,42" fill="none" stroke="url(#renault-silver)" strokeWidth="6.5" strokeLinejoin="miter" />
          {/* Inner Hollow Diamond */}
          <polygon points="35,26 48,42 35,58 22,42" fill="none" stroke="url(#renault-silver)" strokeWidth="4.5" />
        </svg>
      );

    // 21. SUBARU - Deep blue oval with 6 silver stars
    case 'subaru':
      return (
        <svg viewBox="0 0 90 60" className={className} width={size * 1.5} height={size}>
          <ellipse cx="45" cy="30" rx="42" ry="26" fill="#cbd5e1" />
          <ellipse cx="45" cy="30" rx="39" ry="23" fill="#0b1b3d" />
          {/* 6 Pleiades stars */}
          <circle cx="34" cy="27" r="6" fill="#ffffff" />
          <circle cx="48" cy="22" r="4" fill="#ffffff" />
          <circle cx="58" cy="24" r="3.5" fill="#ffffff" />
          <circle cx="47" cy="36" r="3.5" fill="#ffffff" />
          <circle cx="57" cy="36" r="3.5" fill="#ffffff" />
          <circle cx="66" cy="33" r="3" fill="#ffffff" />
        </svg>
      );

    // 22. SUZUKI - Red stylized S with sharp cutouts
    case 'suzuki':
      return (
        <svg viewBox="0 0 70 70" className={className} width={size} height={size}>
          <path
            d="M 12 18 L 52 18 L 26 34 L 56 34 L 58 52 L 18 52 L 44 36 L 14 36 Z"
            fill="#e30613"
            stroke="#b91c1c"
            strokeWidth="1.5"
            strokeLinejoin="bevel"
          />
        </svg>
      );

    // 23. TOYOTA - 3 Interlocking chrome ellipses
    case 'toyota':
      return (
        <svg viewBox="0 0 90 65" className={className} width={size * 1.4} height={size}>
          <defs>
            <linearGradient id="toyota-chrome" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
          </defs>
          {/* Outer Ellipse */}
          <ellipse cx="45" cy="32" rx="40" ry="28" fill="none" stroke="url(#toyota-chrome)" strokeWidth="4.5" />
          {/* Inner Horizontal Ellipse */}
          <ellipse cx="45" cy="24" rx="24" ry="10" fill="none" stroke="url(#toyota-chrome)" strokeWidth="4" />
          {/* Inner Vertical Ellipse */}
          <ellipse cx="45" cy="34" rx="12" ry="20" fill="none" stroke="url(#toyota-chrome)" strokeWidth="4" />
        </svg>
      );

    // 24. VOLKSWAGEN - Classic circular V & W emblem
    case 'volkswagen':
      return (
        <svg viewBox="0 0 80 80" className={className} width={size} height={size}>
          <defs>
            <linearGradient id="vw-blue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#001e50" />
              <stop offset="100%" stopColor="#000b20" />
            </linearGradient>
            <linearGradient id="vw-chrome" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>
          </defs>
          <circle cx="40" cy="40" r="38" fill="url(#vw-blue)" stroke="url(#vw-chrome)" strokeWidth="4" />
          <circle cx="40" cy="40" r="33" fill="none" stroke="url(#vw-chrome)" strokeWidth="1.5" />
          {/* V letter on top */}
          <polygon points="26,16 33,16 40,34 47,16 54,16 43,40 37,40" fill="url(#vw-chrome)" />
          {/* W letter at bottom */}
          <polygon points="16,36 23,36 34,62 38,50 33,38 39,38 40,43 41,38 47,38 42,50 46,62 57,36 64,36 50,68 43,68 40,56 37,68 30,68" fill="url(#vw-chrome)" />
        </svg>
      );

    // 25. VOLVO - Iron mark with arrow and blue banner
    case 'volvo':
      return (
        <svg viewBox="0 0 85 85" className={className} width={size} height={size}>
          <defs>
            <linearGradient id="volvo-chrome" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
          </defs>
          {/* Circle ring */}
          <circle cx="38" cy="46" r="30" fill="none" stroke="url(#volvo-chrome)" strokeWidth="5.5" />
          {/* Upper-right Arrow */}
          <polygon points="60,24 78,6 64,6" fill="url(#volvo-chrome)" />
          <polygon points="78,6 78,20 74,10" fill="url(#volvo-chrome)" />
          {/* Central Blue Banner with VOLVO */}
          <rect x="8" y="40" width="60" height="13" rx="2" fill="#003057" stroke="#cbd5e1" strokeWidth="1" />
          <text x="38" y="50" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">
            VOLVO
          </text>
        </svg>
      );

    default:
      return (
        <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center font-bold text-red-500 font-display">
          {brandId.substring(0, 2).toUpperCase()}
        </div>
      );
  }
};
