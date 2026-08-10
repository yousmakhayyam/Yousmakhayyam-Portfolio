import Tilt from 'react-parallax-tilt'
import { BracketHeading } from './Reveal'
import Reveal from './Reveal'
import { projects } from '../data/content'
import { FiGithub, FiExternalLink } from 'react-icons/fi'


export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 max-w-6xl mx-auto">
  <BracketHeading>Projects</BracketHeading>

  <div className="grid md:grid-cols-2 gap-8">
    {projects.map((p, i) => (
      <Reveal key={p.title} delay={(i % 3) * 0.08}>
        <Tilt
          glareEnable
          glareMaxOpacity={0.15}
          glareColor="#ffffff"
          glarePosition="all"
          tiltMaxAngleX={8}
          tiltMaxAngleY={8}
          scale={1.02}
          transitionSpeed={1200}
          className="h-full"
        >
              <div className="glass-card p-5 h-full flex flex-col">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="rounded-xl mb-4 aspect-video object-cover w-full"
                  />
                ) : (
                  <div
                    className="rounded-xl mb-4 aspect-video flex items-center justify-center text-xs font-mono"
                    style={{
                      background: 'linear-gradient(135deg, color-mix(in srgb, var(--accent-primary) 15%, transparent), color-mix(in srgb, var(--accent-secondary) 15%, transparent))',
                      color: 'var(--text-soft)',
                    }}
                  >
                    Screenshot coming soon
                  </div>
                )}
                <span
                  className="self-start text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-full mb-3"
                  style={{ background: 'color-mix(in srgb, var(--accent-tertiary) 20%, transparent)', color: 'var(--text-main)' }}
                >
                  {p.tag}
                </span>
                <h3 className="font-display font-semibold text-lg mb-2" style={{ color: 'var(--text-main)' }}>{p.title}</h3>
                <p className="text-sm mb-4 flex-1" style={{ color: 'var(--text-soft)' }}>{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[11px] px-2 py-0.5 rounded-full" style={{ color: 'var(--accent-primary)', background: 'color-mix(in srgb, var(--accent-primary) 10%, transparent)' }}>
                      {t}
                    </span>
                  ))}
                </div>
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--accent-secondary)' }}>
                    <FiGithub /> View repository <FiExternalLink size={12} />
                  </a>
                ) : (
                  <span className="text-sm font-mono" style={{ color: 'var(--text-soft)' }}>Internal architecture</span>
                )}
              </div>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </section>
  )
}