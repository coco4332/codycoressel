import Reveal from './Reveal'
import './Contact.css'

/* The contact links are data too, so we map them into rows. */
const LINKS = [
  {
    label: 'Email',
    value: 'cody.coressel@colorado.edu',
    href: 'mailto:cody.coressel@colorado.edu',
    glyph: 'mail',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/codycoressel',
    href: 'https://www.linkedin.com/in/codycoressel',
    glyph: 'in',
  },
  {
    label: 'GitHub',
    value: 'github.com/coco4332',
    href: 'https://github.com/coco4332',
    glyph: 'code',
  },
]

function ContactIcon({ glyph }: { glyph: string }) {
  if (glyph === 'mail') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    )
  }
  if (glyph === 'code') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="m16 18 6-6-6-6" />
        <path d="m8 6-6 6 6 6" />
      </svg>
    )
  }
  return <span className="contact-glyph">in</span>
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <Reveal>
        <p className="section-label">04 / Contact</p>
        <h2 className="section-title">Let's connect</h2>
      </Reveal>

      <div className="contact-grid">
        <Reveal>
          <p className="contact-intro">
            I'm looking for data analytics internships. Whether you have an
            opportunity, a question, or just want to say hello, my inbox is open.
          </p>
          <div className="contact-links">
            {LINKS.map((link) => (
              <a
                className="contact-link"
                key={link.label}
                href={link.href}
                target={link.glyph === 'mail' ? undefined : '_blank'}
                rel="noreferrer"
              >
                <span className="contact-icon">
                  <ContactIcon glyph={link.glyph} />
                </span>
                <span>
                  <span className="contact-link-main">{link.value}</span>
                  <span className="contact-link-sub">{link.label}</span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form className="contact-form" action="https://formspree.io/f/mqewnjgd" method="POST">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" name="name" placeholder="Your name" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" placeholder="your@email.com" required />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="What's on your mind?" required />
            </div>
            <button type="submit" className="btn btn-primary">Send message &rarr;</button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
