import React, { useState } from 'react';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import CategoryFilter from '../components/CategoryFilter';
import ProductGrid from '../components/ProductGrid';
import SearchBar from '../components/SearchBar';
import FeaturedProducts from '../components/FeaturedProducts';
import SizeGuide from '../components/SizeGuide';
import Footer from '../components/Footer';
import { products } from '../data/products';

const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products based on category and search query
  const filteredProducts = products.filter((product) => {
    // Filter by category
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    
    // Filter by search query
    const query = searchQuery.toLowerCase();
    const searchMatch = 
      !searchQuery || 
      product.name.toLowerCase().includes(query) || 
      product.description.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query);
    
    return categoryMatch && searchMatch;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroBanner />
        
        <FeaturedProducts products={products} />
        
        <div id="products" className="py-16">
          <SearchBar onSearch={setSearchQuery} />
          <CategoryFilter 
            selectedCategory={selectedCategory} 
            onCategoryChange={setSelectedCategory} 
          />
          <ProductGrid products={filteredProducts} />
        </div>
        
        <SizeGuide />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;