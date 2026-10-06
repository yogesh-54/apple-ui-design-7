import React, { useState } from 'react';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Store", href: "#store" },
    { name: "Mac", href: "#mac" },
    { name: "iPad", href: "#ipad" },
    { name: "iPhone", href: "#iphone" },
    { name: "Watch", href: "#watch" },
    { name: "AirPods", href: "#airpods" },
    { name: "TV & Home", href: "#tv-home" },
    { name: "Entertainment", href: "#entertainment" },
    { name: "Accessories", href: "#accessories" },
    { name: "Support", href: "#support" },
  ];

  return (
    <header className="w-full sticky top-0 z-50">
      {/* 1. Apple Global Nav */}
      <nav className="bg-[#161617]/95 backdrop-blur-md text-[#d6d6d6] text-[12px] font-normal tracking-tight h-11 flex items-center border-b border-white/10">
        <div className="max-w-[1024px] mx-auto w-full px-4 flex items-center justify-between">
          {/* Apple Logo */}
          <a href="#" className="text-white hover:text-white/80 transition-colors py-2 flex items-center" aria-label="Apple">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 170 170">
              <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.69-7.74-11.99-14.11-6.1-9.08-10.87-19.34-14.3-30.78-3.44-11.43-5.16-22.37-5.16-32.81 0-14.15 3.57-26.04 10.7-35.67 7.13-9.64 16.29-14.54 27.48-14.71 5.37 0 11.13 1.48 17.29 4.45 6.16 2.97 10.15 4.51 11.97 4.63 1.63 0 5.86-1.61 12.69-4.83 6.83-3.22 12.75-4.66 17.76-4.32 13.43.91 23.95 6.09 31.55 15.54-11.39 6.89-16.96 16.38-16.71 28.47.26 9.61 3.99 17.65 11.21 24.11 7.22 6.46 15.82 10.05 25.8 10.77-2.3 6.94-5.11 14.12-8.43 21.54m-27.18-107.5c0 6.64-2.52 13.06-7.56 18.25-5.04 5.19-11.21 8.24-18.52 9.15-.33-1.63-.5-3.13-.5-4.51 0-6.72 2.68-13.34 8.04-18.84 5.36-5.5 11.75-8.58 19.17-9.25.13 1.63.2 3.03.2 4.2"/>
            </svg>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors duration-150"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-6">
            {/* Search */}
            <button className="text-[#d6d6d6] hover:text-white transition-colors" aria-label="Search">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="7" />
                <path strokeLinecap="round" d="m20 20-3.5-3.5" />
              </svg>
            </button>

            {/* Bag */}
            <button className="text-[#d6d6d6] hover:text-white transition-colors" aria-label="Shopping Bag">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#d6d6d6] hover:text-white"
              aria-label="Toggle menu"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#161617] border-b border-white/10 px-6 py-4 flex flex-col space-y-3 text-[14px] text-[#e8e8ed]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      {/* 2. Apple Books Product Subnav */}
      <div className="bg-white/85 backdrop-blur-md border-b border-[#d2d2d7]/70 py-3 transition-shadow">
        <div className="max-w-[1024px] mx-auto px-4 flex items-center justify-between">
          <h1 className="text-[20px] font-semibold tracking-tight text-[#1d1d1f]">
            Apple Books
          </h1>
          <div className="flex items-center space-x-4 text-[12px] text-[#6e6e73]">
            <a href="#nightstand" className="hidden sm:inline-block hover:text-[#0071e3] transition-colors">Overview</a>
            <a href="#goals" className="hidden sm:inline-block hover:text-[#0071e3] transition-colors">Reading Goals</a>
            <a href="#authors" className="hidden sm:inline-block hover:text-[#0071e3] transition-colors">For Authors</a>
          </div>
        </div>
      </div>
    </header>
  );
};
