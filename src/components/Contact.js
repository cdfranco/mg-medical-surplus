import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/animations.css';

function Contact() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    equipmentType: '',
    message: '',
  });

  useEffect(() => {
    if (location.state?.equipmentType) {
      setFormData((prev) => ({
        ...prev,
        equipmentType: location.state.equipmentType,
      }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create email body with form data
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Organization: ${formData.organization}
Equipment Type: ${formData.equipmentType}

Additional Details:
${formData.message}
    `.trim();

    // Create mailto link with form data
    const mailtoLink = `mailto:MGmedicalsurplus@yahoo.com?subject=Quote Request: ${
      formData.equipmentType
    }&body=${encodeURIComponent(emailBody)}`;

    // Open email client
    window.location.href = mailtoLink;
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 min-h-screen'>
          {/* Left Column - Form */}
          <div className='px-4 py-12 sm:px-6 lg:px-8 flex flex-col justify-center'>
            <div className='max-w-lg mx-auto'>
              <h2 className='text-4xl font-bold text-gray-900 tracking-tight'>
                Get in Touch
                <span className='block text-primary'>
                  We'll Get Back to You
                </span>
              </h2>
              <p className='mt-4 text-lg text-gray-600'>
                Fill out the form below and we'll provide you with competitive
                pricing for your medical equipment needs.
              </p>

              <form onSubmit={handleSubmit} className='mt-8 space-y-6'>
                <div className='space-y-5'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Full Name *
                    </label>
                    <div className='mt-1 relative rounded-md shadow-sm'>
                      <input
                        type='text'
                        name='name'
                        id='name'
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className='block w-full px-6 py-3 rounded-xl border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent'
                        placeholder='John Doe'
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div>
                      <label
                        htmlFor='email'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Email Address *
                      </label>
                      <div className='mt-1'>
                        <input
                          type='email'
                          name='email'
                          id='email'
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className='block w-full px-6 py-3 rounded-xl border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent'
                          placeholder='you@example.com'
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor='phone'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Phone Number
                      </label>
                      <div className='mt-1'>
                        <input
                          type='tel'
                          name='phone'
                          id='phone'
                          value={formData.phone}
                          onChange={handleChange}
                          className='block w-full px-6 py-3 rounded-xl border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent'
                          placeholder='(123) 456-7890'
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='organization'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Organization/Facility
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        name='organization'
                        id='organization'
                        value={formData.organization}
                        onChange={handleChange}
                        className='block w-full px-6 py-3 rounded-xl border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent'
                        placeholder='Your Organization'
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='equipmentType'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Equipment Type/Model *
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        name='equipmentType'
                        id='equipmentType'
                        required
                        value={formData.equipmentType}
                        onChange={handleChange}
                        className='block w-full px-6 py-3 rounded-xl border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent'
                        placeholder='e.g., MRI Machine, Ultrasound System'
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Additional Details
                    </label>
                    <div className='mt-1'>
                      <textarea
                        id='message'
                        name='message'
                        rows='4'
                        value={formData.message}
                        onChange={handleChange}
                        className='block w-full px-6 py-3 rounded-xl border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent'
                        placeholder='Tell us about your specific requirements...'
                      />
                    </div>
                  </div>
                </div>

                <div className='flex items-center justify-between'>
                  <p className='text-sm text-gray-500'>* Required fields</p>
                  <button
                    type='submit'
                    className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-150 shadow-lg hover:shadow-xl'
                  >
                    Get Your Quote
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5 ml-2'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column - Illustration and Contact Info */}
          <div className='hidden lg:flex items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-transparent relative overflow-hidden'>
            <div className='relative w-full max-w-lg'>
              {/* Decorative circles */}
              <div className='absolute top-0 -left-4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob'></div>
              <div className='absolute top-0 -right-4 w-72 h-72 bg-secondary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
              <div className='absolute -bottom-8 left-20 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>

              <div className='relative space-y-8'>
                {/* Contact Info Cards */}
                <a
                  href='tel:+17702558346'
                  className='block p-5 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer'
                >
                  <div className='flex items-center space-x-4'>
                    <div className='flex-shrink-0'>
                      <svg
                        className='h-6 w-6 text-primary'
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
                    </div>
                    <div>
                      <p className='text-sm font-medium text-gray-900'>Phone</p>
                      <p className='text-sm text-gray-500 hover:text-primary'>
                        (770) 255-8346
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href='mailto:MGmedicalsurplus@yahoo.com'
                  className='block p-5 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer'
                >
                  <div className='flex items-center space-x-4'>
                    <div className='flex-shrink-0'>
                      <svg
                        className='h-6 w-6 text-primary'
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
                    </div>
                    <div>
                      <p className='text-sm font-medium text-gray-900'>Email</p>
                      <p className='text-sm text-gray-500 hover:text-primary'>
                        MGmedicalsurplus@yahoo.com
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href='https://www.google.com/maps/search/?api=1&query=132a+Jones+St+Sandersville+GA'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block p-5 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer'
                >
                  <div className='flex items-center space-x-4'>
                    <div className='flex-shrink-0'>
                      <svg
                        className='h-6 w-6 text-primary'
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
                    </div>
                    <div>
                      <p className='text-sm font-medium text-gray-900'>
                        Location
                      </p>
                      <p className='text-sm text-gray-500 hover:text-primary'>
                        132a Jones St., Sandersville, GA
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
