import React from 'react';
import { Link } from 'react-router-dom';
import Contact from './Contact';
import '../styles/marquee.css';

function HomePage() {
  return (
    <div className='bg-white'>
      {/* Hero Section */}
      <section className='relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div className='text-center lg:text-left'>
              <h1 className='text-4xl font-extrabold tracking-tight text-secondary sm:text-5xl lg:text-6xl'>
                Quality Pre-Owned{' '}
                <span className='text-primary'>Medical Equipment</span> in
                Middle Georgia
              </h1>
              <p className='mt-6 text-xl text-gray-600'>
                Middle Georgia Medical Surplus offers high-quality pre-owned
                medical equipment at competitive prices, serving hospitals,
                clinics, and healthcare providers across{' '}
                <Link
                  to='/service-areas'
                  className='text-primary hover:underline'
                >
                  Sandersville
                </Link>
                ,{' '}
                <Link
                  to='/service-areas'
                  className='text-primary hover:underline'
                >
                  Augusta
                </Link>
                ,{' '}
                <Link
                  to='/service-areas'
                  className='text-primary hover:underline'
                >
                  Macon
                </Link>{' '}
                and beyond.
              </p>
              <div className='flex flex-wrap justify-center lg:justify-start gap-4 mt-8 relative z-30'>
                <Link
                  to='/contact'
                  className='inline-flex items-center px-6 py-3 border-2 border-primary bg-primary text-base font-medium rounded-lg text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300 shadow-md hover:shadow-xl relative z-30'
                >
                  Request Quote
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 ml-2'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17 8l4 4m0 0l-4 4m4-4H3'
                    />
                  </svg>
                </Link>
                <Link
                  to='/products'
                  className='inline-flex items-center px-6 py-3 border-2 border-gray-900 text-base font-medium rounded-lg text-gray-900 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-all duration-300 relative z-30'
                >
                  Browse Products
                </Link>
              </div>
              <div className='flex items-center space-x-4 text-sm text-gray-500 mt-8'>
                <div className='flex items-center relative z-20 bg-white/80 px-2 py-1 rounded-full'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 text-primary mr-1'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  <span>Quality Equipment</span>
                </div>
                <div className='flex items-center relative z-20 bg-white/80 px-2 py-1 rounded-full'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 text-primary mr-1'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  <span>Competitive Pricing</span>
                </div>
              </div>
            </div>
            <div className='relative lg:pl-8 h-full'>
              <div className='absolute inset-0 -m-4 rounded-2xl bg-primary/10 transform -rotate-6 z-10'></div>
              <div className='relative z-20 overflow-hidden rounded-2xl shadow-xl'>
                <img
                  src='/images/products/heroMedicalEquipment2.jpg'
                  alt='Medical Equipment'
                  className='w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105 hover:rotate-2'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 left-0 right-0 z-0'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1440 320'
            className='w-full h-auto'
          >
            <path
              fill='white'
              fillOpacity='1'
              d='M0,96L60,128C120,160,240,224,360,229.3C480,235,600,181,720,149.3C840,117,960,107,1080,117.3C1200,128,1320,160,1380,176L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
            ></path>
          </svg>
        </div>
      </section>

      {/* Brands Marquee */}
      <section className='marquee-container'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='flex justify-center'>
            <h2 className='text-2xl font-bold text-secondary mb-4'>
              Serving Middle Georgia and More
            </h2>
          </div>
        </div>
        <div className='marquee-content'>
          {/* First set of locations */}
          <div className='brand-logo location-text'>Augusta</div>
          <div className='brand-logo location-text'>Macon</div>
          <div className='brand-logo location-text'>Warner Robins</div>
          <div className='brand-logo location-text'>Perry</div>
          <div className='brand-logo location-text'>Milledgeville</div>
          <div className='brand-logo location-text'>Eastman</div>
          <div className='brand-logo location-text'>Cochran</div>
          <div className='brand-logo location-text'>Forsyth</div>
          <div className='brand-logo location-text'>Dublin</div>
          <div className='brand-logo location-text'>Sandersville</div>
          <div className='brand-logo location-text'>Eatonton</div>
          <div className='brand-logo location-text'>Greensboro</div>
          <div className='brand-logo location-text'>Gray</div>
          <div className='brand-logo location-text'>Fort Valley</div>
          <div className='brand-logo location-text'>Hawkinsville</div>
          <div className='brand-logo location-text'>Centerville</div>

          {/* Duplicate the locations to ensure a seamless infinite scroll */}
          <div className='brand-logo location-text'>Augusta</div>
          <div className='brand-logo location-text'>Macon</div>
          <div className='brand-logo location-text'>Warner Robins</div>
          <div className='brand-logo location-text'>Perry</div>
          <div className='brand-logo location-text'>Milledgeville</div>
          <div className='brand-logo location-text'>Eastman</div>
          <div className='brand-logo location-text'>Cochran</div>
          <div className='brand-logo location-text'>Forsyth</div>
          <div className='brand-logo location-text'>Dublin</div>
          <div className='brand-logo location-text'>Sandersville</div>
          <div className='brand-logo location-text'>Eatonton</div>
          <div className='brand-logo location-text'>Greensboro</div>
          <div className='brand-logo location-text'>Gray</div>
          <div className='brand-logo location-text'>Fort Valley</div>
          <div className='brand-logo location-text'>Hawkinsville</div>
          <div className='brand-logo location-text'>Centerville</div>
        </div>
      </section>

      {/* Featured Products */}
      <section className='bg-white py-16 lg:py-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-extrabold text-secondary sm:text-4xl'>
              Featured Medical Equipment
            </h2>
            <p className='mt-4 text-xl text-gray-600'>
              Discover our selection of affordable pre-owned medical equipment
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Product Card 1 */}
            <div className='bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group'>
              <div className='relative h-64 bg-gray-200 overflow-hidden'>
                <img
                  src='/images/equipment-1.jpg'
                  alt='Medical Equipment'
                  className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300'>
                  <Link
                    to='/contact'
                    className='inline-flex items-center justify-center w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors'
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-900 group-hover:text-primary transition-colors'>
                  MRI Machines
                </h3>
                <p className='mt-2 text-gray-600'>
                  High-quality MRI machines from leading manufacturers.
                  Available in various configurations.
                </p>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className='bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group'>
              <div className='relative h-64 bg-gray-200 overflow-hidden'>
                <img
                  src='/images/equipment-2.jpg'
                  alt='Medical Equipment'
                  className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300'>
                  <Link
                    to='/contact'
                    className='inline-flex items-center justify-center w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors'
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-900 group-hover:text-primary transition-colors'>
                  Ultrasound Systems
                </h3>
                <p className='mt-2 text-gray-600'>
                  Advanced ultrasound systems for various medical applications.
                  Includes both portable and stationary options.
                </p>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className='bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group'>
              <div className='relative h-64 bg-gray-200 overflow-hidden'>
                <img
                  src='/images/equipment-3.jpg'
                  alt='Medical Equipment'
                  className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300'>
                  <Link
                    to='/contact'
                    className='inline-flex items-center justify-center w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors'
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-900 group-hover:text-primary transition-colors'>
                  X-Ray Equipment
                </h3>
                <p className='mt-2 text-gray-600'>
                  Reliable X-Ray systems and accessories. Digital and
                  traditional options available.
                </p>
              </div>
            </div>
          </div>

          <div className='text-center mt-12'>
            <Link
              to='/products'
              className='inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300'
            >
              View All Products
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 ml-2'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M14 5l7 7m0 0l-7 7m7-7H3'
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className='py-16 md:py-24 bg-gray-50 relative overflow-hidden'>
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute w-80 h-80 -top-40 -right-20 bg-primary rounded-full'></div>
          <div className='absolute w-80 h-80 -bottom-20 -left-40 bg-secondary rounded-full'></div>
        </div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-extrabold text-gray-900'>
              Why Choose Us
            </h2>
            <p className='mt-4 text-xl text-gray-600'>
              We are dedicated to providing the highest quality medical
              equipment
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* Feature 1 */}
            <div className='bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300'>
              <div className='flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-8 w-8 text-primary'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>
                Quality Equipment
              </h3>
              <p className='text-gray-600'>
                We source only the highest quality medical equipment from
                trusted manufacturers and perform thorough inspections.
              </p>
            </div>

            {/* Feature 2 */}
            <div className='bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300'>
              <div className='flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-8 w-8 text-primary'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>
                Competitive Pricing
              </h3>
              <p className='text-gray-600'>
                We offer competitive pricing without compromising on quality,
                helping you maximize your budget.
              </p>
            </div>

            {/* Feature 3 */}
            <div className='bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300'>
              <div className='flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-8 w-8 text-primary'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>
                Expert Support
              </h3>
              <p className='text-gray-600'>
                Our team of experts is available to provide guidance and support
                throughout your purchase process.
              </p>
            </div>

            {/* Feature 4 */}
            <div className='bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300'>
              <div className='flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-8 w-8 text-primary'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>
                Affordable Delivery
              </h3>
              <p className='text-gray-600'>
                We offer affordable delivery to your door. Contact us for any
                questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='py-16 md:py-24 bg-gradient-to-r from-primary to-primary-dark text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            Ready to Equip Your Healthcare Facility?
          </h2>
          <p className='text-xl text-white/80 max-w-2xl mx-auto mb-10'>
            Contact us today to request a quote or discuss your specific
            requirements.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <Link
              to='/contact#top'
              className='inline-flex items-center px-6 py-3 border-2 border-white bg-transparent text-base font-medium rounded-lg text-white hover:bg-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-300'
            >
              Request Quote
            </Link>
            <Link
              to='/contact#top'
              className='inline-flex items-center px-6 py-3 border-2 border-transparent bg-white text-base font-medium rounded-lg text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-300'
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div
        id='contact'
        className='bg-gradient-to-br from-blue-50 via-white to-blue-50'
      >
        <Contact />
      </div>
    </div>
  );
}

export default HomePage;
