import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import './styles/globals.css';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div className="main-container">
      <button className="theme-toggle" onClick={() => setIsDark(!isDark)}>
        {isDark ? '🌞' : '🌙'}
      </button>
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Projects />
    </div>
  );
}
