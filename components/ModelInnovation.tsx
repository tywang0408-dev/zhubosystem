
import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, ArrowRight, Star, Heart, Building2 } from 'lucide-react';
import { IMAGES } from '../constants';
import { useImage } from '../contexts/ImageContext';
import ImageUploader from './ImageUploader';
import EditableText from './EditableText';

const ModelInnovation: React.FC = () => {
  const pathImage = useImage('model_path', IMAGES.MODEL_PATH);

  const steps = [
    { title: "游戏搭子", desc: "Gaming Buddy" },
    { title: "小主播", desc: "Small Streamer" },
    { title: "中大主播", desc: "Mid/Large Streamer" },
    { title: "头部KOL", desc: "Top KOL" },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-20 relative flex items-center">
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <EditableText id="model_title" defaultText="模式创新" />
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                <EditableText id="model_desc" defaultText="构建可持续的“王者荣耀创作者经济”，从“搭子”到KOL的生态价值链。" />
            </p>
        </div>

        {/* Growth Path Visualization */}
        <div className="bg-gray-800/50 backdrop-blur rounded-3xl p-8 md:p-12 mb-12 border border-gray-700 relative overflow-hidden">
             <div className="absolute inset-0 opacity-20">
                <img 
                    src={pathImage} 
                    alt="Path Background" 
                    className="w-full h-full object-cover pointer-events-none select-none"
                />
            </div>
            <ImageUploader imageKey="model_path" />
            
            <div className="relative z-10">
                <h3 className="text-2xl font-bold text-yellow-500 mb-8 flex items-center gap-2">
                    <UserPlus size={24} />
                    <EditableText id="model_path_title" defaultText="清晰成长路径" />
                </h3>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {steps.map((step, index) => (
                        <React.Fragment key={index}>
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.05, borderColor: '#eab308' }}
                                transition={{ delay: index * 0.15, type: 'spring', stiffness: 300 }}
                                className="bg-black/60 p-6 rounded-2xl border border-white/10 w-full md:w-auto flex-1 text-center hover:shadow-lg hover:shadow-yellow-500/10 transition-shadow cursor-default"
                            >
                                <div className="text-xl font-bold text-white mb-1">
                                    <EditableText id={`model_step_title_${index}`} defaultText={step.title} />
                                </div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider">
                                    <EditableText id={`model_step_desc_${index}`} defaultText={step.desc} />
                                </div>
                            </motion.div>
                            {index < steps.length - 1 && (
                                <ArrowRight className="text-gray-500 rotate-90 md:rotate-0" />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Fan Economy */}
            <motion.div 
                whileHover={{ y: -8, boxShadow: '0 20px 40px -10px rgba(236, 72, 153, 0.2)' }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-pink-900/20 p-8 rounded-3xl border border-pink-500/20 backdrop-blur-sm"
            >
                <div className="mb-4 text-pink-500">
                    <Heart size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                    <EditableText id="model_fan_title" defaultText="引入粉丝经济" />
                </h3>
                <p className="text-gray-300">
                    <EditableText id="model_fan_desc" defaultText="通过平台工具（专属礼物、粉丝勋章），系统化放大“粉丝经济”，激励主播维护粉丝，形成稳定社群。" />
                </p>
            </motion.div>

            {/* Platform Role */}
            <motion.div 
                whileHover={{ y: -8, boxShadow: '0 20px 40px -10px rgba(59, 130, 246, 0.2)' }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-blue-900/20 p-8 rounded-3xl border border-blue-500/20 backdrop-blur-sm"
            >
                <div className="mb-4 text-blue-500">
                    <Building2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                    <EditableText id="model_role_title" defaultText="平台核心角色" />
                </h3>
                <p className="text-gray-300">
                    <EditableText id="model_role_desc" defaultText="王者荣耀作为生态构建者，提供平台、规则、流量，在每一环扮演“超级中介”，获得可持续的平台收益。" />
                </p>
            </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ModelInnovation;
