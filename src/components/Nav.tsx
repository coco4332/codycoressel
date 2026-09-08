import { useEffect, useState } from 'react'
import './Nav.css'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

const SECTION_IDS = ['home', 'about', 'projects', 'resume', 'contact']

function Nav() {
  const [active, setActive] = useState('home')

  /* An IntersectionObserver watches each section and reports which one
     is crossing the middle of the screen, so the nav can highlight it.
     The rootMargin shrinks the "trigger zone" to a band near center. */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="nav">
      <a href="#home" className="nav-logo" aria-label="Home">
        <svg className="nav-leaf" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2C7 6 5 12 12 22C19 12 17 6 12 2Z" fill="currentColor" />
          <path d="M12 4.5V20" stroke="rgba(15,20,16,0.5)" strokeWidth="1.1" strokeLinecap="round" />
        </svg>
        <span>Cody</span>
      </a>

      <ul className="nav-links">
        {LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={active === link.href.slice(1) ? 'active' : undefined}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
