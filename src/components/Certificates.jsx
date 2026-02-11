import { certificates } from '../data/portfolio';
import OptimizedImage from './OptimizedImage';
import './Certificates.css';

export default function Certificates() {
  return (
    <section id="certificate" className="certificates">
      <div className="certificates__inner container">
        <h2 className="section-title section-title--center">My <span>Certificates</span></h2>
        <p className="section-subtitle">Credentials and continuous learning</p>
        <div className="certificates__grid">
          {certificates.map(({ title, image, url, skills = [] }) => (
            <a
              key={title}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card"
            >
              <div className="cert-card__img-wrap">
                <OptimizedImage src={image} alt={title} className="cert-card__img" loading="lazy" />
              </div>
              <span className="cert-card__title">{title}</span>
              {skills.length > 0 && (
                <div className="cert-card__skills">
                  {skills.map((skill) => (
                    <span key={skill} className="cert-card__skill">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
