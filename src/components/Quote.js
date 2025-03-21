import React, { useState } from 'react';

function Quote() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    equipmentType: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:contact@mgmedicalsurplus.com?subject=Quote Request for ${formData.equipmentType}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AOrganization: ${formData.organization}%0D%0AEquipment Type: ${formData.equipmentType}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-3xl mx-auto'>
        <div className='text-center mb-12'>
          <h1 className='text-3xl font-extrabold text-secondary sm:text-4xl'>
            Request a Quote
          </h1>
          <p className='mt-4 text-lg text-gray-600'>
            Fill out the form below and we'll get back to you with a detailed
            quote for your medical equipment needs.
          </p>
        </div>

        <div className='bg-white rounded-lg shadow-xl p-8'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700'
                >
                  Full Name *
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm'
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700'
                >
                  Email Address *
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm'
                />
              </div>

              <div>
                <label
                  htmlFor='phone'
                  className='block text-sm font-medium text-gray-700'
                >
                  Phone Number *
                </label>
                <input
                  type='tel'
                  name='phone'
                  id='phone'
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm'
                />
              </div>

              <div>
                <label
                  htmlFor='organization'
                  className='block text-sm font-medium text-gray-700'
                >
                  Organization *
                </label>
                <input
                  type='text'
                  name='organization'
                  id='organization'
                  required
                  value={formData.organization}
                  onChange={handleChange}
                  className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm'
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
              <input
                type='text'
                name='equipmentType'
                id='equipmentType'
                required
                value={formData.equipmentType}
                onChange={handleChange}
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm'
              />
            </div>

            <div>
              <label
                htmlFor='message'
                className='block text-sm font-medium text-gray-700'
              >
                Additional Details
              </label>
              <textarea
                name='message'
                id='message'
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm'
              />
            </div>

            <div>
              <button
                type='submit'
                className='w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
              >
                Submit Quote Request
              </button>
            </div>
          </form>
        </div>

        <div className='mt-12 text-center text-sm text-gray-500'>
          <p>
            By submitting this form, you agree to our{' '}
            <button className='text-primary hover:text-primary-dark underline focus:outline-none'>
              Privacy Policy
            </button>{' '}
            and{' '}
            <button className='text-primary hover:text-primary-dark underline focus:outline-none'>
              Terms of Service
            </button>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Quote;
