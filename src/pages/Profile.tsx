
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { User, Package, Heart, MapPin, CreditCard, Bell, Lock, Edit, Eye } from 'lucide-react';

const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: 'مریم',
    lastName: 'احمدی',
    email: 'maryam@example.com',
    phone: '۰۹۱۲۳۴۵۶۷۸۹',
    birthDate: '۱۳۷۰/۰۵/۱۵'
  });

  const orders = [
    {
      id: 'ORD-001',
      date: '۱۴۰۲/۱۲/۲۰',
      status: 'تحویل داده شده',
      statusColor: 'bg-green-500',
      total: 1340000,
      items: [
        { name: 'رژ لب مات طولانی مدت', quantity: 2, price: 450000 },
        { name: 'پالت سایه چشم', quantity: 1, price: 890000 }
      ]
    },
    {
      id: 'ORD-002',
      date: '۱۴۰۲/۱۲/۱۸',
      status: 'ارسال شده',
      statusColor: 'bg-blue-500',
      total: 720000,
      items: [
        { name: 'کرم پودر کالاژن دار', quantity: 1, price: 720000 }
      ]
    },
    {
      id: 'ORD-003',
      date: '۱۴۰۲/۱۲/۱۵',
      status: 'در حال پردازش',
      statusColor: 'bg-yellow-500',
      total: 380000,
      items: [
        { name: 'ماسکارا حجم دهنده', quantity: 1, price: 380000 }
      ]
    }
  ];

  const wishlistItems = [
    {
      id: 1,
      name: 'عطر زنانه Delan Rose',
      price: 1200000,
      originalPrice: 1400000,
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=150&h=150&fit=crop',
      inStock: true
    },
    {
      id: 2,
      name: 'کرم مرطوب کننده روزانه',
      price: 650000,
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=150&h=150&fit=crop',
      inStock: true
    }
  ];

  const addresses = [
    {
      id: 1,
      title: 'آدرس منزل',
      fullName: 'مریم احمدی',
      phone: '۰۹۱۲۳۴۵۶۷۸۹',
      address: 'تهران، خیابان ولیعصر، کوچه گلستان، پلاک ۱۲۳',
      postalCode: '۱۹۱۶۸۱۳۴۵۶',
      isDefault: true
    },
    {
      id: 2,
      title: 'آدرس محل کار',
      fullName: 'مریم احمدی',
      phone: '۰۹۱۲۳۴۵۶۷۸۹',
      address: 'تهران، خیابان کریمخان زند، ساختمان تجاری پارس، طبقه ۵',
      postalCode: '۱۵۱۴۷۴۳۹۸۱',
      isDefault: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-delan">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Profile Header */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-6">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder-avatar.jpg" />
                  <AvatarFallback className="text-lg bg-delan-pink-100 text-delan-pink-600">
                    م.ا
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-gray-800 mb-2">
                    {userInfo.firstName} {userInfo.lastName}
                  </h1>
                  <p className="text-gray-600 mb-2">{userInfo.email}</p>
                  <div className="flex items-center gap-4">
                    <Badge variant="secondary" className="bg-delan-purple-100 text-delan-purple-700">
                      مشتری ویژه
                    </Badge>
                    <span className="text-sm text-gray-500">عضو از: آذر ۱۴۰۲</span>
                  </div>
                </div>
                <Button variant="outline" className="gap-2">
                  <Edit className="h-4 w-4" />
                  ویرایش پروفایل
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <Tabs defaultValue="orders" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="orders" className="gap-2">
                <Package className="h-4 w-4" />
                سفارش‌ها
              </TabsTrigger>
              <TabsTrigger value="wishlist" className="gap-2">
                <Heart className="h-4 w-4" />
                علاقه‌مندی‌ها
              </TabsTrigger>
              <TabsTrigger value="addresses" className="gap-2">
                <MapPin className="h-4 w-4" />
                آدرس‌ها
              </TabsTrigger>
              <TabsTrigger value="account" className="gap-2">
                <User className="h-4 w-4" />
                حساب کاربری
              </TabsTrigger>
              <TabsTrigger value="settings" className="gap-2">
                <Bell className="h-4 w-4" />
                تنظیمات
              </TabsTrigger>
            </TabsList>

            {/* Orders Tab */}
            <TabsContent value="orders" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>سفارش‌های من</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {orders.map((order) => (
                      <div key={order.id} className="border rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <div>
                              <h3 className="font-semibold">سفارش #{order.id}</h3>
                              <p className="text-sm text-gray-600">{order.date}</p>
                            </div>
                            <Badge className={`${order.statusColor} text-white`}>
                              {order.status}
                            </Badge>
                          </div>
                          <div className="text-left">
                            <p className="font-semibold text-lg">
                              {order.total.toLocaleString()} تومان
                            </p>
                            <Button variant="outline" size="sm" className="mt-2 gap-2">
                              <Eye className="h-4 w-4" />
                              مشاهده جزییات
                            </Button>
                          </div>
                        </div>
                        
                        <Separator className="my-4" />
                        
                        <div className="space-y-2">
                          <h4 className="font-medium">محصولات:</h4>
                          {order.items.map((item, index) => (
                            <div key={index} className="flex justify-between text-sm">
                              <span>{item.name} × {item.quantity}</span>
                              <span>{item.price.toLocaleString()} تومان</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Wishlist Tab */}
            <TabsContent value="wishlist" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>محصولات مورد علاقه</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {wishlistItems.map((item) => (
                      <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-800 mb-1">{item.name}</h3>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-lg font-bold text-delan-pink-600">
                              {item.price.toLocaleString()} تومان
                            </span>
                            {item.originalPrice && (
                              <span className="text-sm text-gray-500 line-through">
                                {item.originalPrice.toLocaleString()}
                              </span>
                            )}
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" className="bg-gradient-to-r from-delan-pink-500 to-delan-purple-500">
                              افزودن به سبد
                            </Button>
                            <Button variant="outline" size="sm">
                              حذف
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Addresses Tab */}
            <TabsContent value="addresses" className="mt-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>آدرس‌های من</CardTitle>
                  <Button className="bg-gradient-to-r from-delan-pink-500 to-delan-purple-500">
                    افزودن آدرس جدید
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {addresses.map((address) => (
                      <div key={address.id} className="border rounded-lg p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-semibold">{address.title}</h3>
                              {address.isDefault && (
                                <Badge variant="secondary">آدرس پیش‌فرض</Badge>
                              )}
                            </div>
                            <p className="text-gray-700 mb-1">{address.fullName}</p>
                            <p className="text-gray-700 mb-1">{address.phone}</p>
                            <p className="text-gray-700 mb-1">{address.address}</p>
                            <p className="text-gray-600">کد پستی: {address.postalCode}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">ویرایش</Button>
                            <Button variant="outline" size="sm" className="text-red-600">حذف</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Account Tab */}
            <TabsContent value="account" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>اطلاعات حساب کاربری</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName">نام</Label>
                        <Input
                          id="firstName"
                          value={userInfo.firstName}
                          onChange={(e) => setUserInfo({...userInfo, firstName: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">نام خانوادگی</Label>
                        <Input
                          id="lastName"
                          value={userInfo.lastName}
                          onChange={(e) => setUserInfo({...userInfo, lastName: e.target.value})}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">ایمیل</Label>
                      <Input
                        id="email"
                        type="email"
                        value={userInfo.email}
                        onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">شماره تلفن</Label>
                      <Input
                        id="phone"
                        value={userInfo.phone}
                        onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                      />
                    </div>

                    <div>
                      <Label htmlFor="birthDate">تاریخ تولد</Label>
                      <Input
                        id="birthDate"
                        value={userInfo.birthDate}
                        onChange={(e) => setUserInfo({...userInfo, birthDate: e.target.value})}
                      />
                    </div>

                    <Button className="bg-gradient-to-r from-delan-pink-500 to-delan-purple-500">
                      ذخیره تغییرات
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="mt-6">
              <div className="space-y-6">
                
                {/* Change Password */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lock className="h-5 w-5" />
                      تغییر رمز عبور
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div>
                        <Label htmlFor="currentPassword">رمز عبور فعلی</Label>
                        <Input id="currentPassword" type="password" />
                      </div>
                      <div>
                        <Label htmlFor="newPassword">رمز عبور جدید</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                      <div>
                        <Label htmlFor="confirmNewPassword">تکرار رمز عبور جدید</Label>
                        <Input id="confirmNewPassword" type="password" />
                      </div>
                      <Button variant="outline">تغییر رمز عبور</Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Notifications */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="h-5 w-5" />
                      تنظیمات اعلان‌ها
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span>اعلان سفارش‌ها</span>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>اعلان تخفیف‌ها</span>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>اعلان محصولات جدید</span>
                        <input type="checkbox" className="rounded" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
