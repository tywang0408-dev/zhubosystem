
import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import OverviewSection from './components/OverviewSection';
import GrowthSystem from './components/GrowthSystem';
import BenefitsOverview from './components/BenefitsOverview';
import InteractiveFeatureSection from './components/InteractiveFeatureSection';
import AllocationSection from './components/AllocationSection';
import Footer from './components/Footer';
// New Components
import IndustryTrends from './components/IndustryTrends';
import BusinessValue from './components/BusinessValue';
import TrafficValue from './components/TrafficValue';
import ModelInnovation from './components/ModelInnovation';

import { ImageProvider, useImageContext } from './contexts/ImageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TRAFFIC_BENEFITS, 
  MONETIZATION_BENEFITS, 
  SOCIAL_BENEFITS, 
  HONOR_BENEFITS
} from './constants';

const AppContent: React.FC = () => {
  const [pptMode, setPptMode] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { toggleEditing } = useImageContext();

  // Define the sequence of components (slides)
  const slides = [
    <HeroSection key="hero" />,
    <IndustryTrends key="trends" />,
    <BusinessValue key="biz" />,
    <TrafficValue key="traffic" />,
    <ModelInnovation key="model" />,
    <OverviewSection key="overview" />,
    <GrowthSystem key="growth" />,
    <BenefitsOverview key="benefits" />,
    <InteractiveFeatureSection sectionId="traffic" data={TRAFFIC_BENEFITS} bgGradient="from-blue-900/30 to-cyan-900/30" key="feat_traffic" />,
    <InteractiveFeatureSection sectionId="monetization" data={MONETIZATION_BENEFITS} align="right" bgGradient="from-yellow-900/20 to-orange-900/20" key="feat_money" />,
    <InteractiveFeatureSection sectionId="social" data={SOCIAL_BENEFITS} bgGradient="from-pink-900/20 to-purple-900/20" key="feat_social" />,
    <InteractiveFeatureSection sectionId="honor" data={HONOR_BENEFITS} align="right" bgGradient="from-gray-800 to-gray-900" key="feat_honor" />,
    <AllocationSection key="allocation" />,
    <Footer key="footer" />
  ];

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Alt + P: Toggle PPT Mode
      if (e.altKey && (e.key === 'p' || e.key === 'P')) {
        e.preventDefault();
        setPptMode(prev => !prev);
      }
      // Alt + E: Toggle Edit Mode (Hidden)
      if (e.altKey && (e.key === 'e' || e.key === 'E')) {
        e.preventDefault();
        toggleEditing();
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [toggleEditing]);

  // PPT Navigation Logic
  useEffect(() => {
    if (pptMode) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
          setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1));
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          setCurrentSlide(prev => Math.max(prev - 1, 0));
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
        document.body.style.overflow = '';
    }
  }, [pptMode, slides.length]);

  return (
    <div className="bg-black text-white w-full">
      {pptMode ? (
        <div className="h-screen w-full overflow-hidden flex items-center justify-center bg-black relative">
           <div className="w-full h-full relative">
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={currentSlide}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="w-full h-full overflow-y-auto"
                    >
                        {slides[currentSlide]}
                    </motion.div>
                </AnimatePresence>
           </div>
           
           {/* PPT Controls Indicator */}
           <div className="absolute bottom-6 left-6 z-50 text-white/30 font-mono text-sm pointer-events-none">
             PPT MODE: Slide {currentSlide + 1} / {slides.length} <br/>
             Use ← → arrows
           </div>
        </div>
      ) : (
        <div className="flex flex-col">
          {slides}
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ImageProvider>
      <AppContent />
    </ImageProvider>
  );
};

export default App;
