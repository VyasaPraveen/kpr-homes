"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, User } from "lucide-react";
import Image from "next/image";
import {
  findResponse,
  GREETING_MESSAGES,
  QUICK_REPLIES,
} from "@/data/chatbotResponses";

interface Message {
  id: string;
  text: string;
  sender: "bot" | "user";
  followUp?: string[];
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);
      setTimeout(() => {
        setMessages([
          {
            id: "greeting-1",
            text: GREETING_MESSAGES[0],
            sender: "bot",
            followUp: QUICK_REPLIES,
          },
        ]);
        setIsTyping(false);
      }, 600);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const handleSend = (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      text: messageText,
      sender: "user",
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setIsTyping(true);
    setTimeout(() => {
      const { response, followUp } = findResponse(messageText);
      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        text: response,
        sender: "bot",
        followUp,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800 + Math.random() * 400);
  };

  return (
    <>
      {/* Chat Trigger Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-44 right-8 z-40 w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow overflow-hidden bg-white border-2 border-gold-400"
            aria-label="Open chat"
          >
            <Image
              src="/images/ai-assistant.svg"
              alt="AI Chat Assistant"
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
            />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold-400 rounded-full text-navy-900 text-[10px] flex items-center justify-center font-bold animate-pulse">
              AI
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-44 right-8 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[70vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-navy-900 to-navy-800 px-5 py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-navy-900" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">
                    KPR Homes Assistant
                  </h3>
                  <span className="text-green-400 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    Online
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-2 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.sender === "bot" && (
                    <div className="w-7 h-7 bg-gradient-gold rounded-full flex items-center justify-center shrink-0 mt-1">
                      <Bot className="w-3.5 h-3.5 text-navy-900" />
                    </div>
                  )}
                  <div className="max-w-[80%]">
                    <div
                      className={`px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${
                        msg.sender === "user"
                          ? "bg-navy-900 text-white rounded-2xl rounded-tr-sm"
                          : "bg-white text-charcoal-700 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100"
                      }`}
                    >
                      {msg.text.split(/\*\*(.*?)\*\*/g).map((part, i) =>
                        i % 2 === 1 ? (
                          <strong key={i} className="font-semibold">
                            {part}
                          </strong>
                        ) : (
                          <span key={i}>{part}</span>
                        )
                      )}
                    </div>
                    {/* Quick Reply Buttons */}
                    {msg.sender === "bot" && msg.followUp && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {msg.followUp.map((text) => (
                          <button
                            key={text}
                            onClick={() => handleSend(text)}
                            className="px-3 py-1.5 text-xs bg-white border border-gold-300 text-navy-800 rounded-full hover:bg-gold-50 hover:border-gold-400 transition-colors"
                          >
                            {text}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  {msg.sender === "user" && (
                    <div className="w-7 h-7 bg-navy-200 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <User className="w-3.5 h-3.5 text-navy-700" />
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2 items-center"
                >
                  <div className="w-7 h-7 bg-gradient-gold rounded-full flex items-center justify-center shrink-0">
                    <Bot className="w-3.5 h-3.5 text-navy-900" />
                  </div>
                  <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100 flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t bg-white p-3 shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2.5 bg-gray-100 rounded-lg text-sm text-charcoal-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 transition-all"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={!input.trim()}
                  className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center text-navy-900 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
