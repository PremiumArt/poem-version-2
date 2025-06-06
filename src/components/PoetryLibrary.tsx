import { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Heart, Share2, BookOpen } from 'lucide-react';

interface Poem {
  id: string;
  title: string;
  poet: string;
  era: string;
  type: string;
  content: string;
  theme: string;
  isFavorite: boolean;
}

export const PoetryLibrary = () => {
  const [poems] = useState<Poem[]>([
    {
      id: '1',
      title: 'على قدر أهل العزم',
      poet: 'المتنبي',
      era: 'عباسي',
      type: 'عمودي',
      content: 'على قدر أهل العزم تأتي العزائم\nوتأتي على قدر الكرام المكارم\nوتعظم في عين الصغير صغارها\nوتصغر في عين العظيم العظائم',
      theme: 'حكمة',
      isFavorite: false
    },
    {
      id: '2',
      title: 'أراك عصي الدمع',
      poet: 'أبو فراس الحمداني',
      era: 'عباسي',
      type: 'عمودي',
      content: 'أراك عصي الدمع شيمتك الصبر\nأما للهوى نهي عليك ولا أمر\nبلى أنا مشتاق وعندي لوعة\nولكن مثلي لا يذاع له سر',
      theme: 'غزل',
      isFavorite: true
    },
    {
      id: '3',
      title: 'المساء',
      poet: 'خليل مطران',
      era: 'حديث',
      type: 'عمودي',
      content: 'داء ألم فخلت في جنبيه\nنار تلظى بين الضلوع\nيا للغروب وما به من عبرة\nللمستهام وعبرة للموجع',
      theme: 'وصف',
      isFavorite: false
    }
  ]);

  const [favorites, setFavorites] = useState<string[]>(['2']);

  const toggleFavorite = (poemId: string) => {
    setFavorites(prev => 
      prev.includes(poemId) 
        ? prev.filter(id => id !== poemId)
        : [...prev, poemId]
    );
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
      </div>

      <div className="grid gap-6">
        {poems.map((poem) => (
          <motion.div
            key={poem.id}
            className="bg-amber-200/10 border border-amber-300/30 rounded-lg p-5 backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-bold text-amber-200 mb-1">{poem.title}</h3>
                <div className="flex gap-4 text-sm text-amber-100/80">
                  <span>الشاعر: {poem.poet}</span>
                  <span>العصر: {poem.era}</span>
                  <span>النوع: {poem.type}</span>
                  <span>الغرض: {poem.theme}</span>
                </div>
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
                <button className="p-2 rounded-lg text-amber-300 hover:text-amber-200 hover:bg-amber-200/20 transition-colors">
                  <BookOpen className="h-5 w-5" />
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

      <div className="mt-6 text-center">
        <button className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-lg transition-colors font-medium">
          عرض المزيد من القصائد
        </button>
      </div>
    </motion.div>
  );
};