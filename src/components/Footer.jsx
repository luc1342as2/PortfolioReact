import './Footer.css';

export default function Footer() {
  const year = 2024;

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <p className="footer__copy">
          &copy; {year} Portfolio. All rights reserved by{' '}
          <a href="#home" className="footer__link">Lucas Ghigli</a>
        </p>
      </div>
    </footer>
  );
}
