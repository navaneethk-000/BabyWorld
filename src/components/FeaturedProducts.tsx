import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }) => {
  // Filter to only featured products
  const featuredProducts = products.filter(product => product.featured);
  
  if (featuredProducts.length === 0) return null;

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Featured Products</h2>
      <p className="text-gray-600 text-center mb-8">Our most popular styles for your little one</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;