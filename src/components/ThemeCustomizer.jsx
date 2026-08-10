import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { themes } from '../data/content'
import { useTheme } from '../ThemeContext'
import { FiSettings, FiX, FiSun, FiMoon } from 'react-icons/fi'

export default function ThemeCustomizer() {
  const [open, setOpen] = useState(false)
  const { themeKey, setThemeKey, mode, setMode, custom, setCustom, useCustom, setUseCustom } = useTheme()

  return (
    <>
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full text-white shadow-lg flex items-center justify-center"
        style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))' }}
        aria-label="Customize theme"
      >
        {open ? <FiX size={20} /> : <FiSettings size={20} />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 z-50 w-72 glass-card p-5"
          >
            <p className="font-mono text-xs uppercase tracking-wider mb-3" style={{ color: 'var(--text-soft)' }}>Theme</p>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {Object.entries(themes).map(([key, t]) => (
                <button
                  key={key}
                  onClick={() => { setThemeKey(key); setUseCustom(false) }}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm border transition-all"
                  style={{
                    borderColor: !useCustom && themeKey === key ? 'var(--accent-primary)' : 'transparent',
                    background: 'color-mix(in srgb, var(--accent-primary) 6%, transparent)',
                    color: 'var(--text-main)',
                  }}
                >
                  <span className="w-4 h-4 rounded-full" style={{ background: t.swatch }} />
                  {t.name}
                </button>
              ))}
              <button
                onClick={() => setUseCustom(true)}
                className="col-span-2 flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-sm border transition-all"
                style={{
                  borderColor: useCustom ? 'var(--accent-primary)' : 'transparent',
                  background: 'color-mix(in srgb, var(--accent-primary) 6%, transparent)',
                  color: 'var(--text-main)',
                }}
              >
                Custom
              </button>
            </div>

            {useCustom && (
              <div className="flex items-center gap-3 mb-4">
                <label className="text-xs" style={{ color: 'var(--text-soft)' }}>Primary</label>
                <input type="color" value={custom.primary} onChange={(e) => setCustom((c) => ({ ...c, primary: e.target.value }))} className="w-8 h-8 rounded cursor-pointer" />
                <label className="text-xs" style={{ color: 'var(--text-soft)' }}>Secondary</label>
                <input type="color" value={custom.secondary} onChange={(e) => setCustom((c) => ({ ...c, secondary: e.target.value }))} className="w-8 h-8 rounded cursor-pointer" />
              </div>
            )}

            <p className="font-mono text-xs uppercase tracking-wider mb-3" style={{ color: 'var(--text-soft)' }}>Mode</p>
            <div className="flex gap-2">
              <button
                onClick={() => setMode('light')}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-sm border"
                style={{ borderColor: mode === 'light' ? 'var(--accent-primary)' : 'transparent', background: 'color-mix(in srgb, var(--accent-primary) 6%, transparent)', color: 'var(--text-main)' }}
              >
                <FiSun /> Light
              </button>
              <button
                onClick={() => setMode('dark')}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-sm border"
                style={{ borderColor: mode === 'dark' ? 'var(--accent-primary)' : 'transparent', background: 'color-mix(in srgb, var(--accent-primary) 6%, transparent)', color: 'var(--text-main)' }}
              >
                <FiMoon /> Dark
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
