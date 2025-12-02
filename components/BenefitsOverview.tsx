
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BENEFITS_CATEGORIES } from '../constants';
import { Crown, Coins, Users, Trophy, Sparkles } from 'lucide-react';
import { useImage } from '../contexts/ImageContext';
import ImageUploader from './ImageUploader';
import EditableText from './EditableText';

const icons = [Crown, Coins, Users, Trophy];

const BenefitPoster: React.FC<{ 
  cat: typeof BENEFITS_CATEGORIES[0]; 
  index: number; 
  hoveredIndex: number | null; 
  setHoveredIndex: (idx: number | null) => void 
}> = ({ cat, index, hoveredIndex, setHoveredIndex }) => {
    const Icon = icons[index];
    const isHovered = hoveredIndex === index;
    const isAnyHovered = hoveredIndex !== null;
    const isDimmed = isAnyHovered && !isHovered;
    
    const currentImage = useImage(`benefit_${cat.id}`, cat.image);

    return (
        <motion.div
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setHoveredIndex(index)} // Support click for mobile
            className="relative rounded-2xl overflow-hidden cursor-pointer group border border-gray-800 bg-gray-900"
            animate={{
                filter: isDimmed ? 'brightness(0.4) grayscale(0.5)' : 'brightness(1) grayscale(0)',
                scale: isHovered ? 1.05 : 1, // Increased scale for better pop
                zIndex: isHovered ? 50 : 1, // High z-index to overlap neighbors
                boxShadow: isHovered ? '0 25px 50px -12px rgba(234, 179, 8, 0.25)' : '0 0px 0px 0px rgba(0,0,0,0)'
            }}
            transition={{
                scale: { type: "spring", stiffness: 300, damping: 20 }, // Spring physics
                zIndex: { delay: isHovered ? 0 : 0.2 }, // Delay z-index drop when unhovering
            }}
            style={{ transformOrigin: 'center center' }} // Center scaling
        >
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
                <img 
                    src={currentImage} 
                    alt={cat.title}
                    className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110 pointer-events-none select-none"
                />
            </div>
            
            <ImageUploader imageKey={`benefit_${cat.id}`} />
            
            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black transition-opacity duration-300 group-hover:opacity-90 pointer-events-none" />
            <div className={`absolute inset-0 bg-yellow-500/10 mix-blend-overlay transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'} pointer-events-none`} />

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between z-10 pointer-events-none">
                {/* Top Icon */}
                <div className="flex justify-between items-start">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center backdrop-blur-md border transition-all duration-300 ${isHovered ? 'bg-yellow-500 text-black border-yellow-400' : 'bg-black/30 text-white border-white/10'}`}>
                        <Icon size={28} />
                        </div>
                        <div className="text-5xl font-bold text-white/10 font-mono">0{index + 1}</div>
                </div>

                {/* Bottom Text */}
                <div className="transform transition-transform duration-500 group-hover:-translate-y-4 pointer-events-auto">
                    <h4 className="text-yellow-400 font-bold tracking-widest text-xs mb-2 uppercase">
                        <EditableText id={`benefit_subtitle_${cat.id}`} defaultText={cat.subtitle || ""} />
                    </h4>
                    <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-yellow-200 transition-colors">
                        <EditableText id={`benefit_title_${cat.id}`} defaultText={cat.title} />
                    </h3>
                    <div className={`h-[1px] bg-white/30 w-full mb-4 transition-all duration-500 ${isHovered ? 'w-full opacity-100' : 'w-12 opacity-50'}`} />
                    
                    <p className="text-gray-300 text-sm leading-relaxed opacity-80 group-hover:opacity-100">
                        <EditableText id={`benefit_desc_${cat.id}`} defaultText={cat.desc} />
                    </p>

                    <motion.div 
                        className="mt-6 flex items-center gap-2 text-yellow-500 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"
                    >
                        <Sparkles size={16} />
                        <span>查看详情</span>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

const BenefitsOverview: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-black py-24 min-h-screen flex flex-col justify-center relative">
        {/* Ambient Light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-yellow-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 mb-16 relative z-10 text-center">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <EditableText 
                id="benefits_overview_title_en"
                as="h2"
                defaultText="Benefits System"
                className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter uppercase inline-block"
            />
            <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-[1px] w-12 bg-gray-600"></div>
                <p className="text-xl md:text-2xl text-yellow-500 font-bold tracking-[0.2em]">
                    <EditableText id="benefits_overview_title_cn" defaultText="权益体系全景" />
                </p>
                <div className="h-[1px] w-12 bg-gray-600"></div>
            </div>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                <EditableText id="benefits_overview_desc" defaultText="四大核心权益板块，构建全方位主播生态闭环，为您的直播生涯保驾护航。" />
            </p>
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4">
          {/* Vertical Poster Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[650px]">
          {BENEFITS_CATEGORIES.map((cat, index) => (
             <BenefitPoster 
                key={cat.id} 
                cat={cat} 
                index={index} 
                hoveredIndex={hoveredIndex} 
                setHoveredIndex={setHoveredIndex} 
             />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsOverview;
