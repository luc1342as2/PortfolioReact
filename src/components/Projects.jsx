import { projects } from '../data/portfolio';
import OptimizedImage from './OptimizedImage';
import './Projects.css';

export default function Projects() {
  const sorted = [...projects].sort((a, b) => (b.year || 0) - (a.year || 0));
  const featuredProjects = sorted.filter((p) => p.featured);
  const otherProjects = sorted.filter((p) => !p.featured);

  return (
    <section id="project" className="projects">
      <div className="projects__inner container">
        <h2 className="section-title section-title--center">My <span>Projects</span></h2>
        <p className="section-subtitle">Browse my recent work</p>

        {featuredProjects.length > 0 && (
          <div className="projects__featured">
            <h3 className="projects__featured-title">Featured Projects</h3>
            <div className="projects__featured-grid">
              {featuredProjects.map((project) => (
                <article key={project.name} className="project-card project-card--featured">
                  <div className="project-card__header">
                    <h3 className="project-card__title project-card__title--featured">{project.name}</h3>
                    <div className="project-card__meta">
                      <span className="project-card__year">{project.year}</span>
                      {project.skills?.length > 0 && (
                        <div className="project-card__skills">
                          {project.skills.map((skill) => (
                            <span key={skill} className="project-card__skill">{skill}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="project-card__img-wrap project-card__img-wrap--featured">
                    <OptimizedImage src={project.image} alt={project.name} className="project-card__img" loading="lazy" />
                  </div>
                  <div className="project-card__content">
                    <p className="project-card__description project-card__description--featured">
                      {project.featuredDescription}
                    </p>
                    <div className="project-card__challenges">
                      <strong>Challenges:</strong> {project.challenges}
                    </div>
                    <div className="project-card__actions">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card__btn">
                        Code
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-card__btn">
                        Demo
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        <h3 className="projects__other-title">Other Projects</h3>
        <div className="projects__grid">
          {otherProjects.map(({ name, image, github, demo, skills = [], description, year }) => (
            <article key={name} className="project-card">
              <div className="project-card__header">
                <h3 className="project-card__title">{name}</h3>
                <div className="project-card__meta">
                  {year && <span className="project-card__year">{year}</span>}
                  {skills.length > 0 && (
                    <div className="project-card__skills">
                      {skills.map((skill) => (
                        <span key={skill} className="project-card__skill">{skill}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="project-card__img-wrap">
                <OptimizedImage src={image} alt={name} className="project-card__img" loading="lazy" />
              </div>
              <div className="project-card__content">
                {description && <p className="project-card__description">{description}</p>}
                <div className="project-card__actions">
                  <a href={github} target="_blank" rel="noopener noreferrer" className="project-card__btn">
                    Code
                  </a>
                  <a href={demo} target="_blank" rel="noopener noreferrer" className="project-card__btn">
                    Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
