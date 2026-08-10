import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import ParticleBg from './ParticleBg'
import HeroIllustration from './HeroIllustration'
import { profile } from '../data/content'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'

const roles = ['DevOps Engineer', 'Cloud Infrastructure Engineer', 'Full-Stack Developer', 'GitOps Enthusiast']

function useTypewriter(words, speed = 55, pause = 1400) {
  const [text, setText] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    let timeout
    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed)
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 2)
    } else {
      setDeleting(false)
      setWordIdx((wordIdx + 1) % words.length)
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, wordIdx])

  return text
}

export default function Hero() {
  const typed = useTypewriter(roles)

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <ParticleBg />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: 'radial-gradient(circle at 50% 20%, color-mix(in srgb, var(--accent-primary) 12%, transparent), transparent 60%)' }}
      />
      <div className="hidden lg:block absolute right-8 xl:right-20 top-1/2 -translate-y-1/2 z-0">
        <HeroIllustration />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-32 h-32 md:w-40 md:h-40 mb-8"
        >
          <div
            className="absolute -inset-2 rounded-full blur-xl opacity-60 animate-pulse"
            style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))' }}
          />
          <img
            src="/profile-photo.PNG"
            alt={profile.name}
            className="relative w-full h-full object-cover rounded-full border-4"
            style={{ borderColor: 'var(--bg-base)' }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="font-mono text-sm mb-3"
          style={{ color: 'var(--accent-secondary)' }}
        >
          Hi! My name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="font-display text-5xl md:text-7xl font-bold gradient-text mb-4"
        >
          {profile.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-mono text-lg md:text-2xl h-8 mb-6"
          style={{ color: 'var(--text-main)' }}
        >
          {typed}
          <span className="animate-pulse" style={{ color: 'var(--accent-primary)' }}>|</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="max-w-xl mb-10 leading-relaxed"
          style={{ color: 'var(--text-soft)' }}
        >
          {profile.pitch}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full text-white font-medium shadow-md hover:scale-105 transition-transform"
            style={{ background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))' }}
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 rounded-full font-medium border hover:scale-105 transition-transform glass-card"
            style={{ color: 'var(--text-main)' }}
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex items-center gap-5 mt-10 text-xl"
          style={{ color: 'var(--text-soft)' }}
        >
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-[var(--accent-primary)] transition-colors"><FiGithub /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-[var(--accent-primary)] transition-colors"><FiLinkedin /></a>
          <a href={`mailto:${profile.email}`} className="hover:text-[var(--accent-primary)] transition-colors"><FiMail /></a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ color: 'var(--accent-primary)' }}
      >
        <FiArrowDown size={22} />
      </motion.div>
    </section>
  )
}