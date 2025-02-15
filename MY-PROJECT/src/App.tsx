
import React, { useState } from 'react';
import Terminal from './components/Terminal';
import MobileView from './components/MobileView';
import ThemeToggle from './components/ThemeToggle';
import MusicPlayer from './components/MusicPlayer';
import './styles/global.css';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={theme}>
      <div className="terminal-container">
        <div className="controls-container">
          <MusicPlayer />
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
        <Terminal />
      </div>
      <MobileView />
    </div>
  );
};

export default App;