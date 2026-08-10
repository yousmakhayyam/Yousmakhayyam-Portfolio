import { motion } from 'framer-motion'
import { BracketHeading } from './Reveal'
import Reveal from './Reveal'
import { profile } from '../data/content'
import { FaCloud, FaCode, FaWandMagicSparkles } from 'react-icons/fa6'

const bioLines = [
  "Full Stack Developer, DevOps Engineer, and Cloud Engineer with 1.5+ years of hands-on experience designing, developing, and deploying scalable web applications and cloud infrastructure.",
  "Currently Cloud Engineer at PufferSoft, designing GitOps and self-service platforms for multi-tenant, multi-cluster environments.",
  "Also builds full-stack web apps and AI-powered automation on the side — because one kind of building is never enough. ✨",
]

const stats = [
  { value: '11+', label: 'Projects shipped' },
  { value: '30', label: 'Clusters in current architecture' },
  { value: '93.75%', label: 'FYP test pass rate' },
  { value: '1.5+ yr', label: 'Professional experience' },
]

const badges = [
  { icon: FaCloud, text: 'Cloud & DevOps' },
  { icon: FaCode, text: 'Full-Stack Dev' },
  { icon: FaWandMagicSparkles, text: 'AI Automation' },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 max-w-5xl mx-auto overflow-hidden">
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -z-10 top-10 -left-20 w-72 h-72 rounded-full blur-3xl opacity-20"
        style={{ background: 'var(--accent-primary)' }}
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -z-10 bottom-0 -right-20 w-72 h-72 rounded-full blur-3xl opacity-20"
        style={{ background: 'var(--accent-tertiary)' }}
      />

      <BracketHeading>About Me</BracketHeading>

      <Reveal>
        <div className="flex justify-center gap-3 flex-wrap mb-10">
          {badges.map((b, i) => (
            <motion.span
              key={b.text}
              initial={{ opacity: 0, scale: 0.7, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 260, damping: 18 }}
              whileHover={{ scale: 1.08, rotate: -2 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium"
              style={{ color: 'var(--accent-primary)' }}
            >
              <b.icon /> {b.text}
            </motion.span>
          ))}
        </div>
      </Reveal>

      <div className="max-w-2xl mx-auto mb-16 space-y-4">
        {bioLines.map((line, i) => (
          <Reveal key={i} delay={i * 0.12} y={16}>
            <p className="text-lg leading-relaxed text-center" style={{ color: 'var(--text-soft)' }}>
              {line}
            </p>
          </Reveal>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} y={26}>
            <motion.div
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              className="glass-card px-4 py-8 text-center h-full relative overflow-hidden group"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))' }}
              />
              <p className="font-display text-3xl md:text-4xl font-bold gradient-text mb-1">{s.value}</p>
              <p className="text-sm" style={{ color: 'var(--text-soft)' }}>{s.label}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
