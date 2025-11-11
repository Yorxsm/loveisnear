import React from 'react';
import { Sparkles, Zap, Users } from 'lucide-react';
export const TokenInfo = () => {
  return <div className="my-12">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Sparkles className="text-pink-500" size={28} />
          <h2 className="text-4xl md:text-5xl font-love text-pink-600 font-bold drop-shadow-md">
            Token Magic
          </h2>
          <Sparkles className="text-pink-500" size={28} />
        </div>
        <p className="text-lg text-purple-700 italic font-love">
          Discover the enchantment behind $LOVE
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-pink-200 shadow-md">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
              <Sparkles className="text-pink-500" size={24} />
            </div>
          </div>
          <h3 className="text-xl text-center font-love text-purple-700 mb-2">
            Token Details
          </h3>
          <div className="space-y-2">
            <p className="text-center text-purple-800 font-love">
              <span className="font-bold">Name:</span> LOVE Token
            </p>
            <p className="text-center text-purple-800 font-love">
              <span className="font-bold">Ticker:</span> $LOVE
            </p>
            <p className="text-center text-purple-800 font-love">
              <span className="font-bold">Network:</span> NEAR Protocol
            </p>
          </div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-pink-200 shadow-md">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
              <Zap className="text-pink-500" size={24} />
            </div>
          </div>
          <h3 className="text-xl text-center font-love text-purple-700 mb-2">
            NEAR Strengths
          </h3>
          <ul className="space-y-2">
            <li className="text-center text-purple-800 font-love">
              ❤️ Low transaction fees = "Love is affordable"
            </li>
            <li className="text-center text-purple-800 font-love">
              ❤️ Fast finality = "Swift as love"
            </li>
            <li className="text-center text-purple-800 font-love">
              ❤️ Easy onboarding = "Welcome all hearts"
            </li>
          </ul>
        </div>
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-pink-200 shadow-md">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
              <Users className="text-pink-500" size={24} />
            </div>
          </div>
          <h3 className="text-xl text-center font-love text-purple-700 mb-2">
            Love Campaigns
          </h3>
          <ul className="space-y-2">
            <li className="text-center text-purple-800 font-love">
              ❤️ Love Comics
            </li>
            <li className="text-center text-purple-800 font-love">
              ❤️ Love letters in web3
            </li>
            <li className="text-center text-purple-800 font-love">
              ❤️ X spaces: "Is love overrated?"
            </li>
            <li className="text-center text-purple-800 font-love">
              ❤️ Couple spotlight
            </li>
          </ul>
        </div>
      </div>
    </div>;
};