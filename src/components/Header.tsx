
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Heart, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-delan-pink-500 to-delan-purple-500 text-white py-2">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm">
            🌸 تخفیف ویژه ۲۰٪ برای اولین خرید شما! کد تخفیف: DELAN20 🌸
          </p>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gradient">
              Delan Beauty
            </h1>
            <span className="mr-2 text-delan-pink-500 text-2xl">✨</span>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="جستجوی محصولات..."
                className="w-full px-4 py-2 pr-10 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-delan-pink-300"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <Button variant="ghost" size="sm" className="relative">
              <Heart className="h-5 w-5" />
              <span className="absolute -top-2 -left-2 bg-delan-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Button>
            
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -left-2 bg-delan-purple-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Button>
            
            <Button variant="ghost" size="sm">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-4">
          <div className="flex items-center justify-center space-x-8 space-x-reverse">
            <a href="#" className="text-gray-700 hover:text-delan-pink-500 font-medium transition-colors">
              خانه
            </a>
            
            <div className="relative group">
              <a href="#" className="flex items-center text-gray-700 hover:text-delan-pink-500 font-medium transition-colors">
                فروشگاه
                <ChevronDown className="mr-1 h-4 w-4" />
              </a>
              
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-delan-pink-50 hover:text-delan-pink-600">
                    آرایش چشم
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-delan-pink-50 hover:text-delan-pink-600">
                    آرایش لب
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-delan-pink-50 hover:text-delan-pink-600">
                    مراقبت از پوست
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-delan-pink-50 hover:text-delan-pink-600">
                    عطر و ادکلن
                  </a>
                </div>
              </div>
            </div>
            
            <a href="#" className="text-gray-700 hover:text-delan-pink-500 font-medium transition-colors">
              برندها
            </a>
            <a href="#" className="text-gray-700 hover:text-delan-pink-500 font-medium transition-colors">
              تخفیف‌ها
            </a>
            <a href="#" className="text-gray-700 hover:text-delan-pink-500 font-medium transition-colors">
              درباره ما
            </a>
            <a href="#" className="text-gray-700 hover:text-delan-pink-500 font-medium transition-colors">
              تماس با ما
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
