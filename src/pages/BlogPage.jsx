import { useState } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/portfolio';
import './BlogPage.css';

const CATEGORIES = ['PLC & Automation', 'Cybersecurity', 'Web Development', 'Career & Learning'];
const CATEGORY_ICONS = {
  'PLC & Automation': 'bx-chip',
  'Cybersecurity': 'bx-shield-lock',
  'Web Development': 'bx-code-alt',
  'Career & Learning': 'bx-briefcase',
};

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function sortByDateNewest(articles) {
  return [...articles].sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
}

export default function BlogPage() {
  const [filter, setFilter] = useState('all');
  const [menuOpen, setMenuOpen] = useState(false);
  const featured = sortByDateNewest(articles.filter((a) => a.featured));
  const others = sortByDateNewest(articles.filter((a) => !a.featured));
  const filteredArticles = filter === 'all' ? others : sortByDateNewest(others.filter((a) => a.category === filter));

  const scrollToSection = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="blog-page">
      <header className="blog-page__header blog-page__header--nav">
        <nav className="blog-page__nav container">
          <button
            type="button"
            className="blog-page__menu-btn"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="blog-page__menu-icon" />
            <span className="blog-page__menu-icon" />
            <span className="blog-page__menu-icon" />
          </button>
          <ul className={`blog-page__links ${menuOpen ? 'blog-page__links--open' : ''}`}>
            <li>
              <Link to="/" className="blog-page__link" onClick={() => setMenuOpen(false)}>
                Portfolio
              </Link>
            </li>
            <li>
              <button type="button" className="blog-page__link blog-page__link--btn" onClick={() => scrollToSection('suggested-reads')}>
                Suggested Reads
              </button>
            </li>
            <li>
              <button type="button" className="blog-page__link blog-page__link--btn" onClick={() => scrollToSection('all-posts')}>
                All Posts
              </button>
            </li>
          </ul>
        </nav>
        <div className="blog-page__header-content container">
          <h1 className="blog-page__title">Blog</h1>
          <p className="blog-page__subtitle">Thoughts on PLC, cybersecurity, web development, and career growth</p>
        </div>
      </header>

      <main className="blog-page__main">
        <div className="blog-page__inner container">
          {featured.length > 0 && (
            <section id="suggested-reads" className="blog-page__featured">
              <h2 className="blog-page__section-title">Suggested Reads</h2>
              <div className="blog-page__featured-grid">
                {featured.map((article) => (
                  <article key={article.id} className="blog-article blog-article--featured">
                    <span className="blog-article__category">{article.category}</span>
                    <h3 className="blog-article__title">{article.title}</h3>
                    <p className="blog-article__excerpt">{article.excerpt}</p>
                  {article.date && <time className="blog-article__date">{formatDate(article.date)}</time>}
                  <div className="blog-article__content">
                    {article.content?.split('\n\n').map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
          )}

          <section id="all-posts" className="blog-page__all">
            <h2 className="blog-page__section-title">All Posts</h2>
            <div className="blog-page__filters">
              <button
                type="button"
                className={`blog-page__filter ${filter === 'all' ? 'blog-page__filter--active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`blog-page__filter ${filter === cat ? 'blog-page__filter--active' : ''}`}
                  onClick={() => setFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="blog-page__grid">
              {filteredArticles.map((article) => (
                <article key={article.id} className="blog-article">
                  <span className="blog-article__category">
                    <i className={`bx ${CATEGORY_ICONS[article.category] || 'bx-edit'}`} aria-hidden="true" />
                    {article.category}
                  </span>
                  <h3 className="blog-article__title">{article.title}</h3>
                  <p className="blog-article__excerpt">{article.excerpt}</p>
                  {article.date && <time className="blog-article__date">{formatDate(article.date)}</time>}
                  <div className="blog-article__content">
                      {article.content.split('\n\n').map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
