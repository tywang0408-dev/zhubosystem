
import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../constants';
import { useImage } from '../contexts/ImageContext';
import ImageUploader from './ImageUploader';
import EditableText from './EditableText';

const Footer: React.FC = () => {
  const bgImage = useImage('footer_bg', IMAGES.HERO_BG);

  return (
    <footer className="relative h-[60vh] flex items-center justify-center overflow-hidden group">
        <div className="absolute inset-0 z-0 overflow-hidden bg-black">
            <img 
                src={bgImage} 
                alt="Footer Background" 
                className="w-full h-full object-cover object-center pointer-events-none select-none"
            />
        </div>
        <div className="absolute inset-0 bg-black/70 z-10" />
        
        <ImageUploader imageKey="footer_bg" />

        <div className="relative z-20 text-center px-4">
             <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight"
             >
                <EditableText id="footer_cta_1" defaultText="加入王者" as="span" /> <span className="text-yellow-500"><EditableText id="footer_cta_2" defaultText="共享成功" as="span" /></span>
             </motion.div>
             <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold text-xl py-4 px-12 rounded-full shadow-lg hover:shadow-yellow-500/40 transition-shadow"
             >
                <EditableText id="footer_btn" defaultText="立即注册主播" as="span" />
             </motion.button>
             <p className="mt-8 text-gray-400 text-sm">© Tencent 腾讯游戏 | 王者荣耀团队</p>
        </div>
    </footer>
  );
};

export default Footer;
