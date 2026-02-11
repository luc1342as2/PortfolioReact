import { useState, useEffect, useRef } from 'react';
import { skills } from '../data/portfolio';
import './Skills.css';

export default function Skills() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Defer so the 0% state paints before the fill animation runs
          requestAnimationFrame(() => {
            requestAnimationFrame(() => setIsInView(true));
          });
        } else {
          // Reset bars when user scrolls away so they refill on return
          setIsInView(false);
        }
      },
      { threshold: 0.25, rootMargin: '0px 0px -80px 0px' }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="skills__inner container">
        <h2 className="section-title section-title--center">My <span>Skills</span></h2>
        <p className="section-subtitle">Front-end and back-end technologies I work with</p>
        <div className="skills__grid">
          <div className="skills__group">
            <h3 className="skills__group-title">Front-end</h3>
            <ul className="skills__list">
              {skills.frontend.map(({ name, level }) => (
                <li key={name} className="skills__item">
                  <span className="skills__name">{name}</span>
                  <div className="skills__bar-wrap">
                    <div
                      className="skills__bar"
                      style={{ width: isInView ? `${level}%` : '0%' }}
                      aria-label={`${name}: ${level}%`}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="skills__group">
            <h3 className="skills__group-title">Back-end & tools</h3>
            <ul className="skills__list">
              {skills.backend.map(({ name, level }) => (
                <li key={name} className="skills__item">
                  <span className="skills__name">{name}</span>
                  <div className="skills__bar-wrap">
                    <div
                      className="skills__bar"
                      style={{ width: isInView ? `${level}%` : '0%' }}
                      aria-label={`${name}: ${level}%`}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
