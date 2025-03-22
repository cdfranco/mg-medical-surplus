// Force rebuild - Updated with search and filter functionality
import React, { useState, useMemo, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import SimpleImage from './SimpleImage';

// Lazy load the SearchAndFilter component
const SearchAndFilter = lazy(() => import('./SearchAndFilter'));

const ProductCard = React.memo(({ item, formatPrice }) => (
  <div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300'>
    <div className='relative h-48'>
      <SimpleImage
        src={item.image}
        alt={item.name}
        className='w-full h-full object-cover'
      />
      <div className='absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full font-semibold'>
        {formatPrice(item.price)}
      </div>
    </div>
    <div className='p-6'>
      <h3 className='text-xl font-semibold text-secondary'>{item.name}</h3>
      <p className='mt-2 text-gray-600'>{item.description}</p>
      <Link
        to='/contact'
        state={{ equipmentType: item.name }}
        className='mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark'
      >
        Request Quote
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
    category: 'Imaging Equipment',
    items: [
      {
        name: 'MRI Systems',
        description:
          'Advanced magnetic resonance imaging systems for detailed diagnostic imaging',
        image: '/images/product-mri.jpg',
        brand: '/images/brands/ge-healthcare.svg',
        price: 150000,
      },
      {
        name: 'Ultrasound Machines',
        description:
          'High-resolution ultrasound systems for various diagnostic applications',
        image: '/images/product-ultrasound.jpg',
        brand: '/images/brands/philips.svg',
        price: 45000,
      },
      {
        name: 'X-Ray Equipment',
        description:
          'Digital and analog X-ray systems for radiographic imaging',
        image: '/images/hero-medical-equipment.jpg',
        brand: '/images/brands/siemens.svg',
        price: 75000,
      },
    ],
  },
  {
    category: 'Patient Monitoring',
    items: [
      {
        name: 'Vital Signs Monitors',
        description:
          'Comprehensive patient monitoring systems for accurate vital sign tracking',
        image: '/images/product-monitor.jpg',
        brand: '/images/brands/medtronic.svg',
        price: 3500,
      },
      {
        name: 'ECG/EKG Machines',
        description: 'Advanced cardiac monitoring and diagnostic equipment',
        image: '/images/equipment-2.jpg',
        brand: '/images/brands/ge-healthcare.svg',
        price: 8500,
      },
      {
        name: 'Patient Telemetry Systems',
        description:
          'Wireless monitoring solutions for ambulatory patients allowing freedom of movement',
        image: '/images/equipment-3.jpg',
        brand: '/images/brands/philips.svg',
        price: 12000,
      },
    ],
  },
  {
    category: 'Surgical Equipment',
    items: [
      {
        name: 'Operating Tables',
        description:
          'Electric and hydraulic operating tables for surgical procedures',
        image: '/images/equipment-1.jpg',
        brand: '/images/brands/stryker.svg',
        price: 25000,
      },
      {
        name: 'Surgical Lights',
        description: 'LED surgical lighting systems for optimal visualization',
        image: '/images/medical-team.jpg',
        brand: '/images/brands/cardinal-health.svg',
        price: 15000,
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
          <SearchAndFilter
            onSearch={handleSearch}
            onFilter={handleSearch}
            categories={categories}
          />
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
