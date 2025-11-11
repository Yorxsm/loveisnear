import React from 'react';
export const DexChart = () => {
  return <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-pink-200 shadow-md">
      <div className="w-full h-96 overflow-hidden rounded-lg">
        <iframe src="https://dexscreener.com/near/love?embed=1&theme=dark&trades=0&info=0" width="100%" height="100%" className="border-0" title="LOVE Token Chart" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </div>
      <p className="text-center text-sm text-purple-600 mt-4 italic font-serif">
        Watch as our love story unfolds in real-time on the market
      </p>
    </div>;
};