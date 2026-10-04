import React from 'react';

export type LogoVariant = 'monogram-crest' | 'fouet-celeste' | 'ecrin-miroir' | 'signature-artisan';

interface BrandLogoProps {
  variant?: LogoVariant;
  size?: 'sm' | 'md' | 'lg' | 'xl' | number;
  className?: string;
  theme?: 'gold' | 'chocolate' | 'white' | 'currentColor';
  showText?: boolean;
  textClassName?: string;
}

const sizeMap = {
  sm: 32,
  md: 44,
  lg: 64,
  xl: 96,
};

export const LOGO_VARIANTS_INFO: Record<LogoVariant, {
  name: string;
  subtitle: string;
  concept: string;
  description: string;
  tags: string[];
}> = {
  'monogram-crest': {
    name: "L'Armoirie Monogramme A",
    subtitle: "Crest Haute Joaillerie Pâtissière",
    concept: "Monogramme 'A' ornemental avec fouet pâtissier croisé, étoile pâtissière et cartouche royal à sommet cintré.",
    description: "Inspiré des plus grandes maisons de haute gastronomie parisiennes. L'arche protectrice incarne le raffinement de l'atelier, tandis que l'étoile zénithale symbolise l'excellence et la créativité artisanale.",
    tags: ["Monogramme", "Classique Luxe", "Cartouche Royal", "Fouet Pâtissier"]
  },
  'fouet-celeste': {
    name: "Le Fouet Céleste",
    subtitle: "L'Emblème du Geste Artisanal",
    concept: "Fouet ballon stylisé dont les fils dessinent un cœur élancé et une goutte de nectar dorée.",
    description: "Met à l'honneur le geste et l'outil fondamental de la pâtisserie. Les courbes concentriques évoquent le foisonnement d'une ganache montée et la passion du fait-maison.",
    tags: ["Artisanat", "Geste du Pâtissier", "Lignes Pures", "Goutte Dorée"]
  },
  'ecrin-miroir': {
    name: "L'Écrin Miroir & Botanique",
    subtitle: "Fluidité du Nappage & Fruits Frais",
    concept: "Arabesque fluide figurant la coulée soyeuse d'un glaçage miroir, enluminée d'un rameau de figuier et baies.",
    description: "Une interprétation organique et moderne dédiée à ses entremets miroirs signatures. Les courbes fluides s'opposent avec équilibre à la géométrie végétale.",
    tags: ["Glaçage Miroir", "Botanique", "Figues & Baies", "Moderne Organique"]
  },
  'signature-artisan': {
    name: "Le Sceau de l'Atelier",
    subtitle: "Médaillon Sceau d'Authenticité",
    concept: "Sceau circulaire double filet orné d'un épi de blé doré, d'une spatule de finition et de l'initiale centrale.",
    description: "Le tampon de garantie artisanale : farine noble, pureté des matières premières et façonnage minutieux à la spatule.",
    tags: ["Sceau & Tampon", "Épi de Blé", "Spatule", "Authenticité"]
  }
};

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'monogram-crest',
  size = 'md',
  className = '',
  theme = 'gold',
  showText = false,
  textClassName = '',
}) => {
  const pixelSize = typeof size === 'number' ? size : sizeMap[size] || 44;

  const getThemeColors = () => {
    switch (theme) {
      case 'white':
        return {
          primary: '#FFFFFF',
          secondary: '#F5E6CC',
          accent: '#FFFFFF',
          fill: 'rgba(255, 255, 255, 0.08)',
        };
      case 'chocolate':
        return {
          primary: '#2F160A',
          secondary: '#5C3826',
          accent: '#A97E36',
          fill: 'rgba(47, 22, 10, 0.05)',
        };
      case 'currentColor':
        return {
          primary: 'currentColor',
          secondary: 'currentColor',
          accent: 'currentColor',
          fill: 'transparent',
        };
      case 'gold':
      default:
        return {
          primary: '#C59A4E',
          secondary: '#866028',
          accent: '#E4CDA2',
          fill: 'rgba(212, 176, 114, 0.08)',
        };
    }
  };

  const colors = getThemeColors();

  // SVG Variant 1: Monogram Crest
  const renderMonogramCrest = () => (
    <svg
      viewBox="0 0 100 100"
      width={pixelSize}
      height={pixelSize}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-300 group-hover:scale-105"
      role="img"
      aria-label="Logo Monogramme L'Atelier d'Aurélie"
    >
      {/* Subtle French cartouche / arch shield */}
      <path
        d="M20 28 C20 16 33 10 50 10 C67 10 80 16 80 28 V68 C80 82 50 93 50 93 C50 93 20 82 20 68 Z"
        stroke={colors.primary}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={colors.fill}
      />
      
      {/* Inner concentric dotted or fine line accent */}
      <path
        d="M26 31 C26 21 36 16 50 16 C64 16 74 21 74 31 V65 C74 76 50 85 50 85 C50 85 26 76 26 65 Z"
        stroke={colors.accent}
        strokeWidth="1"
        strokeDasharray="2 3"
        opacity="0.8"
      />

      {/* Confectionery Crown Star at Apex */}
      <path
        d="M50 4 L51.5 8.5 L56 10 L51.5 11.5 L50 16 L48.5 11.5 L44 10 L48.5 8.5 Z"
        fill={colors.primary}
      />

      {/* Monogram A with integrated whisk & pastry curve */}
      {/* Left leg of A with serif foot */}
      <path
        d="M34 68 H42 M38 68 L48 30 H52 L62 68 M58 68 H66"
        stroke={colors.primary}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Whisk loop crossbar */}
      <path
        d="M40 52 C45 47 55 47 60 52 C56 57 44 57 40 52 Z"
        stroke={colors.accent}
        strokeWidth="2"
        fill={colors.fill}
      />
      <circle cx="50" cy="52" r="2.2" fill={colors.primary} />

      {/* Little botanical branch at base */}
      <path
        d="M42 78 Q50 75 58 78"
        stroke={colors.primary}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="50" cy="76" r="1.5" fill={colors.accent} />
    </svg>
  );

  // SVG Variant 2: Le Fouet Céleste
  const renderFouetCeleste = () => (
    <svg
      viewBox="0 0 100 100"
      width={pixelSize}
      height={pixelSize}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-300 group-hover:scale-105"
      role="img"
      aria-label="Logo Le Fouet Céleste L'Atelier d'Aurélie"
    >
      {/* Outer soft glowing circle backdrop */}
      <circle
        cx="50"
        cy="50"
        r="44"
        stroke={colors.accent}
        strokeWidth="1.5"
        strokeDasharray="4 4"
        fill={colors.fill}
      />

      {/* Whisk Outer Heart-Loop (The Wire) */}
      <path
        d="M50 20 C64 20 74 34 74 48 C74 64 54 75 50 78 C46 75 26 64 26 48 C26 34 36 20 50 20 Z"
        stroke={colors.primary}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Inner Whisk Loop 1 */}
      <path
        d="M50 24 C59 24 65 35 65 47 C65 60 52 70 50 73 C48 70 35 60 35 47 C35 35 41 24 50 24 Z"
        stroke={colors.accent}
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Center Wire Axis */}
      <line
        x1="50"
        y1="25"
        x2="50"
        y2="73"
        stroke={colors.primary}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Whisk Handle / Base */}
      <rect
        x="47"
        y="78"
        width="6"
        height="14"
        rx="3"
        stroke={colors.primary}
        strokeWidth="2.2"
        fill={colors.accent}
      />
      <circle cx="50" cy="89" r="1.2" fill={colors.primary} />

      {/* Floating Confectionery Pearl Stars */}
      <circle cx="50" cy="11" r="3" fill={colors.primary} />
      <circle cx="62" cy="15" r="1.8" fill={colors.accent} />
      <circle cx="38" cy="15" r="1.8" fill={colors.accent} />
    </svg>
  );

  // SVG Variant 3: L'Écrin Miroir & Botanique
  const renderEcrinMiroir = () => (
    <svg
      viewBox="0 0 100 100"
      width={pixelSize}
      height={pixelSize}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-300 group-hover:scale-105"
      role="img"
      aria-label="Logo L'Écrin Miroir L'Atelier d'Aurélie"
    >
      {/* Dynamic Mirror Glaze Flowing Orbit */}
      <path
        d="M20 50 C20 32 34 16 54 16 C74 16 88 32 86 52 C84 72 68 84 48 84 C30 84 18 72 20 50"
        stroke={colors.primary}
        strokeWidth="3.2"
        strokeLinecap="round"
      />

      {/* Glaze droplet dripping smoothly */}
      <path
        d="M86 52 C87 62 82 72 74 78 C70 81 66 83 62 84"
        stroke={colors.accent}
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Fig leaf & berry crown in negative space */}
      {/* Central stylized 'A' */}
      <path
        d="M38 66 L49 34 H51 L62 66"
        stroke={colors.primary}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42 54 H58"
        stroke={colors.accent}
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Botanical berry branch */}
      <circle cx="34" cy="30" r="3.5" fill={colors.accent} />
      <circle cx="28" cy="37" r="2.8" fill={colors.primary} />
      <path
        d="M34 30 Q42 26 48 24"
        stroke={colors.primary}
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Shimmer sparkle */}
      <path
        d="M68 28 L70 33 L75 35 L70 37 L68 42 L66 37 L61 35 L66 33 Z"
        fill={colors.primary}
      />
    </svg>
  );

  // SVG Variant 4: Le Sceau de l'Atelier
  const renderSignatureArtisan = () => (
    <svg
      viewBox="0 0 100 100"
      width={pixelSize}
      height={pixelSize}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-300 group-hover:scale-105"
      role="img"
      aria-label="Logo Sceau Artisanal L'Atelier d'Aurélie"
    >
      {/* Outer Double Medallion */}
      <circle
        cx="50"
        cy="50"
        r="44"
        stroke={colors.primary}
        strokeWidth="2.8"
        fill={colors.fill}
      />
      <circle
        cx="50"
        cy="50"
        r="38"
        stroke={colors.accent}
        strokeWidth="1.2"
        strokeDasharray="3 3"
      />

      {/* Crossed Spatula & Wheat Ear */}
      {/* Spatula */}
      <line
        x1="28"
        y1="72"
        x2="72"
        y2="28"
        stroke={colors.accent}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <rect
        x="63"
        y="21"
        width="14"
        height="7"
        rx="2"
        transform="rotate(45 63 21)"
        stroke={colors.accent}
        strokeWidth="2"
        fill={colors.fill}
      />

      {/* Wheat Ear */}
      <path
        d="M28 28 L72 72"
        stroke={colors.primary}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <ellipse cx="36" cy="34" rx="4" ry="2" transform="rotate(-45 36 34)" fill={colors.primary} />
      <ellipse cx="44" cy="42" rx="4" ry="2" transform="rotate(-45 44 42)" fill={colors.primary} />
      <ellipse cx="34" cy="36" rx="4" ry="2" transform="rotate(45 34 36)" fill={colors.primary} />
      <ellipse cx="42" cy="44" rx="4" ry="2" transform="rotate(45 42 44)" fill={colors.primary} />

      {/* Center Shield with Initial A */}
      <circle cx="50" cy="50" r="16" fill="#FAF8F5" stroke={colors.primary} strokeWidth="2.2" />
      <text
        x="50"
        y="57"
        fontFamily="Cormorant Garamond, serif"
        fontSize="20"
        fontWeight="bold"
        fill={colors.secondary}
        textAnchor="middle"
      >
        A
      </text>
    </svg>
  );

  const renderSvg = () => {
    switch (variant) {
      case 'fouet-celeste':
        return renderFouetCeleste();
      case 'ecrin-miroir':
        return renderEcrinMiroir();
      case 'signature-artisan':
        return renderSignatureArtisan();
      case 'monogram-crest':
      default:
        return renderMonogramCrest();
    }
  };

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div className="flex-shrink-0 flex items-center justify-center">
        {renderSvg()}
      </div>
      {showText && (
        <div className={textClassName}>
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-chocolate-900 block leading-tight">
            L'Atelier d'Aurélie
          </span>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-gold-600 font-semibold block">
            Pâtisserie Fine & Artisanale
          </span>
        </div>
      )}
    </div>
  );
};
