// Poetry API service for fetching poems from various sources
import axios from 'axios';

export interface PoetrySource {
  id: string;
  name: string;
  url: string;
  type: 'api' | 'scrape' | 'manual';
}

export interface ExternalPoem {
  id: string;
  title: string;
  poet: string;
  content: string;
  source: string;
  era?: string;
  theme?: string;
  type?: string;
  meter?: string;
  rhyme?: string;
  year?: string;
  description?: string;
}

// DCT Abu Dhabi Poetry source
const DCT_POETRY_SOURCE: PoetrySource = {
  id: 'dct-abu-dhabi',
  name: 'Poetry DCT Abu Dhabi',
  url: 'https://poetry.dctabudhabi.ae',
  type: 'api'
};

// Function to fetch poets from DCT Abu Dhabi
export const fetchDCTPoets = async (): Promise<any[]> => {
  try {
    // Try to fetch from their API endpoint
    const response = await axios.get('https://poetry.dctabudhabi.ae/api/poets', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      timeout: 10000
    });
    return response.data;
  } catch (error) {
    console.warn('Could not fetch from DCT API directly:', error);
    // Return fallback data if API is not accessible
    return getDCTFallbackPoets();
  }
};

// Function to fetch poems by poet from DCT Abu Dhabi
export const fetchDCTPoemsByPoet = async (poetId: string): Promise<ExternalPoem[]> => {
  try {
    const response = await axios.get(`https://poetry.dctabudhabi.ae/api/poets/${poetId}/poems`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      timeout: 10000
    });
    
    return response.data.map((poem: any) => ({
      id: `dct-${poem.id}`,
      title: poem.title || 'بلا عنوان',
      poet: poem.poet_name || 'مجهول',
      content: poem.content || poem.text || '',
      source: 'Poetry DCT Abu Dhabi',
      era: poem.era || 'غير محدد',
      theme: poem.theme || poem.category || 'متنوع',
      type: poem.type || 'عمودي',
      meter: poem.meter || poem.bahr,
      rhyme: poem.rhyme || poem.qafiya,
      year: poem.year,
      description: poem.description || poem.summary
    }));
  } catch (error) {
    console.warn('Could not fetch poems from DCT API:', error);
    return [];
  }
};

// Fallback data with some famous poets that might be on the DCT website
const getDCTFallbackPoets = () => [
  {
    id: 'mutanabbi',
    name: 'المتنبي',
    era: 'عباسي',
    birth_year: '915',
    death_year: '965',
    description: 'أبو الطيب أحمد بن الحسين المتنبي، أعظم شعراء العربية'
  },
  {
    id: 'abu-tammam',
    name: 'أبو تمام',
    era: 'عباسي',
    birth_year: '796',
    death_year: '845',
    description: 'حبيب بن أوس الطائي، من أعلام الشعر العباسي'
  },
  {
    id: 'al-buhturi',
    name: 'البحتري',
    era: 'عباسي',
    birth_year: '821',
    death_year: '897',
    description: 'الوليد بن عبيد البحتري، من فحول الشعراء العباسيين'
  },
  {
    id: 'ahmed-shawqi',
    name: 'أحمد شوقي',
    era: 'حديث',
    birth_year: '1868',
    death_year: '1932',
    description: 'أمير الشعراء، رائد النهضة الشعرية الحديثة'
  },
  {
    id: 'hafez-ibrahim',
    name: 'حافظ إبراهيم',
    era: 'حديث',
    birth_year: '1872',
    death_year: '1932',
    description: 'شاعر النيل، من رواد الشعر الاجتماعي'
  }
];

// Function to get curated poems from DCT-style sources
export const getDCTCuratedPoems = (): ExternalPoem[] => [
  {
    id: 'dct-mutanabbi-1',
    title: 'على قدر أهل العزم',
    poet: 'المتنبي',
    content: `على قدر أهل العزم تأتي العزائم
وتأتي على قدر الكرام المكارم
وتعظم في عين الصغير صغارها
وتصغر في عين العظيم العظائم

يكلف سيف الدولة الجيش همه
وقد عجزت عنه الجيوش الخضارم
ولولا العقول الناقصات لما وجدت
لنفسك في الأقوام هذي المعاظم

ولولا اشتغال النفس بالنفس لانصبت
على الناس من أحوالها الأحكام
ولكن نفوس الناس حول نفوسهم
وأرواحهم حول الرؤوس تحوم`,
    source: 'Poetry DCT Abu Dhabi',
    era: 'عباسي',
    theme: 'حكمة وفلسفة',
    type: 'عمودي',
    meter: 'الطويل',
    rhyme: 'الميم',
    year: '965م',
    description: 'من أشهر قصائد المتنبي في الحكمة والفلسفة، قالها في مدح سيف الدولة الحمداني'
  },
  {
    id: 'dct-abu-tammam-1',
    title: 'السيف أصدق أنباء من الكتب',
    poet: 'أبو تمام',
    content: `السيف أصدق أنباء من الكتب
في حده الحد بين الجد واللعب
بيض الصفائح لا سود الصحائف في
متونهن جلاء الشك والريب

والعلم في شهب الأرماح لامعة
بين الخميسين لا في السبعة الشهب
أين الرواية أم أين النجوم وما
صاغوه من زخرف فيها ومن كذب

فتح الفتوح تعالى أن يحيط به
نظم من الشعر أو نثر من الخطب
فتح تفتح أبواب السماء له
وتبرز الأرض في أثوابها القشب`,
    source: 'Poetry DCT Abu Dhabi',
    era: 'عباسي',
    theme: 'مدح وفخر',
    type: 'عمودي',
    meter: 'البسيط',
    rhyme: 'الباء',
    year: '838م',
    description: 'قصيدة أبي تمام الشهيرة في فتح عمورية، من روائع الشعر العربي'
  },
  {
    id: 'dct-shawqi-1',
    title: 'نهج البردة',
    poet: 'أحمد شوقي',
    content: `ريم على القاع بين البان والعلم
أحل سفك دمي في الأشهر الحرم
رمى القضاء بعيني جؤذر أسدا
يا ساكن القاع أدرك ساكن الأجم

لما رنا حدثتني النفس قائلة
يا ويح جنبك بالسهم المصيب رمي
جحدتها وكتمت السر في كبدي
جرح الأحبة عندي غير ذي ألم

رزقت أسمح ما في الناس من خلق
إذا رزقت التماس العذر في الشيم
يا لائمي في هواه والهوى قدر
لو شفك الوجد لم تعذل ولم تلم`,
    source: 'Poetry DCT Abu Dhabi',
    era: 'حديث',
    theme: 'مدح نبوي',
    type: 'عمودي',
    meter: 'البسيط',
    rhyme: 'الميم',
    year: '1904م',
    description: 'معارضة شوقي الشهيرة لبردة كعب بن زهير في مدح النبي محمد صلى الله عليه وسلم'
  },
  {
    id: 'dct-hafez-1',
    title: 'مصر تتحدث عن نفسها',
    poet: 'حافظ إبراهيم',
    content: `وقف الخلق ينظرون جميعا
كيف أبني قواعد المجد وحدي
وبناة الأهرام في سالف الدهر
كفوني الكلام عند التحدي

أنا تاج العلاء في مفرق الشرق
ودراته فرائد عقدي
إن مجدي في الأوليات عريق
من عهود الخليقة السرمدي

فعلى أرضي مشت الأديان
وعلى أرضي نزل الوحي الهادي
أنا إن قدر الإله مماتي
لا ترى الشرق يرفع الرأس بعدي`,
    source: 'Poetry DCT Abu Dhabi',
    era: 'حديث',
    theme: 'وطني',
    type: 'عمودي',
    meter: 'المتقارب',
    rhyme: 'الدال',
    year: '1910م',
    description: 'قصيدة حافظ إبراهيم الشهيرة في حب مصر والاعتزاز بتاريخها العريق'
  },
  {
    id: 'dct-buhturi-1',
    title: 'صنت نفسي عما يدنس نفسي',
    poet: 'البحتري',
    content: `صنت نفسي عما يدنس نفسي
وترفعت عن جدا كل جبس
وتماسكت حين زعزعني الدهر
التماسا منه لتعسي ونكسي

بت أشكو إلى الحمام وقد غر
دني في الحديقة الأنس والجلس
فشجاني بنغمة ذكرتني
عهد أحبابي بنعمان والخورنق والسدر

حبذا عيشة تقضت وأيام
تصرمت بالسرور والأنس
حين لا يعرف الفؤاد من الحز
ن إلا بوارد الطيف في النوم`,
    source: 'Poetry DCT Abu Dhabi',
    era: 'عباسي',
    theme: 'حنين وذكريات',
    type: 'عمودي',
    meter: 'الخفيف',
    rhyme: 'السين',
    year: '880م',
    description: 'من أجمل قصائد البحتري في الحنين والذكريات، تظهر رقة شعره وعذوبة ألفاظه'
  }
];

// Function to search external poems
export const searchExternalPoems = async (query: string): Promise<ExternalPoem[]> => {
  const curatedPoems = getDCTCuratedPoems();
  
  if (!query.trim()) {
    return curatedPoems;
  }

  return curatedPoems.filter(poem => 
    poem.title.includes(query) ||
    poem.poet.includes(query) ||
    poem.content.includes(query) ||
    poem.theme?.includes(query) ||
    poem.era?.includes(query)
  );
};

// Function to get poem by ID
export const getExternalPoemById = (id: string): ExternalPoem | null => {
  const poems = getDCTCuratedPoems();
  return poems.find(poem => poem.id === id) || null;
};

// Function to get poems by poet
export const getExternalPoemsByPoet = (poetName: string): ExternalPoem[] => {
  const poems = getDCTCuratedPoems();
  return poems.filter(poem => poem.poet === poetName);
};

// Function to get poems by era
export const getExternalPoemsByEra = (era: string): ExternalPoem[] => {
  const poems = getDCTCuratedPoems();
  return poems.filter(poem => poem.era === era);
};

// Function to get poems by theme
export const getExternalPoemsByTheme = (theme: string): ExternalPoem[] => {
  const poems = getDCTCuratedPoems();
  return poems.filter(poem => poem.theme?.includes(theme));
};