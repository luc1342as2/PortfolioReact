import { useState, useEffect } from 'react';
import { hero, social } from '../data/portfolio';
import './Hero.css';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [bioCharIndex, setBioCharIndex] = useState(0);

  const phrase = `I'm a ${hero.roles[roleIndex]}`;
  const fullBio = hero.bio;

  // Change role every 4 seconds
  useEffect(() => {
    const t = setInterval(() => {
      setRoleIndex((i) => (i + 1) % hero.roles.length);
      setCharIndex(0);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  // Type out the current phrase character by character
  useEffect(() => {
    if (charIndex >= phrase.length) return;
    const t = setTimeout(() => setCharIndex((c) => c + 1), 80);
    return () => clearTimeout(t);
  }, [charIndex, phrase]);

  // Type out the bio character by character while user is on home
  useEffect(() => {
    if (bioCharIndex >= fullBio.length) return;
    const t = setTimeout(() => setBioCharIndex((c) => c + 1), 35);
    return () => clearTimeout(t);
  }, [bioCharIndex, fullBio]);

  const displayedText = phrase.slice(0, charIndex);
  const displayedBio = fullBio.slice(0, bioCharIndex);
  const bioComplete = bioCharIndex >= fullBio.length;

  const iconMap = {
    facebook: 'bx bxl-facebook',
    instagram: 'bx bxl-instagram-alt',
    github: 'bx bxl-github',
  };

  return (
    <section id="home" className="hero">
      <div className="hero__inner container">
        <h1 className="hero__name">{hero.name}</h1>
        <p className="hero__tagline">
          <span className="hero__role">{displayedText}</span>
          <span className="hero__cursor" aria-hidden="true">|</span>
        </p>
        <p className="hero__bio">
          {displayedBio}
          {!bioComplete && <span className="hero__cursor" aria-hidden="true">|</span>}
        </p>
        <div className="hero__social" role="list">
          {social.map(({ name, href, icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label={name}
              title={name}
            >
              <i className={iconMap[icon]} aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="hero__actions">
          {hero.cvLinks.map(({ label, href }) => (
            <a key={label} href={href} className="hero__btn" target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          ))}
          <a href="#contact" className="hero__btn">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
