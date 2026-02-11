import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

function cors(res, origin = '*') {
  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

export default async function handler(req, res) {
  cors(res);

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  if (!process.env.OPENAI_API_KEY) {
    res.status(500).json({ error: 'OPENAI_API_KEY is not configured on the server.' });
    return;
  }

  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
  } catch {
    res.status(400).json({ error: 'Invalid JSON body' });
    return;
  }

  const { messages = [], context = '' } = body;
  if (!Array.isArray(messages) || messages.length === 0) {
    res.status(400).json({ error: 'messages array is required' });
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
    const code = err.status === 401 ? 401 : 500;
    res.status(code).json({
      error: err.message || 'Failed to get AI response',
      reply: '',
    });
  }
}
