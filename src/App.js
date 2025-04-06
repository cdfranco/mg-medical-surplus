import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/App.css';
import HomePage from './components/HomePage';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Quote from './components/Quote';
import PrivacyPolicy from './components/PrivacyPolicy';
import WhatsAppChat from './components/WhatsAppChat';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <Router>
      <div className='min-h-screen flex flex-col bg-white'>
        {/* Header */}
        <header
          className={`transition-all duration-300 fixed w-full z-50 ${
            scrolled
              ? 'bg-white/95 backdrop-blur-sm shadow-md'
              : 'bg-transparent py-2'
          }`}
        >
          <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between h-16'>
              <div className='flex items-center'>
                <Link to='/' className='flex items-center space-x-2 group'>
                  <div className='relative'>
                    <div className='absolute inset-0 bg-primary/20 rounded-full transform group-hover:scale-110 transition-transform duration-300'></div>
                    <img
                      src='/images/logo/medical-logo.svg'
                      alt='MG Medical Surplus Logo'
                      className='h-10 w-10 relative z-10 transform group-hover:rotate-12 transition-transform duration-300'
                    />
                  </div>
                  <div>
                    <span className='text-xl font-extrabold text-gray-900 tracking-tight'>
                      MG <span className='text-primary'>Medical Surplus</span>
                    </span>
                    <span className='block text-xs font-medium text-gray-500 tracking-wider'>
                      AFFORDABLE EQUIPMENT
                    </span>
                  </div>
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className='flex items-center md:hidden'>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary'
                  aria-expanded='false'
                >
                  <span className='sr-only'>Open main menu</span>
                  {/* Icon when menu is closed */}
                  <svg
                    className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                  {/* Icon when menu is open */}
                  <svg
                    className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>

              {/* Desktop menu */}
              <div className='hidden md:flex items-center space-x-1 sm:space-x-4'>
                <Link
                  to='/'
                  className='px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary relative group transition-colors'
                >
                  Home
                  <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300'></span>
                </Link>
                <Link
                  to='/products'
                  className='px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary relative group transition-colors'
                >
                  Products
                  <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300'></span>
                </Link>
                <Link
                  to='/about'
                  className='px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary relative group transition-colors'
                >
                  About
                  <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300'></span>
                </Link>
                <Link
                  to='/contact'
                  className='inline-flex items-center px-4 py-2 border-2 border-primary text-sm font-medium rounded-lg text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300 ml-3'
                >
                  <span>Contact Us</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4 ml-2'
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
              </div>
            </div>

            {/* Mobile menu, show/hide based on menu state */}
            <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
              <div className='px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-lg mt-2'>
                <Link
                  to='/'
                  className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to='/products'
                  className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Products
                </Link>
                <Link
                  to='/about'
                  className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to='/contact'
                  className='block px-3 py-2 rounded-md text-base font-medium text-primary border border-primary hover:bg-primary hover:text-white'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className='flex-grow pt-16'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/products' element={<Products />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/quote' element={<Quote />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          </Routes>
        </main>

        {/* WhatsApp Chat Widget */}
        <WhatsAppChat />

        {/* Footer */}
        <footer className='bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden'>
          <div className='absolute inset-0 opacity-10'>
            <div className='absolute -top-40 -right-40 w-80 h-80 bg-primary rounded-full'></div>
            <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-secondary rounded-full'></div>
          </div>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {/* Company Info */}
              <div>
                <div className='flex items-center space-x-2 mb-4'>
                  <img
                    src='/images/logo/medical-logo.svg'
                    alt='MG Medical Surplus Logo'
                    className='h-8 w-8'
                  />
                  <span className='text-xl font-bold tracking-tight'>
                    MG Medical Surplus
                  </span>
                </div>
                <p className='text-gray-400 mb-6'>
                  Your trusted source for high-quality medical equipment and
                  supplies.
                </p>
                <div className='flex space-x-4'>
                  <a
                    href='https://www.facebook.com/MGMedicalSurplus'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-400 hover:text-white transition-colors p-2 border border-gray-700 rounded-full hover:border-primary'
                  >
                    <svg
                      className='h-5 w-5'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        fillRule='evenodd'
                        d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className='text-lg font-semibold mb-4 inline-block pb-1 border-b-2 border-primary'>
                  Quick Links
                </h3>
                <ul className='space-y-2'>
                  <li>
                    <Link
                      to='/products'
                      className='text-gray-400 hover:text-primary transition-colors flex items-center group'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/about'
                      className='text-gray-400 hover:text-primary transition-colors flex items-center group'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/contact'
                      className='text-gray-400 hover:text-primary transition-colors flex items-center group'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/privacy-policy'
                      className='text-gray-400 hover:text-primary transition-colors flex items-center group'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className='text-lg font-semibold mb-4 inline-block pb-1 border-b-2 border-primary'>
                  Contact Info
                </h3>
                <ul className='space-y-4 text-gray-400'>
                  <li className='flex items-start'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5 mr-2 text-primary'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                    </svg>
                    <a
                      href='https://www.google.com/maps/place/Middle+Georgia+Medical+Surplus,+llc/@32.9835105,-82.8146967,17z/data=!3m1!4b1!4m6!3m5!1s0x88f72f0ac18d136d:0xe0dbadc567329ef7!8m2!3d32.983506!4d-82.8121218!16s%2Fg%2F11v9yy1q58?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='hover:text-primary transition-colors'
                    >
                      <div>
                        132a Jones St.
                        <br />
                        Sandersville, GA
                      </div>
                    </a>
                  </li>
                  <li className='flex items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5 mr-2 text-primary'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                      />
                    </svg>
                    <a
                      href='tel:+17702558346'
                      className='hover:text-primary transition-colors'
                    >
                      (770) 255-8346
                    </a>
                  </li>
                  <li className='flex items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5 mr-2 text-primary'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>
                    <a
                      href='mailto:contact@mgmedicalsurplus.com'
                      className='hover:text-primary transition-colors'
                    >
                      contact@mgmedicalsurplus.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className='mt-10 pt-8 border-t border-gray-800 text-center text-gray-400'>
              <p className='text-sm'>
                © {new Date().getFullYear()} MG Medical Surplus. All rights
                reserved.{' '}
                <Link
                  to='/privacy-policy'
                  className='hover:text-primary ml-2 transition-colors'
                >
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
