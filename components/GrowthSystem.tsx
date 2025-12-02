
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GROWTH_STEPS } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { useImage } from '../contexts/ImageContext';
import ImageUploader from './ImageUploader';
import EditableText from './EditableText';

const GrowthCard: React.FC<{ 
  step: typeof GROWTH_STEPS[0]; 
  index: number; 
  isActive: boolean; 
  setActive: (id: string) => void 
}> = ({ step, index, isActive, setActive }) => {
  const currentImage = useImage(`growth_${step.id}`, step.image);

  return (
    <motion.div
      layout
      onMouseEnter={() => setActive(step.id)}
      onClick={() => setActive(step.id)} // Support click/tap for mobile
      className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
        isActive ? 'flex-[3]' : 'flex-[1]'
      } border border-gray-800 hover:border-yellow-500/50 group bg-gray-900`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
            src={currentImage} 
            alt={step.title}
            className={`w-full h-full object-cover object-center transition-transform duration-1000 ${isActive ? 'scale-105' : 'scale-100 grayscale'} pointer-events-none select-none`}
        />
      </div>
      
      {/* Dark Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90 transition-opacity duration-500 ${isActive ? 'opacity-80' : 'opacity-90 hover:opacity-70'} pointer-events-none`} />

      <ImageUploader imageKey={`growth_${step.id}`} />

      {/* Number Watermark */}
      <div className="absolute top-4 right-6 text-7xl font-black text-white/5 z-0 pointer-events-none select-none">
        0{index + 1}
      </div>

      {/* Content Container */}
      <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-10 flex flex-col justify-end h-full pointer-events-none">
          {/* Step Title Area */}
          <div className="flex items-end justify-between border-b border-white/20 pb-4 mb-4 pointer-events-auto">
            <div className="flex-1">
                <h4 className="text-yellow-500 font-bold tracking-[0.2em] text-sm mb-1">
                    <EditableText id={`growth_subtitle_${step.id}`} defaultText={step.subtitle} />
                </h4>
                <h3 className={`font-bold text-white transition-all duration-300 ${isActive ? 'text-4xl' : 'text-2xl'}`}>
                    <EditableText id={`growth_title_${step.id}`} defaultText={step.title} />
                </h3>
            </div>
            <motion.div 
                animate={{ rotate: isActive ? 45 : 0 }}
                className={`p-2 rounded-full border border-white/30 text-white ${isActive ? 'bg-yellow-500 text-black border-yellow-500' : ''}`}
            >
                <ArrowUpRight size={24} />
            </motion.div>
          </div>

          {/* Expandable Description */}
          <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} pointer-events-auto`}>
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                <EditableText id={`growth_desc_${step.id}`} defaultText={step.description} />
            </p>
            <div className="mt-4 flex gap-2">
                <span className="h-1 w-12 bg-yellow-500 rounded-full"></span>
                <span className="h-1 w-2 bg-gray-600 rounded-full"></span>
                <span className="h-1 w-2 bg-gray-600 rounded-full"></span>
            </div>
          </div>
      </div>
    </motion.div>
  );
};

const GrowthSystem: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string | null>('2'); // Default center active

  return (
    <section className="relative py-24 bg-black overflow-hidden h-[900px] flex flex-col justify-center">
      <div className="container mx-auto px-4 mb-16 z-10">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
        >
          <EditableText 
            id="growth_system_title_en"
            as="h2"
            defaultText="Growth System"
            className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter uppercase inline-block"
          />
          <div className="flex items-center justify-center gap-4">
             <div className="h-[1px] w-12 bg-gray-600"></div>
             <p className="text-xl md:text-2xl text-yellow-500 font-bold tracking-[0.2em]">
                <EditableText id="growth_system_title_cn" defaultText="主播成长体系" />
             </p>
             <div className="h-[1px] w-12 bg-gray-600"></div>
          </div>
        </motion.div>
      </div>

      <div className="w-full max-w-[1600px] mx-auto h-[600px] px-4 flex flex-col md:flex-row gap-4">
        {GROWTH_STEPS.map((step, index) => (
          <GrowthCard 
            key={step.id} 
            step={step} 
            index={index} 
            isActive={activeStep === step.id}
            setActive={setActiveStep} 
          />
        ))}
      </div>
    </section>
  );
};

export default GrowthSystem;
