import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    category: 'Imaging Equipment',
    items: [
      {
        name: 'MRI Systems',
        description:
          'Advanced magnetic resonance imaging systems for detailed diagnostic imaging',
        image:
          'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80',
      },
      {
        name: 'Ultrasound Machines',
        description:
          'High-resolution ultrasound systems for various diagnostic applications',
        image:
          'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80',
      },
      {
        name: 'X-Ray Equipment',
        description:
          'Digital and analog X-ray systems for radiographic imaging',
        image:
          'https://images.unsplash.com/photo-1584556812952-905ffd0c611a?auto=format&fit=crop&q=80',
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
        image:
          'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80',
      },
      {
        name: 'ECG/EKG Machines',
        description: 'Advanced cardiac monitoring and diagnostic equipment',
        image:
          'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&q=80',
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
        image:
          'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&q=80',
      },
      {
        name: 'Surgical Lights',
        description: 'LED surgical lighting systems for optimal visualization',
        image:
          'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80',
      },
    ],
  },
];

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((category) => category.category === selectedCategory);

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

        {/* Category Filter */}
        <div className='mt-8 flex justify-center space-x-4'>
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-md ${
              selectedCategory === 'all'
                ? 'bg-primary text-white'
                : 'bg-white text-secondary hover:bg-gray-100'
            }`}
          >
            All Categories
          </button>
          {products.map((category) => (
            <button
              key={category.category}
              onClick={() => setSelectedCategory(category.category)}
              className={`px-4 py-2 rounded-md ${
                selectedCategory === category.category
                  ? 'bg-primary text-white'
                  : 'bg-white text-secondary hover:bg-gray-100'
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className='mt-12 space-y-16'>
          {filteredProducts.map((category) => (
            <div key={category.category}>
              <h2 className='text-2xl font-bold text-secondary mb-8'>
                {category.category}
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300'
                  >
                    <div className='relative h-48'>
                      <img
                        src={item.image}
                        alt={item.name}
                        className='w-full h-full object-cover'
                      />
                    </div>
                    <div className='p-6'>
                      <h3 className='text-xl font-semibold text-secondary'>
                        {item.name}
                      </h3>
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
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
