import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function AiAssistant({ experienceLevel }: { experienceLevel: 1 | 2 | 3 }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', content: string }[]>([
    { role: 'ai', content: "Hello! I'm the Pociato autonomous assistant. I can help filter the menu for dietary needs or answer questions about our 72-hour sourdough process." }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (experienceLevel < 2) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    // Add user message
    const newMessages = [...messages, { role: 'user' as const, content: inputText }];
    setMessages(newMessages);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response stream
    setTimeout(() => {
      let aiResponse = "I can certainly help with that! Our sourdough pizza uses a proprietary 72-hour fermentation process with a natural starter, which breaks down the gluten further. It's not fully gluten-free, but many guests find it much lighter. Is there a specific pizza you're eyeing?";
      
      const lowerInput = inputText.toLowerCase();
      if (lowerInput.includes('vegan') || lowerInput.includes('plant')) {
        aiResponse = "For vegans, our 'Marinara Pure' is exceptional. We can also substitute our Fior di Latte with a cashew-based mozzarella alternative on any pie upon request!";
      } else if (lowerInput.includes('coffee') || lowerInput.includes('espresso')) {
        aiResponse = "Our current espresso blend is a direct-trade, lightly roasted Ethiopian and Colombian mix. Expect bright notes of bergamot and a smooth caramel finish.";
      }

      setMessages([...newMessages, { role: 'ai', content: aiResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
        {!isOpen ? (
          <motion.button
            key="ai-assistant-toggle"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 p-4 rounded-full bg-gradient-to-r from-burgundy to-espresso text-white shadow-[0_8px_30px_rgba(139,15,21,0.5)] border border-white/20 z-40 hover:scale-110 active:scale-95 transition-all group"
          >
            <Sparkles className="w-5 h-5 absolute top-2 right-2 text-caramel opacity-0 group-hover:opacity-100 transition-opacity" />
            <Bot className="w-6 h-6" />
          </motion.button>
        ) : null}

        {isOpen ? (
          <motion.div
            key="ai-assistant-panel"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="fixed bottom-6 right-6 w-[350px] h-[500px] bg-black/85 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-4 py-3 border-b border-white/10 bg-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00d8f5] animate-pulse"></div>
                <span className="text-white font-mono text-xs uppercase tracking-wider font-bold">Pociato AI</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/50 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-white/10 text-white rounded-tr-sm border border-white/5' 
                        : 'bg-[#00d8f5]/10 text-white/90 rounded-tl-sm border border-[#00d8f5]/20'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-[#00d8f5]/10 text-white/90 rounded-2xl rounded-tl-sm px-4 py-3 border border-[#00d8f5]/20 flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-[#00d8f5] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-1.5 h-1.5 bg-[#00d8f5] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-1.5 h-1.5 bg-[#00d8f5] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-white/10 bg-white/5">
              <div className="relative flex items-center">
                <input 
                  type="text" 
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Ask about the menu..."
                  className="w-full bg-black/50 text-white placeholder-white/30 text-sm rounded-full py-2.5 pl-4 pr-10 border border-white/10 focus:outline-none focus:border-[#00d8f5]/50 transition-colors focus:ring-1 focus:ring-[#00d8f5]/50"
                />
                <button 
                  type="submit"
                  disabled={!inputText.trim()}
                  className="absolute right-2 p-1.5 text-white/50 hover:text-[#00d8f5] disabled:opacity-50 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        ) : null}
    </>
  );
}
