'use client';

import { useState, useEffect } from 'react';

const navLinks = [
   // { href: '#services', label: 'Услуги' }, // временно отключено
   { href: '#advantages', label: 'Преимущества' },
   { href: '#about', label: 'О компании' },
   // { href: '#team', label: 'Команда' }, // временно отключено
   { href: '#tools', label: 'Инструменты' },
   { href: '#contact', label: 'Контакты' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="top" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Логотип */}
          <a href="#top" className="flex items-center space-x-2">
            <div className="relative w-10 h-10">
            <svg viewBox="0 0 100 100" className={`w-full h-full ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M50 15 L55 45 L85 50 L55 55 L50 85 L45 55 L15 50 L45 45 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <circle cx="50" cy="50" r="4" fill="currentColor"/>
              </svg>
            </div>
            <span className={`font-bold text-xl ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}>
              TerraTax<span className="text-yellow-600">.Agency</span>
            </span>
          </a>

          {/* Десктоп навигация */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium hover:text-yellow-600 transition-colors ${
                  isScrolled ? 'text-slate-800' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA кнопка */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              className="px-5 py-2.5 bg-yellow-600 hover:bg-yellow-500 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Получить консультацию
            </a>
          </div>

          {/* Бургер-меню */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            <svg
              className={`w-6 h-6 ${isScrolled ? 'text-slate-900' : 'text-white'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-xl">
          <nav className="px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-base font-medium text-slate-800 hover:text-yellow-600 hover:bg-slate-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block w-full text-center px-6 py-3 bg-yellow-600 hover:bg-yellow-500 text-white font-semibold rounded-lg shadow-md mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Получить консультацию
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}