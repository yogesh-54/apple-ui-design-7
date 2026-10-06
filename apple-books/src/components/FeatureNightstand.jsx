import React from 'react';
import { IPhoneFrame } from './DeviceFrame';
import { OpenBookReaderHobbit } from './BookCovers';

export const FeatureNightstand = () => {
  return (
    <section id="nightstand" className="py-24 px-4 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-[1024px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-6 text-left max-w-lg mx-auto lg:mx-0">
          <h2 className="text-[36px] sm:text-[44px] md:text-[48px] font-bold text-[#1d1d1f] tracking-tight leading-[1.1] mb-6">
            Reading Now. Your<br />
            digital nightstand.
          </h2>
          <p className="text-[17px] sm:text-[19px] text-[#6e6e73] font-normal leading-[1.47]">
            The Reading Now tab makes it easy to get to the right page in an instant, whether you&apos;re immersed in a single story or bouncing between books. It&apos;s also where you&apos;ll find personalized recommendations based on what you&apos;ve been reading.
          </p>
        </div>

        {/* Right Column: iPhone Mockup */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="w-[300px] sm:w-[320px]">
            <IPhoneFrame activeTab="reading" className="w-full aspect-[9/18.5] shadow-2xl">
              <div className="px-4 py-2 flex flex-col h-full text-left">
                {/* Header */}
                <div className="flex items-center justify-between mt-1">
                  <div>
                    <h3 className="text-[24px] font-bold text-[#1d1d1f] tracking-tight">Reading Now</h3>
                    <p className="text-[11px] text-[#0071e3] font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3]" />
                      Today&apos;s Reading: Goal achieved
                    </p>
                  </div>
                  {/* User Profile Avatar */}
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 border border-white shadow-sm flex items-center justify-center text-white text-[11px] font-bold">
                    D
                  </div>
                </div>

                {/* Current Section */}
                <div className="mt-4">
                  <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-2">Current</p>
                  
                  {/* Realistic Open Book Graphic */}
                  <div className="my-1 transform hover:scale-[1.02] transition-transform duration-200">
                    <OpenBookReaderHobbit />
                  </div>

                  {/* Book Metadata & Progress */}
                  <div className="mt-3 flex items-center justify-between text-[#1d1d1f]">
                    <div>
                      <h4 className="text-[13px] font-bold">The Hobbit</h4>
                      <p className="text-[11px] text-gray-400">J.R.R. Tolkien</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-semibold text-gray-500">50%</span>
                      <button className="text-gray-400 hover:text-black">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <circle cx="5" cy="12" r="2" />
                          <circle cx="12" cy="12" r="2" />
                          <circle cx="19" cy="12" r="2" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-gray-200 h-1 rounded-full mt-1.5 overflow-hidden">
                    <div className="bg-[#0071e3] h-full rounded-full w-1/2" />
                  </div>
                </div>

                {/* Want to Read Section */}
                <div className="mt-5 pt-3 border-t border-gray-100">
                  <h4 className="text-[14px] font-bold text-[#1d1d1f]">Want to Read</h4>
                  <p className="text-[10px] text-gray-400">Books you&apos;d like to read next</p>
                </div>
              </div>
            </IPhoneFrame>
          </div>
        </div>
      </div>
    </section>
  );
};
