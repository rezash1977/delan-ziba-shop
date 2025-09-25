
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Heart, Sparkles, Globe, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, label: 'مشتریان راضی', value: '+۵۰,۰۰۰' },
    { icon: Award, label: 'سال تجربه', value: '۱۰+' },
    { icon: Globe, label: 'شهر تحت پوشش', value: '۳۰+' },
    { icon: Heart, label: 'محصولات فروخته شده', value: '+۱۰۰,۰۰۰' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'عشق به زیبایی',
      description: 'ما معتقدیم که زیبایی حق هر زنی است و تلاش می‌کنیم بهترین محصولات را برای شما فراهم کنیم'
    },
    {
      icon: Shield,
      title: 'کیفیت تضمینی',
      description: 'تمامی محصولات ما اورجینال و دارای گارانتی اصالت هستند'
    },
    {
      icon: Sparkles,
      title: 'نوآوری',
      description: 'همیشه در جستجوی جدیدترین و بهترین محصولات آرایشی دنیا هستیم'
    },
    {
      icon: Users,
      title: 'مشتری مداری',
      description: 'رضایت شما بیش از هر چیز برای ما اهمیت دارد'
    }
  ];

  const timeline = [
    {
      year: '۱۳۹۳',
      title: 'آغاز راه',
      description: 'تاسیس Delan Beauty با هدف ارائه محصولات آرایشی با کیفیت'
    },
    {
      year: '۱۳۹۵',
      title: 'گسترش محصولات',
      description: 'افزودن برندهای معتبر بین‌المللی به مجموعه محصولات'
    },
    {
      year: '۱۳۹۸',
      title: 'راه‌اندازی فروشگاه آنلاین',
      description: 'ورود به دنیای فروش آنلاین و خدمات‌رسانی سراسری'
    },
    {
      year: '۱۴۰۱',
      title: 'توسعه تیم',
      description: 'ایجاد تیم مشاوره تخصصی آرایش و زیبایی'
    },
    {
      year: '۱۴۰۲',
      title: 'امروز',
      description: 'خدمات‌رسانی به بیش از ۵۰ هزار مشتری راضی در سراسر کشور'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-delan">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-delan-pink-100 via-white to-delan-purple-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
              داستان
              <span className="text-gradient block">
                Delan Beauty
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              از سال ۱۳۹۳ با عشق و علاقه در خدمت زیبایی شما هستیم. 
              هدف ما ارائه بهترین محصولات آرایشی و بهداشتی با کیفیت بالا و قیمت مناسب است.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <stat.icon className="h-12 w-12 mx-auto mb-4 text-delan-pink-500 group-hover:scale-110 transition-transform" />
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gradient-delan">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                داستان ما
              </h2>
              <p className="text-gray-600 text-lg">
                سفری که با عشق به زیبایی آغاز شد
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop"
                  alt="داستان Delan Beauty"
                  className="rounded-3xl shadow-2xl"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  ماموریت ما
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  در Delan Beauty، ما معتقدیم که زیبایی حق هر زنی است. هدف ما این است که 
                  بهترین محصولات آرایشی و بهداشتی دنیا را با قیمت مناسب و کیفیت بالا در اختیار 
                  شما قرار دهیم.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  تیم ما متشکل از متخصصان زیبایی و آرایش است که همیشه آماده مشاوره و راهنمایی 
                  شما برای انتخاب بهترین محصولات متناسب با نیازهایتان هستند.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              ارزش‌های ما
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              اصول و باورهایی که راه ما را در خدمات‌رسانی به شما روشن می‌کند
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-delan-pink-500 to-delan-purple-500 p-3 rounded-full group-hover:scale-110 transition-transform">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gradient-delan">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              سیر تکامل ما
            </h2>
            <p className="text-gray-600">
              مسیری که طی کرده‌ایم تا به اینجا برسیم
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute right-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-delan-pink-500 to-delan-purple-500 hidden md:block"></div>
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-center gap-8">
                    {/* Timeline dot */}
                    <div className="hidden md:flex items-center justify-center w-16 h-16 bg-gradient-to-r from-delan-pink-500 to-delan-purple-500 rounded-full text-white font-bold z-10">
                      {item.year}
                    </div>
                    
                    {/* Content */}
                    <Card className="flex-1 group hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="md:hidden text-center mb-4">
                          <span className="inline-block bg-gradient-to-r from-delan-pink-500 to-delan-purple-500 text-white px-4 py-2 rounded-full font-bold">
                            {item.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              تیم ما
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              متخصصانی که با عشق و تخصص در خدمت زیبایی شما هستند
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: 'دلارام احمدی',
                role: 'مدیر عامل و بنیانگذار',
                image: 'https://images.unsplash.com/photo-1494790108755-2616b612b762?w=300&h=300&fit=crop'
              },
              {
                name: 'نگار محمدی',
                role: 'مشاور ارشد آرایش',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop'
              },
              {
                name: 'ساراا رضایی',
                role: 'متخصص مراقبت پوست',
                image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop'
              }
            ].map((member, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 mx-auto rounded-full object-cover mb-4 group-hover:scale-105 transition-transform"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-delan-pink-600 font-medium">
                    {member.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
