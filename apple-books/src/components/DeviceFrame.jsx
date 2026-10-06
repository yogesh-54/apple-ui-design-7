import React from 'react';

// Bottom Tab Bar for iPhone Apple Books
export const IPhoneTabBar = ({ activeTab = "reading" }) => {
  const tabs = [
    {
      id: "reading",
      label: "Reading Now",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill={activeTab === 'reading' ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={activeTab === 'reading' ? '1.5' : '1.8'}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      id: "library",
      label: "Library",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill={activeTab === 'library' ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={activeTab === 'library' ? '1.5' : '1.8'}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      id: "store",
      label: "Book Store",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill={activeTab === 'store' ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={activeTab === 'store' ? '1.5' : '1.8'}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      id: "audiobooks",
      label: "Audiobooks",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill={activeTab === 'audiobooks' ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={activeTab === 'audiobooks' ? '1.5' : '1.8'}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
        </svg>
      )
    },
    {
      id: "search",
      label: "Search",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <circle cx="11" cy="11" r="7" />
          <path strokeLinecap="round" d="m20 20-3.5-3.5" />
        </svg>
      )
    },
  ];

  return (
    <div className="shrink-0 bg-[#f9f9fb]/90 backdrop-blur-md border-t border-[#e2e2e7] px-3 pt-2 pb-5 flex justify-between items-center z-20">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <div
            key={tab.id}
            className={`flex flex-col items-center justify-center flex-1 cursor-pointer transition-colors ${
              isActive ? 'text-black font-semibold' : 'text-[#8e8e93] hover:text-black/80'
            }`}
          >
            {tab.icon}
            <span className="text-[9.5px] mt-0.5 tracking-tight">{tab.label}</span>
          </div>
        );
      })}
    </div>
  );
};

// iPhone Status Bar
export const IPhoneStatusBar = ({ dark = true }) => (
  <div className={`shrink-0 flex items-center justify-between px-6 pt-3 pb-1 text-[13px] font-semibold select-none ${dark ? 'text-black' : 'text-white'}`}>
    <span>9:41</span>
    <div className="flex items-center gap-1.5">
      {/* Cellular bars */}
      <div className="flex items-end gap-0.5 h-3">
        <span className={`w-0.5 h-1.5 rounded-xs ${dark ? 'bg-black' : 'bg-white'}`} />
        <span className={`w-0.5 h-2 rounded-xs ${dark ? 'bg-black' : 'bg-white'}`} />
        <span className={`w-0.5 h-2.5 rounded-xs ${dark ? 'bg-black' : 'bg-white'}`} />
        <span className={`w-0.5 h-3 rounded-xs ${dark ? 'bg-black' : 'bg-white'}`} />
      </div>
      {/* Wi-Fi */}
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 4c-5.5 0-10 3.2-10 7.2 0 1.9 1 3.7 2.7 5 .4.3.9.2 1.2-.2.3-.4.2-.9-.2-1.2C4.3 13.6 3.5 12.3 3.5 11c0-3.1 3.8-5.7 8.5-5.7s8.5 2.6 8.5 5.7c0 1.3-.8 2.6-2.2 3.8-.4.3-.5.8-.2 1.2.3.4.8.5 1.2.2 1.7-1.3 2.7-3.1 2.7-5C22 7.2 17.5 4 12 4z"/>
        <circle cx="12" cy="18" r="1.5" />
      </svg>
      {/* Battery */}
      <div className="flex items-center">
        <div className={`w-5 h-2.5 rounded-[4px] border ${dark ? 'border-black' : 'border-white'} p-0.5 flex items-center`}>
          <div className={`w-3.5 h-full rounded-[2px] ${dark ? 'bg-black' : 'bg-white'}`} />
        </div>
        <div className={`w-0.5 h-1 rounded-r-[1px] -ml-px ${dark ? 'bg-black' : 'bg-white'}`} />
      </div>
    </div>
  </div>
);

// iPhone Hardware Frame Wrapper
export const IPhoneFrame = ({ children, activeTab, className = "" }) => {
  return (
    <div className={`relative mx-auto rounded-[50px] p-[10px] bg-gradient-to-b from-[#404044] via-[#222226] to-[#121214] shadow-2xl ring-1 ring-black/40 ${className}`}>
      {/* Side buttons hints */}
      <div className="absolute -left-[12px] top-24 w-[3px] h-9 bg-[#2c2c2f] rounded-l" />
      <div className="absolute -left-[12px] top-36 w-[3px] h-12 bg-[#2c2c2f] rounded-l" />
      <div className="absolute -left-[12px] top-52 w-[3px] h-12 bg-[#2c2c2f] rounded-l" />
      <div className="absolute -right-[12px] top-28 w-[3px] h-16 bg-[#2c2c2f] rounded-r" />

      {/* Screen frame */}
      <div className="relative w-full h-full bg-white rounded-[40px] overflow-hidden flex flex-col border border-black/10 shadow-inner">
        {/* Notch / Speaker */}
        <div className="absolute top-0 inset-x-0 flex justify-center z-30 pointer-events-none">
          <div className="h-5 w-32 bg-black rounded-b-2xl flex items-center justify-center">
            <div className="w-10 h-1 bg-[#1a1a1c] rounded-full" />
            <div className="w-2.5 h-2.5 bg-[#090912] rounded-full ml-3 ring-1 ring-white/10" />
          </div>
        </div>

        {/* Screen Content */}
        <div className="flex-1 flex flex-col overflow-y-auto no-scrollbar pt-2 bg-white text-black">
          {children}
        </div>

        {/* Optional Tab Bar */}
        {activeTab && <IPhoneTabBar activeTab={activeTab} />}

        {/* Home Indicator */}
        <div className="absolute bottom-1 inset-x-0 flex justify-center pointer-events-none z-30">
          <div className="w-32 h-1 bg-black/80 rounded-full" />
        </div>
      </div>
    </div>
  );
};

// iPad Frame for Hero Section
export const IPadFrame = ({ children, className = "" }) => {
  return (
    <div className={`relative rounded-[36px] p-3 bg-gradient-to-b from-[#3a3a3d] via-[#262629] to-[#161618] shadow-2xl ring-1 ring-black/30 ${className}`}>
      {/* Front camera indicator */}
      <div className="absolute top-2 inset-x-0 flex justify-center pointer-events-none z-20">
        <div className="w-2 h-2 rounded-full bg-[#111116] ring-1 ring-white/10" />
      </div>

      {/* Inner Screen */}
      <div className="relative w-full h-full bg-[#ffffff] rounded-[26px] overflow-hidden flex flex-col border border-black/10">
        {/* Status Bar */}
        <div className="shrink-0 flex items-center justify-between px-6 pt-2 pb-1 text-[11px] font-semibold text-black select-none border-b border-black/5 bg-[#fdfdfd]">
          <span>9:41 AM Tue Sep 14</span>
          <div className="w-1.5 h-1.5 rounded-full bg-black/20" />
          <div className="flex items-center gap-2">
            <span>100%</span>
            <div className="w-4 h-2 rounded-[2px] border border-black p-0.5 flex items-center">
              <div className="w-full h-full bg-black rounded-[1px]" />
            </div>
          </div>
        </div>

        {/* Screen Content */}
        <div className="flex-1 overflow-y-auto no-scrollbar bg-white">
          {children}
        </div>

        {/* iPad Home Indicator */}
        <div className="shrink-0 pb-1 pt-1 flex justify-center bg-white pointer-events-none">
          <div className="w-36 h-1 bg-black/40 rounded-full" />
        </div>
      </div>
    </div>
  );
};
