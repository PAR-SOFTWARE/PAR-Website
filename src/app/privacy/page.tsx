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

const sectionTitleStyle = {
  fontSize: '1.25rem',
  fontWeight: 500,
  color: 'var(--gray-900)',
  marginTop: '2.5rem',
  marginBottom: '1rem',
};

const paragraphStyle = {
  color: 'var(--gray-700)',
  lineHeight: 1.7,
  fontWeight: 400,
  marginBottom: '1rem',
};

const listStyle = {
  color: 'var(--gray-700)',
  lineHeight: 1.7,
  fontWeight: 400,
  marginBottom: '1rem',
  paddingLeft: '1.25rem',
  listStyleType: 'disc' as const,
};

const PrivacyPage = () => (
  <main className="min-h-screen">
    <Navigation />
    <section className="pt-32 pb-24" style={{ backgroundColor: 'var(--gray-50)' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          className="text-xs font-medium uppercase mb-4"
          style={{ color: 'var(--teal-600)', letterSpacing: '0.06em', fontWeight: 500 }}
        >
          Legal
        </p>
        <h1 style={{ fontSize: '2rem', fontWeight: 500, lineHeight: 1.2, color: 'var(--gray-900)', marginBottom: '0.5rem' }}>
          Par Software Privacy Policy
        </h1>
        <p className="text-sm mb-10" style={{ color: 'var(--gray-500)' }}>
          Last updated: 11 June 2026
        </p>

        <p style={paragraphStyle}>
          Par Software (Pty) Ltd (&ldquo;Par Software&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) builds and
          maintains software applications for individuals and organisations. This Privacy Policy describes how we
          collect, use, and protect your personal information when you use any of our applications.
        </p>
        <p style={paragraphStyle}>
          By using any Par Software application, you agree to the terms of this Privacy Policy.
        </p>

        <h2 style={sectionTitleStyle}>1. Who We Are</h2>
        <p style={paragraphStyle}>
          Par Software (Pty) Ltd is a software company registered in South Africa. We are the responsible party
          (operator) for your personal information as defined under the Protection of Personal Information Act, 4 of
          2013 (POPIA).
        </p>
        <p style={paragraphStyle}>
          Contact: <a href="mailto:ruben@parsoftware.co.za" style={{ color: 'var(--teal-600)' }}>ruben@parsoftware.co.za</a> or{' '}
          <a href="mailto:erik@parsoftware.co.za" style={{ color: 'var(--teal-600)' }}>erik@parsoftware.co.za</a>
        </p>

        <h2 style={sectionTitleStyle}>2. What We Collect</h2>
        <p style={paragraphStyle}>
          We only collect personal information that is necessary for you to use our applications. This may include:
        </p>
        <ul style={listStyle}>
          <li>Your name and contact details (e.g. email address)</li>
          <li>Account credentials (stored in encrypted form; we never store plain-text passwords)</li>
          <li>Information you actively provide while using the app (e.g. bookings, records, reports)</li>
          <li>Basic usage data to ensure the app functions correctly</li>
        </ul>
        <p style={paragraphStyle}>
          We do not collect any information beyond what is needed to deliver the app&rsquo;s functionality.
        </p>

        <h2 style={sectionTitleStyle}>3. How We Use Your Information</h2>
        <p style={paragraphStyle}>
          Your information is used solely to provide and improve the application you are using. Specifically:
        </p>
        <ul style={listStyle}>
          <li>To create and manage your account</li>
          <li>To process and display your in-app data</li>
          <li>To communicate with you about your account or support requests</li>
          <li>To maintain the security and integrity of the application</li>
        </ul>
        <p style={paragraphStyle}>
          We do not use your data for advertising, profiling, or any purpose unrelated to delivering the application.
        </p>

        <h2 style={sectionTitleStyle}>4. We Do Not Sell Your Data</h2>
        <p style={paragraphStyle}>
          We will never sell, rent, trade, or otherwise transfer your personal information to third parties for
          commercial purposes. Your data is your data. Full stop.
        </p>

        <h2 style={sectionTitleStyle}>5. Data Security and Encryption</h2>
        <p style={paragraphStyle}>
          We take data security seriously. All personal information processed by Par Software is protected using
          industry-standard security measures, including:
        </p>
        <ul style={listStyle}>
          <li>Encryption in transit (TLS/HTTPS) for all data sent between your device and our servers</li>
          <li>Encryption at rest for sensitive stored data</li>
          <li>Secure, access-controlled infrastructure</li>
          <li>Regular security reviews of our applications and systems</li>
        </ul>
        <p style={paragraphStyle}>
          While no system can guarantee absolute security, we implement appropriate technical and organisational
          measures to protect your information against unauthorised access, loss, or disclosure.
        </p>

        <h2 style={sectionTitleStyle}>6. Data Sharing</h2>
        <p style={paragraphStyle}>
          We do not share your personal information with third parties except where strictly necessary to operate
          our services (e.g. cloud hosting providers), and only under binding confidentiality and data processing
          agreements. We do not share data with advertisers, data brokers, or marketing platforms.
        </p>

        <h2 style={sectionTitleStyle}>7. Data Retention</h2>
        <p style={paragraphStyle}>
          We retain your personal information for as long as your account is active or as required to provide you
          with the service. You may request deletion of your data at any time (see Section 9). Where we are required
          by law to retain certain records, we will do so for the minimum required period.
        </p>

        <h2 style={sectionTitleStyle}>8. Children&rsquo;s Privacy</h2>
        <p style={paragraphStyle}>
          Our applications are not directed at children under the age of 13. We do not knowingly collect personal
          information from children. If you believe a child has provided us with personal information, please
          contact us and we will delete it promptly.
        </p>

        <h2 style={sectionTitleStyle}>9. Your Rights (POPIA)</h2>
        <p style={paragraphStyle}>As a data subject under POPIA, you have the right to:</p>
        <ul style={listStyle}>
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate or incomplete information</li>
          <li>Request deletion of your personal information</li>
          <li>Object to the processing of your personal information</li>
          <li>Lodge a complaint with the Information Regulator of South Africa</li>
        </ul>
        <p style={paragraphStyle}>
          To exercise any of these rights, contact us at:{' '}
          <a href="mailto:ruben@parsoftware.co.za" style={{ color: 'var(--teal-600)' }}>ruben@parsoftware.co.za</a> or{' '}
          <a href="mailto:erik@parsoftware.co.za" style={{ color: 'var(--teal-600)' }}>erik@parsoftware.co.za</a>
          <br />
          Information Regulator (South Africa):{' '}
          <a href="https://inforeg.org.za" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--teal-600)' }}>
            inforeg.org.za
          </a>
        </p>

        <h2 style={sectionTitleStyle}>10. Our Applications</h2>
        <p style={paragraphStyle}>
          This policy applies to all applications built and published by Par Software, including:
        </p>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--gray-900)', marginBottom: '0.5rem' }}>
          CPS: Cape Piscatorial Society App
        </h3>
        <p style={paragraphStyle}>
          The CPS app is a membership and booking management application for the Cape Piscatorial Society.
        </p>
        <p style={paragraphStyle}>
          Data collected: member name, email address, membership and licence details, beat bookings, and catch
          reports submitted by the user.
        </p>
        <p style={paragraphStyle}>
          Purpose: to facilitate club membership management, beat bookings, and catch reporting for CPS members and
          administrators.
        </p>
        <p style={paragraphStyle}>
          Data is stored securely on Par Software&rsquo;s infrastructure and is not shared with any third party
          outside of CPS administration.
        </p>

        <h2 style={sectionTitleStyle}>11. Changes to This Policy</h2>
        <p style={paragraphStyle}>
          We may update this Privacy Policy from time to time. When we do, we will update the &ldquo;Last
          updated&rdquo; date at the top of this document. Where changes are material, we will notify users through
          the relevant application. Continued use of our applications after changes are posted constitutes
          acceptance of the updated policy.
        </p>

        <h2 style={sectionTitleStyle}>12. Contact Us</h2>
        <p style={paragraphStyle}>
          If you have any questions about this Privacy Policy or how we handle your personal information, please
          contact:
        </p>
        <p style={paragraphStyle}>
          Par Software (Pty) Ltd
          <br />
          Email: <a href="mailto:ruben@parsoftware.co.za" style={{ color: 'var(--teal-600)' }}>ruben@parsoftware.co.za</a> or{' '}
          <a href="mailto:erik@parsoftware.co.za" style={{ color: 'var(--teal-600)' }}>erik@parsoftware.co.za</a>
          <br />
          Website:{' '}
          <a href="https://parsoftware.co.za" style={{ color: 'var(--teal-600)' }}>parsoftware.co.za</a>
        </p>
      </div>
    </section>
    <Footer />
  </main>
);

export default PrivacyPage;
