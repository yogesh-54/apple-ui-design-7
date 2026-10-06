import React from 'react';

export const PublishSection = () => {
  return (
    <section id="authors" className="py-24 px-4 bg-white border-t border-gray-100 text-center">
      <div className="max-w-[760px] mx-auto flex flex-col items-center">
        {/* Apple Books Icon */}
        <div className="w-16 h-16 rounded-[18px] bg-gradient-to-b from-[#ff8c2b] via-[#ff6800] to-[#f04f00] p-3 shadow-md shadow-orange-500/15 flex items-center justify-center mb-6">
          <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-none stroke-current" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 30 C36 28 46 32 50 36 C54 32 64 28 78 30 L78 68 C64 66 54 70 50 74 C46 70 36 66 22 68 Z" />
            <path d="M50 36 L50 74" strokeWidth="6" />
          </svg>
        </div>

        {/* Heading */}
        <h2 className="text-[34px] sm:text-[42px] font-bold text-[#1d1d1f] tracking-tight leading-[1.15] mb-5">
          Publish to Apple Books.
        </h2>

        {/* Body Text */}
        <p className="text-[17px] sm:text-[19px] text-[#6e6e73] font-normal leading-[1.5] mb-6 max-w-2xl">
          Stories are important. Apple Books for Authors helps you tell yours. Apple Books for Authors guides you through every step of your journey as an author, from structuring your story to packaging your digital book and selling it on our store. Even established authors will find valuable resources on how to grow sales and track performance.
        </p>

        {/* Learn More Link */}
        <a
          href="#learn-more"
          className="inline-flex items-center text-[17px] text-[#0071e3] hover:underline font-medium gap-1 group"
        >
          <span>Learn more</span>
          <span className="group-hover:translate-x-0.5 transition-transform font-bold">&rsaquo;</span>
        </a>
      </div>
    </section>
  );
};
