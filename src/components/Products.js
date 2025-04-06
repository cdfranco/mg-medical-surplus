// Force rebuild - Updated with search and filter functionality
import React, { useState, useMemo, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import SimpleImage from './SimpleImage';

// Lazy load the SearchAndFilter component
const SearchAndFilter = lazy(() => import('./SearchAndFilter'));

const ProductCard = React.memo(({ item, formatPrice }) => (
  <div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300'>
    <div className='relative h-64 overflow-hidden bg-white group'>
      <SimpleImage
        src={item.image}
        alt={item.name}
        className='w-full h-full object-contain bg-white p-4 transition-transform duration-300 group-hover:scale-125'
      />
      {item.price !== null && (
        <div className='absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full font-semibold'>
          {formatPrice(item.price)}
        </div>
      )}
    </div>
    <div className='p-6'>
      <h3 className='text-xl font-semibold text-secondary'>{item.name}</h3>
      <p className='mt-2 text-gray-600'>{item.description}</p>
      <Link
        to='/contact'
        state={{ equipmentType: item.name }}
        className='mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark'
      >
        {item.price === null ? 'Request Quote' : 'Contact Us'}
      </Link>
    </div>
  </div>
));

const CategorySection = React.memo(({ category, formatPrice }) => (
  <div key={category.category}>
    <h2 className='text-2xl font-bold text-secondary mb-8'>
      {category.category}
    </h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {category.items.map((item) => (
        <ProductCard key={item.name} item={item} formatPrice={formatPrice} />
      ))}
    </div>
  </div>
));

const products = [
  {
    category: 'Examination Tables',
    items: [
      {
        name: 'Midmark Ritter 104 Examination Table',
        description: 'Refurbished. Upholstery and color of your choice.',
        image: '/images/products/midmark-ritter-104.jpg',
        price: 600,
      },
      {
        name: 'Midmark Ritter 204 Examination Table',
        description: 'Refurbished. Upholstery and color of your choice.',
        image: '/images/products/midmark-ritter-204.jpg',
        price: 1200,
      },
    ],
  },
  {
    category: 'Diagnostic Equipment',
    items: [
      {
        name: 'GE Mac5500 EKG',
        description: 'Tested and includes a 30-day warranty.',
        image: '/images/products/ge-mac5500.jpg',
        price: 899,
      },
    ],
  },
  {
    category: 'Patient Care Equipment',
    items: [
      {
        name: 'Blood Drawing Chairs',
        description: 'Available in various styles and configurations.',
        image: '/images/equipment-3.jpg',
        price: null,
      },
      {
        name: 'Exam Lamps',
        description:
          'High-quality lighting solutions for medical examinations.',
        image: '/images/medical-equipment.jpg',
        price: null,
      },
      {
        name: 'Powered Procedure Chairs',
        description:
          'Designed for various medical procedures with adjustable settings.',
        image: '/images/equipment-3.jpg',
        price: null,
      },
    ],
  },
  {
    category: 'Monitoring Equipment',
    items: [
      {
        name: 'Baxter Welch Allyn Monitors',
        description:
          '6000 series touch screen monitors comes on a stand with all new accessories with a 30 day warranty.',
        image: '/images/products/welch-allyn-monitors.jpg',
        price: 1299,
      },
      {
        name: 'Patient & Vital Sign Monitors',
        description: 'Includes new accessories and a 30-day warranty.',
        image: '/images/product-monitor.jpg',
        price: 599,
      },
    ],
  },
];

function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  const categories = useMemo(() => {
    return products.map((category) => category.category);
  }, []);

  const filteredProducts = useMemo(() => {
    return products
      .map((category) => {
        const filteredItems = category.items.filter((item) => {
          const matchesSearch =
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase());

          const matchesCategory =
            selectedCategory === 'all' ||
            category.category === selectedCategory;

          let matchesPrice = true;
          if (selectedPriceRange !== 'all') {
            const [min, max] = selectedPriceRange.split('-').map(Number);
            if (max) {
              matchesPrice = item.price >= min && item.price < max;
            } else {
              matchesPrice = item.price >= min;
            }
          }

          return matchesSearch && matchesCategory && matchesPrice;
        });

        return {
          ...category,
          items: filteredItems,
        };
      })
      .filter((category) => category.items.length > 0);
  }, [searchTerm, selectedCategory, selectedPriceRange]);

  const handleSearch = (term, category, priceRange) => {
    setSearchTerm(term);
    setSelectedCategory(category);
    setSelectedPriceRange(priceRange);
  };

  const formatPrice = useMemo(() => {
    return (price) => {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(price);
    };
  }, []);

  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h1 className='text-4xl font-extrabold text-secondary sm:text-5xl'>
            Our Medical Equipment
          </h1>
          <p className='mt-4 text-xl text-gray-500'>
            Browse our extensive collection of quality medical equipment
          </p>
        </div>

        <Suspense
          fallback={
            <div className='w-full max-w-6xl mx-auto px-4 mb-8'>
              <div className='animate-pulse bg-white rounded-lg shadow-md p-4 h-16'></div>
            </div>
          }
        >
          <SearchAndFilter onFilter={handleSearch} categories={categories} />
        </Suspense>

        {/* Products Grid */}
        <div className='mt-12 space-y-16'>
          {filteredProducts.length === 0 ? (
            <div className='text-center py-12'>
              <p className='text-xl text-gray-500'>
                No products found matching your criteria.
              </p>
            </div>
          ) : (
            filteredProducts.map((category) => (
              <CategorySection
                key={category.category}
                category={category}
                formatPrice={formatPrice}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
