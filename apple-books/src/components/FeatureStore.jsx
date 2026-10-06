import React from 'react';
import { IPhoneFrame } from './DeviceFrame';
import { CoverBlindTiger, MiniBookCover } from './BookCovers';

export const FeatureStore = () => {
  return (
    <section className="py-24 px-4 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-[1024px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-6 text-left max-w-lg mx-auto lg:mx-0">
          <h2 className="text-[36px] sm:text-[44px] md:text-[48px] font-bold text-[#1d1d1f] tracking-tight leading-[1.1] mb-6">
            So many books,<br />
            so much in store.
          </h2>
          <p className="text-[17px] sm:text-[19px] text-[#6e6e73] font-normal leading-[1.47]">
            Swipe from book to book to see which book covers, descriptions, and reviews catch your eye, then add the books you&apos;re interested in to your Want to Read list. Choose from today&apos;s bestsellers, check out lists curated by Apple Books editors, or get recommendations based on what you&apos;ve been listening to or reading.
          </p>
        </div>

        {/* Right Column: iPhone Mockup */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="w-[300px] sm:w-[320px]">
            <IPhoneFrame activeTab="store" className="w-full aspect-[9/18.5] shadow-2xl">
              <div className="px-4 py-2 flex flex-col h-full text-left">
                {/* Header */}
                <h3 className="text-[26px] font-bold text-[#1d1d1f] tracking-tight mt-1">Book Store</h3>
                <div className="flex items-center justify-between text-[13px] text-[#0071e3] font-medium py-1">
                  <span>Browse Sections</span>
                  <span className="text-[14px] font-bold">&rsaquo;</span>
                </div>

                {/* Featured Book Showcase */}
                <div className="mt-2 bg-[#f4f4f7] rounded-xl p-3 flex flex-col items-center">
                  <div className="w-full text-left">
                    <p className="text-[8px] uppercase tracking-widest text-gray-500 font-bold">FEATURED BOOK</p>
                    <h4 className="text-[13px] font-bold text-[#1d1d1f]">Blind Tiger</h4>
                    <p className="text-[11px] text-gray-500">Sandra Brown</p>
                  </div>

                  {/* 3D Floating Book Cover */}
                  <div className="my-3 w-[110px] h-[165px] rounded-[4px] shadow-2xl transform perspective-[800px] rotate-y-[-6deg] hover:rotate-0 transition-transform duration-300">
                    <CoverBlindTiger />
                  </div>
                </div>

                {/* Fiction & Literature Row */}
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-[13px] font-bold text-[#1d1d1f]">Fiction &amp; Literature</h4>
                    <span className="text-[11px] text-[#0071e3] font-medium">See All &rsaquo;</span>
                  </div>

                  <div className="flex gap-2.5 overflow-hidden">
                    <div className="w-[74px] h-[110px] shrink-0 bg-[#a31515] rounded-[3px] shadow p-1.5 flex flex-col justify-between text-white">
                      <p className="text-[6px] tracking-widest uppercase opacity-70">LISA TADDEO</p>
                      <p className="text-[12px] font-black uppercase tracking-tight leading-none">ANIMAL</p>
                      <p className="text-[5px] opacity-70">A Novel</p>
                    </div>

                    <div className="w-[74px] h-[110px] shrink-0 bg-[#164e63] rounded-[3px] shadow p-1.5 flex flex-col justify-between text-white">
                      <p className="text-[6px] tracking-widest uppercase opacity-70">LOUISE PENNY</p>
                      <p className="text-[10px] font-serif font-bold uppercase tracking-tight leading-tight">The Madness of Crowds</p>
                      <p className="text-[5px] opacity-70">Chief Inspector Gamache</p>
                    </div>

                    <div className="w-[74px] h-[110px] shrink-0 bg-[#1e293b] rounded-[3px] shadow p-1.5 flex flex-col justify-between text-white">
                      <p className="text-[6px] tracking-widest uppercase opacity-70">M. CONNELLY</p>
                      <p className="text-[11px] font-black uppercase tracking-tight leading-tight">The Dark Hours</p>
                      <p className="text-[5px] opacity-70">Ballard &amp; Bosch</p>
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
