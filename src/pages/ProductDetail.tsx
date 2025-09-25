
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart, Share2, Minus, Plus, Star, Truck, Shield, RotateCcw } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    id: "1",
    name: 'رژ لب مات طولانی مدت - رنگ گیلاسی',
    price: 450000,
    originalPrice: 550000,
    images: [
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1583241800698-b7b5b7b7c3d1?w=600&h=600&fit=crop'
    ],
    rating: 4.5,
    reviewCount: 127,
    isNew: true,
    discount: 18,
    brand: 'Delan Beauty',
    category: 'آرایش لب',
    inStock: true,
    stockCount: 15,
    description: 'رژ لب مات با فرمولاسیون پیشرفته که تا ۱۲ ساعت بر روی لب‌ها می‌ماند. این محصول با ترکیبات مرطوب‌کننده طبیعی، احساس خشکی ایجاد نمی‌کند و رنگی یکنواخت و زیبا به لب‌هایتان می‌بخشد.',
    features: [
      'ماندگاری تا ۱۲ ساعت',
      'فرمولاسیون مرطوب‌کننده',
      'پوشش کامل و یکنواخت',
      'مقاوم در برابر آب',
      'حاوی ویتامین E',
      'بدون مواد مضر'
    ],
    ingredients: 'Dimethicone, Cyclopentasiloxane, Trimethylsiloxysilicate, Polyglyceryl-2 Triisostearate, Isododecane, Ceresin, Disteardimonium Hectorite, Kaolin, Tocopheryl Acetate',
    howToUse: 'ابتدا لب‌های خود را تمیز کرده و سپس رژ لب را از وسط لب شروع کرده و به سمت گوشه‌ها بکشید. برای رنگی پررنگ‌تر، دو لایه اعمال کنید.'
  };

  const relatedProducts = [
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

  const reviews = [
    {
      id: 1,
      name: 'مریم احمدی',
      rating: 5,
      date: '۱۴۰۲/۱۲/۱۵',
      comment: 'عالی بود! رنگش خیلی قشنگ و ماندگاریش فوق‌العاده است. حتماً دوباره خریداری می‌کنم.'
    },
    {
      id: 2,
      name: 'سارا محمدی',
      rating: 4,
      date: '۱۴۰۲/۱۲/۱۰',
      comment: 'کیفیت خوبی داره اما قیمتش کمی بالاست. اگر تخفیف بخورد حتماً می‌خرم.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-delan">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex text-sm text-gray-600">
            <a href="/" className="hover:text-delan-pink-600">خانه</a>
            <span className="mx-2">/</span>
            <a href="/shop" className="hover:text-delan-pink-600">فروشگاه</a>
            <span className="mx-2">/</span>
            <span className="text-gray-800">{product.name}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Product Images */}
          <div>
            <div className="mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              {product.isNew && (
                <Badge className="absolute top-4 right-4 bg-delan-purple-500">جدید</Badge>
              )}
              {product.discount && (
                <Badge className="absolute top-4 left-4 bg-red-500">%{product.discount}-</Badge>
              )}
            </div>
            
            <div className="flex space-x-2 space-x-reverse">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-delan-pink-500' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
              <p className="text-gray-600 mb-2">برند: {product.brand}</p>
              <div className="flex items-center mb-4">
                <div className="flex items-center ml-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="mr-2 text-gray-600">({product.reviewCount} نظر)</span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-3xl font-bold text-delan-pink-600">
                  {product.price.toLocaleString()} تومان
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    {product.originalPrice.toLocaleString()} تومان
                  </span>
                )}
              </div>
              {product.discount && (
                <p className="text-green-600 font-medium">
                  شما {(product.originalPrice! - product.price).toLocaleString()} تومان صرفه‌جویی کردید!
                </p>
              )}
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              {product.inStock ? (
                <div className="flex items-center text-green-600">
                  <div className="w-3 h-3 bg-green-600 rounded-full ml-2"></div>
                  <span>موجود در انبار ({product.stockCount} عدد)</span>
                </div>
              ) : (
                <div className="flex items-center text-red-600">
                  <div className="w-3 h-3 bg-red-600 rounded-full ml-2"></div>
                  <span>ناموجود</span>
                </div>
              )}
            </div>

            {/* Quantity & Add to Cart */}
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-medium">تعداد:</span>
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 min-w-[60px] text-center">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                    disabled={quantity >= product.stockCount}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button 
                  className="flex-1 bg-gradient-to-r from-delan-pink-500 to-delan-purple-500 hover:from-delan-pink-600 hover:to-delan-purple-600"
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="ml-2 h-5 w-5" />
                  افزودن به سبد خرید
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Features */}
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <Truck className="h-8 w-8 text-delan-pink-500 mb-2" />
                    <span className="text-sm font-medium">ارسال رایگان</span>
                    <span className="text-xs text-gray-600">برای خرید بالای ۵۰۰ هزار تومان</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Shield className="h-8 w-8 text-delan-purple-500 mb-2" />
                    <span className="text-sm font-medium">گارانتی اصالت</span>
                    <span className="text-xs text-gray-600">۱۰۰٪ اورجینال</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <RotateCcw className="h-8 w-8 text-delan-pink-500 mb-2" />
                    <span className="text-sm font-medium">امکان مرجوعی</span>
                    <span className="text-xs text-gray-600">تا ۷ روز پس از خرید</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="description">توضیحات</TabsTrigger>
              <TabsTrigger value="features">ویژگی‌ها</TabsTrigger>
              <TabsTrigger value="ingredients">ترکیبات</TabsTrigger>
              <TabsTrigger value="reviews">نظرات ({product.reviewCount})</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">توضیحات محصول</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{product.description}</p>
                  <h4 className="font-medium mb-2">نحوه استفاده:</h4>
                  <p className="text-gray-700">{product.howToUse}</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="features" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">ویژگی‌های محصول</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-delan-pink-500 rounded-full ml-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="ingredients" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">ترکیبات</h3>
                  <p className="text-gray-700 leading-relaxed">{product.ingredients}</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">نظرات مشتریان</h3>
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b pb-6 last:border-b-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <span className="font-medium">{review.name}</span>
                            <div className="flex items-center mr-4">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="mt-6">
                    نمایش همه نظرات
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            محصولات مشابه
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
