import React, { useState } from 'react';
import { Product } from '../types';
import { sendWhatsAppOrder } from '../utils/whatsapp';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [isHovered, setIsHovered] = useState(false);

  const handleOrderClick = () => {
    sendWhatsAppOrder(product, selectedSize);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative h-64 overflow-hidden bg-gray-200">
        <img 
          src={product.image} 
          alt={product.name} 
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        
        {/* Wishlist button */}
        <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-pink-100 transition-colors">
          <Heart size={18} className="text-gray-600 hover:text-pink-500" />
        </button>
        
        {/* Featured badge */}
        {product.featured && (
          <div className="absolute top-2 left-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>
      
      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
        <p className="text-pink-600 font-medium mb-2">{formatPrice(product.price)}</p>
        
        {/* Size selector */}
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">Size:</label>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-2 py-1 text-xs rounded border ${
                  selectedSize === size
                    ? 'bg-pink-500 text-white border-pink-500'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-pink-300'
                } transition-colors`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        
        {/* Order button */}
        <button
          onClick={handleOrderClick}
          className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition-colors transform hover:-translate-y-1 hover:shadow-md transition-transform"
        >
          Order via WhatsApp
        </button>
      </div>
    </div>
  );
};

export default ProductCard;