
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Smartphone, ShoppingBag, Video } from 'lucide-react';
import { IMAGES } from '../constants';
import { useImage } from '../contexts/ImageContext';
import ImageUploader from './ImageUploader';
import EditableText from './EditableText';

const IndustryTrends: React.FC = () => {
  const chartImage = useImage('trends_chart', IMAGES.TRENDS_CHART);

  return (
    <section className="min-h-screen bg-black text-white flex items-center py-20 relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-600 rounded-lg">
                <TrendingUp size={32} className="text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                <EditableText id="trends_title" defaultText="行业趋势" />
              </h2>
            </div>
            
            <h3 className="text-2xl md:text-3xl text-blue-400 font-bold mb-8">
              <EditableText id="trends_subtitle" defaultText="内容UGC已成为增长核心引擎" />
            </h3>

            <div className="space-y-6 text-gray-300 text-lg">
               <p className="border-l-4 border-blue-500 pl-4">
                  <EditableText id="trends_p1" defaultText="在当前内容生态下，用户生成内容（UGC）不仅是流量的来源，更是商业增长的核心驱动力。" />
               </p>
               <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <EditableText id="trends_douyin_title" defaultText="抖音三大核心业务" />
                  </h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="flex flex-col items-center gap-2">
                        <Video className="text-pink-500" />
                        <span className="text-sm"><EditableText id="trends_biz_1" defaultText="广告" /></span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <ShoppingBag className="text-yellow-500" />
                        <span className="text-sm"><EditableText id="trends_biz_2" defaultText="电商" /></span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Smartphone className="text-green-500" />
                        <span className="text-sm"><EditableText id="trends_biz_3" defaultText="直播" /></span>
                    </div>
                  </div>
               </div>
               <p>
                 <EditableText id="trends_p2" defaultText="从iOS畅销榜趋势可见，粉丝打赏与内容付费的生意仍有巨大增长空间。" />
               </p>
            </div>
          </motion.div>

          {/* Right: Chart/Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative w-full h-[400px] md:h-[500px] bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 shadow-2xl"
          >
             <img 
                src={chartImage} 
                alt="Trends Chart" 
                className="w-full h-full object-cover object-center pointer-events-none select-none"
             />
             <ImageUploader imageKey="trends_chart" />
             
             {/* Overlay Badge */}
             <div className="absolute bottom-8 right-8 bg-black/80 backdrop-blur border border-white/10 p-4 rounded-xl">
                <div className="text-blue-400 text-sm font-bold uppercase mb-1">Growth Rate</div>
                <div className="text-white text-3xl font-black">+120%</div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default IndustryTrends;
