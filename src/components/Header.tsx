
import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-emerald-600">
              城市工场
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-emerald-600 transition-colors">
              首页
            </a>
            <a href="/about" className="text-gray-700 hover:text-emerald-600 transition-colors">
              关于我们
            </a>
            <a href="/products" className="text-gray-700 hover:text-emerald-600 transition-colors">
              产品服务
            </a>
            <a href="/privacy" className="text-gray-700 hover:text-emerald-600 transition-colors">
              隐私政策
            </a>
            <a href="/contact" className="text-gray-700 hover:text-emerald-600 transition-colors">
              联系我们
            </a>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="/" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">
                首页
              </a>
              <a href="/about" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">
                关于我们
              </a>
              <a href="/products" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">
                产品服务
              </a>
              <a href="/privacy" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">
                隐私政策
              </a>
              <a href="/contact" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">
                联系我们
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
