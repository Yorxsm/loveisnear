import React, { useState } from 'react';
import { HeartIcon, Copy, Check } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
export const BuyButton = () => {
  const [copied, setCopied] = useState(false);
  const ticker = 'Love-1849.meme-cooking.near';
  const handleCopy = () => {
    navigator.clipboard.writeText(ticker);
    setCopied(true);
    toast.success('Contract address copied!', {
      duration: 2000,
      style: {
        background: '#ec4899',
        color: '#fff',
        fontFamily: 'Dancing Script, cursive'
      }
    });
    setTimeout(() => setCopied(false), 2000);
  };
  return <div className="flex flex-col items-center">
      <Toaster position="top-center" />
      <a href="https://meme.cooking/near/love" target="_blank" rel="noopener noreferrer" className="group">
        <button className="bg-pink-600 hover:bg-pink-700 text-white text-xl md:text-2xl font-love px-8 md:px-12 py-4 md:py-6 rounded-full shadow-lg flex items-center gap-3 transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-pink-700">
          <HeartIcon size={24} className="text-white fill-white group-hover:animate-pulse" />
          <span className="font-bold">Buy $LOVE</span>
        </button>
      </a>
      <button onClick={handleCopy} className="mt-4 flex items-center gap-2 bg-purple-100 hover:bg-purple-200 text-purple-800 px-4 py-2 rounded-lg transition-all duration-200 border border-purple-300 hover:border-purple-400">
        <code className="text-sm font-mono">{ticker}</code>
        {copied ? <Check size={16} className="text-green-600" /> : <Copy size={16} className="text-purple-600" />}
      </button>
      <div className="mt-6 text-center max-w-md px-4">
        <p className="text-lg md:text-xl text-purple-700 font-love italic mb-2">
          "The greatest gift you can give is LOVE"
        </p>
        <p className="text-xs md:text-sm text-pink-600 font-love">
          Join thousands of hearts united on the NEAR Protocol
        </p>
      </div>
    </div>;
};