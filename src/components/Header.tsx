import { Feather, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const Header = () => {
  return (
    <motion.header 
      className="text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center gap-3 mb-4">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          <Feather className="h-8 w-8 text-amber-400" />
        </motion.div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          مستكشف الشعر العربي
        </h1>
        <motion.div
          animate={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: 1 }}
        >
          <Sparkles className="h-8 w-8 text-amber-400" />
        </motion.div>
      </div>
      <p className="text-lg text-amber-100/80 max-w-3xl mx-auto leading-relaxed">
        منصة شاملة لاستكشاف وتعلم الشعر العربي - من الأشكال الفنية والأغراض إلى التوليد والتحليل والتعلم التفاعلي
      </p>
      
      {/* Feature highlights */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {[
          'توليد شعر بالذكاء الاصطناعي',
          'مكتبة شعرية شاملة', 
          'محلل نصوص متقدم',
          'مسار تعلم تفاعلي'
        ].map((feature, index) => (
          <motion.span
            key={feature}
            className="px-3 py-1 bg-amber-400/20 text-amber-200 rounded-full text-sm border border-amber-300/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {feature}
          </motion.span>
        ))}
      </div>
    </motion.header>
  );
}