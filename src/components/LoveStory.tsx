import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
export const LoveStory = () => {
  return <div className="my-12">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Sparkles className="text-pink-500" size={32} />
          <h2 className="text-4xl md:text-5xl font-love text-pink-600 font-bold drop-shadow-md">
            A Love Story in Three Chapters
          </h2>
          <Sparkles className="text-pink-500" size={32} />
        </div>
        <p className="text-lg text-purple-700 italic font-love">
          Follow the journey of LOVE through enchanted moments
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Chapter 1: Welcome */}
        <div className="relative group">
          <div className="absolute -inset-2 bg-pink-200 rounded-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden border-2 border-pink-200 transform transition-transform duration-300 group-hover:-translate-y-2">
            <img src="/photo_5805520166480186418_y.jpg" alt="Welcome with Love" className="w-full h-64 object-cover" />
            <div className="p-4 bg-pink-50">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Heart size={16} className="text-pink-500 fill-pink-500" />
                <p className="text-center text-base font-love text-pink-700 font-bold">
                  Chapter I: Welcome
                </p>
                <Heart size={16} className="text-pink-500 fill-pink-500" />
              </div>
              <p className="text-center text-sm font-love text-purple-600 italic">
                Love invites you in with open arms
              </p>
            </div>
          </div>
        </div>
        {/* Chapter 2: Heart */}
        <div className="relative group">
          <div className="absolute -inset-2 bg-pink-200 rounded-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden border-2 border-pink-200 transform transition-transform duration-300 group-hover:-translate-y-2">
            <img src="/photo_5805520166480186430_y.jpg" alt="Love's Essence" className="w-full h-64 object-cover" />
            <div className="p-4 bg-pink-50">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Heart size={16} className="text-pink-500 fill-pink-500" />
                <p className="text-center text-base font-love text-pink-700 font-bold">
                  Chapter II: Heart
                </p>
                <Heart size={16} className="text-pink-500 fill-pink-500" />
              </div>
              <p className="text-center text-sm font-love text-purple-600 italic">
                Love is the essence of connection
              </p>
            </div>
          </div>
        </div>
        {/* Chapter 3: Celebration */}
        <div className="relative group">
          <div className="absolute -inset-2 bg-pink-200 rounded-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden border-2 border-pink-200 transform transition-transform duration-300 group-hover:-translate-y-2">
            <img src="/photo_5805520166480186426_y.jpg" alt="Love Celebration" className="w-full h-64 object-cover" />
            <div className="p-4 bg-pink-50">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Heart size={16} className="text-pink-500 fill-pink-500" />
                <p className="text-center text-base font-love text-pink-700 font-bold">
                  Chapter III: Celebration
                </p>
                <Heart size={16} className="text-pink-500 fill-pink-500" />
              </div>
              <p className="text-center text-sm font-love text-purple-600 italic">
                Love brings joy to all who embrace it
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-lg font-love text-purple-700 italic">
          Every chapter tells a story. Every heart holds a token. Every token
          spreads LOVE.
        </p>
      </div>
    </div>;
};