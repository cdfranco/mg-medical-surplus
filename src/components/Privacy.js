import React from 'react';

function Privacy() {
  return (
    <div className='bg-white min-h-screen'>
      {/* Hero Section */}
      <div className='bg-gradient-to-r from-primary/20 to-secondary/10 py-16'>
        <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl font-extrabold text-primary text-center'>
            Privacy Policy
          </h1>
          <p className='mt-4 text-lg text-gray-700 max-w-3xl mx-auto text-center'>
            Last updated:{' '}
            {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
      </div>

      {/* Privacy Policy Content */}
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='prose prose-lg max-w-none'>
          <p>
            At MG Medical Surplus, we are committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website or make a
            purchase. Please read this privacy policy carefully. If you do not
            agree with the terms of this privacy policy, please do not access
            the site.
          </p>

          <h2 className='text-2xl font-bold text-gray-900 mt-8 mb-4'>
            Information We Collect
          </h2>

          <h3 className='text-xl font-semibold text-gray-800 mt-6 mb-3'>
            Personal Data
          </h3>
          <p>
            We may collect personal identification information from users in a
            variety of ways, including, but not limited to, when users visit our
            site, register on the site, place an order, subscribe to the
            newsletter, respond to a survey, fill out a form, and in connection
            with other activities, services, features or resources we make
            available on our Site. Users may be asked for, as appropriate, name,
            email address, mailing address, phone number, and payment
            information.
          </p>

          <h3 className='text-xl font-semibold text-gray-800 mt-6 mb-3'>
            Non-Personal Data
          </h3>
          <p>
            We may collect non-personal identification information about users
            whenever they interact with our site. Non-personal identification
            information may include the browser name, the type of computer and
            technical information about users means of connection to our site,
            such as the operating system and the Internet service providers
            utilized and other similar information.
          </p>

          <h2 className='text-2xl font-bold text-gray-900 mt-8 mb-4'>
            How We Use Your Information
          </h2>
          <p>
            We may use the information we collect from you when you register,
            make a purchase, sign up for our newsletter, respond to a survey or
            marketing communication, surf the website, or use certain other site
            features in the following ways:
          </p>
          <ul className='list-disc pl-6 mt-2 mb-4'>
            <li>
              To personalize your experience and to allow us to deliver the type
              of content and product offerings in which you are most interested.
            </li>
            <li>To improve our website in order to better serve you.</li>
            <li>
              To allow us to better service you in responding to your customer
              service requests.
            </li>
            <li>
              To administer a contest, promotion, survey or other site feature.
            </li>
            <li>To quickly process your transactions.</li>
            <li>To ask for ratings and reviews of services or products.</li>
            <li>
              To follow up with them after correspondence (live chat, email or
              phone inquiries).
            </li>
          </ul>

          <h2 className='text-2xl font-bold text-gray-900 mt-8 mb-4'>
            Protection of Your Information
          </h2>
          <p>
            We implement a variety of security measures when a user places an
            order or enters, submits, or accesses their information to maintain
            the safety of your personal information. All transactions are
            processed through a secure gateway provider and are not stored or
            processed on our servers.
          </p>

          <h2 className='text-2xl font-bold text-gray-900 mt-8 mb-4'>
            Cookies
          </h2>
          <p>
            We use cookies to help us remember and process the items in your
            shopping cart, understand and save user's preferences for future
            visits, keep track of advertisements and compile aggregate data
            about site traffic and site interaction so that we can offer better
            site experiences and tools in the future.
          </p>

          <h2 className='text-2xl font-bold text-gray-900 mt-8 mb-4'>
            Third-Party Disclosure
          </h2>
          <p>
            We do not sell, trade, or otherwise transfer to outside parties your
            Personally Identifiable Information unless we provide users with
            advance notice. This does not include website hosting partners and
            other parties who assist us in operating our website, conducting our
            business, or serving our users, so long as those parties agree to
            keep this information confidential.
          </p>

          <h2 className='text-2xl font-bold text-gray-900 mt-8 mb-4'>
            Third-Party Links
          </h2>
          <p>
            Occasionally, at our discretion, we may include or offer third-party
            products or services on our website. These third-party sites have
            separate and independent privacy policies. We therefore have no
            responsibility or liability for the content and activities of these
            linked sites. Nonetheless, we seek to protect the integrity of our
            site and welcome any feedback about these sites.
          </p>

          <h2 className='text-2xl font-bold text-gray-900 mt-8 mb-4'>
            COPPA (Children Online Privacy Protection Act)
          </h2>
          <p>
            We do not specifically market to children under the age of 13. We do
            not knowingly collect personal identifiable information from
            children under 13.
          </p>

          <h2 className='text-2xl font-bold text-gray-900 mt-8 mb-4'>
            Changes to This Privacy Policy
          </h2>
          <p>
            MG Medical Surplus has the discretion to update this privacy policy
            at any time. When we do, we will revise the updated date at the top
            of this page. We encourage users to frequently check this page for
            any changes to stay informed about how we are helping to protect the
            personal information we collect.
          </p>

          <h2 className='text-2xl font-bold text-gray-900 mt-8 mb-4'>
            Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, the practices
            of this site, or your dealings with this site, please contact us at:
          </p>
          <div className='mt-2'>
            <p className='font-medium'>MG Medical Surplus</p>
            <p>132a Jones St.</p>
            <p>Sandersville, GA</p>
            <p>
              <strong>Email:</strong>{' '}
              <a
                href='mailto:contact@mgmedicalsurplus.com'
                className='text-primary hover:underline'
              >
                contact@mgmedicalsurplus.com
              </a>
            </p>
            <p>
              Phone:{' '}
              <a
                href='tel:+17702558346'
                className='text-primary hover:underline'
              >
                (770) 255-8346
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
