import React from 'react';

// 1. Sally Rooney - Beautiful World, Where Are You
export const CoverBeautifulWorld = ({ className = "w-full h-full" }) => (
  <div className={`relative overflow-hidden rounded-[4px] bg-[#61b2e4] text-[#1a2d42] flex flex-col justify-between p-3 select-none ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-b from-[#7cc4ef]/40 via-transparent to-[#2978a8]/30 pointer-events-none" />
    <div className="relative z-10 text-center font-serif">
      <p className="text-[9px] tracking-[0.2em] uppercase font-bold text-[#1f3750]">The #1 Bestseller</p>
      <h3 className="text-[17px] font-black tracking-tight leading-[0.95] text-[#1a334d] mt-1 uppercase">
        SALLY<br />ROONEY
      </h3>
    </div>
    <div className="relative z-10 text-center my-auto">
      <div className="bg-[#f0df44] text-[#142634] font-black text-[13px] leading-tight py-1 px-1.5 uppercase tracking-tight shadow-sm transform -rotate-1 inline-block">
        BEAUTIFUL<br />WORLD,
      </div>
      <div className="text-[11px] font-black text-white bg-[#0e3b60] px-1 py-0.5 mt-0.5 inline-block uppercase tracking-wider">
        WHERE ARE YOU
      </div>
    </div>
    <div className="relative z-10 text-center text-[7px] font-semibold text-[#1a334d] border-t border-[#1a334d]/20 pt-1">
      Author of Normal People
    </div>
  </div>
);

// 2. A Slow Fire Burning - Paula Hawkins
export const CoverSlowFire = ({ className = "w-full h-full" }) => (
  <div className={`relative overflow-hidden rounded-[4px] bg-[#0d1b2a] text-white flex flex-col justify-between p-3 select-none ${className}`}>
    <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#f58220]/30 rounded-full blur-xl pointer-events-none" />
    <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-[#e63946]/30 rounded-full blur-lg pointer-events-none" />
    <div className="relative z-10 text-center">
      <p className="text-[8px] tracking-[0.18em] uppercase text-[#f58220] font-bold">The New Thriller From</p>
      <h4 className="text-[10px] tracking-[0.15em] uppercase font-bold text-gray-300">The Girl on the Train</h4>
    </div>
    <div className="relative z-10 text-center my-auto">
      <h3 className="text-[15px] font-extrabold uppercase leading-[0.92] tracking-tighter bg-gradient-to-r from-[#ffdd00] via-[#ff7b00] to-[#ff3b00] bg-clip-text text-transparent drop-shadow-sm">
        A SLOW<br />FIRE<br />BURNING
      </h3>
    </div>
    <div className="relative z-10 text-center">
      <p className="text-[11px] font-black tracking-widest uppercase text-white">PAULA<br />HAWKINS</p>
    </div>
  </div>
);

// 3. The Hobbit
export const CoverTheHobbit = ({ className = "w-full h-full" }) => (
  <div className={`relative overflow-hidden rounded-[4px] bg-[#23452b] text-white flex flex-col justify-between p-2 select-none border border-[#1b3421] ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-b from-[#3b6d47] via-[#1c3a23] to-[#0f2415] opacity-90" />
    {/* Stylized mountain and sun silhouette */}
    <div className="absolute inset-x-0 bottom-4 top-8 flex items-center justify-center opacity-40">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <polygon points="10,80 50,20 90,80" fill="#e4af3a" />
        <polygon points="35,80 70,35 100,80" fill="#c49329" />
        <circle cx="50" cy="20" r="10" fill="#fce484" />
        <path d="M0,80 Q25,75 50,80 T100,80 L100,100 L0,100 Z" fill="#0b1b10" />
      </svg>
    </div>
    <div className="relative z-10 text-center">
      <p className="text-[7px] tracking-[0.2em] uppercase text-[#e4af3a] font-serif">J.R.R. TOLKIEN</p>
    </div>
    <div className="relative z-10 text-center my-auto">
      <h3 className="font-serif text-[18px] font-normal tracking-wide text-[#fce484] drop-shadow-md">
        THE HOBBIT
      </h3>
    </div>
    <div className="relative z-10 text-center">
      <p className="text-[6px] text-gray-300 font-serif italic">The Classic Bestseller</p>
    </div>
  </div>
);

// 4. Open Book Display for "The Hobbit" reader mode
export const OpenBookReaderHobbit = () => (
  <div className="relative flex w-full max-w-[280px] h-[190px] mx-auto bg-[#faf8f2] rounded-lg shadow-xl border border-[#e5e0d4] overflow-hidden select-none">
    {/* Center crease line & shadow */}
    <div className="absolute top-0 bottom-0 left-1/2 -ml-3 w-6 bg-gradient-to-r from-black/5 via-black/15 to-transparent pointer-events-none z-10" />
    <div className="absolute top-0 bottom-0 right-1/2 -mr-3 w-6 bg-gradient-to-l from-black/5 via-black/15 to-transparent pointer-events-none z-10" />
    
    {/* Left Page: Illustration */}
    <div className="w-1/2 p-3 flex flex-col items-center justify-center border-r border-[#ece7dc] bg-[#fbf9f4]">
      <div className="w-full h-full rounded border border-[#d6cfbe] overflow-hidden relative bg-[#2a4d33] flex flex-col justify-between p-2">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e2114] via-[#20442a] to-[#3f6d49] opacity-80" />
        <svg viewBox="0 0 100 80" className="w-full h-24 my-auto relative z-10">
          {/* Mountain peaks */}
          <polygon points="15,65 50,15 85,65" fill="#f8e39f" opacity="0.9" />
          <polygon points="35,65 65,30 95,65" fill="#dfbe69" opacity="0.9" />
          <circle cx="50" cy="16" r="6" fill="#ffebad" />
          {/* Dragon flying */}
          <path d="M42,28 Q50,22 58,28 Q52,31 42,28" fill="#d83a25" />
          {/* Evergreen forest hills */}
          <polygon points="5,70 18,50 30,70" fill="#14311c" />
          <polygon points="25,70 40,46 55,70" fill="#1b4125" />
          <polygon points="50,70 65,48 80,70" fill="#14311c" />
          <polygon points="75,70 88,52 100,70" fill="#1b4125" />
        </svg>
        <p className="relative z-10 text-[7px] text-center text-[#f8e39f] font-serif tracking-widest uppercase">The Lonely Mountain</p>
      </div>
    </div>

    {/* Right Page: Classic Book Text */}
    <div className="w-1/2 p-3.5 flex flex-col justify-between bg-[#fbf9f4] text-[#2c2b28]">
      <div>
        <p className="text-[7px] text-center text-gray-400 uppercase tracking-widest font-serif mb-1.5">Chapter I</p>
        <h4 className="text-[9px] font-serif font-bold text-center mb-2 tracking-wide text-[#3a352c]">AN UNEXPECTED PARTY</h4>
        <p className="text-[6.5px] font-serif leading-[1.4] text-justify text-[#403b32]">
          <span className="text-[14px] font-serif float-left mr-1 leading-none font-bold text-[#1a1714]">I</span>
          n a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort.
        </p>
        <p className="text-[6.5px] font-serif leading-[1.4] text-justify text-[#403b32] mt-1.5">
          It had a perfectly round door like a porthole, painted green, with a shiny yellow brass knob in the exact middle.
        </p>
      </div>
      <div className="text-center text-[7px] text-gray-400 font-serif border-t border-[#ece7dc] pt-1">
        1
      </div>
    </div>
  </div>
);

// 5. Open Book for iPad "Daenerys"
export const OpenBookReaderDaenerys = () => (
  <div className="relative flex w-full max-w-[340px] h-[210px] mx-auto bg-[#faf8f4] rounded-lg shadow-xl border border-[#e2dcd0] overflow-hidden select-none">
    <div className="absolute top-0 bottom-0 left-1/2 -ml-3 w-6 bg-gradient-to-r from-black/5 via-black/15 to-transparent pointer-events-none z-10" />
    <div className="absolute top-0 bottom-0 right-1/2 -mr-3 w-6 bg-gradient-to-l from-black/5 via-black/15 to-transparent pointer-events-none z-10" />

    {/* Left Page */}
    <div className="w-1/2 p-4 flex flex-col justify-between border-r border-[#ebe5d8] bg-[#fdfbf7]">
      <div>
        <h4 className="text-[13px] font-serif font-bold text-[#2a241b] mb-2 tracking-wide">DAENERYS</h4>
        <p className="text-[7.5px] font-serif leading-[1.45] text-justify text-[#4a4237]">
          <span className="text-[17px] font-serif float-left mr-1 leading-none font-bold text-[#221c15]">H</span>
          er brother held the gown up for her inspection. &ldquo;This is fine fabric,&rdquo; he said. &ldquo;Plum silk, to bring out the violet in your eyes.&rdquo;
        </p>
        <p className="text-[7.5px] font-serif leading-[1.45] text-justify text-[#4a4237] mt-2">
          Dany touched it wonderingly. She had never worn anything so soft. She ran her fingers across the smooth sheen of the silk, thinking of the great stone houses of the Magister Illyrio.
        </p>
      </div>
      <div className="text-center text-[8px] text-gray-400 font-serif">14</div>
    </div>

    {/* Right Page */}
    <div className="w-1/2 p-4 flex flex-col justify-between bg-[#fdfbf7]">
      <div>
        <p className="text-[7.5px] font-serif leading-[1.45] text-justify text-[#4a4237]">
          &ldquo;We need his warriors, Dany. Five score, ten score, a thousand. Whatever the horse lord can bring.&rdquo; Viserys paced the tiled chamber, his boots clicking sharply.
        </p>
        <p className="text-[7.5px] font-serif leading-[1.45] text-justify text-[#4a4237] mt-2">
          &ldquo;When they look upon you, they will weep for the dragons of old. You are the blood of the dragon, sister. Do not forget it.&rdquo;
        </p>
        <p className="text-[7.5px] font-serif leading-[1.45] text-justify text-[#4a4237] mt-2">
          The candles flickered softly in the sea breeze blowing through the arched windows overlooking the bay of Pentos.
        </p>
      </div>
      <div className="text-center text-[8px] text-gray-400 font-serif">15</div>
    </div>
  </div>
);

// 6. Apples Never Fall - Liane Moriarty
export const CoverApplesNeverFall = ({ className = "w-full h-full" }) => (
  <div className={`relative overflow-hidden rounded-[4px] bg-[#d3d8db] text-[#1f2937] flex flex-col justify-between p-3 select-none ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-tr from-[#bcc5ca] via-[#e2e6e8] to-[#cbd2d6]" />
    <div className="relative z-10 text-center font-serif">
      <h3 className="text-[13px] font-serif tracking-widest text-[#2d3748] uppercase leading-tight">
        Liane<br />Moriarty
      </h3>
      <p className="text-[6.5px] tracking-wider uppercase text-gray-500 font-sans mt-0.5">#1 NYT Bestselling Author</p>
    </div>
    <div className="relative z-10 text-center my-auto">
      <div className="w-10 h-10 mx-auto relative mb-1">
        <div className="w-8 h-8 rounded-full bg-[#c92a2a] mx-auto shadow-md relative">
          <div className="w-1.5 h-3 bg-[#4d3826] rounded-t-sm absolute -top-2 left-1/2 -ml-0.5" />
          <div className="w-2.5 h-1.5 bg-[#40c057] rounded-full absolute -top-1 right-1 transform rotate-12" />
        </div>
      </div>
      <h4 className="text-[12px] font-serif italic font-bold tracking-tight text-[#1a202c]">
        Apples Never Fall
      </h4>
    </div>
    <div className="relative z-10 text-center text-[6px] text-gray-500 uppercase tracking-widest font-sans">
      From the author of Big Little Lies
    </div>
  </div>
);

// 7. The Cellist - Daniel Silva
export const CoverTheCellist = ({ className = "w-full h-full" }) => (
  <div className={`relative overflow-hidden rounded-[4px] bg-[#0c182b] text-white flex flex-col justify-between p-3 select-none ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-b from-[#132846] via-[#091424] to-[#040810]" />
    <div className="relative z-10 text-center">
      <p className="text-[6px] uppercase tracking-[0.25em] text-[#cbd5e1] font-semibold">#1 New York Times Bestseller</p>
      <h3 className="text-[15px] font-serif font-black tracking-tight leading-[0.9] text-[#4d8cd6] uppercase mt-1">
        DANIEL<br />SILVA
      </h3>
    </div>
    <div className="relative z-10 text-center my-auto">
      <p className="text-[11px] font-serif italic text-gray-300">The</p>
      <h4 className="text-[17px] font-serif font-light tracking-wide text-white drop-shadow-md">
        Cellist
      </h4>
    </div>
    <div className="relative z-10 text-center text-[6.5px] uppercase tracking-wider text-gray-400">
      A Novel
    </div>
  </div>
);

// 8. While We Were Dating - Jasmine Guillory
export const CoverWhileWeWereDating = ({ className = "w-full h-full" }) => (
  <div className={`relative overflow-hidden rounded-[4px] bg-[#128a8c] text-white flex flex-col justify-between p-3 select-none ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-[#1ea2a4] via-[#0e7476] to-[#0a5658]" />
    <div className="relative z-10 text-center">
      <h3 className="text-[11px] font-sans font-black tracking-widest text-[#f8e39f] uppercase leading-tight">
        JASMINE<br />GUILLORY
      </h3>
    </div>
    <div className="relative z-10 text-center my-auto">
      <h4 className="font-serif italic text-[16px] font-bold leading-[1.05] text-[#ff7e67] drop-shadow-sm">
        While<br /><span className="text-white">We Were</span><br />Dating
      </h4>
    </div>
    <div className="relative z-10 text-center text-[6.5px] text-[#f8e39f] tracking-wide">
      A Novel
    </div>
  </div>
);

// 9. This Will All Be Over Soon - Cecily Strong
export const CoverThisWillAllBeOver = ({ className = "w-full h-full" }) => (
  <div className={`relative overflow-hidden rounded-[4px] bg-[#fbf6ec] text-[#2d3748] flex flex-col justify-between p-3 select-none border border-[#e5dec9] ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-[#fffdf8] via-[#f7f0df] to-[#eee5ce]" />
    <div className="relative z-10 text-center my-auto">
      <h3 className="text-[13px] font-sans font-light tracking-wide text-gray-500 uppercase leading-snug">
        THIS WILL<br />
        <span className="font-bold text-[#eb6841]">ALL BE</span><br />
        OVER<br />
        <span className="font-serif italic font-normal text-[#2b6cb0]">SOON</span>
      </h3>
      <p className="text-[7px] text-gray-400 uppercase tracking-widest mt-2">A Memoir</p>
    </div>
    <div className="relative z-10 text-center">
      <h4 className="text-[10px] font-sans font-black uppercase tracking-wider text-[#1a202c]">
        CECILY STRONG
      </h4>
    </div>
  </div>
);

// 10. Blind Tiger - Sandra Brown
export const CoverBlindTiger = ({ className = "w-full h-full" }) => (
  <div className={`relative overflow-hidden rounded-[4px] bg-[#1a1816] text-[#e8c78c] flex flex-col justify-between p-3 select-none ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-b from-[#2a241e] via-[#151311] to-[#0a0908]" />
    <div className="relative z-10 text-center">
      <p className="text-[6.5px] uppercase tracking-[0.2em] text-[#d4af37] font-semibold">#1 New York Times Bestseller</p>
      <h3 className="text-[14px] font-serif font-black tracking-wider text-[#e6ca85] uppercase leading-tight mt-1">
        SANDRA<br />BROWN
      </h3>
    </div>
    <div className="relative z-10 text-center my-auto">
      <h4 className="text-[18px] font-serif font-black uppercase tracking-tighter text-white drop-shadow-md">
        BLIND<br />TIGER
      </h4>
    </div>
    <div className="relative z-10 text-center text-[6.5px] uppercase tracking-widest text-[#d4af37]">
      A Novel
    </div>
  </div>
);

// 11. An Emotion of Great Delight - Tahereh Mafi
export const CoverEmotionOfGreatDelight = ({ className = "w-full h-full" }) => (
  <div className={`relative overflow-hidden rounded-[4px] bg-[#1d9aa0] text-white flex flex-col justify-between p-3 select-none ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-tr from-[#126b70] via-[#1d9aa0] to-[#3cc4cc]" />
    <div className="relative z-10 text-center">
      <p className="text-[7px] uppercase tracking-[0.2em] text-[#fce484] font-semibold">National Bestseller</p>
    </div>
    <div className="relative z-10 text-center my-auto">
      <h4 className="text-[14px] font-serif font-black uppercase tracking-wide leading-tight text-[#fce484] drop-shadow-sm">
        AN<br />EMOTION<br />OF GREAT<br />DELIGHT
      </h4>
    </div>
    <div className="relative z-10 text-center">
      <p className="text-[10px] font-sans font-bold uppercase tracking-wider text-white">
        TAHEREH<br />MAFI
      </p>
    </div>
  </div>
);

// 12. $9.99 Audiobooks Card
export const BannerAudiobooksPromo = () => (
  <div className="w-full bg-[#fde047] rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-md select-none border border-yellow-300">
    <div className="flex items-center justify-center w-14 h-14 bg-black rounded-full mb-2 shadow-inner">
      <svg className="w-8 h-8 text-[#fde047]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
      </svg>
    </div>
    <div className="text-[26px] font-black tracking-tight text-black leading-none">
      $9.99
    </div>
    <div className="text-[15px] font-bold text-black tracking-tight mt-0.5">
      Audiobooks
    </div>
  </div>
);

// 13. Asimov Foundation series covers
export const CoverFoundation = ({ title = "Foundation", className = "w-full h-full" }) => (
  <div className={`relative overflow-hidden rounded-[4px] bg-[#0c1226] text-white flex flex-col justify-between p-2 select-none ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-b from-[#1b2b5a] via-[#0d1633] to-[#050814]" />
    {/* Cosmic starfield and ring */}
    <div className="absolute inset-0 flex items-center justify-center opacity-40">
      <div className="w-16 h-16 rounded-full border border-blue-400 transform rotate-45" />
      <div className="absolute w-8 h-8 rounded-full bg-blue-500 blur-sm" />
    </div>
    <div className="relative z-10 text-center">
      <p className="text-[6px] tracking-widest uppercase text-blue-300">ISAAC ASIMOV</p>
    </div>
    <div className="relative z-10 text-center my-auto">
      <h4 className="text-[10px] font-sans font-black uppercase tracking-tight text-white leading-tight">
        {title}
      </h4>
    </div>
    <div className="relative z-10 text-center text-[5.5px] text-gray-400">
      Classic Sci-Fi
    </div>
  </div>
);

// 14. Small shelf book thumbnails (for "Want to Read", "Books Read This Year", etc.)
export const MiniBookCover = ({ title, author, bg = "bg-blue-600", textColor = "text-white" }) => (
  <div className={`w-[48px] h-[72px] shrink-0 rounded-[3px] shadow-sm flex flex-col justify-between p-1 select-none overflow-hidden ${bg} ${textColor}`}>
    <p className="text-[5px] uppercase font-bold tracking-tighter truncate opacity-80">{author}</p>
    <p className="text-[6.5px] font-black leading-tight line-clamp-3 uppercase tracking-tighter">{title}</p>
    <div className="h-0.5 w-4 bg-white/40 rounded-full" />
  </div>
);
