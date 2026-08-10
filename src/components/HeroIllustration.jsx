import { motion } from 'framer-motion'

export default function HeroIllustration() {
  return (
    <motion.div
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      className="w-56 h-56 md:w-72 md:h-72 select-none pointer-events-none"
    >
      <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="hairGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent-primary)" />
            <stop offset="100%" stopColor="var(--accent-secondary)" />
          </linearGradient>
          <linearGradient id="deskGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--accent-tertiary)" />
            <stop offset="100%" stopColor="var(--accent-secondary)" />
          </linearGradient>
        </defs>

        {/* floating soft blob behind */}
        <circle cx="200" cy="190" r="150" fill="var(--accent-primary)" opacity="0.08" />

        {/* desk */}
        <rect x="90" y="300" width="220" height="14" rx="7" fill="url(#deskGrad)" opacity="0.5" />

        {/* laptop */}
        <g>
          <rect x="150" y="255" width="100" height="62" rx="6" fill="var(--bg-card)" stroke="var(--accent-primary)" strokeWidth="3" />
          <rect x="160" y="264" width="80" height="44" rx="3" fill="var(--accent-primary)" opacity="0.15" />
          <motion.rect
            x="168" y="272" width="40" height="4" rx="2" fill="var(--accent-primary)"
            animate={{ width: [40, 60, 30, 55, 40] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.rect
            x="168" y="282" width="55" height="4" rx="2" fill="var(--accent-secondary)"
            animate={{ width: [55, 30, 60, 40, 55] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          />
          <rect x="145" y="315" width="110" height="8" rx="4" fill="var(--accent-primary)" opacity="0.4" />
        </g>

        {/* girl body */}
        <g>
          {/* chair back hint */}
          <rect x="150" y="200" width="100" height="80" rx="30" fill="var(--accent-secondary)" opacity="0.12" />

          {/* torso */}
          <path d="M155 300 Q160 235 200 232 Q240 235 245 300 Z" fill="url(#hairGrad)" opacity="0.9" />

          {/* neck */}
          <rect x="190" y="205" width="20" height="20" rx="8" fill="#F2C9A0" />

          {/* head */}
          <circle cx="200" cy="180" r="38" fill="#F6D7B0" />

          {/* hair - long flowing */}
          <path
            d="M162 178 Q158 130 200 128 Q242 130 238 178 Q244 220 226 236 Q236 190 210 176 Q222 210 204 224 Q212 186 190 176 Q198 214 176 232 Q160 216 162 178 Z"
            fill="url(#hairGrad)"
          />

          {/* face details */}
          <circle cx="188" cy="182" r="3" fill="var(--text-main)" />
          <circle cx="212" cy="182" r="3" fill="var(--text-main)" />
          <path d="M192 196 Q200 202 208 196" stroke="var(--text-main)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M180 170 Q188 164 196 170" stroke="var(--text-main)" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />
          <path d="M204 170 Q212 164 220 170" stroke="var(--text-main)" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />
          <circle cx="180" cy="192" r="6" fill="var(--accent-primary)" opacity="0.25" />
          <circle cx="220" cy="192" r="6" fill="var(--accent-primary)" opacity="0.25" />

          {/* arms typing */}
          <motion.path
            d="M165 250 Q150 270 168 288"
            stroke="url(#hairGrad)" strokeWidth="14" fill="none" strokeLinecap="round"
            animate={{ d: ['M165 250 Q150 270 168 288', 'M165 250 Q152 268 172 286', 'M165 250 Q150 270 168 288'] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.path
            d="M235 250 Q250 270 232 288"
            stroke="url(#hairGrad)" strokeWidth="14" fill="none" strokeLinecap="round"
            animate={{ d: ['M235 250 Q250 270 232 288', 'M235 250 Q248 268 228 286', 'M235 250 Q250 270 232 288'] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut', delay: 0.15 }}
          />
        </g>

        {/* floating sparkle accents */}
        <motion.circle
          cx="330" cy="120" r="5" fill="var(--accent-tertiary)"
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        />
        <motion.circle
          cx="70" cy="150" r="4" fill="var(--accent-secondary)"
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -6, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, delay: 0.5 }}
        />
        <motion.circle
          cx="60" cy="260" r="3.5" fill="var(--accent-primary)"
          animate={{ opacity: [0.2, 0.9, 0.2], y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
      </svg>
    </motion.div>
  )
}