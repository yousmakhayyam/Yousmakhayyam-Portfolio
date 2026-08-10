import { BracketHeading } from './Reveal'
import Reveal from './Reveal'
import { profile } from '../data/content'
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUpRight } from 'react-icons/fi'
import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-28 px-6 w-full">
      <div className="max-w-6xl mx-auto text-center">

        <BracketHeading>Contact</BracketHeading>

        <h3
          className="font-display text-2xl md:text-3xl font-semibold mb-3"
          style={{ color: 'var(--text-main)' }}
        >
          Let's build something{' '}
          <span style={{ color: 'var(--accent-primary)' }}>
            beautiful
          </span>{' '}
          ✦
        </h3>

        <p
          className="mb-10 max-w-xl mx-auto"
          style={{ color: 'var(--text-soft)' }}
        >
          Have a role, project, or idea in mind? I'd love to hear from you.
        </p>

        <Reveal delay={0.1}>
          <div
            className="flex items-center justify-center gap-6 text-2xl mb-12"
            style={{ color: 'var(--text-soft)' }}
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--accent-primary)] hover:-translate-y-1 transition-all"
            >
              <FiGithub />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--accent-primary)] hover:-translate-y-1 transition-all"
            >
              <FiLinkedin />
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="hover:text-[var(--accent-primary)] hover:-translate-y-1 transition-all"
            >
              <FiMail />
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

          <Reveal delay={0.15}>
            <div
              className="glass-card p-8 md:p-10 h-full min-h-[430px] text-left flex flex-col justify-between relative overflow-hidden"
            >
              <div
                className="absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-20 blur-3xl"
                style={{ background: 'var(--accent-primary)' }}
              />

              <div className="relative z-10">

                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-xl"
                  style={{
                    background:
                      'color-mix(in srgb, var(--accent-primary) 15%, transparent)',
                    color: 'var(--accent-primary)',
                  }}
                >
                  <FiHeart />
                </div>

                <p
                  className="text-xs font-mono uppercase tracking-wider mb-3"
                  style={{ color: 'var(--accent-secondary)' }}
                >
                  A little note
                </p>

                <h4
                  className="font-display text-3xl font-semibold mb-5"
                  style={{ color: 'var(--text-main)' }}
                >
                  Have an idea?
                </h4>

                <p
                  className="text-sm md:text-base leading-7 max-w-md"
                  style={{ color: 'var(--text-soft)' }}
                >
                  Whether it's a full-stack product, cloud infrastructure,
                  DevOps automation, or an AI-powered idea — let's turn it
                  into something real.
                </p>

              </div>

              <div className="relative z-10 mt-10">

                <div
                  className="h-px w-full mb-6"
                  style={{
                    background:
                      'color-mix(in srgb, var(--accent-primary) 15%, transparent)',
                  }}
                />

                <p
                  className="text-xs font-mono"
                  style={{ color: 'var(--text-soft)' }}
                >
                  Usually excited about
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {['Full Stack', 'Cloud', 'DevOps', 'AI'].map((item) => (
                    <span
                      key={item}
                      className="text-[11px] px-3 py-1.5 rounded-full"
                      style={{
                        color: 'var(--accent-primary)',
                        background:
                          'color-mix(in srgb, var(--accent-primary) 10%, transparent)',
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 md:p-10 flex flex-col gap-5 text-left min-h-[430px]"
            >

              <div className="mb-1">
                <h4
                  className="font-display text-2xl font-semibold"
                  style={{ color: 'var(--text-main)' }}
                >
                  Send me a message
                </h4>

                <p
                  className="text-sm mt-2"
                  style={{ color: 'var(--text-soft)' }}
                >
                  I'll be happy to hear what you're working on.
                </p>
              </div>

              <input
                required
                placeholder="Your name"
                className="px-4 py-3.5 rounded-xl bg-transparent border outline-none w-full"
                style={{
                  borderColor:
                    'color-mix(in srgb, var(--accent-primary) 25%, transparent)',
                  color: 'var(--text-main)',
                }}
              />

              <input
                required
                type="email"
                placeholder="Your email"
                className="px-4 py-3.5 rounded-xl bg-transparent border outline-none w-full"
                style={{
                  borderColor:
                    'color-mix(in srgb, var(--accent-primary) 25%, transparent)',
                  color: 'var(--text-main)',
                }}
              />

              <textarea
                required
                placeholder="Tell me a little about your idea..."
                rows={5}
                className="px-4 py-3.5 rounded-xl bg-transparent border outline-none resize-none w-full flex-1"
                style={{
                  borderColor:
                    'color-mix(in srgb, var(--accent-primary) 25%, transparent)',
                  color: 'var(--text-main)',
                }}
              />

              <button
                type="submit"
                className="self-start px-7 py-3.5 rounded-full text-white font-medium hover:scale-105 transition-transform inline-flex items-center gap-2"
                style={{
                  background:
                    'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
                }}
              >
                {sent ? (
                  'Message ready ✓'
                ) : (
                  <>
                    Let's talk
                    <FiArrowUpRight size={16} />
                  </>
                )}
              </button>

            </form>
          </Reveal>

        </div>

        <p
          className="mt-16 text-sm font-mono"
          style={{ color: 'var(--text-soft)' }}
        >
          Made with{' '}
          <FiHeart
            className="inline mx-1"
            style={{ color: 'var(--accent-primary)' }}
          />{' '}
          by {profile.name}
        </p>

        <p
          className="mt-2 text-xs font-mono"
          style={{ color: 'var(--text-soft)' }}
        >
          © {new Date().getFullYear()} {profile.name}
        </p>

      </div>
    </section>
  )
}