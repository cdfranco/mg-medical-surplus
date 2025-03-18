import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Products from './components/Products';
import Contact from './components/Contact';
import {
  BeakerIcon,
  ShieldCheckIcon,
  TruckIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className='bg-gradient-to-r from-blue-50 to-blue-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div className='text-left'>
              <h1 className='text-4xl tracking-tight font-extrabold text-secondary sm:text-5xl md:text-6xl'>
                Quality Medical Equipment
                <span className='block text-primary mt-2'>
                  For Healthcare Facilities
                </span>
              </h1>
              <p className='mt-6 text-lg text-gray-600 sm:text-xl max-w-xl'>
                Your trusted source for quality pre-owned medical equipment.
                Serving hospitals, surgery centers, clinics, and doctors'
                offices throughout Middle Georgia, including Augusta, Macon,
                Sandersville, Eatonton, and Greensboro.
              </p>
              <div className='mt-8 flex flex-col sm:flex-row gap-4'>
                <a
                  href='#contact'
                  className='inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out'
                >
                  Sell Equipment
                </a>
                <Link
                  to='/products'
                  className='inline-flex items-center justify-center px-8 py-3 border border-primary text-base font-medium rounded-md text-primary bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out'
                >
                  View Inventory
                </Link>
              </div>
            </div>
            <div className='relative h-[500px] rounded-xl overflow-hidden shadow-2xl'>
              <div className='absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent z-10'></div>
              <img
                src='https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80'
                alt='Happy Female Medical Professional'
                className='absolute inset-0 w-full h-full object-cover'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className='bg-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='text-3xl font-extrabold text-secondary sm:text-4xl'>
              Featured Medical Equipment
            </h2>
            <p className='mt-4 text-lg text-gray-500'>
              Discover our range of state-of-the-art medical equipment
            </p>
          </div>
          <div className='mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            <div className='bg-gray-50 rounded-lg overflow-hidden shadow-md'>
              <img
                src='https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80'
                alt='MRI Machine'
                className='w-full h-48 object-cover'
              />
              <div className='p-6'>
                <h3 className='text-lg font-medium text-secondary'>
                  MRI Systems
                </h3>
                <p className='mt-2 text-gray-500'>
                  Advanced imaging solutions with superior diagnostic
                  capabilities
                </p>
              </div>
            </div>
            <div className='bg-gray-50 rounded-lg overflow-hidden shadow-md'>
              <img
                src='https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80'
                alt='Ultrasound System'
                className='w-full h-48 object-cover'
              />
              <div className='p-6'>
                <h3 className='text-lg font-medium text-secondary'>
                  Ultrasound Systems
                </h3>
                <p className='mt-2 text-gray-500'>
                  High-resolution imaging for precise diagnostics
                </p>
              </div>
            </div>
            <div className='bg-gray-50 rounded-lg overflow-hidden shadow-md'>
              <img
                src='https://images.unsplash.com/photo-1530026405186-ed1f139313f8'
                alt='Patient Monitor'
                className='w-full h-48 object-cover'
              />
              <div className='p-6'>
                <h3 className='text-lg font-medium text-secondary'>
                  Patient Monitoring
                </h3>
                <p className='mt-2 text-gray-500'>
                  Comprehensive vital signs monitoring solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
            <div className='text-center'>
              <div className='flex justify-center'>
                <BeakerIcon className='h-12 w-12 text-primary' />
              </div>
              <h3 className='mt-4 text-lg font-medium text-secondary'>
                Latest Technology
              </h3>
              <p className='mt-2 text-gray-500'>
                Cutting-edge medical equipment with advanced features
              </p>
            </div>
            <div className='text-center'>
              <div className='flex justify-center'>
                <ShieldCheckIcon className='h-12 w-12 text-primary' />
              </div>
              <h3 className='mt-4 text-lg font-medium text-secondary'>
                Quality Assured
              </h3>
              <p className='mt-2 text-gray-500'>
                All products meet strict quality and safety standards
              </p>
            </div>
            <div className='text-center'>
              <div className='flex justify-center'>
                <TruckIcon className='h-12 w-12 text-primary' />
              </div>
              <h3 className='mt-4 text-lg font-medium text-secondary'>
                Fast Delivery
              </h3>
              <p className='mt-2 text-gray-500'>
                Quick shipping and professional installation
              </p>
            </div>
            <div className='text-center'>
              <div className='flex justify-center'>
                <UserGroupIcon className='h-12 w-12 text-primary' />
              </div>
              <h3 className='mt-4 text-lg font-medium text-secondary'>
                Expert Support
              </h3>
              <p className='mt-2 text-gray-500'>
                24/7 technical support and maintenance
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className='bg-gray-50 py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div className='relative h-64 sm:h-72 md:h-96 lg:h-full'>
              <div className='absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent z-10'></div>
              <img
                src='https://images.unsplash.com/photo-1559839734-2b71ea197ec2'
                alt='Confident Medical Professional'
                className='absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl'
              />
            </div>
            <div>
              <h2 className='text-3xl font-extrabold text-secondary sm:text-4xl'>
                Trusted by Healthcare Professionals
              </h2>
              <p className='mt-4 text-lg text-gray-500'>
                With over two decades of experience in medical equipment
                solutions, we've earned the trust of healthcare professionals
                worldwide. Our commitment to quality and service excellence
                makes us the preferred choice for medical facilities.
              </p>
              <div className='mt-8 grid grid-cols-2 gap-4'>
                <div className='bg-white p-4 rounded-lg shadow'>
                  <div className='text-2xl font-bold text-primary'>2000+</div>
                  <div className='text-gray-500'>Satisfied Clients</div>
                </div>
                <div className='bg-white p-4 rounded-lg shadow'>
                  <div className='text-2xl font-bold text-primary'>24/7</div>
                  <div className='text-gray-500'>Technical Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className='bg-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='text-3xl font-extrabold text-secondary sm:text-4xl'>
              What Our Clients Say
            </h2>
            <p className='mt-4 text-lg text-gray-500'>
              Trusted by healthcare professionals across Georgia
            </p>
          </div>
          <div className='mt-12 grid grid-cols-1 gap-8 md:grid-cols-3'>
            {/* Testimonial 1 */}
            <div className='bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <div className='flex items-center mb-6'>
                <img
                  className='h-12 w-12 rounded-full object-cover'
                  src='https://images.unsplash.com/photo-1622253692010-333f2da6031d'
                  alt='Doctor'
                />
                <div className='ml-4'>
                  <p className='text-lg font-semibold text-secondary'>
                    Dr. Sarah Johnson
                  </p>
                  <p className='text-gray-500'>
                    Medical Director, Augusta Clinic
                  </p>
                </div>
              </div>
              <p className='text-gray-600 italic'>
                "The quality of their refurbished medical equipment is
                outstanding. Their attention to detail and professional service
                has made them our go-to supplier."
              </p>
              <div className='mt-4 flex text-primary'>
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className='bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <div className='flex items-center mb-6'>
                <img
                  className='h-12 w-12 rounded-full object-cover'
                  src='https://images.unsplash.com/photo-1612349317150-e413f6a5b16d'
                  alt='Healthcare Professional'
                />
                <div className='ml-4'>
                  <p className='text-lg font-semibold text-secondary'>
                    Michael Chen
                  </p>
                  <p className='text-gray-500'>
                    Operations Manager, Macon Medical Center
                  </p>
                </div>
              </div>
              <p className='text-gray-600 italic'>
                "Their technical support team is exceptional. They've helped us
                maintain our equipment efficiently, saving us both time and
                resources."
              </p>
              <div className='mt-4 flex text-primary'>
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className='bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <div className='flex items-center mb-6'>
                <img
                  className='h-12 w-12 rounded-full object-cover'
                  src='https://images.unsplash.com/photo-1594824476967-48c8b964273f'
                  alt='Hospital Administrator'
                />
                <div className='ml-4'>
                  <p className='text-lg font-semibold text-secondary'>
                    Dr. Emily Martinez
                  </p>
                  <p className='text-gray-500'>
                    Chief of Surgery, Eatonton Hospital
                  </p>
                </div>
              </div>
              <p className='text-gray-600 italic'>
                "MG Medical Surplus has been instrumental in helping us upgrade
                our surgical equipment. Their prices are competitive and the
                quality is exceptional."
              </p>
              <div className='mt-4 flex text-primary'>
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id='contact' className='bg-gray-50 py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='text-3xl font-extrabold text-secondary'>
              Contact Us
            </h2>
            <p className='mt-4 text-lg text-gray-500'>
              Get in touch with our experts for personalized solutions
            </p>
          </div>
          <div className='mt-12 max-w-lg mx-auto'>
            <form className='grid grid-cols-1 gap-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700'
                >
                  Name
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary px-4 py-2'
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700'
                >
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary px-4 py-2'
                />
              </div>
              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows='4'
                  className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary px-4 py-2'
                ></textarea>
              </div>
              <div>
                <button
                  type='submit'
                  className='w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark'
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className='min-h-screen'>
        {/* Navigation */}
        <nav className='bg-white shadow-md'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between h-16'>
              <div className='flex items-center'>
                <Link
                  to='/'
                  className='text-2xl font-bold text-primary flex items-center gap-2'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-8 h-8'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  MG Medical Surplus
                </Link>
              </div>
              <div className='hidden md:flex items-center space-x-8'>
                <Link
                  to='/products'
                  className='text-secondary hover:text-primary'
                >
                  Products
                </Link>
                <Link
                  to='/#about'
                  className='text-secondary hover:text-primary'
                >
                  About Us
                </Link>
                <Link
                  to='/#contact'
                  className='text-secondary hover:text-primary'
                >
                  Contact
                </Link>
                <Link
                  to='/contact'
                  className='bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark'
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

        {/* WhatsApp Button */}
        <a
          href='https://wa.me/17702558346?text=Hello! I am interested in medical equipment.'
          target='_blank'
          rel='noopener noreferrer'
          className='fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50 hover:scale-110'
          aria-label='Chat with us on WhatsApp'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='currentColor'
          >
            <path d='M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.396-11.891 12-11.891 3.179.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.396 11.892-12 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z' />
          </svg>
        </a>

        {/* Footer */}
        <footer className='bg-secondary text-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div>
                <h3 className='text-xl font-bold'>MG Medical Surplus</h3>
                <p className='mt-4 text-gray-300'>
                  Your trusted source for quality medical equipment in Middle
                  Georgia.
                </p>
                <div className='mt-4 flex items-center space-x-4'>
                  <a
                    href='https://www.facebook.com/MGMedicalSurplus'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-300 hover:text-white transition-colors'
                    aria-label='Visit our Facebook page'
                  >
                    <svg className='w-6 h-6 fill-current' viewBox='0 0 24 24'>
                      <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <h3 className='text-xl font-bold'>Quick Links</h3>
                <ul className='mt-4 space-y-2'>
                  <li>
                    <a
                      href='#products'
                      className='text-gray-300 hover:text-white'
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a href='#about' className='text-gray-300 hover:text-white'>
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href='#contact'
                      className='text-gray-300 hover:text-white'
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className='text-xl font-bold'>Contact Info</h3>
                <ul className='mt-4 space-y-2 text-gray-300'>
                  <li>132a Jones St.</li>
                  <li>Sandersville, GA</li>
                  <li>United States</li>
                  <li>Phone: (770) 255-8346</li>
                  <li>
                    <a
                      href='mailto:MGmedicalsurplus@yahoo.com'
                      className='hover:text-white'
                    >
                      MGmedicalsurplus@yahoo.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='mt-8 pt-8 border-t border-gray-700 text-center text-gray-300'>
              <p>
                &copy; {new Date().getFullYear()} MG Medical Surplus. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
