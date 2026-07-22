import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';

// Load KB once at module level so we don't re-read the file on every request
const kbPath = path.join(process.cwd(), 'svr_knowledge_base.txt');
let kbContent = '';
try { kbContent = fs.readFileSync(kbPath, 'utf8'); } catch { /* will fall back to empty */ }

const SYSTEM_PROMPT = `You are the official SVR Aesthetics virtual assistant embedded on the SVR Blood Tests website. You are polite, professional, warm and concise.

RULES:
1. ONLY answer questions using the Knowledge Base below. Never invent prices, tests, or clinic details.
2. If the user asks about skin aesthetic treatments (anti-wrinkle, dermal fillers, laser hair removal, etc.), politely say: "For our full range of aesthetic treatments, please visit our main website at https://svraesthetics.co.uk/ 😊"
3. Keep answers short (2-4 sentences max) unless the user asks for more detail.
4. Always be ready to share booking info, clinic address, and contact details from the Knowledge Base.

KNOWLEDGE BASE:
${kbContent}`;

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error('GEMINI_API_KEY is not set');
      return NextResponse.json({ error: 'Chat service is not configured' }, { status: 500 });
    }

    const body = await req.json();
    const message: string = body.message || '';
    const rawHistory: Array<{ role: string; text: string }> = body.history || [];

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      systemInstruction: SYSTEM_PROMPT,
    });

    // Build a clean alternating history that Gemini requires.
    // 1. Filter out any bot greeting messages and keep only real conversation turns.
    // 2. Ensure it starts with 'user' and strictly alternates user/model.
    const cleaned: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];

    for (const msg of rawHistory) {
      const role: 'user' | 'model' = msg.role === 'user' ? 'user' : 'model';
      const text = (msg.text || '').trim();
      if (!text) continue; // skip empty

      if (cleaned.length === 0 && role === 'model') continue; // history must start with user

      // Merge consecutive same-role messages
      if (cleaned.length > 0 && cleaned[cleaned.length - 1].role === role) {
        cleaned[cleaned.length - 1].parts[0].text += '\n' + text;
      } else {
        cleaned.push({ role, parts: [{ text }] });
      }
    }

    // If history ends with a user message (the one we're about to send), remove it
    // because we'll send it via sendMessage() separately.
    if (cleaned.length > 0 && cleaned[cleaned.length - 1].role === 'user') {
      cleaned.pop();
    }

    // Final safety: if history ends with 'user' now, trim it (Gemini wants it to end with 'model')
    if (cleaned.length > 0 && cleaned[cleaned.length - 1].role === 'user') {
      cleaned.pop();
    }

    const chat = model.startChat({ history: cleaned });
    const result = await chat.sendMessage(message);
    const text = result.response.text();

    return NextResponse.json({ reply: text });
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : String(error);
    console.error('Chat API Error:', errMsg);
    return NextResponse.json({ error: errMsg }, { status: 500 });
  }
}
