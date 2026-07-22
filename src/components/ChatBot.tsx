'use client';
import { useState, useRef, useEffect, KeyboardEvent } from 'react';

const WEBHOOK_URL = 'https://n8n.srv1751669.hstgr.cloud/webhook/svr-chatbot-webhook';
const BOOKING_URL = 'https://svraesthetics.co.uk/book-free-consultation/';
const WHATSAPP_NUMBER = '077 92284575';

interface Message {
  text: string;
  type: 'user' | 'bot';
  showActions?: boolean;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [welcomeShown, setWelcomeShown] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && !welcomeShown) {
      setTimeout(() => {
        setMessages([{
          text: "Hello! Welcome to SVR Aesthetics ✨\n\nI'm here to help with questions about our treatments, pricing, booking consultations, and clinic information.\n\nHow can I assist you today?",
          type: 'bot',
          showActions: true
        }]);
        setWelcomeShown(true);
      }, 300);
    }
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 400);
    }
  }, [isOpen, welcomeShown]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text) return;

    setMessages(prev => [...prev, { text, type: 'user' }]);
    setInput('');
    setIsTyping(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: text,
          history: messages.map(m => ({ role: m.type === 'bot' ? 'model' : 'user', text: m.text }))
        })
      });

      if (!res.ok) throw new Error('Network response was not OK');

      let data = await res.json();
      if (Array.isArray(data)) data = data[0] || {};

      const reply = data.reply || data.output || data.message || data.text || data.response || 'Thank you for your message.';
      
      setIsTyping(false);
      setMessages(prev => [...prev, { text: reply, type: 'bot', showActions: true }]);
    } catch (error) {
      console.error(error);
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        text: 'Sorry, I am having trouble connecting right now. Please contact us directly and our team will be happy to help.', 
        type: 'bot',
        showActions: true
      }]);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <>
      <button id="svr-chat-btn" aria-label="Chat with us" onClick={toggleChat}>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
        </svg>
      </button>

      <div id="svr-chat-window" className={isOpen ? 'open' : ''}>
        <div id="svr-chat-header">
          <div className="avatar">S</div>
          <div className="info">
            <div className="name">SVR Aesthetics</div>
            <div className="status">Online now</div>
          </div>
          <button id="svr-close-btn" onClick={toggleChat}>✕</button>
        </div>

        <div id="svr-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`svr-msg ${msg.type}`}>
              <span style={{ whiteSpace: 'pre-wrap' }}>{msg.text}</span>
              {msg.type === 'bot' && msg.showActions && (
                <>
                  <div style={{ marginTop: '10px', fontSize: '12px', color: '#7A3B8F' }}>
                    📞 WhatsApp / Call: {WHATSAPP_NUMBER}
                  </div>
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="svr-book-btn">
                    📅 Book Consultation
                  </a>
                </>
              )}
            </div>
          ))}
          
          {isTyping && (
            <div id="svr-typing" className="svr-msg bot">
              <span></span><span></span><span></span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div id="svr-input-area">
          <input 
            ref={inputRef}
            id="svr-input" 
            type="text" 
            placeholder="Ask about our treatments..." 
            maxLength={500} 
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isTyping}
          />
          <button id="svr-send-btn" aria-label="Send" onClick={sendMessage} disabled={isTyping}>
            <svg viewBox="0 0 24 24"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/></svg>
          </button>
        </div>
      </div>
    </>
  );
}
