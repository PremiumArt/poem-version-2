import { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Heart, Share2, BookOpen, Filter, Search, User, Calendar, Tag, Loader2 } from 'lucide-react';

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
  const [allPoems] = useState<Poem[]>([
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
    },
    // Additional poems that will be loaded when "Load More" is clicked
    {
      id: '9',
      title: 'معلقة امرئ القيس',
      poet: 'امرؤ القيس',
      era: 'جاهلي',
      type: 'عمودي',
      content: 'قفا نبك من ذكرى حبيب ومنزل\nبسقط اللوى بين الدخول فحومل\nفتوضح فالمقراة لم يعف رسمها\nلما نسجتها من جنوب وشمأل\n\nترى بعر الآرام في عرصاتها\nوقيعانها كأنه حب فلفل\nكأني غداة البين يوم تحملوا\nلدى سمرات الحي ناقف حنظل',
      theme: 'غزل ووصف',
      isFavorite: false,
      meter: 'الطويل',
      rhyme: 'اللام',
      year: '540م',
      description: 'أشهر المعلقات وأولها، تُعتبر من أجمل ما قيل في الشعر الجاهلي'
    },
    {
      id: '10',
      title: 'نهج البردة',
      poet: 'أحمد شوقي',
      era: 'حديث',
      type: 'عمودي',
      content: 'ريم على القاع بين البان والعلم\nأحل سفك دمي في الأشهر الحرم\nرمى القضاء بعيني جؤذر أسداً\nيا ساكن القاع أدرك ساكن الأجم\n\nلما رنا حدثتني النفس قائلة\nيا ويح جنبك بالسهم المصيب رمي\nجحدتها وكتمت السر في كبدي\nجرح الأحبة عندي غير ذي ألم',
      theme: 'مدح',
      isFavorite: false,
      meter: 'البسيط',
      rhyme: 'الميم',
      year: '1904م',
      description: 'معارضة شوقي لبردة كعب بن زهير في مدح النبي'
    },
    {
      id: '11',
      title: 'أطلال',
      poet: 'إبراهيم ناجي',
      era: 'حديث',
      type: 'عمودي',
      content: 'يا فؤادي رحم الله الهوى\nكان صرحاً من خيال فهوى\nاسقني واشرب على أطلاله\nوارو عني طالما الدمع روى\n\nكيف ذاك الحب أمسى خبراً\nوحديثاً من أحاديث الجوى\nوبساطاً من ندامى حلم\nمزقته بالفراق الأهواء',
      theme: 'غزل حزين',
      isFavorite: true,
      meter: 'المتقارب',
      rhyme: 'الواو والألف',
      year: '1934م',
      description: 'من أشهر قصائد الحب والفراق في الشعر العربي الحديث'
    },
    {
      id: '12',
      title: 'القدس العربي',
      poet: 'تميم البرغوثي',
      era: 'معاصر',
      type: 'عمودي',
      content: 'في القدس، في القدس، في القدس\nأعرف أني أعرف أني أعرف\nأن المدينة تنتظر\nأن المدينة تصطبر\nأن المدينة تحتضر\nأن المدينة تنتصر\n\nفي القدس أعرف أن الحجارة تحلم\nأن الحجارة تتكلم\nأن الحجارة تتألم\nأن الحجارة تبتسم',
      theme: 'وطني',
      isFavorite: false,
      meter: 'الرجز',
      rhyme: 'متنوعة',
      year: '2007م',
      description: 'قصيدة معاصرة في حب القدس والوطن'
    },
    {
      id: '13',
      title: 'رسالة من المنفى',
      poet: 'فدوى طوقان',
      era: 'معاصر',
      type: 'تفعيلة',
      content: 'آه يا وطني\nيا وطن الصبار والزيتون\nيا أرض الجدود\nيا حبيبي الأول\nيا حبيبي الأخير\nيا وطني الحزين\n\nكم تشتاق عيناي\nلرؤية وجهك\nكم تشتاق يداي\nلملامسة ترابك\nكم يشتاق قلبي\nلسماع صوتك',
      theme: 'حنين وطني',
      isFavorite: true,
      meter: 'تفعيلة حرة',
      rhyme: 'متنوعة',
      year: '1967م',
      description: 'من أجمل قصائد الحنين للوطن في الشعر النسائي العربي'
    },
    {
      id: '14',
      title: 'الأرض اليباب',
      poet: 'عبد الوهاب البياتي',
      era: 'معاصر',
      type: 'تفعيلة',
      content: 'في المدينة الميتة\nحيث تنام الأشباح\nوتصحو الذكريات\nعلى أنقاض الأحلام\n\nفي الشوارع الخاوية\nتمشي وحوش الليل\nوتعوي ذئاب الصمت\nفي قلب الظلام\n\nيا أرضي اليباب\nيا صحراء روحي\nمتى تمطرين حباً\nمتى تزهرين سلاماً',
      theme: 'وجودي',
      isFavorite: false,
      meter: 'تفعيلة حرة',
      rhyme: 'متنوعة',
      year: '1954م',
      description: 'قصيدة تجسد القلق الوجودي في الشعر العربي المعاصر'
    },
    {
      id: '15',
      title: 'سيرة ذاتية',
      poet: 'أدونيس',
      era: 'معاصر',
      type: 'نثر',
      content: 'أنا الذي رأى الفجر يولد من رحم الليل، والنجوم تذوب في عسل الصباح. أنا الذي سمع البحر يحكي حكايات الأمواج، والريح تهمس بأسرار الغيوم.\n\nولدت في قرية صغيرة، حيث الأشجار تعرف أسماء الطيور، والأزهار تتكلم لغة العطر. كبرت وفي عيني حلم كبير، وفي قلبي شوق أكبر.\n\nسافرت عبر الكلمات، وأقمت في مدن الشعر، وبنيت بيوتاً من الحروف، وزرعت حدائق من المعاني.',
      theme: 'ذاتي',
      isFavorite: false,
      meter: 'نثر',
      rhyme: 'بلا قافية',
      year: '1988م',
      description: 'نموذج من قصيدة النثر العربية المعاصرة'
    }
  ]);

  const [displayedPoems, setDisplayedPoems] = useState<Poem[]>(allPoems.slice(0, 8));
  const [favorites, setFavorites] = useState<string[]>(['2', '4', '6', '8', '11', '13']);
  const [selectedEra, setSelectedEra] = useState<string>('');
  const [selectedTheme, setSelectedTheme] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toggleFavorite = (poemId: string) => {
    setFavorites(prev => 
      prev.includes(poemId) 
        ? prev.filter(id => id !== poemId)
        : [...prev, poemId]
    );
  };

  const loadMorePoems = () => {
    setIsLoading(true);
    
    // Simulate loading delay
    setTimeout(() => {
      const currentCount = displayedPoems.length;
      const nextBatch = allPoems.slice(currentCount, currentCount + 4);
      setDisplayedPoems(prev => [...prev, ...nextBatch]);
      setIsLoading(false);
    }, 1000);
  };

  const filteredPoems = displayedPoems.filter(poem => {
    const matchesSearch = searchQuery === '' || 
      poem.title.includes(searchQuery) || 
      poem.poet.includes(searchQuery) || 
      poem.content.includes(searchQuery);
    
    const matchesEra = selectedEra === '' || poem.era === selectedEra;
    const matchesTheme = selectedTheme === '' || poem.theme === selectedTheme;
    const matchesType = selectedType === '' || poem.type === selectedType;

    return matchesSearch && matchesEra && matchesTheme && matchesType;
  });

  const eras = [...new Set(allPoems.map(poem => poem.era))];
  const themes = [...new Set(allPoems.map(poem => poem.theme))];
  const types = [...new Set(allPoems.map(poem => poem.type))];

  const hasMorePoems = displayedPoems.length < allPoems.length;

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
    </motion.div>
  );
};