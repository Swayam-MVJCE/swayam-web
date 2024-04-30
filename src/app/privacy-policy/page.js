import MainLayout from '@/components/MainLayout';
import React from 'react';

const PrivacyAndCookiePolicy = () => {
  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto py-8 px-4 font-satoshi">
        <h1 className="text-3xl  font-bold mb-4">Privacy and Cookie Policy</h1>

        <p className="mb-4">
          This Privacy and Cookie Policy describes how Swayam 2024
          (&#34;we&#34;, &#34;us&#34;, or &#34;our&#34;) collects, uses, and
          shares your personal information and the use of cookies and similar
          tracking technologies when you use our website located at{' '}
          <a
            href="https://swayam.mvjce.edu.in"
            className="text-blue-500 underline"
          >
            swayam.mvjce.edu.in
          </a>{' '}
          (the &#34;Site&#34;) and the services offered through the Site.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          a. <strong>Personal Information:</strong> When you use our Site, we
          may collect personal information that you provide to us voluntarily,
          such as your name, email address, phone number, and any other
          information you choose to provide.
        </p>
        <p className="mb-4">
          b. <strong>Authentication Information:</strong> We may collect
          information related to your authentication using OAuth (Google). This
          may include your Google account information such as your name and
          email address.
        </p>
        <p className="mb-4">
          c. <strong>Event Registration Information:</strong> If you register
          for events through our Site, we may collect information such as your
          event preferences, ticket selections, and any other information
          necessary for event registration.
        </p>
        <p className="mb-4">
          d. <strong>Payment Information:</strong> If you make payments for
          event registrations through our Site, we may collect payment
          information such as UPI Payment Reference numbers to verify if the
          payment has been made to our UPI ID.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2">
          2. How We Use Your Information
        </h2>
        <p className="mb-4">
          a. <strong>To Provide Services:</strong> We may use the information
          collected to provide you with the services you have requested,
          including event registration and ticket issuance.
        </p>
        <p className="mb-4">
          b. <strong>To Communicate:</strong> We may use your contact
          information to communicate with you about your event registrations,
          updates about the event, and other relevant information.
        </p>
        <p className="mb-4">
          c. <strong>To Improve Our Services:</strong> We may use the
          information to analyze user behavior, improve our services, and
          customize your experience on the Site.
        </p>
        <p className="mb-4">
          d. <strong>To Comply with Legal Obligations:</strong> We may use your
          information to comply with applicable legal or regulatory
          requirements.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2">
          3. How We Share Your Information
        </h2>
        <p className="mb-4">
          a. <strong>Service Providers:</strong> We may share your personal
          information with third-party service providers who assist us in
          providing the services offered through the Site, such as payment
          processors and email service providers.
        </p>
        <p className="mb-4">
          b. <strong>Event Organizers:</strong> We may share your information
          with event organizers for the purpose of managing event registrations
          and attendance.
        </p>
        <p className="mb-4">
          c. <strong>Legal Compliance:</strong> We may disclose your information
          to comply with legal obligations, enforce our policies, respond to
          claims, or protect the rights, property, or safety of ourselves or
          others.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2">4. Cookie Usage</h2>
        <p className="mb-4">
          a. <strong>Essential Cookies:</strong> These cookies are necessary for
          the operation of our Site. They enable core functionality such as
          security, network management, and accessibility. You cannot opt-out of
          these cookies.
        </p>
        <p className="mb-4">
          b. <strong>Performance and Analytics Cookies:</strong> These cookies
          allow us to analyze how visitors use our Site, including which pages
          are visited most often, how visitors navigate our Site, and if they
          encounter error messages. This information helps us improve the
          performance and usability of our Site.
        </p>
        <p className="mb-4">
          c. <strong>Functionality Cookies:</strong> These cookies enable
          enhanced functionality and personalization, such as remembering your
          preferences and settings. They may be set by us or third-party
          providers whose services we have added to our pages.
        </p>
        <p className="mb-4">
          d. <strong>Targeting or Advertising Cookies:</strong> These cookies
          may be set through our Site by our advertising partners. They may be
          used to build a profile of your interests and show you relevant
          advertisements on other sites. They do not store directly personal
          information but are based on uniquely identifying your browser and
          internet device.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2">5. Your Choices</h2>
        <p className="mb-4">
          You have the right to access, update, or delete your personal
          information. You can do this by contacting us at{' '}
          <a
            href="mailto:swayamofficial2024@gmail.com"
            className="text-blue-500 underline"
          >
            swayamofficial2024@gmail.com
          </a>
          . Please note that we may retain certain information as required by
          law or for legitimate business purposes.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2">
          6. Changes to this Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy and Cookie Policy from time to time. Any
          changes will be posted on this page, and the date of the last update
          will be indicated at the top of the page. Your continued use of the
          Site after any such changes constitutes acceptance of the updated
          Privacy and Cookie Policy.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2">7. Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about this Privacy and Cookie
          Policy or our privacy practices, please contact us at{' '}
          <a
            href="mailto:swayamofficial2024@gmail.com"
            className="text-blue-500 underline"
          >
            swayamofficial2024@gmail.com
          </a>
          .
        </p>

        <p className="mb-4">
          By using our Site, you consent to the collection, use, and sharing of
          your information and the use of cookies and similar tracking
          technologies as described in this Privacy and Cookie Policy.
        </p>
      </div>
    </MainLayout>
  );
};

export default PrivacyAndCookiePolicy;
