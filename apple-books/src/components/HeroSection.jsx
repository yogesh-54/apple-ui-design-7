import React from 'react';
import { IPadFrame, IPhoneFrame } from './DeviceFrame';
import {
  CoverBeautifulWorld,
  CoverSlowFire,
  OpenBookReaderDaenerys,
  BannerAudiobooksPromo,
  MiniBookCover
} from './BookCovers';

export const HeroSection = () => {
  return (
    <section className="pt-16 pb-24 px-4 bg-white overflow-hidden text-center">
      <div className="max-w-[1024px] mx-auto">
        {/* Apple Books Icon */}
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[18px] sm:rounded-[22px] bg-gradient-to-b from-[#ff8c2b] via-[#ff6800] to-[#f04f00] p-3 sm:p-4 shadow-lg shadow-orange-500/20 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
            <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-none stroke-current" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
              {/* Apple Books open book icon */}
              <path d="M22 30 C36 28 46 32 50 36 C54 32 64 28 78 30 L78 68 C64 66 54 70 50 74 C46 70 36 66 22 68 Z" />
              <path d="M50 36 L50 74" strokeWidth="6" />
            </svg>
          </div>
          <span className="text-[15px] sm:text-[17px] font-bold text-[#1d1d1f] mt-3 tracking-tight">
            Apple Books
          </span>
        </div>

        {/* Main Headline */}
        <h2 className="text-[40px] sm:text-[62px] md:text-[68px] font-extrabold tracking-tight text-[#1d1d1f] leading-[1.08] mb-6">
          Read, listen, discover.<br />
          All in one place.
        </h2>

        {/* Subtitle Description */}
        <p className="text-[17px] sm:text-[19px] md:text-[20px] text-[#6e6e73] font-normal leading-[1.47] max-w-[780px] mx-auto mb-16 text-center">
          Apple Books is the single destination for all the books and audiobooks you love — and all the ones you&apos;ll love next. Browse the Book Store and Audiobook Store to find the perfect book to read or listen to. Track what you&apos;ve read and want to read, and set your own Reading Goals — all in one app and across all your Apple devices.
        </p>

        {/* Device Showcase (iPad with overlapping iPhone) */}
        <div className="relative max-w-[860px] mx-auto mt-6 px-2 sm:px-6">
          {/* 1. iPad Frame */}
          <div className="w-full max-w-[760px] mx-auto">
            <IPadFrame className="w-full aspect-[4/2.9] sm:aspect-[4/2.6] max-h-[520px]">
              <div className="p-4 sm:p-6 flex flex-col h-full bg-[#fbfbfd]">
                {/* iPad App Header */}
                <div className="flex items-center justify-between pb-3 border-b border-gray-200/80">
                  <div>
                    <h3 className="text-[22px] sm:text-[26px] font-bold tracking-tight text-[#1d1d1f]">Reading Now</h3>
                    <p className="text-[11px] sm:text-[12px] text-[#0071e3] font-medium flex items-center gap-1 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3]" />
                      Today&apos;s Reading: Goal achieved
                    </p>
                  </div>
                  {/* User Avatar */}
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 border border-white shadow-sm flex items-center justify-center text-white text-[12px] font-bold">
                    D
                  </div>
                </div>

                {/* iPad Main Content Split */}
                <div className="flex-1 grid grid-cols-12 gap-4 pt-3 overflow-hidden">
                  {/* Left Column: Current open book */}
                  <div className="col-span-7 flex flex-col justify-between">
                    <p className="text-[12px] font-semibold text-gray-500 mb-2 uppercase tracking-wider text-left">Current</p>
                    <div className="flex-1 flex items-center justify-center">
                      <OpenBookReaderDaenerys />
                    </div>
                    <div className="text-left mt-2 pl-2">
                      <p className="text-[12px] font-semibold text-[#1d1d1f]">A Game of Thrones</p>
                      <p className="text-[10px] text-gray-400">George R.R. Martin</p>
                    </div>
                  </div>

                  {/* Right Column: Recent + Want to Read */}
                  <div className="col-span-5 flex flex-col justify-between pl-2 border-l border-gray-200/60">
                    <div>
                      <p className="text-[12px] font-semibold text-gray-500 mb-2 uppercase tracking-wider text-left">Recent</p>
                      <div className="flex gap-2.5 justify-start">
                        <div className="w-[84px] h-[126px] shrink-0 shadow-md rounded-[3px]">
                          <CoverBeautifulWorld />
                        </div>
                        <div className="w-[84px] h-[126px] shrink-0 shadow-md rounded-[3px]">
                          <CoverSlowFire />
                        </div>
                      </div>
                    </div>

                    {/* Shelf below */}
                    <div className="mt-3 text-left">
                      <p className="text-[11px] font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Want to Read</p>
                      <div className="flex gap-1.5 overflow-hidden">
                        <MiniBookCover title="The Comfort Book" author="Matt Haig" bg="bg-[#60a5fa]" />
                        <MiniBookCover title="One Last Stop" author="Casey M." bg="bg-[#f43f5e]" />
                        <MiniBookCover title="Such a Quiet Place" author="Megan M." bg="bg-[#1e293b]" />
                        <MiniBookCover title="Animal" author="Lisa Taddeo" bg="bg-[#b91c1c]" />
                        <MiniBookCover title="All In" author="Billie Jean" bg="bg-[#059669]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </IPadFrame>
          </div>

          {/* 2. Overlapping iPhone (Front / Right) */}
          <div className="absolute right-0 sm:right-2 md:right-4 -bottom-10 sm:-bottom-14 w-[190px] sm:w-[250px] md:w-[270px] z-20 transform hover:-translate-y-2 transition-transform duration-300">
            <IPhoneFrame activeTab="audiobooks" className="w-full aspect-[9/18.5] shadow-2xl ring-1 ring-black/20">
              <div className="px-4 py-2 text-left">
                {/* Header */}
                <h4 className="text-[20px] font-bold text-[#1d1d1f] tracking-tight">Audiobooks</h4>
                <div className="flex items-center justify-between text-[11px] text-[#0071e3] font-medium mt-1">
                  <span>Browse Sections</span>
                  <span className="text-[14px]">&rsaquo;</span>
                </div>

                {/* Featured Book */}
                <div className="mt-3">
                  <p className="text-[8px] uppercase tracking-wider text-gray-400 font-semibold">Featured Book</p>
                  <p className="text-[11px] font-semibold text-[#1d1d1f]">Find something great to listen to.</p>
                </div>

                {/* $9.99 Audiobooks Promo Card */}
                <div className="mt-3">
                  <BannerAudiobooksPromo />
                </div>
              </div>
            </IPhoneFrame>
          </div>
        </div>
      </div>
    </section>
  );
};
