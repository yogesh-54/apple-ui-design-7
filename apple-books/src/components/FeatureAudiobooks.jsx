import React from 'react';
import { IPhoneFrame } from './DeviceFrame';
import { CoverEmotionOfGreatDelight } from './BookCovers';

export const FeatureAudiobooks = () => {
  return (
    <section className="py-24 px-4 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-[1024px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-6 text-left max-w-lg mx-auto lg:mx-0">
          <h2 className="text-[36px] sm:text-[44px] md:text-[48px] font-bold text-[#1d1d1f] tracking-tight leading-[1.1] mb-6">
            Listen while you work.<br />
            Or play. Or drive.
          </h2>
          <p className="text-[17px] sm:text-[19px] text-[#6e6e73] font-normal leading-[1.47]">
            With audiobooks available on CarPlay, Apple Watch, and more, it&apos;s easy to transport yourself to another world during your commute or learn something new on a run.
          </p>
        </div>

        {/* Right Column: iPhone Mockup */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="w-[300px] sm:w-[320px]">
            <IPhoneFrame activeTab="audiobooks" className="w-full aspect-[9/18.5] shadow-2xl">
              <div className="px-4 py-2 flex flex-col h-full text-left">
                {/* Header */}
                <h3 className="text-[26px] font-bold text-[#1d1d1f] tracking-tight mt-1">Audiobooks</h3>
                <div className="flex items-center justify-between text-[13px] text-[#0071e3] font-medium py-1">
                  <span>Browse Sections</span>
                  <span className="text-[14px] font-bold">&rsaquo;</span>
                </div>

                {/* Featured Audiobook Card */}
                <div className="mt-2 bg-[#e8f6f7] rounded-xl p-3 flex flex-col items-center">
                  <div className="w-full text-left">
                    <p className="text-[8px] uppercase tracking-widest text-[#0c6b70] font-bold">FEATURED BOOK</p>
                    <h4 className="text-[13px] font-bold text-[#1d1d1f]">An Emotion of Great Delight</h4>
                    <p className="text-[11px] text-[#0c6b70]">Tahereh Mafi</p>
                  </div>

                  {/* Audiobook Artwork Display */}
                  <div className="my-3 w-[115px] h-[115px] rounded-lg shadow-xl overflow-hidden relative group">
                    <CoverEmotionOfGreatDelight />
                    {/* Small headphone glyph badge */}
                    <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm p-1 rounded-full text-white">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* New & Trending Audiobooks */}
                <div className="mt-4">
                  <h4 className="text-[13px] font-bold text-[#1d1d1f]">New &amp; Trending</h4>
                  <p className="text-[10px] text-gray-500 mb-2">Recently released and notable audiobooks.</p>

                  <div className="flex gap-2.5 overflow-hidden">
                    {/* Trejo Audiobook */}
                    <div className="w-[80px] h-[80px] shrink-0 bg-[#1f1f1f] rounded-lg shadow p-1.5 flex flex-col justify-between text-white relative">
                      <p className="text-[6px] tracking-widest text-amber-400 font-bold uppercase">A MEMOIR</p>
                      <p className="text-[12px] font-black uppercase tracking-tight text-white leading-tight">TREJO</p>
                      <div className="flex justify-between items-center text-[6px] text-gray-400">
                        <span>Danny Trejo</span>
                        <svg className="w-2.5 h-2.5 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
                        </svg>
                      </div>
                    </div>

                    {/* Audiobook 2 */}
                    <div className="w-[80px] h-[80px] shrink-0 bg-[#e05638] rounded-lg shadow p-1.5 flex flex-col justify-between text-white relative">
                      <p className="text-[6px] tracking-widest text-white/80 font-bold uppercase">NONFICTION</p>
                      <p className="text-[11px] font-black uppercase tracking-tight text-white leading-tight">FOUR THOUSAND WEEKS</p>
                      <div className="flex justify-between items-center text-[6px] text-white/80">
                        <span>O. Burkeman</span>
                        <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
                        </svg>
                      </div>
                    </div>

                    {/* Audiobook 3 */}
                    <div className="w-[80px] h-[80px] shrink-0 bg-[#0e3b60] rounded-lg shadow p-1.5 flex flex-col justify-between text-white relative">
                      <p className="text-[6px] tracking-widest text-blue-200 font-bold uppercase">FICTION</p>
                      <p className="text-[11px] font-black uppercase tracking-tight text-white leading-tight">THE LINCOLN HIGHWAY</p>
                      <div className="flex justify-between items-center text-[6px] text-blue-200">
                        <span>Amor Towles</span>
                        <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
                        </svg>
                      </div>
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
