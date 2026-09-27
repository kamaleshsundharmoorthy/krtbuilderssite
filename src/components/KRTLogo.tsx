import React from 'react';

interface KRTLogoProps {
  variant?: 'light' | 'dark' | 'color';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showTagline?: boolean;
}

export const KRTLogo: React.FC<KRTLogoProps> = ({
  variant = 'color',
  size = 'md',
  className = '',
  showTagline = true,
}) => {
  // Dimension scaling
  const scale = size === 'sm' ? 0.75 : size === 'lg' ? 1.3 : 1;
  const width = 280 * scale;
  const height = (showTagline ? 100 : 75) * scale;

  const isDark = variant === 'dark';
  const taglineColor = isDark ? '#E2E8F0' : '#1E293B';

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 340 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-200"
      >
        {/* ROOF TOPS ARCHITECTURAL SILHOUETTE */}
        {/* Left Roof */}
        <polygon points="55,42 95,16 135,42" fill="#D32F2F" stroke="#D32F2F" strokeWidth="2" />
        <polygon points="58,40 95,18 132,40" fill="#E53935" />
        {/* Left Window Grille */}
        <rect x="90" y="27" width="4" height="4" fill="#FFFFFF" />
        <rect x="96" y="27" width="4" height="4" fill="#FFFFFF" />
        <rect x="90" y="33" width="4" height="4" fill="#FFFFFF" />
        <rect x="96" y="33" width="4" height="4" fill="#FFFFFF" />

        {/* Right Roof */}
        <polygon points="205,42 245,16 285,42" fill="#D32F2F" stroke="#D32F2F" strokeWidth="2" />
        <polygon points="208,40 245,18 282,40" fill="#E53935" />
        {/* Right Window Grille */}
        <rect x="240" y="27" width="4" height="4" fill="#FFFFFF" />
        <rect x="246" y="27" width="4" height="4" fill="#FFFFFF" />
        <rect x="240" y="33" width="4" height="4" fill="#FFFFFF" />
        <rect x="246" y="33" width="4" height="4" fill="#FFFFFF" />

        {/* Center Main High Peak Roof */}
        <polygon points="120,44 170,10 220,44" fill="#D32F2F" stroke="#B71C1C" strokeWidth="2" />
        <polygon points="123,42 170,12 217,42" fill="#D32F2F" />
        {/* Center Window Grilles */}
        <rect x="165" y="22" width="4" height="4" fill="#FFFFFF" />
        <rect x="171" y="22" width="4" height="4" fill="#FFFFFF" />
        <rect x="165" y="28" width="4" height="4" fill="#FFFFFF" />
        <rect x="171" y="28" width="4" height="4" fill="#FFFFFF" />

        {/* Base Eaves Accent Line */}
        <line x1="45" y1="45" x2="295" y2="45" stroke="#D32F2F" strokeWidth="3" strokeLinecap="round" />

        {/* MAIN LOGO BAR CONTAINER */}
        <g id="brand-badge">
          {/* Black Outer Border Framing */}
          <rect
            x="32"
            y="49"
            width="276"
            height="46"
            fill="#0A0D14"
            stroke="#0A0D14"
            strokeWidth="3"
            rx="2"
          />

          {/* KRT Red Block */}
          <rect
            x="34"
            y="51"
            width="106"
            height="42"
            fill="#D32F2F"
          />

          {/* KRT Lettering */}
          <text
            x="87"
            y="82"
            fill="#FFFFFF"
            fontSize="30"
            fontFamily="'Syne', 'Plus Jakarta Sans', sans-serif"
            fontWeight="900"
            textAnchor="middle"
            letterSpacing="2"
          >
            KRT
          </text>

          {/* BUILDERS Lettering in Black Block */}
          <text
            x="220"
            y="82"
            fill="#FFFFFF"
            fontSize="26"
            fontFamily="'Syne', 'Plus Jakarta Sans', sans-serif"
            fontWeight="800"
            textAnchor="middle"
            letterSpacing="3"
          >
            BUILDERS
          </text>
        </g>

        {/* TAGLINE: "We build your future..." */}
        {showTagline && (
          <text
            x="170"
            y="112"
            fill={taglineColor}
            fontSize="15"
            fontFamily="'Playfair Display', Georgia, serif"
            fontStyle="italic"
            fontWeight="600"
            textAnchor="middle"
            letterSpacing="1"
          >
            We build your future...
          </text>
        )}
      </svg>
    </div>
  );
};
