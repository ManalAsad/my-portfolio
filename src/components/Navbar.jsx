import React from 'react'; 
import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const TABS = [
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    if (!isHome) {
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <Link to="/" className="nav-logo">Manal .A</Link>
      <div className="nav-links">
        {TABS.map(t => (
          <button key={t.id} className="hide-mobile" onClick={() => scrollTo(t.id)}>
            {t.label}
          </button>
        ))}
        <Link to="/blog" className="nav-links" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 400, color: 'var(--ink-soft)', textDecoration: 'none', padding: '0.5rem 0.85rem', borderRadius: '6px', transition: 'color 0.2s, background 0.2s' }}>
          Blog ✦
        </Link>
      </div>
    </nav>
  )
}