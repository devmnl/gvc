import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ className = "w-16 h-16", animated = true }) => {
  return (
    <div className={`relative flex items-center gap-4 ${className}`}>
      <div className="relative w-20 h-20 md:w-24 md:h-24">
        <svg
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_15px_rgba(249,115,22,0.2)]"
        >
          {/* Definitions for 3D Effects, Gradients and Filters */}
          <defs>
            {/* Metallic Gradient for the Ladle */}
            <linearGradient id="ladleMetal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="30%" stopColor="#94a3b8" />
              <stop offset="50%" stopColor="#cbd5e1" />
              <stop offset="70%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>

            {/* Molten Metal Gradient */}
            <linearGradient id="moltenFlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="50%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#ea580c" />
            </linearGradient>

            {/* Shine Filter */}
            <filter id="metallicShine">
              <feGaussianBlur stdDeviation="1" result="blur" />
              <feSpecularLighting in="blur" surfaceScale="5" specularConstant="1" specularExponent="20" lightingColor="#ffffff" result="specular">
                <fePointLight x="-50" y="-50" z="100" />
              </feSpecularLighting>
              <feComposite in="specular" in2="SourceGraphic" operator="in" />
            </filter>

            {/* Glow Filter for Molten Metal */}
            <filter id="moltenGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Pouring Metal (Flow) - Positioned behind the ladle handles but in front of body */}
          <motion.path
            d="M110 135C110 135 115 170 130 190C145 210 165 215 165 215"
            stroke="url(#moltenFlow)"
            strokeWidth="24"
            strokeLinecap="round"
            filter="url(#moltenGlow)"
            initial={animated ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: 1 }}
            animate={animated ? { 
              pathLength: [0.9, 1, 0.9],
              opacity: 1,
              filter: ["url(#moltenGlow)", "brightness(1.2) url(#moltenGlow)", "url(#moltenGlow)"]
            } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Ladle (Cadinho) */}
          <motion.g
            initial={animated ? { rotate: -10, x: -5 } : { rotate: -15 }}
            animate={animated ? { 
              rotate: [-15, -12, -15],
              y: [0, -2, 0]
            } : {}}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: '180px 80px' }}
          >
            {/* Ladle Handles (Vertical) */}
            <rect x="135" y="40" width="12" height="100" rx="6" fill="url(#ladleMetal)" filter="url(#metallicShine)" />
            <rect x="175" y="40" width="12" height="100" rx="6" fill="url(#ladleMetal)" filter="url(#metallicShine)" />
            
            {/* Main Ladle Body (3D Perspective) */}
            <path
              d="M80 100C80 85 95 75 120 75H190C215 75 230 85 230 100V150C230 180 210 200 180 200H130C100 200 80 180 80 150V100Z"
              fill="url(#ladleMetal)"
              filter="url(#metallicShine)"
              stroke="#1e293b"
              strokeWidth="1"
            />
            
            {/* Ladle Rim/Opening */}
            <ellipse cx="155" cy="85" rx="75" ry="15" fill="#334155" stroke="#94a3b8" strokeWidth="2" />
            
            {/* Molten Metal inside Ladle */}
            <path
              d="M95 110C95 110 100 140 120 140H190C210 140 215 110 215 110"
              fill="url(#moltenFlow)"
              filter="url(#moltenGlow)"
            />
          </motion.g>

          {/* Decorative Sparks */}
          {animated && (
            <>
              <motion.circle
                cx="135" cy="200" r="2" fill="#fbbf24"
                animate={{ y: [0, -40], x: [0, -20], opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              />
              <motion.circle
                cx="150" cy="210" r="1.5" fill="#f97316"
                animate={{ y: [0, -60], x: [0, 15], opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
              />
            </>
          )}
        </svg>
      </div>
      
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-none">GVC</span>
        </div>
        <div className="mt-1 relative">
          <div className="flex items-center gap-2">
            <div className="h-[1px] w-6 bg-gray-600" />
            <span className="text-[10px] md:text-[11px] font-black tracking-[0.25em] text-white uppercase whitespace-nowrap">
              FUNDIÇÃO DE
            </span>
            <div className="h-[1px] w-6 bg-gray-600" />
          </div>
          <span className="block text-[10px] md:text-[11px] font-black tracking-[0.25em] text-accent uppercase mt-0.5 text-center">
            FERRO E AÇO
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
