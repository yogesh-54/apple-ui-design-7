import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeatureNightstand } from './components/FeatureNightstand';
import { FeatureLibrary } from './components/FeatureLibrary';
import { FeatureStore } from './components/FeatureStore';
import { FeatureAudiobooks } from './components/FeatureAudiobooks';
import { FeatureSearch } from './components/FeatureSearch';
import { ReadingGoalsSection } from './components/ReadingGoalsSection';
import { PublishSection } from './components/PublishSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-[#1d1d1f] font-sans selection:bg-[#ff8c2b]/25 selection:text-[#d44500]">
      {/* 1. Global Nav & Subnav */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 2. Hero Section (Page 1 & 2) */}
        <HeroSection />

        {/* 3. Feature 1: Reading Now (Page 3) */}
        <FeatureNightstand />

        {/* 4. Feature 2: Library (Page 4) */}
        <FeatureLibrary />

        {/* 5. Feature 3: Book Store (Page 5) */}
        <FeatureStore />

        {/* 6. Feature 4: Audiobooks (Page 6) */}
        <FeatureAudiobooks />

        {/* 7. Feature 5: Search (Page 7) */}
        <FeatureSearch />

        {/* 8. Reading Goals Section (Page 8 & 9) */}
        <ReadingGoalsSection />

        {/* 9. Publish to Apple Books (Page 9) */}
        <PublishSection />
      </main>

      {/* 10. Global Apple Footer (Page 10) */}
      <Footer />
    </div>
  );
}

export default App;
