
import React from 'react';
import { motion } from 'framer-motion';
import { ALLOCATION_TYPES } from '../constants';
import { Layout, Gift } from 'lucide-react';
import { useImage } from '../contexts/ImageContext';
import ImageUploader from './ImageUploader';
import EditableText from './EditableText';

const AllocationCard: React.FC<{ type: typeof ALLOCATION_TYPES[0]; index: number }> = ({ type, index }) => {
  const currentImage = useImage(`allocation_${index}`, type.image);

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
          scale: 1.02,
          y: -10,
          boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)',
          zIndex: 10
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative h-[400px] rounded-3xl overflow-hidden shadow-2xl bg-gray-900 border border-gray-800"
    >
       <div className="absolute inset-0 overflow-hidden">
          <img 
            src={currentImage} 
            alt={type.title}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110 pointer-events-none select-none"
          />
       </div>
      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors pointer-events-none" />
      
      <ImageUploader imageKey={`allocation_${index}`} />

      <div className="absolute inset-0 flex flex-col justify-center p-12 pointer-events-none z-10">
         <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-3 pointer-events-auto">
           {index === 0 ? <Layout className="text-yellow-500" /> : <Gift className="text-yellow-500" />}
           <EditableText id={`allocation_card_title_${index}`} defaultText={type.title} />
         </h3>
         <p className="text-xl text-gray-200 mb-8 pointer-events-auto leading-relaxed">
            <EditableText id={`allocation_card_desc_${index}`} defaultText={type.description} />
         </p>
         <div className="flex flex-wrap gap-2 pointer-events-auto">
           {type.tags?.map((tag, tagIndex) => (
             <span key={tagIndex} className="px-3 py-1 bg-white/10 backdrop-blur rounded-full text-sm text-yellow-400 border border-yellow-500/30">
               <EditableText id={`allocation_tag_${index}_${tagIndex}`} defaultText={tag} />
             </span>
           ))}
         </div>
      </div>
    </motion.div>
  );
};

const AllocationSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <EditableText 
            id="allocation_title_en"
            as="h2"
            defaultText="Allocation Logic"
            className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter uppercase inline-block"
          />
          <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-gray-600"></div>
              <p className="text-xl md:text-2xl text-yellow-500 font-bold tracking-[0.2em]">
                 <EditableText id="allocation_title_cn" defaultText="权益分配机制" />
              </p>
              <div className="h-[1px] w-12 bg-gray-600"></div>
          </div>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              <EditableText id="allocation_main_desc" defaultText="双引擎驱动，精准赋能，打造科学公平的资源分发引擎" />
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ALLOCATION_TYPES.map((type, index) => (
            <AllocationCard key={index} type={type} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllocationSection;
