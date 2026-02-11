import { useState, useRef, useEffect } from 'react';
import * as portfolio from '../data/portfolio';
import { buildPortfolioContext } from '../lib/portfolioContext';
import { sendChatMessage, isChatConfigured } from '../lib/chatApi';
import './ChatBot.css';

const WELCOME = "Hi! I'm the portfolio assistant. Ask me anything about Lucas—his experience, projects, skills, certificates, or how to get in touch.";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);
  const contextRef = useRef(buildPortfolioContext({
    hero: portfolio.hero,
    about: portfolio.about,
    skills: portfolio.skills,
    projects: portfolio.projects,
    certificates: portfolio.certificates,
    contact: portfolio.contact,
    social: portfolio.social,
  }));

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  useEffect(() => scrollToBottom(), [messages]);

  const configured = isChatConfigured();

  const handleSend = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput('');
    setError(null);
    const userMessage = { role: 'user', content: text };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const history = [...messages, userMessage].map((m) => ({ role: m.role, content: m.content }));
      const { reply } = await sendChatMessage({
        messages: history,
        context: contextRef.current,
      });
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
    } catch (err) {
      setError(err.message || 'Something went wrong.');
      setMessages((prev) => [...prev, { role: 'assistant', content: null, error: true }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const displayMessages = messages.length ? messages : [{ role: 'assistant', content: WELCOME }];

  return (
    <div className="chatbot">
      <button
        type="button"
        className="chatbot__toggle"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        aria-expanded={open}
      >
        <span className="chatbot__toggle-icon" aria-hidden>💬</span>
      </button>
      {open && (
        <div className="chatbot__panel">
          <div className="chatbot__header">
            <h3 className="chatbot__title">Ask about Lucas</h3>
            <button type="button" className="chatbot__close" onClick={() => setOpen(false)} aria-label="Close">×</button>
          </div>
          <div className="chatbot__messages">
            {displayMessages.map((msg, i) => (
              <div key={i} className={`chatbot__msg chatbot__msg--${msg.role}`}>
                {msg.error && error ? (
                  <p className="chatbot__error">{error}</p>
                ) : msg.content != null ? (
                  <p className="chatbot__bubble">{msg.content}</p>
                ) : null}
              </div>
            ))}
            {loading && (
              <div className="chatbot__msg chatbot__msg--assistant">
                <p className="chatbot__bubble chatbot__typing">Thinking…</p>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          {!configured && (
            <p className="chatbot__unconfigured">Chat API not configured. Deploy the serverless function and set VITE_CHAT_API_URL to enable AI replies.</p>
          )}
          <div className="chatbot__input-wrap">
            <textarea
              className="chatbot__input"
              placeholder={configured ? 'Ask about experience, projects, skills…' : 'Configure chat API to enable'}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={1}
              disabled={!configured || loading}
              aria-label="Message"
            />
            <button
              type="button"
              className="chatbot__send"
              onClick={handleSend}
              disabled={!configured || loading || !input.trim()}
              aria-label="Send"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
