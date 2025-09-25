
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { useAuth } from '@/hooks/useAuth';

const Cart = () => {
  const { user } = useAuth();
  const { cartItems, isLoading, updateQuantity, removeFromCart, subtotal, itemCount } = useCart();

  const shipping = subtotal > 500000 ? 0 : 50000;
  const discount = 0; // Apply coupon discount here
  const total = subtotal + shipping - discount;

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-delan">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <ShoppingBag className="mx-auto h-24 w-24 text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">برای مشاهده سبد خرید وارد شوید</h2>
            <Link to="/auth">
              <Button className="bg-gradient-to-r from-delan-pink-500 to-delan-purple-500">
                ورود / ثبت‌نام
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-delan">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <p>در حال بارگذاری...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-delan">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <ShoppingBag className="mx-auto h-24 w-24 text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">سبد خرید شما خالی است</h2>
            <p className="text-gray-600 mb-8">محصولات مورد علاقه خود را به سبد خرید اضافه کنید</p>
            <Link to="/shop">
              <Button className="bg-gradient-to-r from-delan-pink-500 to-delan-purple-500">
                ادامه خرید
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-delan">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Link to="/shop" className="flex items-center text-delan-pink-600 hover:text-delan-pink-700">
            <ArrowRight className="h-5 w-5 ml-2" />
            ادامه خرید
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-8">سبد خرید</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>محصولات انتخابی ({itemCount} مورد)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                      <img
                        src={item.products.image_url || 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=150&h=150&fit=crop'}
                        alt={item.products.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-800 mb-1">{item.products.name}</h3>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-lg font-bold text-delan-pink-600">
                            {item.products.price.toLocaleString()} تومان
                          </span>
                          {item.products.original_price && (
                            <span className="text-sm text-gray-500 line-through">
                              {item.products.original_price.toLocaleString()}
                            </span>
                          )}
                        </div>
                        
                        {!item.products.in_stock && (
                          <div className="text-red-600 text-sm font-medium">ناموجود</div>
                        )}
                      </div>

                      <div className="flex items-center gap-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center border rounded-lg">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity.mutate({ itemId: item.id, quantity: item.quantity - 1 })}
                            disabled={!item.products.in_stock}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="px-4 py-2 min-w-[60px] text-center">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity.mutate({ itemId: item.id, quantity: item.quantity + 1 })}
                            disabled={!item.products.in_stock}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>

                        {/* Remove Button */}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart.mutate(item.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Coupon Code */}
            <Card className="mt-6">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">کد تخفیف</h3>
                <div className="flex gap-4">
                  <Input
                    placeholder="کد تخفیف خود را وارد کنید"
                    className="flex-1"
                  />
                  <Button variant="outline">اعمال کد</Button>
                </div>
              </CardContent>
            </Card>
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
                    <span>جمع کل محصولات:</span>
                    <span>{subtotal.toLocaleString()} تومان</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>هزینه ارسال:</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-green-600">رایگان</span>
                      ) : (
                        `${shipping.toLocaleString()} تومان`
                      )}
                    </span>
                  </div>

                  {shipping === 0 && (
                    <div className="text-sm text-green-600 bg-green-50 p-3 rounded-lg">
                      🎉 ارسال رایگان برای شما فعال شد!
                    </div>
                  )}

                  {shipping > 0 && (
                    <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                      برای ارسال رایگان {(500000 - subtotal).toLocaleString()} تومان دیگر خرید کنید
                    </div>
                  )}

                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>تخفیف:</span>
                      <span>-{discount.toLocaleString()} تومان</span>
                    </div>
                  )}

                  <Separator />

                  <div className="flex justify-between text-lg font-bold">
                    <span>مبلغ قابل پرداخت:</span>
                    <span className="text-delan-pink-600">{total.toLocaleString()} تومان</span>
                  </div>

                  <Link to="/checkout">
                    <Button className="w-full bg-gradient-to-r from-delan-pink-500 to-delan-purple-500 hover:from-delan-pink-600 hover:to-delan-purple-600">
                      ادامه فرآیند خرید
                    </Button>
                  </Link>

                  <div className="text-center text-sm text-gray-600 mt-4">
                    پرداخت آنلاین امن با درگاه زرین‌پال
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

export default Cart;
