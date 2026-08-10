import { motion } from 'framer-motion'
import { BracketHeading } from './Reveal'
import Reveal from './Reveal'
import { experience } from '../data/content'
import { experienceIcons } from '../data/experienceIcons'

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 max-w-4xl mx-auto overflow-hidden">
      <div
        className="absolute -z-10 top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
        style={{ background: 'radial-gradient(circle, var(--accent-secondary), transparent 70%)' }}
      />

      <BracketHeading>Experience</BracketHeading>

      <div className="relative">
        {/* center glowing spine on desktop, left spine on mobile */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{ originY: 0, background: 'linear-gradient(180deg, var(--accent-primary), var(--accent-secondary), var(--accent-tertiary))' }}
          className="absolute left-6 md:left-1/2 top-2 bottom-2 w-[2px] md:-translate-x-1/2"
        />

        <div className="flex flex-col gap-14">
          {experience.map((e, i) => {
            const Icon = experienceIcons[i % experienceIcons.length]
            const leftSide = i % 2 === 0
            return (
              <Reveal key={e.role + e.org} delay={i * 0.12} y={40}>
                <div className={`relative flex items-start md:items-center gap-6 ${leftSide ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* icon node */}
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18, delay: i * 0.12 + 0.15 }}
                    className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg shrink-0"
                    style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))' }}
                  >
                    <Icon size={18} />
                  </motion.div>

                  {/* spacer for desktop alternating layout */}
                  <div className="hidden md:block flex-1" />

                  <motion.div
                    whileHover={{ y: -4 }}
                    className={`glass-card p-6 ml-16 md:ml-0 flex-1 relative overflow-hidden`}
                  >
                    <div
                      className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-25"
                      style={{ background: 'var(--accent-tertiary)' }}
                    />
                    <p className="font-mono text-xs mb-1" style={{ color: 'var(--accent-secondary)' }}>{e.period}</p>
                    <h3 className="font-display font-semibold text-xl mb-0.5" style={{ color: 'var(--text-main)' }}>{e.role}</h3>
                    <p className="text-sm font-medium mb-3 gradient-text inline-block">{e.org}</p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-soft)' }}>{e.desc}</p>
                  </motion.div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
