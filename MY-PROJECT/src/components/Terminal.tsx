
import React, { useState, useEffect, useRef } from 'react';
import { content } from '../data/content';

const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [output, setOutput] = useState<string[]>([
    'Welcome to my terminal portfolio! 👋',
    'Type "help" to see available commands.',
    ''
  ]);
  
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = {
    help: () => `Available commands:
═══════════════════
about     - Learn about me
skills    - View my technical skills
projects  - See my projects
contact   - Get my contact info
socials   - View my social links
clear     - Clear the terminal
resume    - Download my resume
echo      - Repeat a message
date      - Show current date
weather   - Show weather (demo)
whoami    - Display user info`,
    
    about: () => content.about,
    
    skills: () => `My Technical Skills:
═══════════════════
${content.skills.map(skill => `• ${skill}`).join('\n')}`,
    
    projects: () => content.projects.map(p => 
      `┌─ ${p.name} ────────────\n│ ${p.description}\n│ Tech: ${p.tech.join(', ')}\n│ Link: ${p.link}\n└────────────────────`
    ).join('\n\n'),
    
    contact: () => `Contact Information:
═══════════════════
Email: your.email@example.com
Phone: +1234567890`,
    
    socials: () => `Social Links:
═══════════════════
${Object.entries(content.socials)
  .map(([platform, link]) => `${platform}: ${link}`)
  .join('\n')}`,
    
    clear: () => {
      setOutput([]);
      return '';
    },
    
    echo: (args: string) => args || 'Usage: echo <message>',
    
    date: () => new Date().toLocaleString(),
    
    weather: () => `Current Weather (Demo):
═══════════════════
Location: New York, NY
Temperature: 72°F
Conditions: Partly Cloudy
Humidity: 45%`,
    
    whoami: () => 'visitor@portfolio:~$',
    
    resume: () => 'Downloading resume...'
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  const handleCommand = (cmd: string) => {
    const [command, ...args] = cmd.trim().toLowerCase().split(' ');
    const result = commands[command as keyof typeof commands]?.(args.join(' ')) || 
      `Command not found: ${command}\nType "help" for available commands.`;
    
    setOutput(prev => [...prev, `visitor@portfolio:~$ ${cmd}`, result, '']);
    setHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="window-button close"></div>
        <div className="window-button minimize"></div>
        <div className="window-button maximize"></div>
      </div>
      <div className="terminal-content" ref={terminalRef} onClick={() => inputRef.current?.focus()}>
        {output.map((line, i) => (
          <div key={i} className="command-output">{line}</div>
        ))}
        <div className="input-line">
          <span className="command-prompt">visitor@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="command-input"
            autoFocus
            style={{
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'inherit',
              font: 'inherit',
              width: '80%'
            }}
          />
          <span className="cursor"></span>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
