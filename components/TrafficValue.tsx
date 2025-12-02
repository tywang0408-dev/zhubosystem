
import React from 'react';
import { motion } from 'framer-motion';
import { Network, Share2, Users } from 'lucide-react';
import { IMAGES } from '../constants';
import { useImage } from '../contexts/ImageContext';
import ImageUploader from './ImageUploader';
import EditableText from './EditableText';

const TrafficValue: React.FC = () => {
  const bgImage = useImage('traffic_network', IMAGES.TRAFFIC_NETWORK);

  return (
    <section className="min-h-screen bg-black relative flex items-center py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30">
        <img 
          src={bgImage} 
          alt="Network Background" 
          className="w-full h-full object-cover object-center pointer-events-none select-none"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      <ImageUploader imageKey="traffic_network" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <div className="flex items-center gap-3 mb-4 text-cyan-400">
                    <Network size={32} />
                    <span className="font-bold tracking-widest text-lg">TRAFFIC VALUE</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                    <EditableText id="traffic_title" defaultText="构建覆盖全域的" /><br/>
                    <span className="text-cyan-400"><EditableText id="traffic_title_highlight" defaultText="被动流量网" /></span>
                </h2>
                
                <p className="text-xl text-gray-300 mb-12 max-w-2xl">
                    <EditableText id="traffic_desc" defaultText="生态繁荣后，无数主播覆盖了不同圈层、不同平台的用户，形成一张巨大的、自发性的内容传播网络。" />
                </p>
            </motion.div>

            {/* Nodes Illustration */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { title: "硬核技术党", icon: Users, color: "text-red-400", border: "border-red-500/50" },
                    { title: "娱乐搞笑粉", icon: Share2, color: "text-yellow-400", border: "border-yellow-500/50" },
                    { title: "女性玩家", icon: Network, color: "text-pink-400", border: "border-pink-500/50" },
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className={`bg-black/40 backdrop-blur-sm p-6 rounded-2xl border ${item.border} flex items-center gap-4`}
                    >
                        <div className={`p-3 bg-white/10 rounded-full ${item.color}`}>
                            <item.icon size={24} />
                        </div>
                        <div className="font-bold text-lg text-white">
                            <EditableText id={`traffic_node_${index}`} defaultText={item.title} />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
      
      {/* Decorative Connection Lines (CSS/SVG) */}
      <svg className="absolute top-1/2 right-0 h-full w-1/2 opacity-20 pointer-events-none" style={{ transform: 'translateY(-50%)' }}>
          <circle cx="80%" cy="30%" r="5" fill="#22d3ee">
              <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="60%" cy="70%" r="5" fill="#22d3ee">
             <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" />
          </circle>
          <line x1="80%" y1="30%" x2="60%" y2="70%" stroke="#22d3ee" strokeWidth="1" />
      </svg>
    </section>
  );
};

export default TrafficValue;
