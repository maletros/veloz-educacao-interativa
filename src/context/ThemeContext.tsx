
import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check if user has previously selected a theme
    const savedTheme = localStorage.getItem('theme') as Theme;
    
    // Check if user has a system preference
    if (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return savedTheme || 'light';
  });

  useEffect(() => {
    // Update local storage when theme changes
    localStorage.setItem('theme', theme);
    
    // Update document class for dark mode
    const root = window.document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Add transition after initial load to avoid flash when theme changes
    const timeout = setTimeout(() => {
      root.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    }, 100);

    return () => clearTimeout(timeout);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
