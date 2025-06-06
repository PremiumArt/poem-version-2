import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string, filters: SearchFilters) => void;
}

interface SearchFilters {
  type: string;
  era: string;
  poet: string;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    type: '',
    era: '',
    poet: ''
  });

  const handleSearch = () => {
    onSearch(query, filters);
  };

  const poetryTypes = ['عمودي', 'تفعيلة', 'نثر'];
  const eras = ['جاهلي', 'إسلامي', 'أموي', 'عباسي', 'أندلسي', 'مملوكي', 'عثماني', 'حديث', 'معاصر'];
  const famousPoets = ['المتنبي', 'أبو تمام', 'البحتري', 'أحمد شوقي', 'محمود درويش', 'نازك الملائكة', 'بدر شاكر السياب'];

  return (
    <motion.div
      className="rounded-xl p-4 shadow-lg mb-6"
      style={{ backgroundColor: '#615650' }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex gap-3 mb-4">
        <div className="flex-1 relative">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-amber-300 h-5 w-5" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ابحث في الشعر العربي..."
            className="w-full pr-12 pl-4 py-3 rounded-lg border border-amber-300/30 bg-white/10 backdrop-blur-sm text-white placeholder-amber-200/60 focus:outline-none focus:ring-2 focus:ring-amber-400 text-right"
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="px-4 py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-lg transition-colors flex items-center gap-2"
        >
          <Filter className="h-5 w-5" />
          فلترة
        </button>
        <button
          onClick={handleSearch}
          className="px-6 py-3 bg-amber-700 hover:bg-amber-600 text-white rounded-lg transition-colors font-medium"
        >
          بحث
        </button>
      </div>

      {showFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-amber-300/30"
        >
          <div>
            <label className="block text-amber-200 text-sm mb-2">نوع الشعر</label>
            <select
              value={filters.type}
              onChange={(e) => setFilters({...filters, type: e.target.value})}
              className="w-full p-2 rounded-lg border border-amber-300/30 bg-white/10 text-white text-right"
            >
              <option value="">جميع الأنواع</option>
              {poetryTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-amber-200 text-sm mb-2">العصر</label>
            <select
              value={filters.era}
              onChange={(e) => setFilters({...filters, era: e.target.value})}
              className="w-full p-2 rounded-lg border border-amber-300/30 bg-white/10 text-white text-right"
            >
              <option value="">جميع العصور</option>
              {eras.map(era => (
                <option key={era} value={era}>{era}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-amber-200 text-sm mb-2">الشاعر</label>
            <select
              value={filters.poet}
              onChange={(e) => setFilters({...filters, poet: e.target.value})}
              className="w-full p-2 rounded-lg border border-amber-300/30 bg-white/10 text-white text-right"
            >
              <option value="">جميع الشعراء</option>
              {famousPoets.map(poet => (
                <option key={poet} value={poet}>{poet}</option>
              ))}
            </select>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};