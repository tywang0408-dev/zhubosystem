
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { IMAGES } from '../constants';
import { useImage } from '../contexts/ImageContext';
import ImageUploader from './ImageUploader';
import EditableText from './EditableText';

const HeroSection: React.FC = () => {
  const bgImage = useImage('hero_bg', IMAGES.HERO_BG);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden group">
      {/* Background with Zoom Effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 z-0 bg-black"
      >
        <img 
          src={bgImage} 
          alt="Hero Background" 
          className="w-full h-full object-cover object-center pointer-events-none select-none"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/60 z-10" />
      
      <ImageUploader imageKey="hero_bg" className="top-8 right-8" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <EditableText 
            id="hero_subtitle"
            as="h2"
            defaultText="Honor of Kings"
            className="text-xl md:text-3xl font-bold tracking-[0.5em] text-yellow-500 mb-4 uppercase inline-block"
          />
          
          <div className="text-5xl md:text-8xl font-black text-white mb-6 drop-shadow-2xl tracking-tight flex flex-wrap justify-center gap-x-4">
             <EditableText 
                id="hero_title_1"
                defaultText="主播体系"
             />
             <EditableText 
                id="hero_title_2"
                defaultText="全面升级"
                className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600"
             />
          </div>

          <EditableText 
             id="hero_desc"
             as="p"
             defaultText="重塑成长路径，解锁亿级流量，共享商业红利"
             className="text-gray-300 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 z-20 text-white/50 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <ChevronDown size={48} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
