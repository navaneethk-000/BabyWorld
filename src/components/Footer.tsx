import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-pink-300">BabyChic</h3>
            <p className="text-gray-300 mb-4">
              Adorable styles for your little ones, crafted with love and designed for comfort.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-pink-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-300 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-pink-300 transition-colors">Home</a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-pink-300 transition-colors">Shop</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-pink-300 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-pink-300 transition-colors">Size Guide</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-pink-300 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-pink-300 transition-colors">Dresses</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-pink-300 transition-colors">Rompers</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-pink-300 transition-colors">Outfits</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-pink-300 transition-colors">Accessories</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-pink-300 transition-colors">Footwear</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mt-1 mr-2 text-pink-300" />
                <span className="text-gray-300">123 Baby Street, Kids Town, KD 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-pink-300" />
                <span className="text-gray-300">+1 (234) 567-8910</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-pink-300" />
                <span className="text-gray-300">hello@babychic.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-700 pt-8 pb-4 mt-8">
          <div className="max-w-md mx-auto">
            <h3 className="text-lg font-semibold mb-4 text-center">Subscribe to Our Newsletter</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-l-md focus:outline-none text-gray-800"
              />
              <button className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm mt-8">
          <p>© {new Date().getFullYear()} BabyChic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;