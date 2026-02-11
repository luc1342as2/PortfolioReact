import { useState } from 'react';
import { contact, social } from '../data/portfolio';
import './Contact.css';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const iconMap = {
    facebook: 'bx bxl-facebook',
    instagram: 'bx bxl-instagram-alt',
    github: 'bx bxl-github',
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const accessKey = (contact.web3formsAccessKey || '').trim();
    const useWeb3Forms = accessKey && accessKey !== 'YOUR_WEB3FORMS_ACCESS_KEY';

    if (!useWeb3Forms) {
      // Fallback: open email client with form data (no Web3Forms setup needed)
      const subject = encodeURIComponent(`Contact from ${form.firstName.value} ${form.lastName.value}`);
      const body = encodeURIComponent(
        `Name: ${form.firstName.value} ${form.lastName.value}\n` +
        `Email: ${form.email.value}\n` +
        `Phone: ${form.phone.value || '(not provided)'}\n\n` +
        `Message:\n${form.message.value}`
      );
      window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
      setStatus('success-mailto');
      form.reset();
      return;
    }

    setStatus('sending');
    try {
      const payload = {
        access_key: accessKey,
        subject: `Contact from ${form.firstName.value} ${form.lastName.value}`,
        from_name: `${form.firstName.value} ${form.lastName.value}`,
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        email: form.email.value,
        phone: form.phone.value || '',
        message: form.message.value,
      };
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (data.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="contact__inner container">
        <p className="contact__subtitle">{contact.subtitle}</p>
        <h2 className="section-title section-title--center">Contact <span>Me</span></h2>
        <div className="contact__content">
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            {/* Honeypot - hidden from users, catches bots */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
            <div className="contact__form-row">
              <label className="contact__label" htmlFor="contact-firstname">
                First name
              </label>
              <input
                id="contact-firstname"
                type="text"
                name="firstName"
                className="contact__input"
                placeholder="John"
                required
                autoComplete="given-name"
                disabled={status === 'sending'}
              />
            </div>
            <div className="contact__form-row">
              <label className="contact__label" htmlFor="contact-lastname">
                Last name
              </label>
              <input
                id="contact-lastname"
                type="text"
                name="lastName"
                className="contact__input"
                placeholder="Doe"
                required
                autoComplete="family-name"
                disabled={status === 'sending'}
              />
            </div>
            <div className="contact__form-row">
              <label className="contact__label" htmlFor="contact-phone">
                Phone number
              </label>
              <input
                id="contact-phone"
                type="tel"
                name="phone"
                className="contact__input"
                placeholder="+1 (555) 000-0000"
                autoComplete="tel"
                disabled={status === 'sending'}
              />
            </div>
            <div className="contact__form-row">
              <label className="contact__label" htmlFor="contact-email">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                className="contact__input"
                placeholder="john@example.com"
                required
                autoComplete="email"
                disabled={status === 'sending'}
              />
            </div>
            <div className="contact__form-row">
              <label className="contact__label" htmlFor="contact-message">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                className="contact__input contact__textarea"
                placeholder="Your message..."
                rows={5}
                required
                disabled={status === 'sending'}
              />
            </div>
            {status === 'success' && (
              <p className="contact__form-feedback contact__form-feedback--success" role="status">
                Thank you. Your message has been sent.
              </p>
            )}
            {status === 'success-mailto' && (
              <p className="contact__form-feedback contact__form-feedback--success" role="status">
                Your email client should open with your message. Send the email from there to reach me.
              </p>
            )}
            {status === 'error' && (
              <p className="contact__form-feedback contact__form-feedback--error" role="alert">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
            <button
              type="submit"
              className="contact__submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send message'}
            </button>
          </form>
          <p className="contact__or">Or reach out directly</p>
          <a
            href={`mailto:${contact.email}`}
            className="contact__email"
            aria-label={`Email: ${contact.email}`}
          >
            <i className="bx bx-envelope" aria-hidden="true" />
            <span>{contact.email}</span>
          </a>
          <div className="contact__social" role="list">
            {social.map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social-link"
                aria-label={name}
                title={name}
              >
                <i className={iconMap[icon]} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
