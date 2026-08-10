import { useEffect, useState } from 'react'
import { profile } from '../data/content'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#stack', label: 'Tech Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${scrolled ? 'glass-card !rounded-none border-x-0 border-t-0 py-3' : 'py-6'}`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="font-display font-bold text-lg gradient-text">
          {profile.name.split(' ')[0]}.
        </a>
        <ul className="hidden md:flex items-center gap-8 font-mono text-sm" style={{ color: 'var(--text-soft)' }}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:opacity-80 transition-opacity" style={{ color: 'var(--text-main)' }}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/resume.pdf"
          download
          className="text-sm font-medium px-4 py-2 rounded-full text-white shadow-sm hover:opacity-90 transition-opacity"
          style={{ background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))' }}
        >
          Resume
        </a>
      </nav>
    </header>
  )
}
