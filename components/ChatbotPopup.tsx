'use client';

import { useState } from "react";
import Image from "next/image";

interface ChatbotPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatbotPopup({ isOpen, onClose }: ChatbotPopupProps) {
  const [message, setMessage] = useState("");

  const quickQuestions = [
    "How does Botpress handle customer support?",
    "What can Botpress do?",
    "Where should my team start with AI?"
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Popup Container - Fixed di pojok kanan bawah */}
      <div className="fixed bottom-6 right-6 z-[1000] w-[400px] h-[600px] animate-slideUp">
        <div className="w-full h-full bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden">
          
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
            {/* Back Button */}
            <button 
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Logo and Title */}
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#0052CC]">
                <Image
                  src="/digitaro-chatbot/digitaro.png"
                  alt="Digitaro"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-[#0052CC] text-lg">Digitaro</h3>
                <p className="text-sm text-gray-500">Ask me anything!</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              {/* Refresh Button */}
              <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
              
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Chat Content */}
          <div className="flex-1 overflow-y-auto px-6 py-8 bg-gradient-to-b from-white to-gray-50">
            
            {/* Digitaro Avatar Large */}
            <div className="flex flex-col items-center mb-8">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#0052CC] mb-4">
                <Image
                  src="/digitaro-chatbot/digitaro.png"
                  alt="Digitaro"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="font-bold text-2xl text-[#0052CC] mb-1">Digitaro</h2>
              <p className="text-gray-500">Ask me anything!</p>
            </div>

            {/* Today Divider */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-sm text-gray-500 font-medium">Today</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* Bot Welcome Message */}
            <div className="flex items-start gap-3 mb-6">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-[#0052CC] flex-shrink-0">
                <Image
                  src="/digitaro-chatbot/digitaro.png"
                  alt="Digitaro"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-gray-100 rounded-2xl rounded-tl-none px-6 py-4 max-w-[80%]">
                <p className="text-gray-800 text-base">
                  Hi there! 👋 What can I help you with today?
                </p>
              </div>
            </div>

            {/* Quick Question Buttons */}
            <div className="space-y-3 mb-6">
              {quickQuestions.map((question, idx) => (
                <button
                  key={idx}
                  className="w-full bg-[#4A9EFF] hover:bg-[#3A8EEF] text-white px-6 py-3 rounded-full text-left transition-colors duration-200 shadow-sm"
                >
                  {question}
                </button>
              ))}
            </div>

          </div>

          {/* Input Area */}
          <div className="px-6 py-4 bg-white border-t border-gray-200">
            <div className="flex items-center gap-3 bg-gray-50 rounded-full px-5 py-3 border border-gray-200 focus-within:border-[#0052CC] transition-colors">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400"
              />
              <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
