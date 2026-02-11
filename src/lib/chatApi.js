const CHAT_API_URL = typeof import.meta !== 'undefined' && import.meta.env?.VITE_CHAT_API_URL;

/** In dev, use relative /api/chat so Vite proxy can forward to the local chat server. */
function getChatEndpoint() {
  if (CHAT_API_URL?.trim()) return CHAT_API_URL;
  if (typeof import.meta !== 'undefined' && import.meta.env?.DEV) return '/api/chat';
  return '';
}

/**
 * Sends conversation + portfolio context to the chat API and returns the assistant reply.
 * @param {{ messages: Array<{ role: 'user'|'assistant', content: string }>, context: string }} payload
 * @returns {Promise<{ reply: string }>}
 */
export async function sendChatMessage(payload) {
  const endpoint = getChatEndpoint();
  if (!endpoint) {
    throw new Error('Chat API URL is not configured. Set VITE_CHAT_API_URL and deploy the serverless function.');
  }
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const text = await res.text();
  let data;
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    data = {};
  }

  if (!res.ok) {
    const reply = data.reply ?? data.message;
    if (reply) return { reply };
    if (res.status === 429 || (data.error && /quota|exceeded|rate limit/i.test(data.error))) {
      throw new Error('Your OpenAI account has hit its usage or quota limit. Check billing at https://platform.openai.com/account/billing');
    }
    throw new Error(res.status === 401 ? 'Invalid or missing API key on server.' : data.error || text || `Request failed: ${res.status}`);
  }
  return { reply: data.reply ?? data.message ?? '' };
}

export function isChatConfigured() {
  return Boolean(getChatEndpoint());
}
