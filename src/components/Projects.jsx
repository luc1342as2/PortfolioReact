import { projects } from '../data/portfolio';
import OptimizedImage from './OptimizedImage';
import './Projects.css';

export default function Projects() {
  return (
    <section id="project" className="projects">
      <div className="projects__inner container">
        <h2 className="section-title section-title--center">My <span>Projects</span></h2>
        <p className="section-subtitle">Browse my recent work</p>
        <div className="projects__grid">
          {projects.map(({ name, image, github, demo, skills = [] }) => (
            <article key={name} className="project-card">
              <div className="project-card__img-wrap">
                <OptimizedImage src={image} alt={name} className="project-card__img" loading="lazy" />
              </div>
              <h3 className="project-card__title">{name}</h3>
              {skills.length > 0 && (
                <div className="project-card__skills">
                  {skills.map((skill) => (
                    <span key={skill} className="project-card__skill">{skill}</span>
                  ))}
                </div>
              )}
              <div className="project-card__actions">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__btn"
                >
                  Code
                </a>
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__btn project-card__btn--primary"
                >
                  Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
