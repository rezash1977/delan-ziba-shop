
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CreditCard, Truck, Shield, MapPin, User, Phone, Mail } from 'lucide-react';

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    notes: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('online');
  const [shippingMethod, setShippingMethod] = useState('standard');

  const cartItems = [
    {
      id: 1,
      name: 'رژ لب مات طولانی مدت - رنگ گیلاسی',
      price: 450000,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      name: 'پالت سایه چشم ۱۲ رنگ پروفشنال',
      price: 890000,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1583241800698-b7b5b7b7c3d1?w=100&h=100&fit=crop'
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCost = shippingMethod === 'express' ? 100000 : (subtotal > 500000 ? 0 : 50000);
  const total = subtotal + shippingCost;

  const handleStepSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Handle final submission
      console.log('Order submitted:', { shippingInfo, paymentMethod, shippingMethod });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-delan">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Link to="/cart" className="flex items-center text-delan-pink-600 hover:text-delan-pink-700">
            <ArrowRight className="h-5 w-5 ml-2" />
            بازگشت به سبد خرید
          </Link>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center">
            {[
              { step: 1, title: 'اطلاعات ارسال', icon: User },
              { step: 2, title: 'روش پرداخت', icon: CreditCard },
              { step: 3, title: 'تایید نهایی', icon: Shield }
            ].map((item, index) => (
              <div key={item.step} className="flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                  step >= item.step 
                    ? 'bg-delan-pink-500 border-delan-pink-500 text-white' 
                    : 'border-gray-300 text-gray-400'
                }`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <span className={`mr-3 font-medium ${
                  step >= item.step ? 'text-delan-pink-600' : 'text-gray-400'
                }`}>
                  {item.title}
                </span>
                {index < 2 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    step > item.step ? 'bg-delan-pink-500' : 'bg-gray-300'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <form onSubmit={handleStepSubmit}>
              
              {/* Step 1: Shipping Information */}
              {step === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-6 w-6 text-delan-pink-500" />
                      اطلاعات ارسال
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">نام *</Label>
                        <Input
                          id="firstName"
                          value={shippingInfo.firstName}
                          onChange={(e) => setShippingInfo({...shippingInfo, firstName: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">نام خانوادگی *</Label>
                        <Input
                          id="lastName"
                          value={shippingInfo.lastName}
                          onChange={(e) => setShippingInfo({...shippingInfo, lastName: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">ایمیل *</Label>
                        <div className="relative">
                          <Input
                            id="email"
                            type="email"
                            value={shippingInfo.email}
                            onChange={(e) => setShippingInfo({...shippingInfo, email: e.target.value})}
                            className="pr-10"
                            required
                          />
                          <Mail className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="phone">شماره تلفن *</Label>
                        <div className="relative">
                          <Input
                            id="phone"
                            value={shippingInfo.phone}
                            onChange={(e) => setShippingInfo({...shippingInfo, phone: e.target.value})}
                            className="pr-10"
                            required
                          />
                          <Phone className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="address">آدرس کامل *</Label>
                      <div className="relative">
                        <Textarea
                          id="address"
                          value={shippingInfo.address}
                          onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                          placeholder="آدرس کامل شامل نام شهر، خیابان، کوچه و پلاک"
                          className="pr-10"
                          required
                        />
                        <MapPin className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">شهر *</Label>
                        <Input
                          id="city"
                          value={shippingInfo.city}
                          onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="postalCode">کد پستی *</Label>
                        <Input
                          id="postalCode"
                          value={shippingInfo.postalCode}
                          onChange={(e) => setShippingInfo({...shippingInfo, postalCode: e.target.value})}
                          placeholder="۱۲۳۴۵۶۷۸۹۰"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="notes">توضیحات تکمیلی (اختیاری)</Label>
                      <Textarea
                        id="notes"
                        value={shippingInfo.notes}
                        onChange={(e) => setShippingInfo({...shippingInfo, notes: e.target.value})}
                        placeholder="توضیحات اضافی برای بهتر پیدا کردن آدرس"
                        rows={3}
                      />
                    </div>

                    {/* Shipping Method */}
                    <div>
                      <Label className="text-base font-semibold mb-4 block">روش ارسال</Label>
                      <RadioGroup value={shippingMethod} onValueChange={setShippingMethod}>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-2 space-x-reverse border rounded-lg p-4">
                            <RadioGroupItem value="standard" id="standard" />
                            <div className="flex-1">
                              <label htmlFor="standard" className="cursor-pointer">
                                <div className="flex justify-between items-center">
                                  <div>
                                    <h4 className="font-medium">ارسال عادی</h4>
                                    <p className="text-sm text-gray-600">۳-۵ روز کاری</p>
                                  </div>
                                  <span className="font-semibold">
                                    {subtotal > 500000 ? 'رایگان' : '۵۰,۰۰۰ تومان'}
                                  </span>
                                </div>
                              </label>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2 space-x-reverse border rounded-lg p-4">
                            <RadioGroupItem value="express" id="express" />
                            <div className="flex-1">
                              <label htmlFor="express" className="cursor-pointer">
                                <div className="flex justify-between items-center">
                                  <div>
                                    <h4 className="font-medium">ارسال فوری</h4>
                                    <p className="text-sm text-gray-600">۱-۲ روز کاری</p>
                                  </div>
                                  <span className="font-semibold">۱۰۰,۰۰۰ تومان</span>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-delan-pink-500 to-delan-purple-500"
                    >
                      ادامه
                    </Button>
                  </CardContent>
                </Card>
              )}

              {/* Step 2: Payment Method */}
              {step === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-6 w-6 text-delan-pink-500" />
                      روش پرداخت
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2 space-x-reverse border rounded-lg p-4">
                          <RadioGroupItem value="online" id="online" />
                          <div className="flex-1">
                            <label htmlFor="online" className="cursor-pointer">
                              <div className="flex justify-between items-center">
                                <div>
                                  <h4 className="font-medium">پرداخت آنلاین</h4>
                                  <p className="text-sm text-gray-600">پرداخت امن با درگاه زرین‌پال</p>
                                </div>
                                <Badge className="bg-green-100 text-green-800">توصیه می‌شود</Badge>
                              </div>
                            </label>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2 space-x-reverse border rounded-lg p-4">
                          <RadioGroupItem value="cod" id="cod" />
                          <div className="flex-1">
                            <label htmlFor="cod" className="cursor-pointer">
                              <div className="flex justify-between items-center">
                                <div>
                                  <h4 className="font-medium">پرداخت در محل</h4>
                                  <p className="text-sm text-gray-600">پرداخت هنگام تحویل کالا</p>
                                </div>
                                <span className="text-sm text-gray-500">+۲۰,۰۰۰ تومان</span>
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </RadioGroup>

                    <Separator />

                    <div className="flex items-start space-x-2 space-x-reverse">
                      <Checkbox id="terms" className="mt-1" />
                      <label htmlFor="terms" className="text-sm cursor-pointer">
                        <span>
                          <Link to="/terms" className="text-delan-pink-600 hover:text-delan-pink-700">قوانین و مقررات</Link> را مطالعه کرده و قبول دارم
                        </span>
                      </label>
                    </div>

                    <div className="flex gap-4">
                      <Button 
                        type="button"
                        variant="outline"
                        onClick={() => setStep(1)}
                        className="flex-1"
                      >
                        بازگشت
                      </Button>
                      <Button 
                        type="submit"
                        className="flex-1 bg-gradient-to-r from-delan-pink-500 to-delan-purple-500"
                      >
                        ادامه
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 3: Review & Confirm */}
              {step === 3 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-6 w-6 text-delan-pink-500" />
                      تایید نهایی
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    
                    {/* Shipping Information Summary */}
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold flex items-center gap-2">
                          <MapPin className="h-5 w-5 text-delan-pink-500" />
                          اطلاعات ارسال
                        </h3>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => setStep(1)}
                        >
                          ویرایش
                        </Button>
                      </div>
                      <div className="space-y-2 text-sm">
                        <p>
                          <span className="font-medium">نام گیرنده:</span> {shippingInfo.firstName} {shippingInfo.lastName}
                        </p>
                        <p>
                          <span className="font-medium">تلفن:</span> {shippingInfo.phone}
                        </p>
                        <p>
                          <span className="font-medium">آدرس:</span> {shippingInfo.city}، {shippingInfo.address}
                        </p>
                        <p>
                          <span className="font-medium">کدپستی:</span> {shippingInfo.postalCode}
                        </p>
                      </div>
                    </div>

                    {/* Payment Method Summary */}
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold flex items-center gap-2">
                          <CreditCard className="h-5 w-5 text-delan-pink-500" />
                          روش پرداخت
                        </h3>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => setStep(2)}
                        >
                          ویرایش
                        </Button>
                      </div>
                      <p className="text-sm">
                        {paymentMethod === 'online' ? 'پرداخت آنلاین (درگاه زرین‌پال)' : 'پرداخت در محل'}
                      </p>
                    </div>

                    {/* Shipping Method Summary */}
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold flex items-center gap-2">
                          <Truck className="h-5 w-5 text-delan-pink-500" />
                          روش ارسال
                        </h3>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => setStep(1)}
                        >
                          ویرایش
                        </Button>
                      </div>
                      <p className="text-sm">
                        {shippingMethod === 'express' ? 'ارسال فوری (۱-۲ روز کاری)' : 'ارسال عادی (۳-۵ روز کاری)'}
                      </p>
                    </div>

                    {/* Products Summary */}
                    <div>
                      <h3 className="font-semibold mb-4">محصولات ({cartItems.length})</h3>
                      <div className="space-y-4">
                        {cartItems.map((item) => (
                          <div key={item.id} className="flex items-center gap-4">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h4 className="font-medium text-sm">{item.name}</h4>
                              <p className="text-xs text-gray-600">تعداد: {item.quantity}</p>
                            </div>
                            <p className="font-semibold">
                              {(item.price * item.quantity).toLocaleString()} تومان
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-delan-pink-500 to-delan-purple-500"
                    >
                      {paymentMethod === 'online' ? 'انتقال به درگاه پرداخت' : 'ثبت نهایی سفارش'}
                    </Button>

                    <p className="text-center text-sm text-gray-600">
                      با ثبت سفارش، شرایط و قوانین فروشگاه Delan Beauty را می‌پذیرم
                    </p>
                  </CardContent>
                </Card>
              )}
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>خلاصه سفارش</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>جمع سبد خرید:</span>
                    <span>{subtotal.toLocaleString()} تومان</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>هزینه ارسال:</span>
                    <span>
                      {shippingCost === 0 ? (
                        <span className="text-green-600">رایگان</span>
                      ) : (
                        `${shippingCost.toLocaleString()} تومان`
                      )}
                    </span>
                  </div>

                  {paymentMethod === 'cod' && (
                    <div className="flex justify-between">
                      <span>هزینه پرداخت در محل:</span>
                      <span>۲۰,۰۰۰ تومان</span>
                    </div>
                  )}

                  <Separator />

                  <div className="flex justify-between text-lg font-bold">
                    <span>مبلغ قابل پرداخت:</span>
                    <span className="text-delan-pink-600">{total.toLocaleString()} تومان</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
