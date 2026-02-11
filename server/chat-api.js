/**
 * Local chat API server for development.
 * Load OPENAI_API_KEY from .env or .env.local and serve POST /api/chat.
 */
import { config } from 'dotenv';
import { resolve } from 'path';

config({ path: resolve(process.cwd(), '.env') });
config({ path: resolve(process.cwd(), '.env.local') });

import express from 'express';
import OpenAI from 'openai';

const PORT = Number(process.env.CHAT_API_PORT) || 3001;
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const app = express();
app.use(express.json({ limit: '1mb' }));

app.use((_req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.options('/api/chat', (_req, res) => res.status(204).end());

app.post('/api/chat', async (req, res) => {
  if (!process.env.OPENAI_API_KEY) {
    res.status(500).json({
      error: 'OPENAI_API_KEY is not set. Add it to .env.local (see .env.example).',
      reply: '',
    });
    return;
  }

  const { messages = [], context = '' } = req.body || {};
  if (!Array.isArray(messages) || messages.length === 0) {
    res.status(400).json({ error: 'messages array is required', reply: '' });
    return;
  }

  const systemContent =
    `You are a helpful, friendly assistant for the portfolio of Lucas Ghigli. Answer questions only using the information below. Be concise and professional. If something is not in the context, say you don't have that information and suggest they use the contact form or email.\n\n---\n${context}`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemContent },
        ...messages.map((m) => ({ role: m.role, content: m.content || '' })),
      ],
      max_tokens: 512,
    });

    const reply = completion.choices?.[0]?.message?.content?.trim() || 'I could not generate a reply.';
    res.status(200).json({ reply });
  } catch (err) {
    const status = err.status ?? err.statusCode;
    const msg = err.message || '';

    if (status === 429 || /quota|exceeded|rate limit/i.test(msg)) {
      res.status(200).json({
        reply: "I can't reply right now: your OpenAI account has hit its usage or quota limit. Check your plan and billing at https://platform.openai.com/account/billing and add payment or wait for your quota to reset.",
        error: msg,
      });
      return;
    }
    if (status === 401) {
      res.status(401).json({ error: 'Invalid or missing API key.', reply: '' });
      return;
    }
    res.status(status && status >= 400 ? status : 500).json({
      error: msg || 'Failed to get AI response',
      reply: '',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Chat API running at http://localhost:${PORT}/api/chat`);
  if (!process.env.OPENAI_API_KEY) {
    console.warn('Warning: OPENAI_API_KEY not set. Add it to .env.local and restart.');
  }
});
