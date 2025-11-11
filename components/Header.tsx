import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const navItems = [
    { name: 'Blog', path: '/blog' },
    { name: 'Our Story', path: '#our-story' },
    { name: 'Join as Artist', path: '#join-artist' },
    { name: 'Contact', path: '#contact' }
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200/80">
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wider font-serif">HASTAKALA CRAFTS</h1>
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative text-base text-gray-700 hover:text-brand-dark transition-colors font-normal group ${
                window.location.pathname === item.path ? 'text-brand-brown' : ''
              }`}
              onClick={(e) => {
                if (item.path.startsWith('#')) {
                  e.preventDefault();
                  const element = document.querySelector(item.path);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-brown transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
        {/* Mobile Menu Button (optional) */}
        <button className="md:hidden text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;