
import React from 'react';
import { motion } from 'framer-motion';
import { Coins, Layers, ArrowUpCircle } from 'lucide-react';
import { IMAGES } from '../constants';
import { useImage } from '../contexts/ImageContext';
import ImageUploader from './ImageUploader';
import EditableText from './EditableText';

const BusinessValue: React.FC = () => {
  const bgImage = useImage('business_bg', IMAGES.BUSINESS_BG);

  return (
    <section className="min-h-screen relative flex items-center py-20 overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 opacity-40">
        <img 
          src={bgImage} 
          alt="Business Background" 
          className="w-full h-full object-cover object-center pointer-events-none select-none"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
      <ImageUploader imageKey="business_bg" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            <EditableText id="biz_title" defaultText="商业价值" />
          </motion.h2>
          <motion.div 
             initial={{ scale: 0.8, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 drop-shadow-2xl my-6"
          >
            <EditableText id="biz_scale" defaultText="100亿+" />
          </motion.div>
          <p className="text-xl text-yellow-500/80 font-bold tracking-widest uppercase">
            <EditableText id="biz_subtitle" defaultText="MARKET SCALE" />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1 */}
          <motion.div 
            whileHover={{ y: -10, boxShadow: '0 10px 30px -10px rgba(234, 179, 8, 0.2)', borderColor: 'rgba(234, 179, 8, 0.5)' }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gray-900/60 backdrop-blur-md p-8 rounded-3xl border border-yellow-500/30 transition-colors"
          >
            <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mb-6 text-yellow-500">
              <Coins size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
               <EditableText id="biz_card1_title" defaultText="变现蓝海" />
            </h3>
            <p className="text-gray-300 leading-relaxed">
               <EditableText id="biz_card1_desc" defaultText="头部主播通过广告、游戏带货（周边、外设）以及带动公会发展，正在实现高额收益。" />
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
             whileHover={{ y: -10, boxShadow: '0 10px 30px -10px rgba(234, 179, 8, 0.2)', borderColor: 'rgba(234, 179, 8, 0.5)' }}
             transition={{ type: "spring", stiffness: 300 }}
             className="bg-gray-900/60 backdrop-blur-md p-8 rounded-3xl border border-yellow-500/30 transition-colors"
          >
             <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mb-6 text-yellow-500">
              <Layers size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
               <EditableText id="biz_card2_title" defaultText="生态繁荣" />
            </h3>
            <p className="text-gray-300 leading-relaxed">
               <EditableText id="biz_card2_desc" defaultText="生态的繁荣将直接滋养下游产业，卷入更多年轻人进入王者生态，形成良性循环。" />
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BusinessValue;
