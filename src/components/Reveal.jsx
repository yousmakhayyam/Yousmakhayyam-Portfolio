import { motion } from 'framer-motion'

export default function Reveal({ children, delay = 0, y = 24, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function BracketHeading({ children, id }) {
  return (
    <div id={id} className="flex items-center justify-center gap-3 mb-14 scroll-mt-24">
      <motion.span
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-mono text-2xl"
        style={{ color: 'var(--accent-primary)' }}
      >
        &lt;
      </motion.span>
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-center" style={{ color: 'var(--text-main)' }}>
        {children}
      </h2>
      <motion.span
        initial={{ opacity: 0, x: 16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-mono text-2xl"
        style={{ color: 'var(--accent-secondary)' }}
      >
        /&gt;
      </motion.span>
    </div>
  )
}
