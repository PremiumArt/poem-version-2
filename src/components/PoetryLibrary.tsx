import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Book, Heart, Share2, BookOpen, Filter, Search, User, Calendar, Tag, Loader2, Globe, Database } from 'lucide-react';
import { 
  searchExternalPoems, 
  getExternalPoemsByEra, 
  getExternalPoemsByTheme,
  type ExternalPoem 
} from '../services/poetryApi';

interface Poem {
  id: string;
  title: string;
  poet: string;
  era: string;
  type: string;
  content: string;
  theme: string;
  isFavorite: boolean;
  meter?: string;
  rhyme?: string;
  year?: string;
  description?: string;
  source?: string;
}

export const PoetryLibrary = () => {
  const [localPoems] = useState<Poem[]>([
    {
      id: '1',
      title: 'على قدر أهل العزم',
      poet: 'المتنبي',
      era: 'عباسي',
      type: 'عمودي',
      content: 'على قدر أهل العزم تأتي العزائم\nوتأتي على قدر الكرام المكارم\nوتعظم في عين الصغير صغارها\nوتصغر في عين العظيم العظائم\n\nيكلف سيف الدولة الجيش همه\nوقد عجزت عنه الجيوش الخضارم\nولولا العقول الناقصات لما وجدت\nلنفسك في الأقوام هذي المعاظم',
      theme: 'حكمة',
      isFavorite: false,
      meter: 'الطويل',
      rhyme: 'الميم',
      year: '965م',
      description: 'من أشهر قصائد المتنبي في الحكمة والفلسفة',
      source: 'مكتبة محلية'
    },
    {
      id: '2',
      title: 'أراك عصي الدمع',
      poet: 'أبو فراس الحمداني',
      era: 'عباسي',
      type: 'عمودي',
      content: 'أراك عصي الدمع شيمتك الصبر\nأما للهوى نهي عليك ولا أمر\nبلى أنا مشتاق وعندي لوعة\nولكن مثلي لا يذاع له سر\n\nإذا الليل أضواني بسطت يد الهوى\nوأذللت دمعاً من خلائقه الكبر\nتكاد تضيء النار أحشاء جوفه\nإذا هي أذكته الصبابة والفكر',
      theme: 'غزل',
      isFavorite: true,
      meter: 'الطويل',
      rhyme: 'الراء',
      year: '968م',
      description: 'من روائع الغزل العذري في الشعر العربي',
      source: 'مكتبة محلية'
    }
  ]);

  const [externalPoems, setExternalPoems] = useState<ExternalPoem[]>([]);
  const [allPoems, setAllPoems] = useState<(Poem | ExternalPoem)[]>([]);
  const [displayedPoems, setDisplayedPoems] = useState<(Poem | ExternalPoem)[]>([]);
  const [favorites, setFavorites] = useState<string[]>(['2']);
  const [selectedEra, setSelectedEra] = useState<string>('');
  const [selectedTheme, setSelectedTheme] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedSource, setSelectedSource] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingExternal, setIsLoadingExternal] = useState<boolean>(true);

  // Load external poems on component mount
  useEffect(() => {
    const loadExternalPoems = async () => {
      setIsLoadingExternal(true);
      try {
        const poems = await searchExternalPoems('');
        setExternalPoems(poems);
      } catch (error) {
        console.error('Error loading external poems:', error);
      } finally {
        setIsLoadingExternal(false);
      }
    };

    loadExternalPoems();
  }, []);

  // Combine local and external poems
  useEffect(() => {
    const combined = [...localPoems, ...externalPoems];
    setAllPoems(combined);
    setDisplayedPoems(combined.slice(0, 12));
  }, [localPoems, externalPoems]);

  const toggleFavorite = (poemId: string) => {
    setFavorites(prev => 
      prev.includes(poemId) 
        ? prev.filter(id => id !== poemId)
        : [...prev, poemId]
    );
  };

  const loadMorePoems = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      const currentCount = displayedPoems.length;
      const nextBatch = allPoems.slice(currentCount, currentCount + 8);
      setDisplayedPoems(prev => [...prev, ...nextBatch]);
      setIsLoading(false);
    }, 1000);
  };

  const handleSearch = async () => {
    if (searchQuery.trim()) {
      setIsLoading(true);
      try {
        const externalResults = await searchExternalPoems(searchQuery);
        const localResults = localPoems.filter(poem => 
          poem.title.includes(searchQuery) || 
          poem.poet.includes(searchQuery) || 
          poem.content.includes(searchQuery)
        );
        
        const combined = [...localResults, ...externalResults];
        setDisplayedPoems(combined);
      } catch (error) {
        console.error('Search error:', error);
      } finally {
        setIsLoading(false);
      }
    } else {
      setDisplayedPoems(allPoems.slice(0, 12));
    }
  };

  const filteredPoems = displayedPoems.filter(poem => {
    const matchesEra = selectedEra === '' || poem.era === selectedEra;
    const matchesTheme = selectedTheme === '' || poem.theme === selectedTheme;
    const matchesType = selectedType === '' || poem.type === selectedType;
    const matchesSource = selectedSource === '' || 
      (selectedSource === 'local' && 'isFavorite' in poem) ||
      (selectedSource === 'external' && !('isFavorite' in poem));

    return matchesEra && matchesTheme && matchesType && matchesSource;
  });

  const eras = [...new Set(allPoems.map(poem => poem.era))];
  const themes = [...new Set(allPoems.map(poem => poem.theme))];
  const types = [...new Set(allPoems.map(poem => poem.type))];

  const hasMorePoems = displayedPoems.length < allPoems.length;

  const getSourceIcon = (poem: Poem | ExternalPoem) => {
    if ('isFavorite' in poem) {
      return <Database className="h-4 w-4 text-blue-400" />;
    } else {
      return <Globe className="h-4 w-4 text-green-400" />;
    }
  };

  const getSourceLabel = (poem: Poem | ExternalPoem) => {
    if ('isFavorite' in poem) {
      return poem.source || 'مكتبة محلية';
    } else {
      return poem.source || 'Poetry DCT Abu Dhabi';
    }
  };

  return (
    <motion.div
      className="rounded-2xl p-6 shadow-lg"
      style={{ backgroundColor: '#615650' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <Book className="h-6 w-6 text-amber-400" />
        <h2 className="text-2xl font-bold text-amber-200">مكتبة الشعر</h2>
        <span className="text-amber-100/60 text-sm">
          ({filteredPoems.length} من {allPoems.length} قصيدة)
        </span>
        {isLoadingExternal && (
          <div className="flex items-center gap-2 text-amber-300 text-sm">
            <Loader2 className="h-4 w-4 animate-spin" />
            جاري تحميل القصائد الخارجية...
          </div>
        )}
      </div>

      {/* Search and Filters */}
      <div className="mb-6 space-y-4">
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-amber-300 h-5 w-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث في العناوين والشعراء والنصوص..."
              className="w-full pr-12 pl-4 py-3 rounded-lg border border-amber-300/30 bg-white/10 backdrop-blur-sm text-white placeholder-amber-200/60 focus:outline-none focus:ring-2 focus:ring-amber-400 text-right"
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
          </div>
          <button
            onClick={handleSearch}
            className="px-4 py-3 bg-amber-700 hover:bg-amber-600 text-white rounded-lg transition-colors"
          >
            بحث
          </button>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-lg transition-colors flex items-center gap-2"
          >
            <Filter className="h-5 w-5" />
            فلترة
          </button>
        </div>

        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-amber-200/10 border border-amber-300/30 rounded-lg"
          >
            <div>
              <label className="block text-amber-200 text-sm mb-2">المصدر</label>
              <select
                value={selectedSource}
                onChange={(e) => setSelectedSource(e.target.value)}
                className="w-full p-2 rounded-lg border border-amber-300/30 bg-white/10 text-white text-right"
              >
                <option value="">جميع المصادر</option>
                <option value="local">مكتبة محلية</option>
                <option value="external">Poetry DCT Abu Dhabi</option>
              </select>
            </div>
            <div>
              <label className="block text-amber-200 text-sm mb-2">العصر</label>
              <select
                value={selectedEra}
                onChange={(e) => setSelectedEra(e.target.value)}
                className="w-full p-2 rounded-lg border border-amber-300/30 bg-white/10 text-white text-right"
              >
                <option value="">جميع العصور</option>
                {eras.map(era => (
                  <option key={era} value={era}>{era}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-amber-200 text-sm mb-2">الغرض</label>
              <select
                value={selectedTheme}
                onChange={(e) => setSelectedTheme(e.target.value)}
                className="w-full p-2 rounded-lg border border-amber-300/30 bg-white/10 text-white text-right"
              >
                <option value="">جميع الأغراض</option>
                {themes.map(theme => (
                  <option key={theme} value={theme}>{theme}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-amber-200 text-sm mb-2">النوع</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full p-2 rounded-lg border border-amber-300/30 bg-white/10 text-white text-right"
              >
                <option value="">جميع الأنواع</option>
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </motion.div>
        )}
      </div>

      <div className="grid gap-6">
        {filteredPoems.map((poem, index) => (
          <motion.div
            key={poem.id}
            className="bg-amber-200/10 border border-amber-300/30 rounded-lg p-5 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-amber-200 mb-2">{poem.title}</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-sm text-amber-100/80 mb-2">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{poem.poet}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{poem.era}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Tag className="h-4 w-4" />
                    <span>{poem.theme}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    <span>{poem.type}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {getSourceIcon(poem)}
                    <span className="text-xs">{getSourceLabel(poem)}</span>
                  </div>
                </div>
                {poem.description && (
                  <p className="text-amber-100/70 text-sm italic">{poem.description}</p>
                )}
                {poem.meter && (
                  <div className="flex gap-4 text-xs text-amber-200/60 mt-1">
                    <span>البحر: {poem.meter}</span>
                    <span>القافية: {poem.rhyme}</span>
                    {poem.year && <span>السنة: {poem.year}</span>}
                  </div>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => toggleFavorite(poem.id)}
                  className={`p-2 rounded-lg transition-colors ${
                    favorites.includes(poem.id)
                      ? 'text-red-400 bg-red-400/20'
                      : 'text-amber-300 hover:text-red-400 hover:bg-red-400/20'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${favorites.includes(poem.id) ? 'fill-current' : ''}`} />
                </button>
                <button className="p-2 rounded-lg text-amber-300 hover:text-amber-200 hover:bg-amber-200/20 transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="bg-amber-100/5 border border-amber-300/20 rounded-lg p-4">
              <p className="text-amber-100 leading-relaxed whitespace-pre-line poetry-text">
                {poem.content}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredPoems.length === 0 && !isLoading && (
        <div className="text-center py-8">
          <p className="text-amber-200/60">لم يتم العثور على قصائد تطابق معايير البحث</p>
        </div>
      )}

      {hasMorePoems && filteredPoems.length > 0 && (
        <div className="mt-6 text-center">
          <button
            onClick={loadMorePoems}
            disabled={isLoading}
            className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-lg transition-colors font-medium flex items-center gap-2 mx-auto disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                جاري التحميل...
              </>
            ) : (
              <>
                <Book className="h-5 w-5" />
                عرض المزيد من القصائد ({allPoems.length - displayedPoems.length} متبقية)
              </>
            )}
          </button>
        </div>
      )}

      {!hasMorePoems && displayedPoems.length > 0 && (
        <div className="mt-6 text-center">
          <p className="text-amber-200/60 text-sm">
            تم عرض جميع القصائد المتاحة ({allPoems.length} قصيدة)
          </p>
        </div>
      )}

      {/* Source Information */}
      <div className="mt-6 p-4 bg-amber-200/10 border border-amber-300/30 rounded-lg">
        <h4 className="text-amber-200 font-medium mb-2 flex items-center gap-2">
          <Globe className="h-4 w-4" />
          مصادر المكتبة:
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-amber-100/80 text-sm">
          <div className="flex items-center gap-2">
            <Database className="h-4 w-4 text-blue-400" />
            <span>مكتبة محلية: مجموعة مختارة من الشعر العربي الكلاسيكي</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-green-400" />
            <span>Poetry DCT Abu Dhabi: مجموعة موسعة من الشعر العربي</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};