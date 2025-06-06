import { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Heart, Share2, BookOpen, Filter, Search, User, Calendar, Tag } from 'lucide-react';

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
}

export const PoetryLibrary = () => {
  const [poems] = useState<Poem[]>([
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
      description: 'من أشهر قصائد المتنبي في الحكمة والفلسفة'
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
      description: 'من روائع الغزل العذري في الشعر العربي'
    },
    {
      id: '3',
      title: 'المساء',
      poet: 'خليل مطران',
      era: 'حديث',
      type: 'عمودي',
      content: 'داء ألم فخلت في جنبيه\nنار تلظى بين الضلوع\nيا للغروب وما به من عبرة\nللمستهام وعبرة للموجع\n\nأوليس نوحاً مثلما أنا نائح\nأم ليس يبكي مثلما أنا أدمع\nوالبحر ساج صامت فيه الأسى\nساكن ولكن في الأعماق يهجع',
      theme: 'وصف',
      isFavorite: false,
      meter: 'الخفيف',
      rhyme: 'العين',
      year: '1902م',
      description: 'من أجمل قصائد الوصف في الشعر الحديث'
    },
    {
      id: '4',
      title: 'البردة',
      poet: 'كعب بن زهير',
      era: 'إسلامي',
      type: 'عمودي',
      content: 'بانت سعاد فقلبي اليوم متبول\nمتيم إثرها لم يفد مكبول\nوما سعاد غداة البين إذ رحلوا\nإلا أغن غضيض الطرف مكحول\n\nهيفاء مقبلة عجزاء مدبرة\nلا يشتكي قصر منها ولا طول\nتجلو عوارض ذي ظلم إذا ابتسمت\nكأنه منهل بالراح معلول',
      theme: 'مدح',
      isFavorite: true,
      meter: 'البسيط',
      rhyme: 'اللام',
      year: '629م',
      description: 'قصيدة البردة الشهيرة في مدح النبي محمد'
    },
    {
      id: '5',
      title: 'معلقة عنترة',
      poet: 'عنترة بن شداد',
      era: 'جاهلي',
      type: 'عمودي',
      content: 'هل غادر الشعراء من متردم\nأم هل عرفت الدار بعد توهم\nيا دار عبلة بالجواء تكلمي\nوعمي صباحاً دار عبلة واسلمي\n\nفوقفت فيها ناقتي وكأنها\nفدن لأقضي حاجة المتلوم\nوتحل عبلة بالجواء وأهلنا\nبالحزن فالصمان فالمتثلم',
      theme: 'غزل وفخر',
      isFavorite: false,
      meter: 'الكامل',
      rhyme: 'الميم',
      year: '550م',
      description: 'إحدى المعلقات السبع المشهورة'
    },
    {
      id: '6',
      title: 'أنشودة المطر',
      poet: 'بدر شاكر السياب',
      era: 'معاصر',
      type: 'تفعيلة',
      content: 'عيناك غابتا نخيل ساعة السحر\nأو شرفتان راح ينأى عنهما القمر\nعيناك حين تبسمان تورق الكروم\nوترقص الأضواء كالأقمار في نهر\n\nيرجه المجداف وهناً ساعة السحر\nكأنما تنبض في غوريهما النجوم\nوتغرقان في ضباب من أسى شفيف\nكالبحر سرح اليدين فوقه المساء',
      theme: 'رومانسي',
      isFavorite: true,
      meter: 'تفعيلة حرة',
      rhyme: 'متنوعة',
      year: '1960م',
      description: 'من روائع الشعر الحر العربي'
    },
    {
      id: '7',
      title: 'قصيدة في الغربة',
      poet: 'محمود درويش',
      era: 'معاصر',
      type: 'تفعيلة',
      content: 'أحن إلى خبز أمي\nوقهوة أمي\nولمسة أمي\nوتكبر في الطفولة\nيوماً على صدر يوم\nوأعشق عمري لأني\nإذا مت\nأخجل من دمع أمي\n\nخذيني، إذا عدت يوماً\nوشاحاً لهدبك\nوغطي عظامي بعشب\nتعمد من طهر كعبك\nوشدي وثاقي\nبخصلة شعر\nبخيط يلوح في ذيل ثوبك',
      theme: 'حنين',
      isFavorite: false,
      meter: 'تفعيلة حرة',
      rhyme: 'متنوعة',
      year: '1964م',
      description: 'من أشهر قصائد الحنين والغربة'
    },
    {
      id: '8',
      title: 'الكوليرا',
      poet: 'نازك الملائكة',
      era: 'معاصر',
      type: 'تفعيلة',
      content: 'سكن الليل\nأصغ إلى وقع صدى الأنات\nفي عمق الصمت، من أصوات\nصرخات تعلو، تضطرب\nحزن يتدفق، يلتهب\nيتعثر فيه صدى الآهات\n\nفي كل فؤاد غليان\nفي الكوخ الساكن أحزان\nفي كل مكان روح تصرخ في الظلمات\nفي كل مكان يبكي صوت',
      theme: 'اجتماعي',
      isFavorite: true,
      meter: 'تفعيلة حرة',
      rhyme: 'متنوعة',
      year: '1947م',
      description: 'أول قصيدة تفعيلة في الشعر العربي الحديث'
    }
  ]);

  const [favorites, setFavorites] = useState<string[]>(['2', '4', '6', '8']);
  const [selectedEra, setSelectedEra] = useState<string>('');
  const [selectedTheme, setSelectedTheme] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const toggleFavorite = (poemId: string) => {
    setFavorites(prev => 
      prev.includes(poemId) 
        ? prev.filter(id => id !== poemId)
        : [...prev, poemId]
    );
  };

  const filteredPoems = poems.filter(poem => {
    const matchesSearch = searchQuery === '' || 
      poem.title.includes(searchQuery) || 
      poem.poet.includes(searchQuery) || 
      poem.content.includes(searchQuery);
    
    const matchesEra = selectedEra === '' || poem.era === selectedEra;
    const matchesTheme = selectedTheme === '' || poem.theme === selectedTheme;
    const matchesType = selectedType === '' || poem.type === selectedType;

    return matchesSearch && matchesEra && matchesTheme && matchesType;
  });

  const eras = [...new Set(poems.map(poem => poem.era))];
  const themes = [...new Set(poems.map(poem => poem.theme))];
  const types = [...new Set(poems.map(poem => poem.type))];

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
        <span className="text-amber-100/60 text-sm">({filteredPoems.length} قصيدة)</span>
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
            />
          </div>
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
            className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-amber-200/10 border border-amber-300/30 rounded-lg"
          >
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
        {filteredPoems.map((poem) => (
          <motion.div
            key={poem.id}
            className="bg-amber-200/10 border border-amber-300/30 rounded-lg p-5 backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-amber-200 mb-2">{poem.title}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-amber-100/80 mb-2">
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

      {filteredPoems.length === 0 && (
        <div className="text-center py-8">
          <p className="text-amber-200/60">لم يتم العثور على قصائد تطابق معايير البحث</p>
        </div>
      )}

      <div className="mt-6 text-center">
        <button className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-lg transition-colors font-medium">
          عرض المزيد من القصائد
        </button>
      </div>
    </motion.div>
  );
};