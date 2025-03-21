import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import '../styles/animations.css';

function Contact() {
  const location = useLocation();
  const formRef = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    phone: '',
    organization: '',
    equipment_type: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState({
    submitting: false,
    success: null,
    error: null,
  });

  useEffect(() => {
    if (location.state?.equipmentType) {
      setFormData((prev) => ({
        ...prev,
        equipment_type: location.state.equipmentType,
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
    setSubmitStatus({ submitting: true, success: null, error: null });

    // Using EmailJS to send the form directly without opening email client
    emailjs
      .sendForm(
        'service_ooqmm6o', // Your EmailJS service ID - Gmail or SMTP service you created in EmailJS
        'template_zx7zs4c', // Your EmailJS template ID - Contact Form template in EmailJS
        formRef.current,
        'NkpurUmfE1kJSefs6' // Your EmailJS public key
      )
      .then((result) => {
        setSubmitStatus({
          submitting: false,
          success: 'Your message has been sent successfully!',
          error: null,
        });
        // Reset form after successful submission
        setFormData({
          from_name: '',
          from_email: '',
          phone: '',
          organization: '',
          equipment_type: '',
          message: '',
        });
      })
      .catch((error) => {
        setSubmitStatus({
          submitting: false,
          success: null,
          error: `Error sending message: ${
            error.text || error.message || 'Unknown error'
          }. Please check your EmailJS configuration.`,
        });
        console.error('EmailJS error details:', error);
      });
  };

  return (
    <div className='relative'>
      {/* Background decorative elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full'></div>
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full'></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
            Get in <span className='text-primary'>Touch</span>
          </h2>
          <p className='mt-4 text-xl text-gray-600'>
            We're here to help with all your medical equipment needs
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Left Column - Contact Form */}
          <div className='bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-500 hover:shadow-2xl h-full w-full'>
            <h3 className='text-2xl font-semibold text-gray-900 mb-6'>
              Send Us a Message
            </h3>

            {submitStatus.success && (
              <div className='mb-6 p-4 bg-green-100 border-l-4 border-green-500 text-green-700 rounded'>
                <p>{submitStatus.success}</p>
              </div>
            )}

            {submitStatus.error && (
              <div className='mb-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded'>
                <p>{submitStatus.error}</p>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className='space-y-6'>
              <input
                type='hidden'
                name='subject'
                value={`Quote Request: ${formData.equipment_type}`}
              />
              <div className='space-y-5'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Full Name *
                  </label>
                  <div className='mt-1 relative'>
                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5 text-gray-400'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                        />
                      </svg>
                    </div>
                    <input
                      type='text'
                      name='from_name'
                      id='name'
                      required
                      value={formData.from_name}
                      onChange={handleChange}
                      className='block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent'
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
                    <div className='mt-1 relative'>
                      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-5 w-5 text-gray-400'
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
                      <input
                        type='email'
                        name='from_email'
                        id='email'
                        required
                        value={formData.from_email}
                        onChange={handleChange}
                        className='block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent'
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
                    <div className='mt-1 relative'>
                      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-5 w-5 text-gray-400'
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
                      <input
                        type='tel'
                        name='phone'
                        id='phone'
                        value={formData.phone}
                        onChange={handleChange}
                        className='block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent'
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
                  <div className='mt-1 relative'>
                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5 text-gray-400'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
                        />
                      </svg>
                    </div>
                    <input
                      type='text'
                      name='organization'
                      id='organization'
                      value={formData.organization}
                      onChange={handleChange}
                      className='block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent'
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
                  <div className='mt-1 relative'>
                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5 text-gray-400'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z'
                        />
                      </svg>
                    </div>
                    <input
                      type='text'
                      name='equipment_type'
                      id='equipmentType'
                      required
                      value={formData.equipment_type}
                      onChange={handleChange}
                      className='block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent'
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
                      className='block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent'
                      placeholder='Tell us about your specific requirements...'
                    />
                  </div>
                </div>
              </div>

              <div className='flex items-center justify-between mt-8'>
                <p className='text-sm text-gray-500'>* Required fields</p>
                <button
                  type='submit'
                  disabled={submitStatus.submitting}
                  className={`inline-flex items-center px-6 py-3 border-2 border-primary bg-primary text-base font-medium rounded-xl text-white hover:bg-transparent hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300 shadow-lg ${
                    submitStatus.submitting
                      ? 'opacity-70 cursor-not-allowed'
                      : ''
                  }`}
                >
                  {submitStatus.submitting ? 'Sending...' : 'Send Message'}
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
                </button>
              </div>
            </form>
          </div>

          {/* Right Column - Contact Info */}
          <div className='h-full flex w-full'>
            <div className='bg-gradient-to-br from-primary to-primary-dark rounded-2xl overflow-hidden shadow-xl text-white h-full flex flex-col w-full'>
              <div className='p-8 flex-grow'>
                <h3 className='text-2xl font-semibold mb-8'>
                  Contact Information
                </h3>

                <div className='space-y-8'>
                  <div className='flex items-start'>
                    <div className='flex-shrink-0 bg-white/20 p-3 rounded-lg'>
                      <svg
                        className='h-6 w-6 text-white'
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
                    <div className='ml-4'>
                      <h4 className='text-lg font-medium'>Phone</h4>
                      <a
                        href='tel:+17702558346'
                        className='text-white/80 hover:text-white transition-colors block mt-1'
                      >
                        (770) 255-8346
                      </a>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <div className='flex-shrink-0 bg-white/20 p-3 rounded-lg'>
                      <svg
                        className='h-6 w-6 text-white'
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
                    <div className='ml-4'>
                      <h4 className='text-lg font-medium'>Email</h4>
                      <a
                        href='mailto:contact@mgmedicalsurplus.com'
                        className='text-white/80 hover:text-white transition-colors block mt-1'
                      >
                        contact@mgmedicalsurplus.com
                      </a>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <div className='flex-shrink-0 bg-white/20 p-3 rounded-lg'>
                      <svg
                        className='h-6 w-6 text-white'
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
                    <div className='ml-4'>
                      <h4 className='text-lg font-medium'>Address</h4>
                      <p className='text-white/80 mt-1'>
                        132a Jones St.
                        <br />
                        Sandersville, GA
                      </p>
                    </div>
                  </div>
                </div>

                <div className='mt-12'>
                  <h4 className='text-lg font-medium mb-4'>Business Hours</h4>
                  <ul className='space-y-2 text-white/80'>
                    <li className='flex justify-between'>
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </li>
                    <li className='flex justify-between'>
                      <span>Saturday</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </li>
                    <li className='flex justify-between'>
                      <span>Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='mt-auto'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 1440 320'
                  className='w-full h-auto'
                >
                  <path
                    fill='rgba(255,255,255,0.1)'
                    d='M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
