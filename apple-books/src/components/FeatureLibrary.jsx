import React from 'react';
import { IPhoneFrame } from './DeviceFrame';
import {
  CoverApplesNeverFall,
  CoverTheCellist,
  CoverWhileWeWereDating,
  CoverThisWillAllBeOver
} from './BookCovers';

export const FeatureLibrary = () => {
  return (
    <section className="py-24 px-4 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-[1024px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-6 text-left max-w-lg mx-auto lg:mx-0">
          <h2 className="text-[36px] sm:text-[44px] md:text-[48px] font-bold text-[#1d1d1f] tracking-tight leading-[1.1] mb-6">
            Your library,<br />
            your way.
          </h2>
          <p className="text-[17px] sm:text-[19px] text-[#6e6e73] font-normal leading-[1.47]">
            Organize your library any way you like. With collections, every one of your books is right where you want it. Create your own collections and get to them easily at any time. You can also revisit an old favorite you&apos;ve already read in the Finished collection.
          </p>
        </div>

        {/* Right Column: iPhone Mockup */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="w-[300px] sm:w-[320px]">
            <IPhoneFrame activeTab="library" className="w-full aspect-[9/18.5] shadow-2xl">
              <div className="px-4 py-2 flex flex-col h-full text-left">
                {/* Header */}
                <div className="flex items-center justify-between mt-1">
                  <h3 className="text-[26px] font-bold text-[#1d1d1f] tracking-tight">Library</h3>
                  <button className="text-[14px] text-[#0071e3] font-medium hover:underline">Edit</button>
                </div>

                {/* Collections Link */}
                <div className="flex items-center justify-between py-2 text-[13px] text-[#1d1d1f] border-b border-gray-100 mt-1 cursor-pointer hover:bg-gray-50/50 rounded px-1 transition-colors">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#8e8e93]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                    <span className="font-semibold text-gray-700">Collections</span>
                  </div>
                  <span className="text-gray-400 font-bold">&rsaquo;</span>
                </div>

                {/* 2x2 Grid of Books */}
                <div className="grid grid-cols-2 gap-3.5 mt-3 flex-1 overflow-hidden">
                  {/* Book 1: Apples Never Fall */}
                  <div className="flex flex-col">
                    <div className="relative aspect-[2/3] w-full rounded shadow-md overflow-hidden transform hover:scale-[1.03] transition-transform">
                      <CoverApplesNeverFall />
                      {/* NEW Badge */}
                      <div className="absolute top-1.5 left-1.5 bg-[#0071e3] text-white text-[7.5px] font-bold px-1.5 py-0.5 rounded tracking-wide uppercase shadow">
                        NEW
                      </div>
                    </div>
                  </div>

                  {/* Book 2: The Cellist */}
                  <div className="flex flex-col">
                    <div className="relative aspect-[2/3] w-full rounded shadow-md overflow-hidden transform hover:scale-[1.03] transition-transform">
                      <CoverTheCellist />
                    </div>
                    {/* Progress Bar under cover */}
                    <div className="mt-1 flex items-center justify-between text-[9px] text-gray-400 px-0.5">
                      <span>95%</span>
                      <button className="hover:text-black">•••</button>
                    </div>
                    <div className="w-full bg-gray-200 h-0.5 rounded-full overflow-hidden mt-0.5">
                      <div className="bg-[#0071e3] h-full w-[95%]" />
                    </div>
                  </div>

                  {/* Book 3: While We Were Dating */}
                  <div className="flex flex-col">
                    <div className="relative aspect-[2/3] w-full rounded shadow-md overflow-hidden transform hover:scale-[1.03] transition-transform">
                      <CoverWhileWeWereDating />
                    </div>
                  </div>

                  {/* Book 4: This Will All Be Over Soon */}
                  <div className="flex flex-col">
                    <div className="relative aspect-[2/3] w-full rounded shadow-md overflow-hidden transform hover:scale-[1.03] transition-transform">
                      <CoverThisWillAllBeOver />
                    </div>
                  </div>
                </div>
              </div>
            </IPhoneFrame>
          </div>
        </div>
      </div>
    </section>
  );
};
