import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Delete Your Account — CPS App',
  description: 'How to request deletion of your CPS (Cape Piscatorial Society) app account and data.',
  alternates: {
    canonical: '/support/cps/delete-account',
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

const olStyle = {
  ...listStyle,
  listStyleType: 'decimal' as const,
};

const DeleteAccountPage = () => (
  <main className="min-h-screen">
    <Navigation />
    <section className="pt-32 pb-24" style={{ backgroundColor: 'var(--gray-50)' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          className="text-xs font-medium uppercase mb-4"
          style={{ color: 'var(--teal-600)', letterSpacing: '0.06em', fontWeight: 500 }}
        >
          Support &middot; CPS App
        </p>
        <h1 style={{ fontSize: '2rem', fontWeight: 500, lineHeight: 1.2, color: 'var(--gray-900)', marginBottom: '0.5rem' }}>
          Delete Your Account
        </h1>
        <p style={{ ...paragraphStyle, marginTop: '1.5rem' }}>
          The CPS app (Cape Piscatorial Society) is developed and published by Par Software (Pty) Ltd. This page
          explains how to request deletion of your CPS app account and what happens to your data when you do.
        </p>

        <h2 style={sectionTitleStyle}>How to Request Deletion</h2>
        <ol style={olStyle}>
          <li>Open the CPS app and go to Profile.</li>
          <li>
            Tap <strong>Delete Account</strong>. If this option is not visible in your version of the app, send a
            deletion request by email instead (see below).
          </li>
          <li>Confirm the request when prompted.</li>
        </ol>
        <p style={paragraphStyle}>
          Alternatively, email{' '}
          <a href="mailto:ruben@parsoftware.co.za" style={{ color: 'var(--teal-600)' }}>ruben@parsoftware.co.za</a> or{' '}
          <a href="mailto:erik@parsoftware.co.za" style={{ color: 'var(--teal-600)' }}>erik@parsoftware.co.za</a>{' '}
          from the address linked to your account, with the subject line &ldquo;Delete My Account&rdquo;. We will
          confirm your identity and process the request within 30 days.
        </p>

        <h2 style={sectionTitleStyle}>What Gets Deleted</h2>
        <ul style={listStyle}>
          <li>Your name, email address, and account credentials</li>
          <li>Membership and licence details linked to your profile</li>
          <li>Beat, stillwater, and hut bookings associated with your account</li>
          <li>Catch reports and photos you submitted</li>
        </ul>

        <h2 style={sectionTitleStyle}>What May Be Retained</h2>
        <p style={paragraphStyle}>
          Some information is kept after account deletion where required for legal, financial, or club-administration
          reasons:
        </p>
        <ul style={listStyle}>
          <li>
            Payment records related to hut bookings (processed via PayFast), retained for up to 5 years to meet
            South African financial record-keeping requirements
          </li>
          <li>
            Aggregated or anonymised catch data used for CPS conservation reporting, which no longer identifies you
          </li>
          <li>Records we are legally required to retain, kept only for the minimum period required by law</li>
        </ul>
        <p style={paragraphStyle}>
          Once these retention periods lapse, the remaining data is permanently deleted.
        </p>

        <h2 style={sectionTitleStyle}>Privacy Policy</h2>
        <p style={paragraphStyle}>
          For more detail on what we collect and how it&rsquo;s used, see our{' '}
          <a href="/privacy" style={{ color: 'var(--teal-600)' }}>Privacy Policy</a>.
        </p>
      </div>
    </section>
    <Footer />
  </main>
);

export default DeleteAccountPage;
