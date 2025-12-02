
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionData } from '../types';
import { CheckCircle2 } from 'lucide-react';
import { useImage } from '../contexts/ImageContext';
import ImageUploader from './ImageUploader';
import EditableText from './EditableText';

interface Props {
  data: SectionData;
  align?: 'left' | 'right';
  bgGradient?: string;
  sectionId: string; // Added to create unique keys for EditableText
}

const FeaturePreview: React.FC<{ activeItem: any, sectionId: string }> = ({ activeItem, sectionId }) => {
  const currentImage = useImage(`feature_${activeItem.id}`, activeItem.image);
  
  return (
    <motion.div
        key={activeItem.id}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-black"
    >
        <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
            {/* CHANGED: Use object-contain to ensure the full image is shown regardless of aspect ratio */}
            <img 
                src={currentImage} 
                alt={activeItem.title}
                className="w-full h-full object-contain object-center pointer-events-none select-none"
            />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 pointer-events-none" />
        
        <ImageUploader imageKey={`feature_${activeItem.id}`} />

        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full max-w-3xl z-10 pointer-events-none">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg pointer-events-auto">
                    <EditableText id={`feature_item_title_${activeItem.id}`} defaultText={activeItem.title} />
                </h3>
                <div className="text-lg text-gray-200 leading-relaxed backdrop-blur-md bg-black/50 p-4 rounded-xl border-l-4 border-yellow-500 shadow-xl pointer-events-auto">
                    <EditableText id={`feature_item_desc_${activeItem.id}`} defaultText={activeItem.description} />
                </div>
            </motion.div>
        </div>
    </motion.div>
  );
};

const InteractiveFeatureSection: React.FC<Props> = ({ data, align = 'left', bgGradient = "from-blue-900/20 to-purple-900/20", sectionId }) => {
  const [activeId, setActiveId] = useState(data.items[0].id);
  const activeItem = data.items.find(item => item.id === activeId) || data.items[0];

  return (
    <section className="py-24 relative overflow-hidden bg-black border-t border-gray-900">
      <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient} opacity-30`} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12">
            <h3 className="text-sm font-bold text-yellow-500 tracking-widest uppercase mb-2">
                <EditableText id={`section_subtitle_${sectionId}`} defaultText={data.subtitle || ""} />
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
                <EditableText id={`section_title_${sectionId}`} defaultText={data.title} />
            </h2>
        </div>

        <div className={`flex flex-col gap-12 ${align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
          {/* List Side */}
          <div className="w-full md:w-1/3 flex flex-col gap-4">
            {data.items.map((item) => (
              <motion.div
                key={item.id}
                onMouseEnter={() => setActiveId(item.id)}
                onClick={() => setActiveId(item.id)} // Add click handler for mobile
                className={`p-6 rounded-xl cursor-pointer border transition-all duration-300 relative overflow-hidden ${
                  activeId === item.id 
                    ? 'bg-gray-800 border-yellow-500/50 shadow-lg shadow-yellow-500/10' 
                    : 'bg-gray-900/50 border-gray-800 hover:bg-gray-800 hover:border-gray-700'
                }`}
              >
                <div className="flex items-center justify-between relative z-10">
                  <h4 className={`text-lg font-bold transition-colors ${activeId === item.id ? 'text-white' : 'text-gray-400'}`}>
                    <EditableText id={`feature_list_title_${item.id}`} defaultText={item.title} />
                  </h4>
                  {activeId === item.id && (
                    <motion.div layoutId={`icon-${data.title}`}>
                        <CheckCircle2 className="text-yellow-500" size={20} />
                    </motion.div>
                  )}
                </div>
                 {/* Progress Bar for Active Item */}
                 {activeId === item.id && (
                    <motion.div 
                        layoutId={`progress-${data.title}`}
                        className="absolute bottom-0 left-0 h-1 bg-yellow-500"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.5 }}
                    />
                 )}
              </motion.div>
            ))}
            
            <div className="p-4 text-center text-gray-500 text-sm font-medium border border-dashed border-gray-800 rounded-xl">
              更多权益 敬请期待
            </div>
          </div>

          {/* Preview Side */}
          <div className="w-full md:w-2/3 relative h-[400px] md:h-auto min-h-[500px] rounded-3xl overflow-hidden border border-gray-800 shadow-2xl bg-black">
             <AnimatePresence mode="wait">
                <FeaturePreview activeItem={activeItem} sectionId={sectionId} />
             </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveFeatureSection;
