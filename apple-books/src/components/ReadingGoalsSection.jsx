import React from 'react';
import { IPhoneFrame } from './DeviceFrame';

export const ReadingGoalsSection = () => {
  return (
    <section id="goals" className="py-24 px-4 bg-[#f5f5f7] border-t border-gray-200/80 overflow-hidden text-center">
      <div className="max-w-[1120px] mx-auto">
        {/* Header */}
        <h2 className="text-[36px] sm:text-[46px] md:text-[50px] font-bold text-[#1d1d1f] tracking-tight leading-[1.1] mb-6">
          A Reading Goal you can&apos;t put down.
        </h2>
        <p className="text-[17px] sm:text-[19px] text-[#6e6e73] font-normal leading-[1.47] max-w-[760px] mx-auto mb-16 text-center">
          Setting a Reading Goal helps make reading a priority by tracking the amount of time you&apos;re reading or listening to an audiobook. Build strong reading habits and celebrate your achievements — whether that&apos;s a daily goal, a new streak length record, or how many books you&apos;ve read this year.
        </p>

        {/* 3 iPhones in a Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1000px] mx-auto items-end justify-center">
          {/* Phone 1: Reading Goals Tracker */}
          <div className="w-[270px] sm:w-[285px] mx-auto transform hover:-translate-y-2 transition-transform duration-300">
            <IPhoneFrame className="w-full aspect-[9/18.5] shadow-2xl">
              <div className="px-3.5 py-2 flex flex-col h-full text-left">
                {/* Back Link */}
                <div className="flex items-center text-[#0071e3] text-[12px] font-medium mt-1">
                  <span>&lsaquo; Reading Now</span>
                </div>

                <div className="mt-1">
                  <h3 className="text-[20px] font-bold text-[#1d1d1f] tracking-tight leading-tight">Reading Goals</h3>
                  <p className="text-[9.5px] text-gray-500 leading-tight mt-0.5">Read every day, see your stats soar, and finish more books.</p>
                </div>

                {/* Circular Goal Ring */}
                <div className="relative my-3 flex flex-col items-center justify-center">
                  <svg className="w-36 h-36 transform -rotate-90" viewBox="0 0 120 120">
                    {/* Background Track */}
                    <circle cx="60" cy="60" r="50" fill="none" stroke="#e5e5ea" strokeWidth="9" />
                    {/* Active Progress Arc (1:35 out of 5:00 = 31.6%) */}
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="#0071e3"
                      strokeWidth="9"
                      strokeDasharray="314.159"
                      strokeDashoffset="214.8"
                      strokeLinecap="round"
                    />
                  </svg>
                  {/* Center Text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-[8.5px] uppercase font-bold text-gray-400 tracking-wider">Today&apos;s Reading</span>
                    <span className="text-[28px] font-bold text-[#1d1d1f] tracking-tight leading-none my-0.5">1:35</span>
                    <span className="text-[8.5px] text-gray-500">of your 5-minute goal</span>
                  </div>
                </div>

                {/* Keep Reading Button */}
                <button className="w-full bg-[#1c1c1e] text-white text-[11px] font-semibold py-1.5 px-3 rounded-full hover:bg-black transition-colors text-center">
                  Keep Reading<br />
                  <span className="text-[8px] text-gray-300 font-normal">It&apos;s Better This Way</span>
                </button>

                {/* Week Streak Circles */}
                <div className="mt-3 flex justify-between items-center px-1">
                  {[
                    { day: 'S', active: true, checked: true },
                    { day: 'M', active: true, checked: false },
                    { day: 'T', active: false },
                    { day: 'W', active: false },
                    { day: 'T', active: false },
                    { day: 'F', active: false },
                    { day: 'S', active: false },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        item.active
                          ? 'bg-[#0071e3] text-white shadow-xs'
                          : 'bg-[#e5e5ea] text-gray-400'
                      }`}
                    >
                      {item.checked ? '✓' : item.day}
                    </div>
                  ))}
                </div>
                <p className="text-[9px] text-gray-500 text-center mt-1">
                  Extend your 2-day reading streak. Record is 4 days.
                </p>

                {/* Books Read This Year */}
                <div className="mt-3 pt-2 border-t border-gray-100">
                  <p className="text-[10px] font-bold text-[#1d1d1f] mb-1">Books Read This Year</p>
                  <div className="flex gap-1.5">
                    <div className="w-[36px] h-[52px] bg-[#1a1a1a] rounded-[2px] p-0.5 text-[5px] text-white flex flex-col justify-between font-bold">
                      <span>ABBY</span>
                      <span>WOLFPACK</span>
                    </div>
                    <div className="w-[36px] h-[52px] bg-[#1e3a8a] rounded-[2px] p-0.5 text-[5px] text-white flex flex-col justify-between font-bold">
                      <span>B.A. PARIS</span>
                      <span>THE THERAPIST</span>
                    </div>
                    <div className="w-[36px] h-[52px] bg-gray-100 rounded-[2px] p-0.5 text-[14px] text-gray-400 flex items-center justify-center font-bold">
                      3
                    </div>
                  </div>
                </div>
              </div>
            </IPhoneFrame>
          </div>

          {/* Phone 2: Daily Goal Achieved */}
          <div className="w-[270px] sm:w-[285px] mx-auto transform hover:-translate-y-2 transition-transform duration-300">
            <IPhoneFrame className="w-full aspect-[9/18.5] shadow-2xl">
              <div className="p-4 flex flex-col h-full justify-between text-center relative bg-white">
                {/* Close Button 'X' */}
                <div className="absolute top-2 right-3 text-gray-400 hover:text-black cursor-pointer text-lg font-bold">
                  &times;
                </div>

                <div className="my-auto flex flex-col items-center">
                  {/* Big Blue Checkmark Icon */}
                  <div className="w-24 h-24 rounded-full bg-[#0071e3] flex items-center justify-center text-white mb-5 shadow-lg shadow-blue-500/25">
                    <svg className="w-12 h-12 stroke-white stroke-[3.5] fill-none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>

                  <h3 className="text-[21px] font-bold text-[#1d1d1f] tracking-tight">Daily Goal Achieved</h3>
                  <p className="text-[14px] font-semibold text-gray-600 mt-0.5">5 minutes</p>

                  <p className="text-[12px] text-gray-500 leading-snug max-w-[210px] mt-3">
                    Congratulations, you&apos;ve reached your daily reading goal. Keep it up!
                  </p>
                </div>

                {/* Share Button */}
                <button className="w-full bg-black text-white text-[13px] font-bold py-2.5 rounded-full hover:bg-gray-800 transition-colors uppercase tracking-wider shadow-md">
                  SHARE
                </button>
              </div>
            </IPhoneFrame>
          </div>

          {/* Phone 3: Yearly Goal Achieved */}
          <div className="w-[270px] sm:w-[285px] mx-auto transform hover:-translate-y-2 transition-transform duration-300">
            <IPhoneFrame className="w-full aspect-[9/18.5] shadow-2xl">
              <div className="p-4 flex flex-col h-full justify-between text-center relative bg-white">
                {/* Close Button 'X' */}
                <div className="absolute top-2 right-3 text-gray-400 hover:text-black cursor-pointer text-lg font-bold">
                  &times;
                </div>

                <div className="pt-2 my-auto flex flex-col items-center">
                  {/* Grid of Finished Books with Blue Checkmarks */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {/* Book 1 */}
                    <div className="relative w-[56px] h-[78px] bg-[#2d1b1b] rounded shadow-sm p-1 text-[5px] text-amber-200 flex flex-col justify-between font-bold">
                      <span>ALEX M.</span>
                      <span>THE MAIDENS</span>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#0071e3] text-white rounded-full flex items-center justify-center text-[9px] shadow font-bold">
                        ✓
                      </div>
                    </div>

                    {/* Book 2 */}
                    <div className="relative w-[56px] h-[78px] bg-[#0284c7] rounded shadow-sm p-1 text-[5px] text-white flex flex-col justify-between font-bold">
                      <span>TAYLOR J.</span>
                      <span>MALIBU RISING</span>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#0071e3] text-white rounded-full flex items-center justify-center text-[9px] shadow font-bold">
                        ✓
                      </div>
                    </div>

                    {/* Book 3 */}
                    <div className="relative w-[56px] h-[78px] bg-[#e2e8f0] rounded shadow-sm p-1 text-[5px] text-gray-800 flex flex-col justify-between font-bold">
                      <span>ALICE FEENEY</span>
                      <span>ROCK PAPER SCISSORS</span>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#0071e3] text-white rounded-full flex items-center justify-center text-[9px] shadow font-bold">
                        ✓
                      </div>
                    </div>

                    {/* Book 4 */}
                    <div className="relative w-[56px] h-[78px] bg-[#0f172a] rounded shadow-sm p-1 text-[5px] text-amber-400 flex flex-col justify-between font-bold">
                      <span>LUDLUM</span>
                      <span>BOURNE TREACHERY</span>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#0071e3] text-white rounded-full flex items-center justify-center text-[9px] shadow font-bold">
                        ✓
                      </div>
                    </div>

                    {/* Book 5 */}
                    <div className="relative w-[56px] h-[78px] bg-[#18181b] rounded shadow-sm p-1 text-[5px] text-white flex flex-col justify-between font-bold">
                      <span>ROBIN D.</span>
                      <span>WHITE FRAGILITY</span>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#0071e3] text-white rounded-full flex items-center justify-center text-[9px] shadow font-bold">
                        ✓
                      </div>
                    </div>
                  </div>

                  <h3 className="text-[20px] font-bold text-[#1d1d1f] tracking-tight">2021 Goal Achieved</h3>
                  <p className="text-[13px] font-bold text-[#0071e3] mt-0.5">5 books finished.</p>

                  <p className="text-[11.5px] text-gray-500 leading-snug max-w-[210px] mt-2">
                    Congrats! You&apos;ve reached your yearly reading goal. What&apos;s your next book?
                  </p>
                </div>

                {/* Share Button */}
                <button className="w-full bg-black text-white text-[13px] font-bold py-2.5 rounded-full hover:bg-gray-800 transition-colors uppercase tracking-wider shadow-md">
                  SHARE
                </button>
              </div>
            </IPhoneFrame>
          </div>
        </div>
      </div>
    </section>
  );
};
