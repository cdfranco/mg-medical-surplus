import React from 'react';
import {
  BeakerIcon,
  ShieldCheckIcon,
  TruckIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

function About() {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <div className='bg-gradient-to-r from-primary/20 to-secondary/10 py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl font-extrabold text-primary sm:text-5xl md:text-6xl'>
              About MG Medical Surplus
            </h1>
            <p className='mt-6 text-xl text-gray-700 max-w-3xl mx-auto'>
              Your trusted partner in quality pre-owned medical equipment,
              serving healthcare facilities throughout Middle Georgia since
              2010.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className='bg-white py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl font-extrabold text-secondary'>
                Our Mission
              </h2>
              <p className='mt-4 text-lg text-gray-700'>
                At MG Medical Surplus, we're committed to providing healthcare
                facilities with high-quality, affordable medical equipment
                solutions. Our mission is to help healthcare providers deliver
                excellent patient care while managing their equipment costs
                effectively.
              </p>
              <div className='mt-8'>
                <h3 className='text-xl font-semibold text-primary'>
                  Why Choose Us?
                </h3>
                <ul className='mt-4 space-y-4'>
                  <li className='flex items-start'>
                    <span className='flex-shrink-0 h-6 w-6 text-primary'>
                      <ShieldCheckIcon />
                    </span>
                    <span className='ml-3 text-gray-700'>
                      Quality-assured medical equipment
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='flex-shrink-0 h-6 w-6 text-primary'>
                      <BeakerIcon />
                    </span>
                    <span className='ml-3 text-gray-700'>
                      Expert technical support
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='flex-shrink-0 h-6 w-6 text-primary'>
                      <TruckIcon />
                    </span>
                    <span className='ml-3 text-gray-700'>
                      Reliable delivery and installation
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className='relative h-96 rounded-2xl overflow-hidden shadow-xl'>
              <div className='absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent z-10'></div>
              <img
                src='https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=75&w=800'
                alt='Friendly Delivery Professional'
                className='absolute inset-0 w-full h-full object-cover object-center'
                loading='lazy'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className='bg-gradient-to-br from-secondary/5 via-primary/5 to-secondary/5 py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='text-3xl font-extrabold text-secondary'>
              Our Values
            </h2>
            <p className='mt-4 text-lg text-gray-700 max-w-3xl mx-auto'>
              Our core values guide everything we do, from customer service to
              equipment selection.
            </p>
          </div>
          <div className='mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            <div className='bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <div className='text-primary'>
                <UserGroupIcon className='h-8 w-8' />
              </div>
              <h3 className='mt-4 text-lg font-medium text-secondary'>
                Customer First
              </h3>
              <p className='mt-2 text-gray-700'>
                We prioritize our customers' needs and provide personalized
                solutions for their unique requirements.
              </p>
            </div>
            <div className='bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <div className='text-primary'>
                <ShieldCheckIcon className='h-8 w-8' />
              </div>
              <h3 className='mt-4 text-lg font-medium text-secondary'>
                Quality Assurance
              </h3>
              <p className='mt-2 text-gray-700'>
                Every piece of equipment undergoes rigorous testing and
                certification before delivery.
              </p>
            </div>
            <div className='bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <div className='text-primary'>
                <BeakerIcon className='h-8 w-8' />
              </div>
              <h3 className='mt-4 text-lg font-medium text-secondary'>
                Innovation
              </h3>
              <p className='mt-2 text-gray-700'>
                We continuously update our inventory with advanced medical
                equipment to meet evolving healthcare needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className='bg-white py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='text-3xl font-extrabold text-secondary'>Our Team</h2>
            <p className='mt-4 text-lg text-gray-700 max-w-3xl mx-auto'>
              Meet the dedicated professionals behind MG Medical Surplus
            </p>
          </div>
          <div className='mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3'>
            <div className='bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300'>
              <div className='relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white shadow-md'>
                <img
                  src='/images/team/hannah-johnson.jpg'
                  alt='Hannah Johnson - Founder & CEO'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='mt-6 text-center'>
                <h3 className='text-lg font-medium text-secondary'>
                  Hannah Johnson
                </h3>
                <p className='text-gray-700'>Founder & CEO</p>
              </div>
            </div>
            <div className='bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300'>
              <div className='relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white shadow-md'>
                <img
                  src='https://images.unsplash.com/photo-1612349317150-e413f6a5b16d'
                  alt='Team Member'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='mt-6 text-center'>
                <h3 className='text-lg font-medium text-secondary'>
                  Michael Chen
                </h3>
                <p className='text-gray-700'>Technical Director</p>
              </div>
            </div>
            <div className='bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300'>
              <div className='relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white shadow-md'>
                <img
                  src='https://images.unsplash.com/photo-1594824476967-48c8b964273f'
                  alt='Team Member'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='mt-6 text-center'>
                <h3 className='text-lg font-medium text-secondary'>
                  Emily Martinez
                </h3>
                <p className='text-gray-700'>Customer Relations Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
