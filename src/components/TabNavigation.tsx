import { motion } from 'framer-motion';

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const TabNavigation = ({ activeTab, setActiveTab }: TabNavigationProps) => {
  const tabs = [
    { id: 'form_types', label: 'حسب الشكل الفني' },
    { id: 'themes', label: 'حسب الأغراض' },
    { id: 'generate_poetry', label: 'توليد شعر' },
    { id: 'library', label: 'مكتبة الشعر' },
    { id: 'analyzer', label: 'محلل الشعر' },
    { id: 'learning', label: 'مسار التعلم' },
  ];

  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex p-1 bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-xl overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`relative px-4 py-2 rounded-md text-sm md:text-lg transition-colors duration-300 whitespace-nowrap ${
              activeTab === tab.id
                ? 'text-white'
                : 'text-amber-200 hover:text-amber-100'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTabBackground"
                className="absolute inset-0 bg-amber-900/60 rounded-md"
                initial={false}
                transition={{ type: 'spring', duration: 0.5 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};