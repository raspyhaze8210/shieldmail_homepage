import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800/50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <div className="w-[150px] h-12 rounded-xl flex items-center justify-center overflow-hidden">
              <img 
                src="/src/assets/image (2).png" 
                alt="ShieldMail Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
          </nav>
          
          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <a href="https://app.shieldmail.site/auth" className="hidden sm:inline-block text-gray-300 hover:text-white transition-colors">
              Login
            </a>
            <a href="https://app.shieldmail.site/auth" className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/20">
              Get Started
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 border-b border-slate-700">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <a href="#features" className="block text-gray-300 hover:text-white transition-colors py-2">Features</a>
            <a href="#how-it-works" className="block text-gray-300 hover:text-white transition-colors py-2">How It Works</a>
            <a href="#pricing" className="block text-gray-300 hover:text-white transition-colors py-2">Pricing</a>
            <Link to="/about" className="block text-gray-300 hover:text-white transition-colors py-2">About</Link>
            <a href="#faq" className="block text-gray-300 hover:text-white transition-colors py-2">FAQ</a>
            <a href="https://app.shieldmail.site/auth" className="block text-gray-300 hover:text-white transition-colors py-2">Login</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;