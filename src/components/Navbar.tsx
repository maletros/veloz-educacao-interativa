
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search, User } from 'lucide-react';
import Logo from '../assets/logo';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Cursos', href: '/courses/all' },
    { name: 'Trilhas', href: '/learning-paths' },
    { name: 'Leaderboard', href: '/leaderboard' },
  ];

  const handleUserIconClick = () => {
    navigate('/auth');
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-veloz-dark/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent transparent-header'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <Link to="/">
              <Logo />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.href}
                  className="text-veloz-dark dark:text-white hover:text-veloz-blue dark:hover:text-veloz-blue flex items-center font-medium transition-colors"
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <button type="button" className="p-2 rounded-full text-veloz-dark dark:text-white hover:text-veloz-blue dark:hover:text-veloz-blue transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <Button className="bg-veloz-blue hover:bg-veloz-blue/90 text-white">
              Comece Agora
            </Button>
            <button 
              type="button" 
              className="p-2 rounded-full text-veloz-dark dark:text-white hover:text-veloz-blue dark:hover:text-veloz-blue transition-colors"
              onClick={handleUserIconClick}
            >
              <User className="h-5 w-5" />
            </button>
          </div>

          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <button
              type="button"
              className="p-2 rounded-full text-veloz-dark dark:text-white hover:text-veloz-blue dark:hover:text-veloz-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-veloz-dark shadow-lg animate-slide-up">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <React.Fragment key={link.name}>
                <Link
                  to={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-veloz-dark dark:text-white hover:bg-veloz-light dark:hover:bg-veloz-dark/50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </React.Fragment>
            ))}
            <div className="flex items-center justify-between px-3 py-2">
              <button type="button" className="p-2 rounded-full text-veloz-dark dark:text-white hover:text-veloz-blue dark:hover:text-veloz-blue transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <button 
                type="button" 
                className="p-2 rounded-full text-veloz-dark dark:text-white hover:text-veloz-blue dark:hover:text-veloz-blue transition-colors"
                onClick={handleUserIconClick}
              >
                <User className="h-5 w-5" />
              </button>
            </div>
            <div className="px-3 pt-2 pb-3">
              <Button className="w-full bg-veloz-blue hover:bg-veloz-blue/90 text-white">
                Comece Agora
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
