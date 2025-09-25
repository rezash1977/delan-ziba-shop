
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand section */}
          <div>
            <h3 className="text-xl font-bold text-gradient mb-4">
              Delan Beauty ✨
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              برند تخصصی آرایشی و بهداشتی که با ارائه محصولات با کیفیت، زیبایی طبیعی شما را بیشتر می‌کند.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-gray-300 hover:text-delan-pink-400 transition-colors">
                اینستاگرام
              </a>
              <a href="#" className="text-gray-300 hover:text-delan-pink-400 transition-colors">
                تلگرام
              </a>
              <a href="#" className="text-gray-300 hover:text-delan-pink-400 transition-colors">
                واتساپ
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4 text-delan-pink-300">دسترسی سریع</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  درباره ما
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  تماس با ما
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  سوالات متداول
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  راهنمای خرید
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  شرایط استفاده
                </a>
              </li>
            </ul>
          </div>

          {/* Customer service */}
          <div>
            <h4 className="font-semibold mb-4 text-delan-purple-300">خدمات مشتریان</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  پیگیری سفارش
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  مرجوعی کالا
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  گارانتی محصولات
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  شیوه‌های پرداخت
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  حریم خصوصی
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold mb-4 text-delan-pink-300">اطلاعات تماس</h4>
            <div className="text-sm text-gray-300 space-y-3">
              <div>
                <p className="font-medium mb-1">شماره تماس:</p>
                <p>۰۲۱-۱۲۳۴۵۶۷۸</p>
              </div>
              <div>
                <p className="font-medium mb-1">ایمیل:</p>
                <p>info@delanbeauty.com</p>
              </div>
              <div>
                <p className="font-medium mb-1">آدرس:</p>
                <p>تهران، خیابان ولیعصر، پلاک ۱۲۳</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="font-semibold mb-1">عضویت در خبرنامه</h4>
              <p className="text-sm text-gray-300">از آخرین تخفیف‌ها و محصولات جدید با خبر شوید</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                className="px-4 py-2 rounded-r-lg border-0 text-gray-900 flex-1 md:w-64"
              />
              <button className="bg-gradient-to-r from-delan-pink-500 to-delan-purple-500 text-white px-6 py-2 rounded-l-lg hover:from-delan-pink-600 hover:to-delan-purple-600 transition-colors">
                عضویت
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <p>
              © ۱۴۰۳ Delan Beauty. تمامی حقوق محفوظ است.
            </p>
            <p className="flex items-center mt-2 md:mt-0">
              ساخته شده با 
              <Heart className="mx-1 h-4 w-4 text-red-500" />
              برای زیبایی شما
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
