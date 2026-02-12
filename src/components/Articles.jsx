import { useState } from 'react';
import { articles } from '../data/portfolio';
import './Articles.css';

const CATEGORIES = ['PLC & Automation', 'Cybersecurity', 'Web Development', 'Career & Learning'];
const CATEGORY_ICONS = {
  'PLC & Automation': 'bx-chip',
  'Cybersecurity': 'bx-shield-lock',
  'Web Development': 'bx-code-alt',
  'Career & Learning': 'bx-briefcase',
};

export default function Articles() {
  const [filter, setFilter] = useState('all');
  const featured = articles.filter((a) => a.featured);
  const others = articles.filter((a) => !a.featured);

  const filteredArticles = filter === 'all' ? others : others.filter((a) => a.category === filter);

  return (
    <section id="blog" className="articles">
      <div className="articles__inner container">
        <h2 className="section-title section-title--center">Blog</h2>
        <p className="section-subtitle">Thoughts on PLC, cybersecurity, web development, and career growth</p>

        {featured.length > 0 && (
          <div className="articles__featured">
            <h3 className="articles__section-title">Suggested Reads</h3>
            <div className="articles__featured-grid">
              {featured.map((article) => (
                <article key={article.id} className="article-card article-card--featured">
                  <span className="article-card__category">{article.category}</span>
                  <h3 className="article-card__title">{article.title}</h3>
                  <p className="article-card__excerpt">{article.excerpt}</p>
                  <span className="article-card__badge">Coming soon</span>
                </article>
              ))}
            </div>
          </div>
        )}

        <div className="articles__all">
          <h3 className="articles__section-title">All Posts</h3>
          <div className="articles__filters">
            <button
              type="button"
              className={`articles__filter ${filter === 'all' ? 'articles__filter--active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`articles__filter ${filter === cat ? 'articles__filter--active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="articles__grid">
            {filteredArticles.map((article) => (
              <article key={article.id} className="article-card">
                <span className="article-card__category">
                  <i className={`bx ${CATEGORY_ICONS[article.category] || 'bx-edit'}`} aria-hidden="true" />
                  {article.category}
                </span>
                <h3 className="article-card__title">{article.title}</h3>
                <p className="article-card__excerpt">{article.excerpt}</p>
                <span className="article-card__badge">Coming soon</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
