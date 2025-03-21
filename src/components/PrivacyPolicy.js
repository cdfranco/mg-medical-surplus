import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Update page title for SEO
    document.title = 'Privacy Policy | MG Medical Surplus';
  }, []);

  return (
    <div className='bg-white py-16'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-extrabold text-secondary sm:text-4xl mb-8'>
          Privacy Policy
        </h1>

        <div className='prose prose-lg max-w-none text-gray-500'>
          <p className='lead text-xl'>
            Last Updated:{' '}
            {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>

          <h2 className='text-2xl font-bold text-secondary mt-8 mb-4'>
            Introduction
          </h2>
          <p>
            MG Medical Surplus ("we", "our", or "us") is committed to protecting
            your privacy. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our website
            mgmedicalsurplus.com (the "Site") or utilize our services related to
            medical equipment sales and purchases.
          </p>

          <h2 className='text-2xl font-bold text-secondary mt-8 mb-4'>
            Information We Collect
          </h2>
          <p>
            We may collect information about you in various ways, including:
          </p>
          <ul className='list-disc pl-8 mb-6'>
            <li>
              <strong>Personal Information:</strong> Name, email address, phone
              number, address, and other identifiers you provide when contacting
              us, purchasing equipment, or selling equipment to us.
            </li>
            <li>
              <strong>Business Information:</strong> Information about your
              healthcare facility, clinic, hospital, or practice that is
              relevant to our business relationship.
            </li>
            <li>
              <strong>Usage Information:</strong> Information about how you use
              our website, including IP address, browser type, referring/exit
              pages, operating system, date/time stamps, and clickstream data.
            </li>
            <li>
              <strong>Equipment Information:</strong> Details about medical
              equipment you are interested in purchasing or selling.
            </li>
          </ul>

          <h2 className='text-2xl font-bold text-secondary mt-8 mb-4'>
            How We Use Your Information
          </h2>
          <p>
            We may use the information we collect from you for the following
            purposes:
          </p>
          <ul className='list-disc pl-8 mb-6'>
            <li>To provide, maintain, and improve our services</li>
            <li>To process transactions and send related information</li>
            <li>To respond to comments, questions, and requests</li>
            <li>
              To send information about our products, services, and promotional
              offers
            </li>
            <li>To monitor and analyze usage patterns and trends</li>
            <li>To protect our Site, users, and business</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2 className='text-2xl font-bold text-secondary mt-8 mb-4'>
            Sharing Your Information
          </h2>
          <p>We may share your information with:</p>
          <ul className='list-disc pl-8 mb-6'>
            <li>
              <strong>Service Providers:</strong> Third-party vendors and
              service providers who perform services on our behalf, such as
              payment processing, data analysis, email delivery, hosting
              services, and customer service.
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with any
              merger, sale of company assets, financing, or acquisition of all
              or a portion of our business.
            </li>
            <li>
              <strong>Legal Requirements:</strong> If required to do so by law
              or in response to valid requests by public authorities.
            </li>
            <li>
              <strong>With Your Consent:</strong> We may share your information
              for other purposes with your consent.
            </li>
          </ul>

          <h2 className='text-2xl font-bold text-secondary mt-8 mb-4'>
            Cookies and Tracking Technologies
          </h2>
          <p>
            We may use cookies, web beacons, and similar tracking technologies
            to collect information about your browsing activities on our Site.
            These technologies help us analyze website traffic, customize
            content, and improve your experience.
          </p>
          <p>
            You can choose to disable cookies through your browser settings, but
            this may affect your ability to use certain features of our Site.
          </p>

          <h2 className='text-2xl font-bold text-secondary mt-8 mb-4'>
            Data Security
          </h2>
          <p>
            We have implemented appropriate technical and organizational
            measures to secure your personal information from accidental loss
            and unauthorized access, use, alteration, and disclosure. However,
            please note that no method of transmission over the Internet or
            electronic storage is 100% secure.
          </p>

          <h2 className='text-2xl font-bold text-secondary mt-8 mb-4'>
            Your Rights and Choices
          </h2>
          <p>
            Depending on your location, you may have certain rights regarding
            your personal information, including:
          </p>
          <ul className='list-disc pl-8 mb-6'>
            <li>The right to access your personal information</li>
            <li>The right to rectify inaccurate personal information</li>
            <li>The right to request deletion of your personal information</li>
            <li>
              The right to restrict processing of your personal information
            </li>
            <li>The right to data portability</li>
            <li>
              The right to object to processing of your personal information
            </li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at
            contact@mgmedicalsurplus.com.
          </p>

          <h2 className='text-2xl font-bold text-secondary mt-8 mb-4'>
            Children's Privacy
          </h2>
          <p>
            Our Site is not intended for individuals under the age of 18. We do
            not knowingly collect personal information from children under 18.
            If you are a parent or guardian and believe your child has provided
            us with personal information, please contact us.
          </p>

          <h2 className='text-2xl font-bold text-secondary mt-8 mb-4'>
            Changes to This Privacy Policy
          </h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the "Last Updated" date.
          </p>
          <p>
            We recommend that you review this Privacy Policy periodically for
            any changes. Changes are effective when they are posted on this
            page.
          </p>

          <h2 className='text-2xl font-bold text-secondary mt-8 mb-4'>
            Contact Us
          </h2>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at:
          </p>
          <address className='not-italic mt-4 mb-8'>
            <p>MG Medical Surplus</p>
            <p>132a Jones St.</p>
            <p>Sandersville, GA</p>
            <p>Phone: (770) 255-8346</p>
            <p>Email: contact@mgmedicalsurplus.com</p>
          </address>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
