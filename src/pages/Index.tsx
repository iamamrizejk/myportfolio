import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { CertificationsSection } from '@/components/CertificationsSection';
import { HobbiesSection } from '@/components/HobbiesSection';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { LoadingScreen } from '@/components/LoadingScreen';

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [colorTheme, setColorTheme] = useState<'default' | 'rose' | 'mint'>('default');

  useEffect(() => {
    // Load saved theme preferences from localStorage
    const savedDarkMode = localStorage.getItem('darkMode');
    const savedColorTheme = localStorage.getItem('colorTheme') as 'default' | 'rose' | 'mint' | null;
    
    if (savedDarkMode !== null) {
      setIsDark(savedDarkMode === 'true');
    } else {
      // Check system preference on mount if no saved preference
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setIsDark(darkModeMediaQuery.matches);
    }
    
    if (savedColorTheme) {
      setColorTheme(savedColorTheme);
    }

    // Listen for system preference changes
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem('darkMode') === null) {
        setIsDark(e.matches);
      }
    };
    darkModeMediaQuery.addEventListener('change', handleChange);
    
    return () => darkModeMediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // Apply dark/light mode to document
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Save to localStorage
    localStorage.setItem('darkMode', isDark.toString());
  }, [isDark]);

  useEffect(() => {
    // Apply color theme to document
    document.documentElement.classList.remove('theme-rose', 'theme-mint');
    if (colorTheme !== 'default') {
      document.documentElement.classList.add(`theme-${colorTheme}`);
    }
    // Save to localStorage
    localStorage.setItem('colorTheme', colorTheme);
  }, [colorTheme]);

  const toggleTheme = () => setIsDark(!isDark);
  
  const handleColorThemeChange = (theme: 'default' | 'rose' | 'mint') => {
    setColorTheme(theme);
  };

  if (isLoading) {
    return <LoadingScreen onLoadComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        isDark={isDark} 
        toggleTheme={toggleTheme} 
        colorTheme={colorTheme}
        setColorTheme={handleColorThemeChange}
      />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <HobbiesSection />
        <Footer />
      </main>

      <BackToTop />
    </div>
  );
};

export default Index;