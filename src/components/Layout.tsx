import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Linkedin, Instagram, Twitter, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Supermarket Staples', href: '/articles' },
    { name: 'About', href: '/about' },
    { name: 'Consultations', href: '/consultations' },
    { name: 'Collaborations', href: '/collaborations' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div className={`min-h-screen font-body ${
      theme === 'light' ? 'bg-white' : 'bg-background'
    }`}>
      {/* Navigation */}
      <nav className={theme === 'light' ? 'bg-white' : 'bg-background'}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-2xl font-display font-bold text-primary">NoSh**</div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-12">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-nav font-bold transition-colors duration-300 ${
                    isActive(item.href)
                      ? 'text-primary crosshatch-border-bottom'
                      : 'text-primary hover:text-primary/80'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 text-primary hover:text-primary/80 transition-colors duration-300"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-secondary/30">
              <div className="px-2 pt-4 pb-6 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-3 text-lg font-nav transition-colors duration-300 ${
                      isActive(item.href)
                        ? 'text-primary bg-secondary/20'
                        : 'text-primary hover:text-primary/80 hover:bg-secondary/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className={`mt-24 ${theme === 'light' ? 'bg-white' : 'bg-background'}`}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <div className="text-2xl font-display font-bold text-primary mb-6">NoSh**</div>
              <p className="text-primary mb-6 font-body text-xl">Simple, evidence-based food and nutrition guidance</p>
              <p className="text-primary font-body">
                One-to-one nutrition consultations and honest food writing — backed by science, based on what's practical, and built to last.
              </p>
            </div>
            
            {/* Contact */}
            <div>
              <h3 className="font-display font-bold text-primary mb-6 text-xl">Contact</h3>
              <div className="flex items-center text-primary mb-4">
                <Mail className="h-5 w-5 mr-3" />
                <span className="font-body">hello@NoSh-nutrition.com</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h3 className="font-display font-bold text-primary mb-6 text-xl">Follow</h3>
              <div className="flex space-x-6">
                <a href="#" className="text-primary hover:text-primary/80 transition-colors duration-300">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-primary hover:text-primary/80 transition-colors duration-300">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-primary hover:text-primary/80 transition-colors duration-300">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Theme Switcher */}
            <div>
              <h3 className="font-display font-bold text-primary mb-6 text-xl">Theme</h3>
              <button
                onClick={toggleTheme}
                className="flex items-center space-x-3 text-primary hover:text-primary/80 transition-colors duration-300 group"
                aria-label={`Switch to ${theme === 'light' ? 'default' : 'light'} theme`}
              >
                {theme === 'light' ? (
                  <>
                    <Moon className="h-5 w-5" />
                    <span className="font-body">Switch to default theme</span>
                  </>
                ) : (
                  <>
                    <Sun className="h-5 w-5" />
                    <span className="font-body">Switch to light theme</span>
                  </>
                )}
              </button>
            </div>
          </div>
          
        </div>
      </footer>
    </div>
  );
};

export default Layout;