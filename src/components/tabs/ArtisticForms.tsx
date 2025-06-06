import { useState } from 'react';
import { motion } from 'framer-motion';
import { PoetryCard } from '../PoetryCard';

export const ArtisticForms = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const poetryForms = [
    {
      id: 'traditional',
      title: 'الشعر العمودي',
      description: 'يعتمد على البحر والقافية',
      details: `الشعر العمودي (الكلاسيكي) هو الشكل التقليدي للشعر العربي، ويتميز بالتزامه الصارم بقواعد العروض العربي. يتكون من مجموعة أبيات متساوية، حيث يتكون كل بيت من شطرين (صدر وعجز). يلتزم بوزن شعري محدد (بحر) وقافية موحدة تتكرر في نهاية كل بيت.

      من أهم البحور الشعرية المستخدمة في الشعر العمودي: الطويل، البسيط، الكامل، الوافر، الخفيف وغيرها. من أبرز شعراء هذا النوع: المتنبي، أبو تمام، البحتري، وأحمد شوقي.`,
      example: `وَإذا كانَتِ النُفوسُ كِباراً | تَعِبَت في مُرادِها الأَجسامُ`
    },
    {
      id: 'free_verse',
      title: 'شعر التفعيلة',
      description: 'يلتزم بالتفعيلة دون القافية',
      details: `شعر التفعيلة (الشعر الحر) ظهر في منتصف القرن العشرين كتطور للشعر العربي. يحتفظ بنظام التفعيلة من العروض العربي، لكنه لا يلتزم بعدد ثابت من التفعيلات في كل سطر شعري، كما أنه لا يلتزم بالقافية الموحدة.

      يتميز بمرونة أكبر في التعبير والصياغة، وقدرة على مواكبة الأفكار والمشاعر المعاصرة. من رواده: نازك الملائكة، بدر شاكر السياب، عبد الوهاب البياتي، ومحمود درويش.`,
      example: `أحبيني بلا عقد... 
كأنّا لم نكن إلّا معاً أبداً
وأنّ الكون أغنية
وأنّا كلمتان في الغناء سويّتان...`
    },
    {
      id: 'prose_poem',
      title: 'قصيدة النثر',
      description: 'حر تمامًا من الوزن والقافية',
      details: `قصيدة النثر هي شكل شعري حديث في الأدب العربي ظهر في النصف الثاني من القرن العشرين. تتحرر تماماً من قيود الوزن والقافية، وتعتمد على الصور الشعرية واللغة المكثفة والإيقاع الداخلي بدلاً من الإيقاع العروضي.

      تتميز بشكلها القصير نسبياً، والتكثيف اللغوي العالي، والانزياح عن المألوف في اللغة والصور. من أبرز كتابها: أدونيس، أنسي الحاج، محمد الماغوط، وسعدي يوسف.`,
      example: `عندما تنام المدينة، أخرج من جيبي قمراً صغيراً، وأعلقه على باب السماء.`
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div
      className="glass-effect rounded-2xl p-6 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-amber-200 mb-4">أشكال الشعر العربي</h2>
      <p className="text-amber-100/80 mb-6">
        تنقسم أشكال الشعر العربي إلى ثلاثة أنواع رئيسية، لكل منها خصائصه وجمالياته المميزة.
      </p>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {poetryForms.map((form) => (
          <PoetryCard
            key={form.id}
            title={form.title}
            description={form.description}
            details={form.details}
            example={form.example}
            isExpanded={expandedCard === form.id}
            onToggle={() => setExpandedCard(expandedCard === form.id ? null : form.id)}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};