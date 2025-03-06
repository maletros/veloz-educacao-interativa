
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className={cn(
        "rounded-full",
        theme === 'dark' ? 'border-veloz-gray/30 bg-veloz-dark text-veloz-light hover:bg-veloz-dark/80 hover:text-white' : 'text-veloz-dark hover:bg-veloz-light',
        className
      )}
    >
      {theme === 'light' ? (
        <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 transition-all dark:rotate-0" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 transition-all dark:-rotate-90" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
