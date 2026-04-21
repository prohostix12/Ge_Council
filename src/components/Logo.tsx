'use client';
import { motion } from 'framer-motion';

interface LogoProps {
  size?: number;
  animate?: boolean;
  className?: string;
}

export default function Logo({ size = 44, animate = true, className = '' }: LogoProps) {
  return (
    <div className={`relative flex-shrink-0 ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
      >
        {/* Black background */}
        <rect width="100" height="100" fill="#000000" />

        {/* ── Outer ring band: white base ── */}
        <circle cx="50" cy="50" r="47" fill="white" />

        {/* Blue world-map patches on outer band */}
        <clipPath id="outerBand">
          <path d="M50 3 A47 47 0 0 1 97 50 A47 47 0 0 1 50 97 A47 47 0 0 1 3 50 A47 47 0 0 1 50 3 Z
                   M50 36 A14 14 0 0 0 36 50 A14 14 0 0 0 50 64 A14 14 0 0 0 64 50 A14 14 0 0 0 50 36 Z" />
        </clipPath>
        {/* Top-left blue patch */}
        <ellipse cx="22" cy="20" rx="16" ry="11" fill="#3B82F6" clipPath="url(#outerBand)" />
        <ellipse cx="12" cy="34" rx="9" ry="7" fill="#3B82F6" clipPath="url(#outerBand)" />
        {/* Top-right blue patch */}
        <ellipse cx="78" cy="18" rx="14" ry="9" fill="#3B82F6" clipPath="url(#outerBand)" />
        <ellipse cx="88" cy="32" rx="8" ry="6" fill="#3B82F6" clipPath="url(#outerBand)" />
        {/* Bottom-right blue patch */}
        <ellipse cx="82" cy="72" rx="12" ry="9" fill="#3B82F6" clipPath="url(#outerBand)" />
        <ellipse cx="90" cy="60" rx="7" ry="5" fill="#3B82F6" clipPath="url(#outerBand)" />
        {/* Left blue patch */}
        <ellipse cx="10" cy="58" rx="7" ry="9" fill="#3B82F6" clipPath="url(#outerBand)" />
        {/* Bottom patch */}
        <ellipse cx="36" cy="88" rx="10" ry="6" fill="#3B82F6" clipPath="url(#outerBand)" />
        <ellipse cx="60" cy="90" rx="8" ry="5" fill="#3B82F6" clipPath="url(#outerBand)" />

        {/* ── Black outer ring ── */}
        <circle cx="50" cy="50" r="36" fill="#000000" />

        {/* ── Inner ring band: white base ── */}
        <circle cx="50" cy="50" r="30" fill="white" />

        {/* Blue world-map patches on inner band */}
        <clipPath id="innerBand">
          <path d="M50 20 A30 30 0 0 1 80 50 A30 30 0 0 1 50 80 A30 30 0 0 1 20 50 A30 30 0 0 1 50 20 Z
                   M50 38 A12 12 0 0 0 38 50 A12 12 0 0 0 50 62 A12 12 0 0 0 62 50 A12 12 0 0 0 50 38 Z" />
        </clipPath>
        <ellipse cx="38" cy="28" rx="10" ry="6" fill="#3B82F6" clipPath="url(#innerBand)" />
        <ellipse cx="62" cy="26" rx="9" ry="5" fill="#3B82F6" clipPath="url(#innerBand)" />
        <ellipse cx="74" cy="44" rx="5" ry="7" fill="#3B82F6" clipPath="url(#innerBand)" />
        <ellipse cx="70" cy="66" rx="8" ry="5" fill="#3B82F6" clipPath="url(#innerBand)" />
        <ellipse cx="30" cy="64" rx="7" ry="5" fill="#3B82F6" clipPath="url(#innerBand)" />
        <ellipse cx="26" cy="44" rx="5" ry="6" fill="#3B82F6" clipPath="url(#innerBand)" />

        {/* ── Black inner ring ── */}
        <circle cx="50" cy="50" r="22" fill="#000000" />

        {/* ── Red center dot ── */}
        <circle cx="50" cy="45" r="8" fill="#FF3B3B" />

        {/* ── Blue upward arrow with chevron base ── */}
        {/* Arrow shaft */}
        <rect x="46.5" y="49" width="7" height="24" fill="#3B82F6" />
        {/* Arrow head */}
        <polygon points="50,30 40,50 60,50" fill="#3B82F6" />
        {/* Chevron notch at shaft bottom */}
        <polygon points="43.5,73 50,67 56.5,73 50,70" fill="#000000" />
      </svg>

      {/* Animated pulse ring */}
      {animate && (
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 rounded-full border border-blue-500/40 pointer-events-none"
        />
      )}
    </div>
  );
}
