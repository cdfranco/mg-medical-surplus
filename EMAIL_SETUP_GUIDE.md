# MG Medical Surplus Professional Email Setup Guide

This guide will walk you through setting up your official contact email (contact@mgmedicalsurplus.com) with EmailJS to handle form submissions professionally.

## Step 1: Email Setup

To use a professional domain email (contact@mgmedicalsurplus.com):

1. Log in to your domain registrar (GoDaddy, Namecheap, etc.) where mgmedicalsurplus.com is registered
2. Navigate to Email settings or Email hosting
3. Create a new email account with the address: contact@mgmedicalsurplus.com
4. Choose a strong password and complete the setup
5. You can either:
   - Access this email via webmail through your domain provider
   - Configure it in your preferred email client (Gmail, Outlook, etc.)

## Step 2: EmailJS Setup

The contact form has been updated to use EmailJS. Follow these steps to complete the setup:

1. Go to [EmailJS.com](https://www.emailjs.com/) and create an account
2. After logging in, go to "Email Services" and click "Add New Service"
3. Select your email provider (Gmail, Outlook, or Custom SMTP)
4. If using your new professional email, select "Custom SMTP" and use these settings:
   - SMTP Host: (Get this from your domain email provider)
   - Port: 587 (or as specified by your provider)
   - Username: contact@mgmedicalsurplus.com
   - Password: (Your email password)
5. Name your service "MG Medical Contact Form" and save it
6. Note the "Service ID" - you'll need this for your code

## Step 3: Create an Email Template

1. In EmailJS dashboard, go to "Email Templates" and click "Create New Template"
2. Design your template with placeholders for form fields:

   ```
   Name: {{name}}
   Email: {{email}}
   Phone: {{phone}}
   Organization: {{organization}}
   Equipment Type: {{equipmentType}}

   Message:
   {{message}}
   ```

3. Set the recipient to your email address (contact@mgmedicalsurplus.com)
4. Set the subject line to "New Quote Request: {{equipmentType}}"
5. Save the template and note the "Template ID"

## Step 4: Update the Contact.js Component

The Contact.js file has already been updated with EmailJS integration, but you'll need to replace the placeholder IDs with your actual IDs:

1. Open `src/components/Contact.js`
2. Update the following lines with your actual IDs:
   ```javascript
   emailjs.sendForm(
     'service_mqzz0ao', // Replace with your actual EmailJS service ID
     'template_k5rp6sl', // Replace with your actual EmailJS template ID
     formRef.current,
     'RFxoHiJMDc_nBXwfo' // Replace with your actual EmailJS public key
   );
   ```
3. You can find your public key in the EmailJS dashboard under "Account" → "API Keys"

## Step 5: Testing the Form

1. Run your website locally with `npm start`
2. Go to the Contact page and submit a test form
3. Verify that you receive the email at your contact@mgmedicalsurplus.com address
4. Make any adjustments to the template or code as needed

## Step 6: Deploy Your Site

After testing, deploy your updated website:

```bash
npm run build
# Then deploy using your preferred hosting method
```

## Additional Notes

- The EmailJS free plan provides 200 emails per month
- For higher volume, consider upgrading to a paid plan
- Make sure to test all form fields to ensure they're properly passed to the email template
- Consider adding a reCAPTCHA to prevent spam submissions

Your contact form now offers a professional experience with immediate feedback for users and direct delivery to your business email address.
