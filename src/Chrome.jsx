import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { megaMenuItems, navLinks } from './data'

export function ArrowIcon({ light = false }) {
  return (
    <span className={`arrow-icon${light ? ' arrow-icon--light' : ''}`} aria-hidden="true">
      <svg width="14" height="14" viewBox="0 0 32 32" fill="currentColor">
        <path d="M8.5 29.414L7.086 28l13-13-13-13L8.5.586l13.707 13.707a1 1 0 0 1 0 1.414L8.5 29.414z" />
      </svg>
    </span>
  )
}

export function Chevron() {
  return (
    <span className="heading-chevron" aria-hidden="true">
      <svg width="14" height="14" viewBox="0 0 32 32" fill="currentColor">
        <path d="M8.5 29.414L7.086 28l13-13-13-13L8.5.586l13.707 13.707a1 1 0 0 1 0 1.414L8.5 29.414z" />
      </svg>
    </span>
  )
}

export function CtaLink({ href = '#', children, light = false }) {
  return (
    <a href={href} className={`cta-link${light ? ' cta-link--light' : ''}`}>
      <span>{children}</span>
      <ArrowIcon light={light} />
    </a>
  )
}

function TruegrowLogo({ className = '' }) {
  return (
    <Link to="/" className={`truegrow-logo ${className}`.trim()} aria-label="Truegrow Home">
      Truegrow
    </Link>
  )
}

function isNavActive(pathname, href) {
  if (href === '/') return pathname === '/'
  if (href.startsWith('/#')) return false
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function Header({ solid = false }) {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeMega, setActiveMega] = useState('India')
  const forceSolid = solid || scrolled || menuOpen || location.pathname !== '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const closeMenu = () => setMenuOpen(false)
  const toggleMenu = (e) => {
    e.preventDefault()
    setMenuOpen((open) => {
      const next = !open
      if (next) {
        setActiveMega(window.innerWidth > 900 ? 'India' : null)
      }
      return next
    })
  }

  return (
    <div
      className={`global-header${forceSolid ? ' is-solid' : ' is-transparent'}${menuOpen ? ' is-menu-open' : ''}`}
      id="global-header"
    >
      <header className="global-header-wrapper">
        <div className="logo-container">
          <a
            href="#"
            className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
            aria-label="Navigation Menu"
            aria-expanded={menuOpen}
            role="button"
            onClick={toggleMenu}
          >
            <span className="hamburger-menu-icon" />
          </a>
          <TruegrowLogo className="alone" />
          <Link to="/" className="section-name">
            India
          </Link>
        </div>

        <div className="header-main">
          {menuOpen && (
            <section className="hamburger-menu" aria-label="Main Menu">
              <div className={`hamburger-menu-inner${activeMega ? ' show-panel' : ''}`}>
                <nav className="hamburger-sidebar">
                  <div className="hamburger-sidebar-top">
                    <a
                      href="#"
                      className="menu-toggle is-open hamburger-close"
                      aria-label="Close navigation menu"
                      role="button"
                      onClick={toggleMenu}
                    >
                      <span className="hamburger-menu-icon" />
                    </a>
                    <TruegrowLogo />
                  </div>

                  <ul className="hamburger-nav-list">
                    {megaMenuItems.map((item) => (
                      <li key={item.label}>
                        {item.hasChildren ? (
                          <button
                            type="button"
                            className={`hamburger-nav-btn${activeMega === item.label ? ' is-active' : ''}`}
                            onClick={() => setActiveMega(item.label)}
                          >
                            <span>{item.label}</span>
                            <span className="hamburger-chevron" aria-hidden="true">
                              <svg width="12" height="12" viewBox="0 0 32 32" fill="currentColor">
                                <path d="M8.5 29.414L7.086 28l13-13-13-13L8.5.586l13.707 13.707a1 1 0 0 1 0 1.414L8.5 29.414z" />
                              </svg>
                            </span>
                          </button>
                        ) : (
                          <a href={item.href || '#'} className="hamburger-nav-link" onClick={closeMenu}>
                            {item.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className={`hamburger-panel${activeMega ? ' is-visible' : ''}`}>
                  <div className="hamburger-panel-mobile-bar">
                    <button type="button" className="hamburger-back" onClick={() => setActiveMega(null)}>
                      <span aria-hidden="true">‹</span> Main Menu
                    </button>
                  </div>
                  <a href="#" className="hamburger-panel-title" onClick={closeMenu}>
                    {activeMega || 'India'}
                    <span className="hamburger-panel-arrow" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor">
                        <path d="M8.5 29.414L7.086 28l13-13-13-13L8.5.586l13.707 13.707a1 1 0 0 1 0 1.414L8.5 29.414z" />
                      </svg>
                    </span>
                  </a>
                  {(activeMega === 'India' || !activeMega) && (
                    <ul className="hamburger-panel-links">
                      {navLinks.map((link) => {
                        const current = isNavActive(location.pathname, link.href)
                        return (
                          <li key={link.label}>
                            <Link
                              to={link.href}
                              className={current ? 'is-current' : undefined}
                              onClick={closeMenu}
                            >
                              {link.label}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                  {activeMega && activeMega !== 'India' && (
                    <p className="hamburger-panel-placeholder">
                      Explore {activeMega} on the full Truegrow site.
                    </p>
                  )}
                </div>
              </div>
            </section>
          )}

          <section className="top-bar">
            <div className="top-bar-inner">
              <Link to="/" className="nav-eyebrow">
                India
              </Link>
              <nav className="primary-nav" aria-label="Primary">
                <ul>
                  {navLinks.map((link) => {
                    const current = isNavActive(location.pathname, link.href)
                    return (
                      <li key={link.label}>
                        <Link
                          to={link.href}
                          className={current ? 'is-current' : undefined}
                          aria-current={current ? 'page' : undefined}
                        >
                          {link.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </nav>
            </div>
          </section>
        </div>

        <div className="nav-right">
          <ul className="nav-right-list" role="menubar">
            <li role="menuitem">
              <a href="#" className="search-btn" aria-label="Search icon, hit enter to activate">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M20 20l-3.5-3.5" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <a href="#" className="footer-cta">
        <span>Read more about India on our Global Themes page</span>
        <ArrowIcon light />
      </a>

      <div className="footer-connect">
        <div className="footer-inner">
          <div className="footer-top">
            <h2>Connect with Truegrow India</h2>
            <div className="social-links">
              <a href="#" aria-label="Twitter">Twitter</a>
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
              <a href="#" aria-label="Instagram">Instagram</a>
            </div>
          </div>
          <div className="footer-bottom">
            <a href="#locations">Contact</a>
            <p className="copyright">
              © {new Date().getFullYear()} Truegrow. Static recreation for demo purposes.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
