import React, { useState } from 'react';
import { FiSearch, FiFilter } from 'react-icons/fi';

const SearchAndFilter = ({ onSearch, onFilter, categories }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value, selectedCategory, priceRange);
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onFilter(searchTerm, category, priceRange);
  };

  const handlePriceRangeChange = (e) => {
    const range = e.target.value;
    setPriceRange(range);
    onFilter(searchTerm, selectedCategory, range);
  };

  return (
    <div className='w-full max-w-6xl mx-auto px-4 mb-8'>
      <div className='bg-white rounded-lg shadow-md p-4'>
        {/* Search Bar */}
        <div className='relative'>
          <input
            type='text'
            placeholder='Search medical equipment...'
            value={searchTerm}
            onChange={handleSearch}
            className='w-full px-4 py-3 pl-12 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200'
          />
          <FiSearch className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl' />
          <button
            onClick={() => setShowFilters(!showFilters)}
            className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors duration-200'
          >
            <FiFilter className='text-xl' />
          </button>
        </div>

        {/* Filters */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 ${
            showFilters ? 'block' : 'hidden'
          }`}
        >
          {/* Category Filter */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className='w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200'
            >
              <option value='all'>All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range Filter */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Price Range
            </label>
            <select
              value={priceRange}
              onChange={handlePriceRangeChange}
              className='w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200'
            >
              <option value='all'>All Prices</option>
              <option value='0-1000'>Under $1,000</option>
              <option value='1000-5000'>$1,000 - $5,000</option>
              <option value='5000-10000'>$5,000 - $10,000</option>
              <option value='10000+'>$10,000+</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;
