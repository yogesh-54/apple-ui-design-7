import React, { useState } from 'react';
import { IPhoneFrame } from './DeviceFrame';
import { CoverFoundation } from './BookCovers';

export const FeatureSearch = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('Asimov');

  return (
    <section className="py-24 px-4 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-[1024px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-6 text-left max-w-lg mx-auto lg:mx-0">
          <h2 className="text-[36px] sm:text-[44px] md:text-[48px] font-bold text-[#1d1d1f] tracking-tight leading-[1.1] mb-6">
            Search the books<br />
            you own. Browse<br />
            millions more.
          </h2>
          <p className="text-[17px] sm:text-[19px] text-[#6e6e73] font-normal leading-[1.47]">
            Now you can find just the book you&apos;re looking for easier and faster than ever. Search through the Book Store and your personal library at the same time. You can return to your recent searches or tap a search suggestion to discover something entirely new.
          </p>
        </div>

        {/* Right Column: iPhone Mockup */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="w-[300px] sm:w-[320px]">
            <IPhoneFrame activeTab="search" className="w-full aspect-[9/18.5] shadow-2xl">
              <div className="px-3.5 py-1.5 flex flex-col h-full text-left">
                {/* Search Bar Input */}
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex-1 flex items-center bg-[#efeff0] rounded-xl px-2.5 py-1.5 gap-2 border border-gray-200/50">
                    <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="11" cy="11" r="7" />
                      <path strokeLinecap="round" d="m20 20-3.5-3.5" />
                    </svg>
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="bg-transparent text-[13px] text-[#1d1d1f] font-medium outline-none w-full"
                    />
                    <div className="w-4 h-4 rounded-full bg-gray-400 text-white flex items-center justify-center text-[10px] cursor-pointer">
                      &times;
                    </div>
                  </div>
                  <button className="text-[14px] text-[#0071e3] font-normal hover:underline">Cancel</button>
                </div>

                {/* Filter Pills */}
                <div className="flex gap-2 mt-2.5 pb-1">
                  {['All', 'Books', 'Audiobooks'].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`text-[11px] font-semibold px-3 py-1 rounded-full transition-colors ${
                        activeFilter === filter
                          ? 'bg-[#1d1d1f] text-white'
                          : 'bg-[#efeff0] text-[#1d1d1f] hover:bg-gray-200'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>

                {/* In Your Library */}
                <div className="mt-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="text-[12px] font-bold text-[#1d1d1f]">In Your Library</h4>
                    <span className="text-[11px] text-[#0071e3] font-medium">See All &rsaquo;</span>
                  </div>

                  <div className="flex gap-2">
                    <div className="w-[60px] h-[86px] shrink-0 rounded shadow overflow-hidden">
                      <CoverFoundation title="Prelude" />
                    </div>
                    <div className="w-[60px] h-[86px] shrink-0 rounded shadow overflow-hidden">
                      <CoverFoundation title="Foundation" />
                    </div>
                    <div className="w-[60px] h-[86px] shrink-0 rounded shadow overflow-hidden">
                      <CoverFoundation title="Second" />
                    </div>
                  </div>
                </div>

                {/* Store Results */}
                <div className="mt-4 flex-1 overflow-hidden">
                  <h4 className="text-[12px] font-bold text-[#1d1d1f] mb-1.5">Store Results</h4>

                  <div className="space-y-2">
                    {/* Result 1 */}
                    <div className="flex items-center justify-between p-1 hover:bg-gray-50 rounded">
                      <div className="flex items-center gap-2">
                        <div className="w-[32px] h-[46px] rounded shadow-xs overflow-hidden shrink-0">
                          <CoverFoundation title="Prelude" />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-[#1d1d1f] leading-tight">Prelude to Foundation</p>
                          <p className="text-[9px] text-gray-500">Isaac Asimov</p>
                          <div className="flex items-center text-[8px] text-amber-500">
                            ★★★★★
                          </div>
                        </div>
                      </div>
                      <button className="bg-[#f0f0f2] hover:bg-[#e4e4e6] text-[#0071e3] font-bold text-[11px] px-2.5 py-1 rounded-full transition-colors">
                        $8.99
                      </button>
                    </div>

                    {/* Result 2 */}
                    <div className="flex items-center justify-between p-1 hover:bg-gray-50 rounded">
                      <div className="flex items-center gap-2">
                        <div className="w-[32px] h-[46px] rounded shadow-xs overflow-hidden shrink-0">
                          <CoverFoundation title="Foundation" />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-[#1d1d1f] leading-tight">Foundation</p>
                          <p className="text-[9px] text-gray-500">Isaac Asimov</p>
                          <div className="flex items-center text-[8px] text-amber-500">
                            ★★★★★
                          </div>
                        </div>
                      </div>
                      <button className="bg-[#f0f0f2] hover:bg-[#e4e4e6] text-[#0071e3] font-bold text-[11px] px-2.5 py-1 rounded-full transition-colors">
                        $7.99
                      </button>
                    </div>

                    {/* Result 3 */}
                    <div className="flex items-center justify-between p-1 hover:bg-gray-50 rounded">
                      <div className="flex items-center gap-2">
                        <div className="w-[32px] h-[46px] rounded shadow-xs overflow-hidden shrink-0">
                          <CoverFoundation title="I, Robot" />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-[#1d1d1f] leading-tight">I, Robot</p>
                          <p className="text-[9px] text-gray-500">Isaac Asimov</p>
                          <div className="flex items-center text-[8px] text-amber-500">
                            ★★★★<span className="text-gray-300">★</span>
                          </div>
                        </div>
                      </div>
                      <button className="bg-[#f0f0f2] hover:bg-[#e4e4e6] text-[#0071e3] font-bold text-[11px] px-2.5 py-1 rounded-full transition-colors">
                        $7.99
                      </button>
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
