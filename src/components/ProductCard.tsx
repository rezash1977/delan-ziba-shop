
import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/hooks/useCart';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';

interface ProductCardProps {
  id: string; // Changed from number to string for UUID
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  isNew?: boolean;
  discount?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  isNew,
  discount
}) => {
  const { addToCart } = useCart();
  const { user } = useAuth();

  const handleAddToCart = () => {
    if (!user) {
      toast.error('برای افزودن به سبد خرید وارد شوید');
      return;
    }
    addToCart.mutate({ productId: id });
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          {isNew && (
            <span className="bg-delan-purple-500 text-white text-xs px-2 py-1 rounded-full">
              جدید
            </span>
          )}
          {discount && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              %{discount}-
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="absolute top-2 left-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="sm" variant="secondary" className="rounded-full p-2">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-medium text-gray-800 mb-2 line-clamp-2">
          {name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < rating ? "★" : "☆"}>
                ★
              </span>
            ))}
          </div>
          <span className="text-xs text-gray-500 mr-2">({rating})</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-delan-pink-600">
              {price.toLocaleString()} تومان
            </span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>

        {/* Add to cart button */}
        <Button 
          className="w-full bg-gradient-to-r from-delan-pink-500 to-delan-purple-500 hover:from-delan-pink-600 hover:to-delan-purple-600 text-white"
          size="sm"
          onClick={handleAddToCart}
          disabled={addToCart.isPending}
        >
          <ShoppingCart className="ml-2 h-4 w-4" />
          {addToCart.isPending ? 'در حال افزودن...' : 'افزودن به سبد خرید'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
