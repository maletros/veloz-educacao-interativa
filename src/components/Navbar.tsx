import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search, User } from 'lucide-react';
import Logo from '../assets/logo';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    { name: 'Cursos', href: '#', hasSubmenu: true },
    { name: 'Trilhas', href: '/learning-paths' },
    { name: 'Leaderboard', href: '#' },
  ];

  const courseCategories = [
    { name: 'Programação', slug: 'programming' },
    { name: 'Empreendedorismo', slug: 'entrepreneurship' },
    { name: 'Design', slug: 'design' },
    { name: 'Marketing Digital', slug: 'marketing' },
    { name: 'Data Science', slug: 'data' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
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
                {link.hasSubmenu ? (
                  <div className="text-veloz-dark hover:text-veloz-blue flex items-center font-medium transition-colors cursor-pointer">
                    {link.name}
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className="text-veloz-dark hover:text-veloz-blue flex items-center font-medium transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
                {link.hasSubmenu && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                    {courseCategories.map((category) => (
                      <Link 
                        key={category.slug}
                        to={`/courses/${category.slug}`} 
                        className="block px-4 py-2 text-sm text-veloz-dark hover:bg-veloz-light"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button type="button" className="p-2 rounded-full text-veloz-dark hover:text-veloz-blue transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <Button className="bg-veloz-blue hover:bg-veloz-blue/90 text-white">
              Comece Agora
            </Button>
            <button type="button" className="p-2 rounded-full text-veloz-dark hover:text-veloz-blue transition-colors">
              <User className="h-5 w-5" />
            </button>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="p-2 rounded-full text-veloz-dark hover:text-veloz-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-slide-up">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <React.Fragment key={link.name}>
                {link.hasSubmenu ? (
                  <>
                    <div className="block px-3 py-2 rounded-md text-base font-medium text-veloz-dark">
                      {link.name}
                    </div>
                    <div className="pl-4">
                      {courseCategories.map((category) => (
                        <Link
                          key={category.slug}
                          to={`/courses/${category.slug}`}
                          className="block px-3 py-2 text-sm text-veloz-dark hover:bg-veloz-light"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-veloz-dark hover:bg-veloz-light transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </React.Fragment>
            ))}
            <div className="flex items-center justify-between px-3 py-2">
              <button type="button" className="p-2 rounded-full text-veloz-dark hover:text-veloz-blue transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <button type="button" className="p-2 rounded-full text-veloz-dark hover:text-veloz-blue transition-colors">
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
