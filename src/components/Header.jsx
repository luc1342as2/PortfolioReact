import { useState, useEffect } from 'react';
import { navLinks } from '../data/portfolio';
import './Header.css';

export default function Header() {
  const [activeId, setActiveId] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map(({ id }) => document.getElementById(id)).filter(Boolean);
      const scrollY = window.scrollY;
      let current = 'home';
      for (const section of sections) {
        const top = section.offsetTop - 100;
        if (scrollY >= top) current = section.id;
      }
      setActiveId(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="header__nav container">
        <a href="#home" className="header__logo" onClick={(e) => handleNavClick(e, 'home')}>
          Portfolio
        </a>
        <button
          type="button"
          className="header__menu-btn"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="header__menu-icon" />
          <span className="header__menu-icon" />
          <span className="header__menu-icon" />
        </button>
        <ul className={`header__links ${menuOpen ? 'header__links--open' : ''}`}>
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeId === id ? 'header__link header__link--active' : 'header__link'}
                onClick={(e) => handleNavClick(e, id)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
