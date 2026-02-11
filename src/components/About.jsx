import { useState, useEffect } from 'react';
import { about } from '../data/portfolio';
import OptimizedImage from './OptimizedImage';
import './About.css';

export default function About() {
  const [storyCharIndex, setStoryCharIndex] = useState(0);
  const fullStory = about.story;
  const displayedStory = fullStory.slice(0, storyCharIndex);
  const storyComplete = storyCharIndex >= fullStory.length;

  useEffect(() => {
    if (storyCharIndex >= fullStory.length) return;
    const t = setTimeout(() => setStoryCharIndex((c) => c + 1), 35);
    return () => clearTimeout(t);
  }, [storyCharIndex, fullStory]);

  return (
    <section id="about" className="about">
      <div className="about__inner container">
        <div className="about__media">
          <OptimizedImage
            src={about.image}
            alt="Lucas Ghigli"
            className="about__img"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className="about__content">
          <h2 className="section-title section-title--center">About <span>Myself</span></h2>
          <p className="about__subtitle about__subtitle--center">{about.subtitle}</p>
          <div className="about__experience">
            <h3 className="about__experience-title">{about.experience.title}</h3>
            <div className="about__jobs">
              {about.experience.jobs.map((job, index) => (
                <article key={index} className="about__job">
                  <header className="about__job-header">
                    <h4 className="about__job-role">{job.role}</h4>
                    {(job.company || job.location) && (
                      <p className="about__job-meta">
                        {[job.company, job.location].filter(Boolean).join(', ')}
                      </p>
                    )}
                    <p className="about__job-period">{job.period}</p>
                  </header>
                  <ul className="about__job-bullets">
                    {job.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                  {job.skills?.length > 0 && (
                    <div className="about__job-skills">
                      <span className="about__job-skills-label">Skills:</span>
                      <ul className="about__job-skills-list">
                        {job.skills.map((skill, i) => (
                          <li key={i}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
          <div className="about__cards">
            <div className="about__card">
              <h3 className="about__card-title about__card-title--center">{about.education.title}</h3>
              <ul className="about__list about__list--center">
                {about.education.items.map((item) => (
                  <li key={item.credential}>
                    <div>{item.credential}</div>
                    <div className="about__education-meta">{item.school}, {item.location}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="about__story">
            {displayedStory}
            {!storyComplete && <span className="about__story-cursor" aria-hidden="true">|</span>}
          </p>
        </div>
      </div>
    </section>
  );
}
