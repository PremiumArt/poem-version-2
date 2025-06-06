import { useState } from 'react';
import { motion } from 'framer-motion';
import { Microscope, FileText, TrendingUp } from 'lucide-react';

export const PoetryAnalyzer = () => {
  const [inputText, setInputText] = useState('');
  const [analysis, setAnalysis] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzePoetry = () => {
    if (!inputText.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate analysis
    setTimeout(() => {
      setAnalysis({
        meter: 'البحر الطويل',
        rhyme: 'الراء',
        theme: 'الغزل العذري',
        era: 'العصر العباسي (محتمل)',
        sentiment: 'إيجابي - حزين',
        complexity: 'متوسط',
        literaryDevices: ['الاستعارة', 'التشبيه', 'الطباق'],
        score: 85
      });
      setIsAnalyzing(false);
    }, 2000);
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
        <Microscope className="h-6 w-6 text-amber-400" />
        <h2 className="text-2xl font-bold text-amber-200">محلل الشعر</h2>
      </div>

      <div className="mb-6">
        <label className="block text-amber-200 text-lg font-medium mb-3">
          أدخل النص الشعري للتحليل
        </label>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="اكتب أو الصق النص الشعري هنا..."
          rows={6}
          className="w-full p-4 rounded-lg border border-amber-300/30 bg-white/10 backdrop-blur-sm text-white placeholder-amber-200/60 focus:outline-none focus:ring-2 focus:ring-amber-400 text-right resize-none"
        />
      </div>

      <button
        onClick={analyzePoetry}
        disabled={isAnalyzing || !inputText.trim()}
        className="w-full bg-amber-600 hover:bg-amber-500 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:bg-amber-600/50 mb-6"
      >
        {isAnalyzing ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            جاري التحليل...
          </>
        ) : (
          <>
            <FileText className="h-5 w-5" />
            حلل النص
          </>
        )}
      </button>

      {analysis && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-amber-200/10 border border-amber-300/30 rounded-lg p-6 backdrop-blur-sm"
        >
          <h3 className="text-xl font-semibold text-amber-200 mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            نتائج التحليل
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div>
                <span className="text-amber-300 font-medium">البحر الشعري: </span>
                <span className="text-amber-100">{analysis.meter}</span>
              </div>
              <div>
                <span className="text-amber-300 font-medium">القافية: </span>
                <span className="text-amber-100">{analysis.rhyme}</span>
              </div>
              <div>
                <span className="text-amber-300 font-medium">الغرض الشعري: </span>
                <span className="text-amber-100">{analysis.theme}</span>
              </div>
              <div>
                <span className="text-amber-300 font-medium">العصر المحتمل: </span>
                <span className="text-amber-100">{analysis.era}</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <span className="text-amber-300 font-medium">المشاعر: </span>
                <span className="text-amber-100">{analysis.sentiment}</span>
              </div>
              <div>
                <span className="text-amber-300 font-medium">مستوى التعقيد: </span>
                <span className="text-amber-100">{analysis.complexity}</span>
              </div>
              <div>
                <span className="text-amber-300 font-medium">الدرجة الأدبية: </span>
                <span className="text-amber-100">{analysis.score}/100</span>
              </div>
              <div>
                <span className="text-amber-300 font-medium">الأساليب البلاغية: </span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {analysis.literaryDevices.map((device: string, index: number) => (
                    <span key={index} className="px-2 py-1 bg-amber-400/20 text-amber-200 rounded text-sm">
                      {device}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      <div className="mt-6 p-4 bg-amber-200/10 border border-amber-300/30 rounded-lg">
        <h4 className="text-amber-200 font-medium mb-2">ميزات المحلل:</h4>
        <ul className="text-amber-100/80 text-sm space-y-1">
          <li>• تحديد البحر الشعري والقافية</li>
          <li>• تصنيف الغرض الشعري والعصر</li>
          <li>• تحليل المشاعر والأساليب البلاغية</li>
          <li>• تقييم المستوى الأدبي للنص</li>
        </ul>
      </div>
    </motion.div>
  );
};