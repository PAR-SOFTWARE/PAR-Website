import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Par Software (Pty) Ltd and its applications, including the CPS App.',
  alternates: {
    canonical: '/privacy',
  },
};

const PrivacyPage = () => (
  <>
    <Navigation />
    <main>
      <article className="legal">
        <p className="eyebrow">
          Legal
        </p>
        <h1>
          Par Software Privacy Policy
        </h1>
        <p className="meta">
          Last updated: 11 June 2026
        </p>

        <p>
          Par Software (Pty) Ltd (&ldquo;Par Software&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) builds and
          maintains software applications for individuals and organisations. This Privacy Policy describes how we
          collect, use, and protect your personal information when you use any of our applications.
        </p>
        <p>
          By using any Par Software application, you agree to the terms of this Privacy Policy.
        </p>

        <h2>1. Who We Are</h2>
        <p>
          Par Software (Pty) Ltd is a software company registered in South Africa. We are the responsible party
          (operator) for your personal information as defined under the Protection of Personal Information Act, 4 of
          2013 (POPIA).
        </p>
        <p>
          Contact: <a href="mailto:ruben@parsoftware.co.za">ruben@parsoftware.co.za</a> or{' '}
          <a href="mailto:erik@parsoftware.co.za">erik@parsoftware.co.za</a>
        </p>

        <h2>2. What We Collect</h2>
        <p>
          We only collect personal information that is necessary for you to use our applications. This may include:
        </p>
        <ul>
          <li>Your name and contact details (e.g. email address)</li>
          <li>Account credentials (stored in encrypted form; we never store plain-text passwords)</li>
          <li>Information you actively provide while using the app (e.g. bookings, records, reports)</li>
          <li>Basic usage data to ensure the app functions correctly</li>
        </ul>
        <p>
          We do not collect any information beyond what is needed to deliver the app&rsquo;s functionality.
        </p>

        <h2>3. How We Use Your Information</h2>
        <p>
          Your information is used solely to provide and improve the application you are using. Specifically:
        </p>
        <ul>
          <li>To create and manage your account</li>
          <li>To process and display your in-app data</li>
          <li>To communicate with you about your account or support requests</li>
          <li>To maintain the security and integrity of the application</li>
        </ul>
        <p>
          We do not use your data for advertising, profiling, or any purpose unrelated to delivering the application.
        </p>

        <h2>4. We Do Not Sell Your Data</h2>
        <p>
          We will never sell, rent, trade, or otherwise transfer your personal information to third parties for
          commercial purposes. Your data is your data. Full stop.
        </p>

        <h2>5. Data Security and Encryption</h2>
        <p>
          We take data security seriously. All personal information processed by Par Software is protected using
          industry-standard security measures, including:
        </p>
        <ul>
          <li>Encryption in transit (TLS/HTTPS) for all data sent between your device and our servers</li>
          <li>Encryption at rest for sensitive stored data</li>
          <li>Secure, access-controlled infrastructure</li>
          <li>Regular security reviews of our applications and systems</li>
        </ul>
        <p>
          While no system can guarantee absolute security, we implement appropriate technical and organisational
          measures to protect your information against unauthorised access, loss, or disclosure.
        </p>

        <h2>6. Data Sharing</h2>
        <p>
          We do not share your personal information with third parties except where strictly necessary to operate
          our services (e.g. cloud hosting providers), and only under binding confidentiality and data processing
          agreements. We do not share data with advertisers, data brokers, or marketing platforms.
        </p>

        <h2>7. Data Retention</h2>
        <p>
          We retain your personal information for as long as your account is active or as required to provide you
          with the service. You may request deletion of your data at any time (see Section 9). Where we are required
          by law to retain certain records, we will do so for the minimum required period.
        </p>

        <h2>8. Children&rsquo;s Privacy</h2>
        <p>
          Our applications are not directed at children under the age of 13. We do not knowingly collect personal
          information from children. If you believe a child has provided us with personal information, please
          contact us and we will delete it promptly.
        </p>

        <h2>9. Your Rights (POPIA)</h2>
        <p>As a data subject under POPIA, you have the right to:</p>
        <ul>
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate or incomplete information</li>
          <li>Request deletion of your personal information</li>
          <li>Object to the processing of your personal information</li>
          <li>Lodge a complaint with the Information Regulator of South Africa</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at:{' '}
          <a href="mailto:ruben@parsoftware.co.za">ruben@parsoftware.co.za</a> or{' '}
          <a href="mailto:erik@parsoftware.co.za">erik@parsoftware.co.za</a>
          <br />
          Information Regulator (South Africa):{' '}
          <a href="https://inforeg.org.za" target="_blank" rel="noopener noreferrer">
            inforeg.org.za
          </a>
        </p>

        <h2>10. Our Applications</h2>
        <p>
          This policy applies to all applications built and published by Par Software, including:
        </p>
        <h3>
          CPS: Cape Piscatorial Society App
        </h3>
        <p>
          The CPS app is a membership and booking management application for the Cape Piscatorial Society.
        </p>
        <p>
          Data collected: member name, email address, membership and licence details, beat bookings, and catch
          reports submitted by the user.
        </p>
        <p>
          Purpose: to facilitate club membership management, beat bookings, and catch reporting for CPS members and
          administrators.
        </p>
        <p>
          Data is stored securely on Par Software&rsquo;s infrastructure and is not shared with any third party
          outside of CPS administration.
        </p>

        <h2>11. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we do, we will update the &ldquo;Last
          updated&rdquo; date at the top of this document. Where changes are material, we will notify users through
          the relevant application. Continued use of our applications after changes are posted constitutes
          acceptance of the updated policy.
        </p>

        <h2>12. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or how we handle your personal information, please
          contact:
        </p>
        <p>
          Par Software (Pty) Ltd
          <br />
          Email: <a href="mailto:ruben@parsoftware.co.za">ruben@parsoftware.co.za</a> or{' '}
          <a href="mailto:erik@parsoftware.co.za">erik@parsoftware.co.za</a>
          <br />
          Website:{' '}
          <a href="https://parsoftware.co.za">parsoftware.co.za</a>
        </p>
      </article>
    </main>
    <Footer />
  </>
);

export default PrivacyPage;
