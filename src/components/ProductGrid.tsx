import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="container mx-auto px-4 mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {products.length === 0 && (
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <p className="text-gray-700">No products found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;