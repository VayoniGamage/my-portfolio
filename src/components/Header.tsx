import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Home, 
  User, 
  GraduationCap, 
  Award, 
  Briefcase, 
  Code, 
  Search, 
  FolderOpen, 
  Users, 
  Mail 
} from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero', icon: Home },
    { label: 'About', id: 'about', icon: User },
    { label: 'Education', id: 'education', icon: GraduationCap },
    { label: 'Projects', id: 'projects', icon: FolderOpen },
    { label: 'Certifications', id: 'certifications', icon: Award },
    { label: 'Experience', id: 'experience', icon: Briefcase },
    { label: 'Skills', id: 'skills', icon: Code },
    { label: 'Research', id: 'research', icon: Search },
    { label: 'Volunteering', id: 'volunteering', icon: Users },
    { label: 'Contact', id: 'contact', icon: Mail }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-slate-200' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Name */}
          <div className="text-xl font-bold text-slate-900">
            Vayoni Gamage
          </div>

          {/* Desktop Navigation - Icon Bar */}
          <div className="hidden lg:flex items-center space-x-1 bg-white/80 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg border border-slate-200">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="group relative p-3 rounded-full text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                  title={item.label}
                >
                  <IconComponent size={18} />
                  
                  {/* Tooltip */}
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    {item.label}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg border-b border-slate-200">
            <div className="px-4 py-6 max-h-96 overflow-y-auto">
              <div className="grid grid-cols-2 gap-3">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="flex items-center space-x-3 p-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 text-left"
                    >
                      <IconComponent size={18} />
                      <span className="text-sm font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;