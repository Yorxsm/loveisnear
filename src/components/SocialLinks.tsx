import React from 'react';
export const SocialLinks = () => {
  return <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
      <a href="https://x.com/ahavahonnear" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-pink-500 text-white px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all hover:bg-pink-600">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
        </svg>
        <span className="font-medium font-love text-lg">Follow on X</span>
      </a>
      <a href="https://t.me/love_is_love007" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-blue-500 text-white px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all hover:bg-blue-600">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.5 4.5l-19 4.536l5.5 2.464l10.5 -7l-7 9l8.5 5.5l1.5 -15z"></path>
          <path d="M8 12v9l3 -6l3 6l2 -9"></path>
        </svg>
        <span className="font-medium font-love text-lg">Join Telegram</span>
      </a>
    </div>;
};