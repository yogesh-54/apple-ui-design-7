import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-[#f5f5f7] text-[#6e6e73] text-[12px] font-normal leading-[1.33] border-t border-gray-200">
      <div className="max-w-[1024px] mx-auto px-4 py-8">
        {/* Breadcrumb Path */}
        <div className="flex items-center space-x-2 text-[12px] text-gray-500 pb-5 border-b border-gray-300">
          <a href="#" className="hover:text-black transition-colors" aria-label="Apple">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 170 170">
              <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.69-7.74-11.99-14.11-6.1-9.08-10.87-19.34-14.3-30.78-3.44-11.43-5.16-22.37-5.16-32.81 0-14.15 3.57-26.04 10.7-35.67 7.13-9.64 16.29-14.54 27.48-14.71 5.37 0 11.13 1.48 17.29 4.45 6.16 2.97 10.15 4.51 11.97 4.63 1.63 0 5.86-1.61 12.69-4.83 6.83-3.22 12.75-4.66 17.76-4.32 13.43.91 23.95 6.09 31.55 15.54-11.39 6.89-16.96 16.38-16.71 28.47.26 9.61 3.99 17.65 11.21 24.11 7.22 6.46 15.82 10.05 25.8 10.77-2.3 6.94-5.11 14.12-8.43 21.54m-27.18-107.5c0 6.64-2.52 13.06-7.56 18.25-5.04 5.19-11.21 8.24-18.52 9.15-.33-1.63-.5-3.13-.5-4.51 0-6.72 2.68-13.34 8.04-18.84 5.36-5.5 11.75-8.58 19.17-9.25.13 1.63.2 3.03.2 4.2"/>
            </svg>
          </a>
          <span className="text-gray-400">&rsaquo;</span>
          <a href="#" className="hover:text-black transition-colors">Only on Apple</a>
          <span className="text-gray-400">&rsaquo;</span>
          <span className="text-gray-800 font-medium">Apple Books</span>
        </div>

        {/* 5-Column Link Directory */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 pt-6 pb-8 text-left">
          {/* Column 1 */}
          <div className="space-y-6">
            <div>
              <h4 className="text-[12px] font-semibold text-[#1d1d1f] mb-2.5">Shop and Learn</h4>
              <ul className="space-y-2">
                {['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'AirTag', 'Accessories', 'Gift Cards'].map((item) => (
                  <li key={item}><a href="#" className="hover:underline hover:text-black">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[12px] font-semibold text-[#1d1d1f] mb-2.5">Apple Wallet</h4>
              <ul className="space-y-2">
                {['Wallet', 'Apple Card', 'Apple Pay', 'Apple Cash'].map((item) => (
                  <li key={item}><a href="#" className="hover:underline hover:text-black">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            <div>
              <h4 className="text-[12px] font-semibold text-[#1d1d1f] mb-2.5">Account</h4>
              <ul className="space-y-2">
                {['Manage Your Apple ID', 'Apple Store Account', 'iCloud.com'].map((item) => (
                  <li key={item}><a href="#" className="hover:underline hover:text-black">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[12px] font-semibold text-[#1d1d1f] mb-2.5">Entertainment</h4>
              <ul className="space-y-2">
                {['Apple One', 'Apple TV+', 'Apple Music', 'Apple Arcade', 'Apple Fitness+', 'Apple News+', 'Apple Podcasts', 'Apple Books', 'App Store'].map((item) => (
                  <li key={item}><a href="#" className="hover:underline hover:text-black">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-[12px] font-semibold text-[#1d1d1f] mb-2.5">Apple Store</h4>
            <ul className="space-y-2">
              {[
                'Find a Store',
                'Genius Bar',
                'Today at Apple',
                'Apple Camp',
                'Apple Store App',
                'Certified Refurbished',
                'Apple Trade In',
                'Financing',
                'Carrier Deals at Apple',
                'Order Status',
                'Shopping Help',
              ].map((item) => (
                <li key={item}><a href="#" className="hover:underline hover:text-black">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div className="space-y-6">
            <div>
              <h4 className="text-[12px] font-semibold text-[#1d1d1f] mb-2.5">For Business</h4>
              <ul className="space-y-2">
                {['Apple and Business', 'Shop for Business'].map((item) => (
                  <li key={item}><a href="#" className="hover:underline hover:text-black">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[12px] font-semibold text-[#1d1d1f] mb-2.5">For Education</h4>
              <ul className="space-y-2">
                {['Apple and Education', 'Shop for K-12', 'Shop for College'].map((item) => (
                  <li key={item}><a href="#" className="hover:underline hover:text-black">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[12px] font-semibold text-[#1d1d1f] mb-2.5">For Healthcare</h4>
              <ul className="space-y-2">
                {['Apple in Healthcare', 'Health on Apple Watch', 'Health Records on iPhone'].map((item) => (
                  <li key={item}><a href="#" className="hover:underline hover:text-black">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[12px] font-semibold text-[#1d1d1f] mb-2.5">For Government</h4>
              <ul className="space-y-2">
                {['Shop for Government', 'Shop for Veterans and Military'].map((item) => (
                  <li key={item}><a href="#" className="hover:underline hover:text-black">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 5 */}
          <div className="space-y-6">
            <div>
              <h4 className="text-[12px] font-semibold text-[#1d1d1f] mb-2.5">Apple Values</h4>
              <ul className="space-y-2">
                {[
                  'Accessibility',
                  'Education',
                  'Environment',
                  'Inclusion and Diversity',
                  'Privacy',
                  'Racial Equity and Justice',
                  'Supplier Responsibility',
                ].map((item) => (
                  <li key={item}><a href="#" className="hover:underline hover:text-black">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[12px] font-semibold text-[#1d1d1f] mb-2.5">About Apple</h4>
              <ul className="space-y-2">
                {[
                  'Newsroom',
                  'Apple Leadership',
                  'Career Opportunities',
                  'Investors',
                  'Ethics & Compliance',
                  'Events',
                  'Contact Apple',
                ].map((item) => (
                  <li key={item}><a href="#" className="hover:underline hover:text-black">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Ways to shop line */}
        <div className="text-[12px] text-gray-500 pb-3 border-b border-gray-300 text-left">
          More ways to shop: <a href="#" className="text-[#0071e3] hover:underline">Find an Apple Store</a> or{' '}
          <a href="#" className="text-[#0071e3] hover:underline">other retailer</a> near you. Or call 1-800-MY-APPLE.
        </div>

        {/* Legal & Copyright Row */}
        <div className="pt-4 flex flex-col md:flex-row md:items-center justify-between gap-3 text-[11px] text-gray-500">
          <div>
            Copyright &copy; 2023 Apple Inc. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <a href="#" className="hover:underline hover:text-black">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:underline hover:text-black">Terms of Use</a>
            <span>|</span>
            <a href="#" className="hover:underline hover:text-black">Sales and Refunds</a>
            <span>|</span>
            <a href="#" className="hover:underline hover:text-black">Legal</a>
            <span>|</span>
            <a href="#" className="hover:underline hover:text-black">Site Map</a>
          </div>
          <div className="text-right">
            <a href="#" className="hover:underline hover:text-black">United States</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
