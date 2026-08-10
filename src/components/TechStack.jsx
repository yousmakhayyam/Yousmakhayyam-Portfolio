import { motion } from 'framer-motion'
import { BracketHeading } from './Reveal'
import Reveal from './Reveal'
import { techStack } from '../data/content'
import { techIcons } from '../data/techIcons'

const groupAccents = [
  'var(--accent-primary)',
  'var(--accent-secondary)',
  'var(--accent-tertiary)',
]

export default function TechStack() {
  return (
    <section id="stack" className="relative py-28 px-6 max-w-6xl mx-auto overflow-hidden">
      <div
        className="absolute -z-10 top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
        style={{ background: 'radial-gradient(circle, var(--accent-primary), transparent 70%)' }}
      />

      <BracketHeading id="stack">Tech Stack</BracketHeading>
      <Reveal>
        <p className="text-center max-w-xl mx-auto mb-16 -mt-8" style={{ color: 'var(--text-soft)' }}>
          The tools I reach for, from pixels to production infrastructure.
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {techStack.map((group, gi) => {
          const accent = groupAccents[gi % groupAccents.length]
          return (
            <Reveal key={group.group} delay={gi * 0.06} y={30}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="glass-card p-6 h-full relative overflow-hidden group"
              >
                <div
                  className="absolute -top-10 -right-10 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ background: accent }}
                />
                <p
                  className="font-mono text-[11px] uppercase tracking-[0.15em] mb-5 pb-3 border-b"
                  style={{ color: accent, borderColor: 'color-mix(in srgb, ' + accent + ' 25%, transparent)' }}
                >
                  {group.group}
                </p>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((item, ii) => {
                    const Icon = techIcons[item]
                    return (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, scale: 0.6, y: 10 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.4, delay: gi * 0.05 + ii * 0.035, ease: [0.34, 1.56, 0.64, 1] }}
                        whileHover={{ scale: 1.12, y: -3 }}
                        className="flex flex-col items-center gap-1.5 w-16 group/icon cursor-default"
                      >
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-sm border transition-all duration-300 group-hover/icon:shadow-lg"
                          style={{
                            background: 'color-mix(in srgb, ' + accent + ' 10%, var(--bg-card))',
                            borderColor: 'color-mix(in srgb, ' + accent + ' 25%, transparent)',
                            color: accent,
                          }}
                        >
                          {Icon ? <Icon /> : item.slice(0, 2)}
                        </div>
                        <span
                          className="text-[10px] text-center leading-tight font-medium"
                          style={{ color: 'var(--text-soft)' }}
                        >
                          {item}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
