
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, MessageCircle, HeadphonesIcon } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form data:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'تلفن تماس',
      content: '۰۲۱-۱۲۳۴۵۶۷۸',
      description: 'پاسخگویی ۲۴ ساعته'
    },
    {
      icon: Mail,
      title: 'ایمیل',
      content: 'info@delanbeauty.com',
      description: 'پاسخ در کمتر از ۲۴ ساعت'
    },
    {
      icon: MapPin,
      title: 'آدرس',
      content: 'تهران، خیابان ولیعصر، پلاک ۱۲۳',
      description: 'مراجعه حضوری با هماهنگی قبلی'
    },
    {
      icon: Clock,
      title: 'ساعات کاری',
      content: 'شنبه تا پنج‌شنبه: ۹ تا ۱۸',
      description: 'جمعه‌ها تعطیل'
    }
  ];

  const faqItems = [
    {
      question: 'چگونه می‌توانم از اصالت محصولات اطمینان حاصل کنم؟',
      answer: 'تمامی محصولات ما مستقیماً از نمایندگی‌های رسمی برندها تهیه می‌شوند و دارای گارانتی اصالت هستند.'
    },
    {
      question: 'آیا امکان مرجوعی کالا وجود دارد؟',
      answer: 'بله، تا ۷ روز پس از خرید در صورت عدم رضایت می‌توانید محصول را مرجوع کنید.'
    },
    {
      question: 'هزینه ارسال چقدر است؟',
      answer: 'برای خریدهای بالای ۵۰۰ هزار تومان، ارسال کاملاً رایگان است. برای خریدهای کمتر، هزینه ارسال ۵۰ هزار تومان می‌باشد.'
    },
    {
      question: 'چه مدت زمان برای ارسال نیاز است؟',
      answer: 'معمولاً ۲ تا ۳ روز کاری برای ارسال به تهران و ۳ تا ۵ روز کاری برای سایر شهرها نیاز است.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-delan">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-delan-pink-100 via-white to-delan-purple-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
              تماس
              <span className="text-gradient block">
                با ما
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              ما همیشه آماده پاسخگویی به سوالات شما هستیم. 
              با ما در ارتباط باشید تا بهترین خدمات را دریافت کنید.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-r from-delan-pink-500 to-delan-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-900 font-medium mb-1">
                    {info.content}
                  </p>
                  <p className="text-sm text-gray-600">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gradient-delan">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-6 w-6 text-delan-pink-500" />
                  ارسال پیام
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">نام و نام خانوادگی *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="نام کامل خود را وارد کنید"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">ایمیل *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="ایمیل خود را وارد کنید"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">شماره تلفن</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">موضوع پیام *</Label>
                    <Select onValueChange={(value) => setFormData({...formData, subject: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="موضوع پیام خود را انتخاب کنید" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="product-inquiry">سوال درباره محصولات</SelectItem>
                        <SelectItem value="order-status">وضعیت سفارش</SelectItem>
                        <SelectItem value="return">مرجوعی کالا</SelectItem>
                        <SelectItem value="complaint">شکایت</SelectItem>
                        <SelectItem value="suggestion">پیشنهاد</SelectItem>
                        <SelectItem value="other">سایر موارد</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">پیام شما *</Label>
                    <Textarea
                      id="message"
                      placeholder="پیام خود را اینجا بنویسید..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={6}
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-delan-pink-500 to-delan-purple-500 hover:from-delan-pink-600 hover:to-delan-purple-600"
                  >
                    ارسال پیام
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              
              {/* Map */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-6 w-6 text-delan-pink-500" />
                    موقعیت ما
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-gray-600">نقشه اینجا قرار می‌گیرد</p>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-gray-700 mb-2">تهران، خیابان ولیعصر، پلاک ۱۲۳</p>
                    <Button variant="outline" size="sm">
                      مسیریابی
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Support Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HeadphonesIcon className="h-6 w-6 text-delan-pink-500" />
                    ساعات پشتیبانی
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">شنبه تا چهارشنبه:</span>
                      <span className="text-gray-600">۹:۰۰ - ۱۸:۰۰</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">پنج‌شنبه:</span>
                      <span className="text-gray-600">۹:۰۰ - ۱۶:۰۰</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">جمعه:</span>
                      <span className="text-red-600">تعطیل</span>
                    </div>
                    <div className="bg-delan-pink-50 p-4 rounded-lg mt-4">
                      <p className="text-sm text-delan-pink-700 text-center">
                        💬 پشتیبانی آنلاین ۲۴ ساعته از طریق چت سایت
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              سوالات متداول
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              پاسخ سوالات رایج مشتریان را در اینجا مشاهده کنید
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqItems.map((item, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-800 mb-3 group-hover:text-delan-pink-600 transition-colors">
                      {item.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                سوال شما در لیست نبود؟
              </p>
              <Button 
                variant="outline" 
                className="border-delan-pink-500 text-delan-pink-600 hover:bg-delan-pink-50"
              >
                مشاهده همه سوالات متداول
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
