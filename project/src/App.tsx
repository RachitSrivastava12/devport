import React from 'react';
import Terminal from './components/Terminal';
import MobilePortfolio from './components/MobilePortfolio';
import ThemeToggle from './components/ThemeToggle';
import MusicPlayer from './components/MusicPlayer';
import { useThemeStore } from './store/themeStore';

function App() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);
  const isDark = useThemeStore((state) => state.isDark);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
        <ThemeToggle />
        <MusicPlayer />
        {isMobile ? (
          <MobilePortfolio />
        ) : (
          <div className="container mx-auto px-4 py-8 h-screen">
            <div className="h-full">
              <Terminal />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;