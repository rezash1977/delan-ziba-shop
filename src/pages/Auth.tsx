
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Eye, EyeOff, Mail, Lock, User, Phone, ArrowRight } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';

const Auth = () => {
  const navigate = useNavigate();
  const { user, signIn, signUp } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Login form state
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  // Signup form state
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await signIn(loginData.email, loginData.password);
      
      if (error) {
        if (error.message.includes('Invalid login credentials')) {
          toast.error('ایمیل یا رمز عبور اشتباه است');
        } else {
          toast.error('خطا در ورود به سیستم');
        }
      } else {
        toast.success('با موفقیت وارد شدید');
        navigate('/');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('خطا در ورود به سیستم');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (signupData.password !== signupData.confirmPassword) {
      toast.error('رمز عبور و تکرار آن یکسان نیستند');
      return;
    }

    if (signupData.password.length < 6) {
      toast.error('رمز عبور باید حداقل ۶ کاراکتر باشد');
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await signUp(
        signupData.email, 
        signupData.password, 
        signupData.firstName, 
        signupData.lastName
      );
      
      if (error) {
        if (error.message.includes('User already registered')) {
          toast.error('این ایمیل قبلاً ثبت شده است');
        } else {
          toast.error('خطا در ثبت‌نام');
        }
      } else {
        toast.success('ثبت‌نام با موفقیت انجام شد. لطفاً ایمیل خود را چک کنید.');
      }
    } catch (error) {
      console.error('Signup error:', error);
      toast.error('خطا در ثبت‌نام');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-delan">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Link to="/" className="flex items-center text-delan-pink-600 hover:text-delan-pink-700">
            <ArrowRight className="h-5 w-5 ml-2" />
            بازگشت به صفحه اصلی
          </Link>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-800">
                خوش آمدید به Delan Beauty
              </CardTitle>
              <p className="text-gray-600 mt-2">
                برای ادامه، وارد حساب کاربری خود شوید
              </p>
            </CardHeader>
            
            <CardContent>
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">ورود</TabsTrigger>
                  <TabsTrigger value="signup">ثبت‌نام</TabsTrigger>
                </TabsList>
                
                {/* Login Tab */}
                <TabsContent value="login">
                  <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                      <Label htmlFor="login-email">ایمیل</Label>
                      <div className="relative">
                        <Input
                          id="login-email"
                          type="email"
                          value={loginData.email}
                          onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                          className="pr-10"
                          placeholder="example@email.com"
                          required
                        />
                        <Mail className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="login-password">رمز عبور</Label>
                      <div className="relative">
                        <Input
                          id="login-password"
                          type={showPassword ? 'text' : 'password'}
                          value={loginData.password}
                          onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                          className="pr-10 pl-10"
                          placeholder="رمز عبور خود را وارد کنید"
                          required
                        />
                        <Lock className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute left-3 top-2.5"
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5 text-gray-400" />
                          ) : (
                            <Eye className="h-5 w-5 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <Label className="flex items-center text-sm">
                        <input type="checkbox" className="ml-2" />
                        مرا به خاطر بسپار
                      </Label>
                      <Link to="/forgot-password" className="text-sm text-delan-pink-600 hover:text-delan-pink-700">
                        فراموشی رمز عبور
                      </Link>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-delan-pink-500 to-delan-purple-500"
                      disabled={isLoading}
                    >
                      {isLoading ? 'در حال ورود...' : 'ورود'}
                    </Button>
                  </form>
                </TabsContent>

                {/* Signup Tab */}
                <TabsContent value="signup">
                  <form onSubmit={handleSignup} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">نام</Label>
                        <div className="relative">
                          <Input
                            id="firstName"
                            type="text"
                            value={signupData.firstName}
                            onChange={(e) => setSignupData({...signupData, firstName: e.target.value})}
                            className="pr-10"
                            placeholder="نام"
                            required
                          />
                          <User className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="lastName">نام خانوادگی</Label>
                        <Input
                          id="lastName"
                          type="text"
                          value={signupData.lastName}
                          onChange={(e) => setSignupData({...signupData, lastName: e.target.value})}
                          placeholder="نام خانوادگی"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="signup-email">ایمیل</Label>
                      <div className="relative">
                        <Input
                          id="signup-email"
                          type="email"
                          value={signupData.email}
                          onChange={(e) => setSignupData({...signupData, email: e.target.value})}
                          className="pr-10"
                          placeholder="example@email.com"
                          required
                        />
                        <Mail className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone">شماره تلفن</Label>
                      <div className="relative">
                        <Input
                          id="phone"
                          type="tel"
                          value={signupData.phone}
                          onChange={(e) => setSignupData({...signupData, phone: e.target.value})}
                          className="pr-10"
                          placeholder="09123456789"
                        />
                        <Phone className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="signup-password">رمز عبور</Label>
                      <div className="relative">
                        <Input
                          id="signup-password"
                          type={showPassword ? 'text' : 'password'}
                          value={signupData.password}
                          onChange={(e) => setSignupData({...signupData, password: e.target.value})}
                          className="pr-10 pl-10"
                          placeholder="رمز عبور (حداقل ۶ کاراکتر)"
                          required
                        />
                        <Lock className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute left-3 top-2.5"
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5 text-gray-400" />
                          ) : (
                            <Eye className="h-5 w-5 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="confirmPassword">تکرار رمز عبور</Label>
                      <div className="relative">
                        <Input
                          id="confirmPassword"
                          type={showPassword ? 'text' : 'password'}
                          value={signupData.confirmPassword}
                          onChange={(e) => setSignupData({...signupData, confirmPassword: e.target.value})}
                          className="pr-10"
                          placeholder="تکرار رمز عبور"
                          required
                        />
                        <Lock className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                      </div>
                    </div>

                    <div className="flex items-center">
                      <input type="checkbox" className="ml-2" required />
                      <Label className="text-sm">
                        <Link to="/terms" className="text-delan-pink-600 hover:text-delan-pink-700">قوانین و مقررات</Link> را مطالعه کرده و قبول دارم
                      </Label>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-delan-pink-500 to-delan-purple-500"
                      disabled={isLoading}
                    >
                      {isLoading ? 'در حال ثبت‌نام...' : 'ثبت‌نام'}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>

              <Separator className="my-6" />

              <div className="text-center text-sm text-gray-600">
                با ورود یا ثبت‌نام، شرایط استفاده و حریم خصوصی Delan Beauty را می‌پذیرید
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Auth;
