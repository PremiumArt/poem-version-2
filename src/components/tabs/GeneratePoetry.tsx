import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Loader2, RefreshCw } from 'lucide-react';
import { generatePoem } from '../../services/api';

export const GeneratePoetry = () => {
  const [topic, setTopic] = useState('');
  const [poem, setPoem] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!topic.trim()) {
      setError('الرجاء إدخال موضوع للشعر');
      return;
    }

    setIsLoading(true);
    setError('');
    
    try {
      const generatedPoem = await generatePoem(topic);
      setPoem(generatedPoem);
    } catch (err) {
      setError('حدث خطأ أثناء توليد الشعر. الرجاء المحاولة مرة أخرى.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegeneratePoem = async () => {
    if (!topic.trim()) return;
    setIsLoading(true);
    setError('');
    
    try {
      const generatedPoem = await generatePoem(topic);
      setPoem(generatedPoem);
    } catch (err) {
      setError('حدث خطأ أثناء توليد الشعر. الرجاء المحاولة مرة أخرى.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const popularTopics = [
    'غزل عذري', 'مدح الشجاعة', 'وصف الطبيعة', 
    'الحكمة', 'رثاء الوطن', 'الفخر بالنفس',
    'شعر عمودي في الغزل', 'قصيدة تفعيلة في الحنين'
  ];

  const selectTopic = (selectedTopic: string) => {
    setTopic(selectedTopic);
  };

  return (
    <motion.div
      className="rounded-2xl p-6 shadow-lg"
      style={{ backgroundColor: '#615650' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-amber-200 mb-4">توليد شعر عربي</h2>
      <p className="text-amber-100/80 mb-6">
        اكتب موضوعًا أو نوع الشعر الذي ترغب في توليده، ويمكنك تحديد الشكل الفني (عمودي، تفعيلة، نثر) والغرض الشعري.
      </p>

      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label htmlFor="poetry_topic" className="block text-lg font-medium text-amber-200 mb-2">
            موضوع الشعر
          </label>
          <input
            type="text"
            id="poetry_topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="مثال: شعر عمودي في الغزل، قصيدة تفعيلة في الحنين..."
            className="w-full px-4 py-3 rounded-lg border border-amber-300/30 bg-white/10 backdrop-blur-sm text-white placeholder-amber-200/60 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-right"
          />
        </div>

        <div className="mb-6">
          <p className="text-sm text-amber-200/80 mb-2">موضوعات مقترحة:</p>
          <div className="flex flex-wrap gap-2">
            {popularTopics.map((topic) => (
              <button
                key={topic}
                type="button"
                onClick={() => selectTopic(topic)}
                className="px-3 py-1 bg-amber-200/20 text-amber-100 rounded-full text-sm hover:bg-amber-200/30 transition-colors border border-amber-300/30"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-500/20 text-red-200 rounded-lg border border-red-400/30">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-amber-600 hover:bg-amber-500 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:bg-amber-600/50"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              جاري التوليد...
            </>
          ) : (
            <>
              <Sparkles className="h-5 w-5" />
              ولِّد شعراً
            </>
          )}
        </button>
      </form>

      {poem && (
        <motion.div
          className="border border-amber-300/30 bg-amber-200/10 backdrop-blur-sm rounded-lg p-6 mt-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-semibold text-amber-200">النتيجة:</h3>
            <button
              onClick={handleRegeneratePoem}
              disabled={isLoading}
              className="text-amber-300 hover:text-amber-200 flex items-center gap-1 text-sm"
            >
              <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
              توليد جديد
            </button>
          </div>
          <p className="text-lg text-amber-100 leading-relaxed whitespace-pre-line poetry-text">{poem}</p>
        </motion.div>
      )}

      <div className="mt-8 p-4 bg-amber-200/10 border border-amber-300/30 rounded-lg backdrop-blur-sm">
        <h3 className="text-lg font-semibold text-amber-200 mb-2">إرشادات:</h3>
        <ul className="list-disc list-inside text-amber-100/80 space-y-1">
          <li>يمكنك تحديد نوع الشعر (عمودي، تفعيلة، نثر)</li>
          <li>حدد الغرض الشعري (غزل، مدح، رثاء، وصف)</li>
          <li>يمكنك الجمع بين النوع والغرض مثل "شعر عمودي في الغزل"</li>
          <li>جرب موضوعات مختلفة للحصول على نتائج متنوعة</li>
        </ul>
      </div>
    </motion.div>
  );
};