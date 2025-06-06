import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  CheckCircle, 
  Circle, 
  Star, 
  Award, 
  Play, 
  BookOpen, 
  Clock,
  ArrowRight,
  ArrowLeft,
  Trophy,
  Target,
  Brain,
  Lightbulb
} from 'lucide-react';

interface Lesson {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  difficulty: 'مبتدئ' | 'متوسط' | 'متقدم';
  duration: string;
  content: {
    introduction: string;
    sections: {
      title: string;
      content: string;
      examples?: string[];
    }[];
    quiz?: {
      question: string;
      options: string[];
      correct: number;
    }[];
  };
  points: number;
}

interface UserProgress {
  completedLessons: number;
  totalLessons: number;
  currentLevel: string;
  points: number;
  streak: number;
  badges: string[];
}

export const LearningPath = () => {
  const [lessons, setLessons] = useState<Lesson[]>([
    {
      id: '1',
      title: 'مقدمة في الشعر العربي',
      description: 'تعرف على تاريخ الشعر العربي وأهميته في الثقافة العربية',
      completed: true,
      difficulty: 'مبتدئ',
      duration: '15 دقيقة',
      points: 50,
      content: {
        introduction: 'الشعر العربي هو أحد أهم فنون الأدب العربي، وله تاريخ عريق يمتد لأكثر من ألف وخمسمائة عام.',
        sections: [
          {
            title: 'تعريف الشعر العربي',
            content: 'الشعر العربي هو كلام موزون مقفى يعبر عن المشاعر والأفكار بطريقة جمالية. يتميز بالإيقاع والموسيقى الداخلية.',
            examples: ['البيت الشعري يتكون من شطرين: الصدر والعجز']
          },
          {
            title: 'أهمية الشعر في الثقافة العربية',
            content: 'كان الشعر ديوان العرب، يحفظ تاريخهم وأنسابهم ومفاخرهم. وما زال يحتل مكانة مهمة في الأدب العربي.',
            examples: ['المعلقات السبع', 'شعر المتنبي', 'شعر أحمد شوقي']
          }
        ],
        quiz: [
          {
            question: 'ما هو تعريف الشعر العربي؟',
            options: ['كلام موزون مقفى', 'نثر جميل', 'قصة طويلة', 'خطبة بليغة'],
            correct: 0
          }
        ]
      }
    },
    {
      id: '2',
      title: 'البحور الشعرية الأساسية',
      description: 'تعلم البحور الشعرية الستة عشر وكيفية التمييز بينها',
      completed: true,
      difficulty: 'مبتدئ',
      duration: '30 دقيقة',
      points: 75,
      content: {
        introduction: 'البحور الشعرية هي الأوزان التي ينظم عليها الشعر العربي، وضعها الخليل بن أحمد الفراهيدي.',
        sections: [
          {
            title: 'البحر الطويل',
            content: 'فعولن مفاعيلن فعولن مفاعيلن - من أكثر البحور استخداماً في الشعر العربي',
            examples: ['أَقِلّي اللَومَ عاذِلَتي وَقولي - لِقَد أَنصَفتِ في اللَومِ الخَليلا']
          },
          {
            title: 'البحر البسيط',
            content: 'مستفعلن فاعلن مستفعلن فاعلن - بحر سهل الحفظ والإنشاد',
            examples: ['إِنَّ الثَمانينَ وَبُلِّغتُها - قَد أَحوَجَت سَمعي إِلى تَرجُمان']
          }
        ],
        quiz: [
          {
            question: 'من وضع البحور الشعرية؟',
            options: ['الخليل بن أحمد الفراهيدي', 'سيبويه', 'الجاحظ', 'ابن خلدون'],
            correct: 0
          }
        ]
      }
    },
    {
      id: '3',
      title: 'القافية وأنواعها',
      description: 'فهم القافية وقواعدها في الشعر العربي',
      completed: false,
      difficulty: 'متوسط',
      duration: '25 دقيقة',
      points: 100,
      content: {
        introduction: 'القافية هي آخر ساكن في البيت وما بعده، وهي من أهم عناصر الموسيقى الشعرية.',
        sections: [
          {
            title: 'تعريف القافية',
            content: 'القافية هي من آخر ساكن في البيت إلى أول ساكن يليه مع المتحرك الذي قبل الساكن الأول.',
            examples: ['في قول المتنبي: "على قدر أهل العزم تأتي العزائم" - القافية هي "ائم"']
          },
          {
            title: 'أنواع القافية',
            content: 'تنقسم القافية إلى مطلقة ومقيدة، وإلى مذكرة ومؤنثة حسب نوع الروي.',
            examples: ['القافية المطلقة: تنتهي بحرف متحرك', 'القافية المقيدة: تنتهي بحرف ساكن']
          }
        ],
        quiz: [
          {
            question: 'ما هي القافية في البيت الشعري؟',
            options: ['أول كلمة في البيت', 'آخر ساكن في البيت وما بعده', 'وسط البيت', 'أول حرف في البيت'],
            correct: 1
          }
        ]
      }
    },
    {
      id: '4',
      title: 'أغراض الشعر العربي',
      description: 'استكشاف الأغراض المختلفة للشعر العربي عبر العصور',
      completed: false,
      difficulty: 'متوسط',
      duration: '40 دقيقة',
      points: 125,
      content: {
        introduction: 'تنوعت أغراض الشعر العربي لتشمل جوانب الحياة المختلفة من العواطف إلى السياسة.',
        sections: [
          {
            title: 'الغزل',
            content: 'شعر المحبة والعشق، وينقسم إلى غزل عذري وغزل صريح.',
            examples: ['غزل جميل بثينة', 'غزل عمر بن أبي ربيعة']
          },
          {
            title: 'المدح',
            content: 'تمجيد الممدوح وذكر صفاته الحميدة كالكرم والشجاعة.',
            examples: ['مدح المتنبي لسيف الدولة', 'مدح حسان بن ثابت للنبي']
          },
          {
            title: 'الهجاء',
            content: 'ذم الخصوم وانتقادهم، وكان سلاحاً قوياً في المعارك الأدبية.',
            examples: ['نقائض جرير والفرزدق', 'هجاء الحطيئة']
          }
        ],
        quiz: [
          {
            question: 'أي من هذه الأغراض يتضمن تمجيد الممدوح؟',
            options: ['الهجاء', 'المدح', 'الرثاء', 'الوصف'],
            correct: 1
          }
        ]
      }
    },
    {
      id: '5',
      title: 'الصور البلاغية',
      description: 'تحليل الاستعارة والتشبيه والكناية في الشعر العربي',
      completed: false,
      difficulty: 'متقدم',
      duration: '45 دقيقة',
      points: 150,
      content: {
        introduction: 'الصور البلاغية هي من أهم عناصر الجمال في الشعر العربي، وتشمل التشبيه والاستعارة والكناية.',
        sections: [
          {
            title: 'التشبيه',
            content: 'هو عقد مقارنة بين شيئين يشتركان في صفة واحدة أو أكثر.',
            examples: ['كأن الثريا علقت في جبينه - تشبيه النجوم بالزينة']
          },
          {
            title: 'الاستعارة',
            content: 'هي تشبيه حذف أحد طرفيه، وهي أبلغ من التشبيه.',
            examples: ['رأيت أسداً يخطب على المنبر - استعارة للرجل الشجاع']
          },
          {
            title: 'الكناية',
            content: 'هي لفظ أطلق وأريد به لازم معناه مع جواز إرادة المعنى الأصلي.',
            examples: ['فلان طويل النجاد - كناية عن طول القامة']
          }
        ],
        quiz: [
          {
            question: 'ما هو التشبيه؟',
            options: ['حذف أحد طرفي التشبيه', 'عقد مقارنة بين شيئين', 'إرادة لازم المعنى', 'تكرار الكلمات'],
            correct: 1
          }
        ]
      }
    }
  ]);

  const [userProgress, setUserProgress] = useState<UserProgress>({
    completedLessons: 2,
    totalLessons: 5,
    currentLevel: 'متوسط',
    points: 125,
    streak: 3,
    badges: ['مبتدئ الشعر', 'عاشق البحور']
  });

  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const startLesson = (lesson: Lesson) => {
    setCurrentLesson(lesson);
    setCurrentSection(0);
    setShowQuiz(false);
    setQuizAnswers([]);
    setQuizCompleted(false);
  };

  const nextSection = () => {
    if (currentLesson && currentSection < currentLesson.content.sections.length - 1) {
      setCurrentSection(currentSection + 1);
    } else if (currentLesson?.content.quiz) {
      setShowQuiz(true);
    } else {
      completeLesson();
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const completeLesson = () => {
    if (currentLesson && !currentLesson.completed) {
      setLessons(prev => prev.map(lesson => 
        lesson.id === currentLesson.id 
          ? { ...lesson, completed: true }
          : lesson
      ));
      
      setUserProgress(prev => ({
        ...prev,
        completedLessons: prev.completedLessons + 1,
        points: prev.points + currentLesson.points,
        streak: prev.streak + 1
      }));
    }
    setCurrentLesson(null);
  };

  const submitQuiz = () => {
    setQuizCompleted(true);
    // Check answers and provide feedback
    setTimeout(() => {
      completeLesson();
    }, 2000);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'مبتدئ': return 'text-green-400';
      case 'متوسط': return 'text-yellow-400';
      case 'متقدم': return 'text-red-400';
      default: return 'text-amber-400';
    }
  };

  const getProgressPercentage = () => {
    return (userProgress.completedLessons / userProgress.totalLessons) * 100;
  };

  if (currentLesson) {
    return (
      <motion.div
        className="rounded-2xl p-6 shadow-lg"
        style={{ backgroundColor: '#615650' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-amber-400" />
            <h2 className="text-2xl font-bold text-amber-200">{currentLesson.title}</h2>
          </div>
          <button
            onClick={() => setCurrentLesson(null)}
            className="text-amber-300 hover:text-amber-200 text-sm"
          >
            العودة للقائمة
          </button>
        </div>

        <AnimatePresence mode="wait">
          {!showQuiz ? (
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              {currentSection === 0 && (
                <div className="bg-amber-200/10 border border-amber-300/30 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-amber-200 mb-2">مقدمة</h3>
                  <p className="text-amber-100/90 leading-relaxed">
                    {currentLesson.content.introduction}
                  </p>
                </div>
              )}

              {currentSection > 0 && (
                <div className="bg-amber-200/10 border border-amber-300/30 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-amber-200 mb-3">
                    {currentLesson.content.sections[currentSection - 1].title}
                  </h3>
                  <p className="text-amber-100/90 leading-relaxed mb-4">
                    {currentLesson.content.sections[currentSection - 1].content}
                  </p>
                  
                  {currentLesson.content.sections[currentSection - 1].examples && (
                    <div className="bg-amber-100/5 border border-amber-300/20 rounded-lg p-3">
                      <h4 className="text-amber-200 font-medium mb-2">أمثلة:</h4>
                      <ul className="space-y-1">
                        {currentLesson.content.sections[currentSection - 1].examples?.map((example, index) => (
                          <li key={index} className="text-amber-100/80 text-sm">
                            • {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              <div className="flex justify-between items-center">
                <button
                  onClick={prevSection}
                  disabled={currentSection === 0}
                  className="flex items-center gap-2 px-4 py-2 bg-amber-600/50 hover:bg-amber-600 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowRight className="h-4 w-4" />
                  السابق
                </button>

                <div className="text-amber-200 text-sm">
                  {currentSection + 1} / {currentLesson.content.sections.length + 1}
                </div>

                <button
                  onClick={nextSection}
                  className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-lg transition-colors"
                >
                  التالي
                  <ArrowLeft className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="bg-amber-200/10 border border-amber-300/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-amber-200 mb-4 flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  اختبار سريع
                </h3>
                
                {currentLesson.content.quiz?.map((question, qIndex) => (
                  <div key={qIndex} className="mb-6">
                    <p className="text-amber-100 mb-3 font-medium">{question.question}</p>
                    <div className="space-y-2">
                      {question.options.map((option, oIndex) => (
                        <label key={oIndex} className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name={`question-${qIndex}`}
                            value={oIndex}
                            onChange={() => {
                              const newAnswers = [...quizAnswers];
                              newAnswers[qIndex] = oIndex;
                              setQuizAnswers(newAnswers);
                            }}
                            className="text-amber-400"
                          />
                          <span className="text-amber-100/80">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}

                <button
                  onClick={submitQuiz}
                  disabled={quizAnswers.length < (currentLesson.content.quiz?.length || 0)}
                  className="w-full bg-amber-600 hover:bg-amber-500 text-white font-bold py-3 px-4 rounded-lg transition-colors disabled:opacity-50"
                >
                  {quizCompleted ? 'تم إكمال الاختبار!' : 'إرسال الإجابات'}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }

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
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Trophy className="h-4 w-4 text-yellow-400" />
              <span className="text-amber-100 text-sm">{userProgress.streak} أيام متتالية</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="text-amber-100">{userProgress.points} نقطة</span>
            </div>
          </div>
        </div>
        
        <div className="mb-3">
          <div className="flex justify-between text-sm text-amber-100/80 mb-1">
            <span>المستوى: {userProgress.currentLevel}</span>
            <span>{userProgress.completedLessons}/{userProgress.totalLessons} دروس</span>
          </div>
          <div className="w-full bg-amber-900/30 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-amber-400 to-yellow-400 h-3 rounded-full transition-all duration-500"
              style={{ width: `${getProgressPercentage()}%` }}
            ></div>
          </div>
        </div>

        {userProgress.badges.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {userProgress.badges.map((badge, index) => (
              <span key={index} className="px-2 py-1 bg-yellow-400/20 text-yellow-200 rounded-full text-xs flex items-center gap-1">
                <Target className="h-3 w-3" />
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Lessons List */}
      <div className="space-y-4">
        {lessons.map((lesson, index) => (
          <motion.div
            key={lesson.id}
            className={`border rounded-lg p-4 transition-all duration-200 ${
              lesson.completed 
                ? 'bg-green-500/10 border-green-400/30' 
                : 'bg-amber-200/5 border-amber-300/30 hover:bg-amber-200/10'
            }`}
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
                    <span className="text-amber-100/60 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {lesson.duration}
                    </span>
                    <span className="text-amber-100/60 flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      {lesson.points} نقطة
                    </span>
                  </div>
                </div>
                
                <p className={`text-sm mb-3 ${
                  lesson.completed ? 'text-green-100/80' : 'text-amber-100/80'
                }`}>
                  {lesson.description}
                </p>

                <button
                  onClick={() => startLesson(lesson)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
                    lesson.completed
                      ? 'bg-green-600/20 text-green-200 hover:bg-green-600/30'
                      : 'bg-amber-600 text-white hover:bg-amber-500'
                  }`}
                >
                  {lesson.completed ? (
                    <>
                      <BookOpen className="h-4 w-4" />
                      مراجعة الدرس
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4" />
                      ابدأ الدرس
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-amber-200/10 border border-amber-300/30 rounded-lg">
        <h4 className="text-amber-200 font-medium mb-2 flex items-center gap-2">
          <Lightbulb className="h-4 w-4" />
          نصائح للتعلم:
        </h4>
        <ul className="text-amber-100/80 text-sm space-y-1">
          <li>• اكمل الدروس بالترتيب للحصول على أفضل فهم</li>
          <li>• راجع الأمثلة بعناية وحاول فهم القواعد</li>
          <li>• اختبر نفسك في نهاية كل درس</li>
          <li>• مارس ما تعلمته بكتابة أبيات شعرية بسيطة</li>
        </ul>
      </div>
    </motion.div>
  );
};