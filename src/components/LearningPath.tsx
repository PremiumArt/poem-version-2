import { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, CheckCircle, Circle, Star, Award } from 'lucide-react';

interface Lesson {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  difficulty: 'مبتدئ' | 'متوسط' | 'متقدم';
  duration: string;
}

export const LearningPath = () => {
  const [lessons, setLessons] = useState<Lesson[]>([
    {
      id: '1',
      title: 'مقدمة في الشعر العربي',
      description: 'تعرف على تاريخ الشعر العربي وأهميته',
      completed: true,
      difficulty: 'مبتدئ',
      duration: '15 دقيقة'
    },
    {
      id: '2',
      title: 'البحور الشعرية الأساسية',
      description: 'تعلم البحور الشعرية الستة عشر',
      completed: true,
      difficulty: 'مبتدئ',
      duration: '30 دقيقة'
    },
    {
      id: '3',
      title: 'القافية وأنواعها',
      description: 'فهم القافية وقواعدها في الشعر العربي',
      completed: false,
      difficulty: 'متوسط',
      duration: '25 دقيقة'
    },
    {
      id: '4',
      title: 'أغراض الشعر العربي',
      description: 'استكشاف الأغراض المختلفة للشعر العربي',
      completed: false,
      difficulty: 'متوسط',
      duration: '40 دقيقة'
    },
    {
      id: '5',
      title: 'الصور البلاغية',
      description: 'تحليل الاستعارة والتشبيه والكناية',
      completed: false,
      difficulty: 'متقدم',
      duration: '45 دقيقة'
    }
  ]);

  const [userProgress, setUserProgress] = useState({
    completedLessons: 2,
    totalLessons: 5,
    currentLevel: 'متوسط',
    points: 150
  });

  const toggleLesson = (lessonId: string) => {
    setLessons(prev => prev.map(lesson => 
      lesson.id === lessonId 
        ? { ...lesson, completed: !lesson.completed }
        : lesson
    ));
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'مبتدئ': return 'text-green-400';
      case 'متوسط': return 'text-yellow-400';
      case 'متقدم': return 'text-red-400';
      default: return 'text-amber-400';
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
        <GraduationCap className="h-6 w-6 text-amber-400" />
        <h2 className="text-2xl font-bold text-amber-200">مسار التعلم</h2>
      </div>

      {/* Progress Overview */}
      <div className="bg-amber-200/10 border border-amber-300/30 rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-amber-400" />
            <span className="text-amber-200 font-medium">التقدم الحالي</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-400" />
            <span className="text-amber-100">{userProgress.points} نقطة</span>
          </div>
        </div>
        
        <div className="mb-2">
          <div className="flex justify-between text-sm text-amber-100/80 mb-1">
            <span>المستوى: {userProgress.currentLevel}</span>
            <span>{userProgress.completedLessons}/{userProgress.totalLessons} دروس</span>
          </div>
          <div className="w-full bg-amber-900/30 rounded-full h-2">
            <div 
              className="bg-amber-400 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(userProgress.completedLessons / userProgress.totalLessons) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Lessons List */}
      <div className="space-y-4">
        {lessons.map((lesson, index) => (
          <motion.div
            key={lesson.id}
            className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
              lesson.completed 
                ? 'bg-green-500/10 border-green-400/30' 
                : 'bg-amber-200/5 border-amber-300/30 hover:bg-amber-200/10'
            }`}
            onClick={() => toggleLesson(lesson.id)}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                {lesson.completed ? (
                  <CheckCircle className="h-6 w-6 text-green-400" />
                ) : (
                  <Circle className="h-6 w-6 text-amber-300" />
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`text-lg font-semibold ${
                    lesson.completed ? 'text-green-200' : 'text-amber-200'
                  }`}>
                    {index + 1}. {lesson.title}
                  </h3>
                  <div className="flex gap-2 text-sm">
                    <span className={getDifficultyColor(lesson.difficulty)}>
                      {lesson.difficulty}
                    </span>
                    <span className="text-amber-100/60">
                      {lesson.duration}
                    </span>
                  </div>
                </div>
                
                <p className={`text-sm ${
                  lesson.completed ? 'text-green-100/80' : 'text-amber-100/80'
                }`}>
                  {lesson.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-lg transition-colors font-medium">
          ابدأ الدرس التالي
        </button>
      </div>
    </motion.div>
  );
};