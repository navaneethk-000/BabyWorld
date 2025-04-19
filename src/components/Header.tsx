import React, { useState, useEffect } from 'react';
import { Heart, ShoppingBag, Menu, X, Search } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-pink-500">
            <a href="#" className="flex items-center">
              <span className="hidden sm:inline">BabyChic</span>
              <span className="sm:hidden">BC</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">Home</a>
            <a href="#products" className="text-gray-700 hover:text-pink-500 transition-colors">Shop</a>
            <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">Collections</a>
            <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">Size Guide</a>
            <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">Contact</a>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-pink-500 transition-colors">
              <Search size={20} />
            </button>
            <button className="text-gray-700 hover:text-pink-500 transition-colors">
              <Heart size={20} />
            </button>
            <button className="text-gray-700 hover:text-pink-500 transition-colors">
              <ShoppingBag size={20} />
            </button>
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors py-2 border-b border-gray-100">Home</a>
              <a href="#products" className="text-gray-700 hover:text-pink-500 transition-colors py-2 border-b border-gray-100">Shop</a>
              <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors py-2 border-b border-gray-100">Collections</a>
              <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors py-2 border-b border-gray-100">Size Guide</a>
              <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors py-2">Contact</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;