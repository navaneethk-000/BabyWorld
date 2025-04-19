import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="container mx-auto px-4 my-8">
      <form onSubmit={handleSubmit} className="relative max-w-xl mx-auto">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for baby dresses, accessories..."
          className="w-full px-4 py-3 pl-12 rounded-full border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all outline-none"
        />
        <button
          type="submit"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
        >
          <Search size={20} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;