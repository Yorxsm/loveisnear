import React from 'react';
import { HeartIcon, ExternalLinkIcon } from 'lucide-react';
import { TokenInfo } from './components/TokenInfo';
import { DexChart } from './components/DexChart';
import { SocialLinks } from './components/SocialLinks';
import { BuyButton } from './components/BuyButton';
import { LoveStory } from './components/LoveStory';
export function App() {
  return <div className="w-full min-h-screen bg-gradient-to-b from-pink-50 to-purple-100 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="relative w-full bg-white rounded-lg shadow-2xl p-8 border-4 border-pink-200 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-pink-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full translate-x-1/2 -translate-y-1/2 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-100 rounded-full -translate-x-1/3 translate-y-1/3 opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-36 h-36 bg-pink-100 rounded-full translate-x-1/3 translate-y-1/3 opacity-50"></div>
          {/* Storybook content */}
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h1 className="text-5xl md:text-7xl font-love text-pink-600 mb-4 font-bold tracking-wide drop-shadow-lg">
                LOVE Token
              </h1>
              <p className="text-xl md:text-2xl text-purple-700 italic font-love">
                The Heartbeat of NEAR Protocol
              </p>
            </div>
            <div className="my-16">
              <BuyButton />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <img src="/photo_5805520166480186431_y.jpg" alt="LOVE Token" className="w-full h-full object-contain" />
                  <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="bg-pink-50 border border-pink-200 rounded-lg p-6 shadow-md">
                  <h2 className="text-3xl font-love text-pink-600 mb-4 font-bold">
                    The Tale of LOVE
                  </h2>
                  <p className="text-purple-800 mb-4 font-love">
                    "Love is patient. Love is kind. Love does not envy, it does
                    not boast, it is not proud. It does not dishonor others, it
                    is not self-seeking, it is not easily angered, it keeps no
                    record of wrongs."
                  </p>
                  <p className="text-purple-800 font-love">
                    Love is love. You choose it. You earn it. You share it. You
                    build with it. And sometimes… you even stake it.
                  </p>
                </div>
              </div>
            </div>
            <TokenInfo />
            <div className="my-12 relative">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="h-1 w-12 bg-gradient-to-r from-transparent to-pink-400 rounded"></div>
                  <HeartIcon size={32} className="text-pink-500 fill-pink-500 animate-pulse" />
                  <div className="h-1 w-12 bg-gradient-to-l from-transparent to-pink-400 rounded"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-love text-pink-600 font-bold drop-shadow-md">
                  Magical Market View
                </h2>
              </div>
              <DexChart />
            </div>
            <LoveStory />
            <div className="my-12">
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-love text-pink-600 font-bold drop-shadow-md mb-3">
                  Join Our Enchanted Community
                </h2>
                <p className="text-lg text-purple-700 italic font-love">
                  Connect with hearts from around the world
                </p>
              </div>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>;
}