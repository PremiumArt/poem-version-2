import { useState } from 'react';
import { Header } from './components/Header';
import { TabNavigation } from './components/TabNavigation';
import { SearchBar } from './components/SearchBar';
import { ArtisticForms } from './components/tabs/ArtisticForms';
import { ThemesPurposes } from './components/tabs/ThemesPurposes';
import { GeneratePoetry } from './components/tabs/GeneratePoetry';
import { PoetryLibrary } from './components/PoetryLibrary';
import { PoetryAnalyzer } from './components/PoetryAnalyzer';
import { LearningPath } from './components/LearningPath';
import { Footer } from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState<string>('form_types');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSearch = (query: string, filters: any) => {
    // Implement search functionality
    console.log('Searching for:', query, 'with filters:', filters);
    // This would typically make an API call to search the poetry database
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'form_types':
        return <ArtisticForms />;
      case 'themes':
        return <ThemesPurposes />;
      case 'generate_poetry':
        return <GeneratePoetry />;
      case 'library':
        return <PoetryLibrary />;
      case 'analyzer':
        return <PoetryAnalyzer />;
      case 'learning':
        return <LearningPath />;
      default:
        return <ArtisticForms />;
    }
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-b from-gray-900 via-amber-900/30 to-gray-900 text-right relative"
      dir="rtl"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('/油画.jpeg')] bg-cover bg-center opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <Header />
        
        <main className="mt-8 mb-16">
          <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
          
          {/* Show search bar for library and analyzer tabs */}
          {(activeTab === 'library' || activeTab === 'analyzer') && (
            <SearchBar onSearch={handleSearch} />
          )}
          
          <div className="mt-8">
            {renderTabContent()}
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;