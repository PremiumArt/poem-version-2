import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface PoetryCardProps {
  title: string;
  description: string;
  details: string;
  example: string;
  isExpanded: boolean;
  onToggle: () => void;
}

export const PoetryCard = ({
  title,
  description,
  details,
  example,
  isExpanded,
  onToggle,
}: PoetryCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <motion.div 
      className={`rounded-xl overflow-hidden shadow-md transition-all duration-300 ${
        isExpanded ? 'md:col-span-3 lg:col-span-3' : ''
      }`}
      style={{ backgroundColor: '#615650' }}
      variants={cardVariants}
      layout
    >
      <div className="p-4">
        <h3 className="text-xl font-bold text-amber-200 mb-2">{title}</h3>
        <p className="text-amber-100/80 mb-3">{description}</p>
        
        <button 
          onClick={onToggle}
          className="text-amber-300 hover:text-amber-200 flex items-center gap-1 text-sm font-medium transition-colors"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="h-4 w-4" />
              إخفاء التفاصيل
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4" />
              عرض المزيد
            </>
          )}
        </button>
        
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 border-t border-amber-300/30 pt-4"
          >
            <h4 className="text-lg font-semibold text-amber-200 mb-2">التفاصيل:</h4>
            <p className="text-amber-100/90 mb-4 leading-relaxed whitespace-pre-line">{details}</p>
            
            <div className="bg-amber-200/10 border border-amber-300/30 rounded-lg p-4 backdrop-blur-sm">
              <h5 className="text-amber-200 font-medium mb-2">مثال:</h5>
              <p className="text-amber-100 italic whitespace-pre-line">{example}</p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};