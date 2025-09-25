import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request: Request) {
  const htmlContent = ReactDOMServer.renderToString(<App />);
  
  return new Response(`
    <!DOCTYPE html>
    <html lang="fa">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Delan Beauty</title>
        <style>
          /* شما می‌توانید استایل‌های خود را در اینجا اضافه کنید */
        </style>
      </head>
      <body>
        <div id="root">${htmlContent}</div>
        <script src="/static/js/bundle.js"></script> <!-- لینک به فایل جاوااسکریپت استاتیک -->
      </body>
    </html>
  `, {
    headers: { 'Content-Type': 'text/html' },
  });
}

const App = () => {
  const featuredProducts = [
    {
      id: "1",
      name: 'رژ لب مات طولانی مدت - رنگ گیلاسی',
      price: 450000,
      originalPrice: 550000,
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300&h=300&fit=crop',
      rating: 4,
      isNew: true,
      discount: 18
    },
    {
      id: "2",
      name: 'پالت سایه چشم ۱۲ رنگ پروفشنال',
      price: 890000,
      image: 'https://images.unsplash.com/photo-1583241800698-b7b5b7b7c3d1?w=300&h=300&fit=crop',
      rating: 5,
      isNew: false
    },
    {
      id: "3",
      name: 'کرم پودر کالاژن دار با SPF30',
      price: 720000,
      originalPrice: 850000,
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop',
      rating: 4,
      discount: 15
    },
    {
      id: "4",
      name: 'ماسکارا حجم دهنده ضد آب',
      price: 380000,
      image: 'https://images.unsplash.com/photo-1631214540260-b858e1c31e6f?w=300&h=300&fit=crop',
      rating: 5,
      isNew: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-delan">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-delan-pink-100 via-white to-delan-purple-100 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                زیبایی طبیعی
                <span className="text-gradient block">
                  با Delan Beauty
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                مجموعه‌ای منحصر به فرد از محصولات آرایشی و بهداشتی برای زیبایی و اعتماد به نفس بیشتر شما
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-delan-pink-500 to-delan-purple-500 hover:from-delan-pink-600 hover:to-delan-purple-600 text-white px-8 py-3 text-lg"
                >
                  کاوش محصولات
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-delan-pink-500 text-delan-pink-600 hover:bg-delan-pink-50 px-8 py-3 text-lg"
                >
                  درباره ما
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=500&fit=crop"
                  alt="محصولات آرایشی"
                  className="rounded-3xl shadow-2xl animate-bounce-gentle"
                />
                <div className="absolute -top-4 -right-4 bg-delan-purple-500 text-white rounded-full p-3 animate-bounce-gentle" style={{animationDelay: '0.5s'}}>
                  ✨
                </div>
                <div className="absolute -bottom-4 -left-4 bg-delan-pink-500 text-white rounded-full p-3 animate-bounce-gentle" style={{animationDelay: '1s'}}>
                  💄
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            دسته‌بندی محصولات
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'آرایش چشم', icon: '👁️', color: 'from-purple-400 to-purple-600' },
              { name: 'آرایش لب', icon: '💋', color: 'from-pink-400 to-pink-600' },
              { name: 'مراقبت پوست', icon: '🌸', color: 'from-rose-400 to-rose-600' },
              { name: 'عطر و ادکلن', icon: '🌺', color: 'from-violet-400 to-violet-600' }
            ].map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800 group-hover:text-delan-pink-600 transition-colors">
                    {category.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gradient-delan">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              محصولات ویژه
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              برترین و محبوب‌ترین محصولات ما که توسط هزاران مشتری تایید شده‌اند
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="animate-fade-in">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              size="lg"
              variant="outline"
              className="border-delan-purple-500 text-delan-purple-600 hover:bg-delan-purple-50 px-8"
            >
              مشاهده همه محصولات
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default App;
