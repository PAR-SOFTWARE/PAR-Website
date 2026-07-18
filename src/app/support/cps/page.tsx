import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'CPS App Support',
  description: 'Support and FAQs for the CPS (Cape Piscatorial Society) app.',
  alternates: {
    canonical: '/support/cps',
  },
};

const sectionTitleStyle = {
  fontSize: '1.25rem',
  fontWeight: 500,
  color: 'var(--gray-900)',
  marginTop: '2.5rem',
  marginBottom: '1rem',
};

const questionStyle = {
  fontSize: '1rem',
  fontWeight: 500,
  color: 'var(--gray-900)',
  marginTop: '1.5rem',
  marginBottom: '0.5rem',
};

const paragraphStyle = {
  color: 'var(--gray-700)',
  lineHeight: 1.7,
  fontWeight: 400,
  marginBottom: '1rem',
};

const SupportCpsPage = () => (
  <main className="min-h-screen">
    <Navigation />
    <section className="pt-32 pb-24" style={{ backgroundColor: 'var(--gray-50)' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          className="text-xs font-medium uppercase mb-4"
          style={{ color: 'var(--teal-600)', letterSpacing: '0.06em', fontWeight: 500 }}
        >
          Support
        </p>
        <h1 style={{ fontSize: '2rem', fontWeight: 500, lineHeight: 1.2, color: 'var(--gray-900)', marginBottom: '0.5rem' }}>
          CPS App Support
        </h1>
        <p style={{ ...paragraphStyle, marginTop: '1.5rem' }}>
          Need help with the CPS app? We&rsquo;re here to help.
        </p>

        <h2 style={sectionTitleStyle}>Contact Us</h2>
        <p style={paragraphStyle}>
          Email us at{' '}
          <a href="mailto:ruben@parsoftware.co.za" style={{ color: 'var(--teal-600)' }}>ruben@parsoftware.co.za</a> or{' '}
          <a href="mailto:erik@parsoftware.co.za" style={{ color: 'var(--teal-600)' }}>erik@parsoftware.co.za</a>{' '}
          and we&rsquo;ll get back to you as soon as possible.
        </p>

        <h2 style={sectionTitleStyle}>Frequently Asked Questions</h2>

        <h3 style={questionStyle}>How do I book a river beat, stillwater session, or the Lakenvlei hut?</h3>
        <p style={paragraphStyle}>
          Open the app, go to Bookings, and select the date and location you want. Availability updates in real
          time.
        </p>

        <h3 style={questionStyle}>How do I renew or check my fishing licence?</h3>
        <p style={paragraphStyle}>
          Go to your Profile to view your licence status and expiry date. You&rsquo;ll also get a reminder
          notification before it expires.
        </p>

        <h3 style={questionStyle}>How do I submit a catch report?</h3>
        <p style={paragraphStyle}>
          After a session, go to Catch Reports and log your species counts, longest fish, and photos.
        </p>

        <h3 style={questionStyle}>
          I made a hut booking payment but didn&rsquo;t get confirmation. What do I do?
        </h3>
        <p style={paragraphStyle}>
          Hut bookings are processed through PayFast. If your payment succeeded but you didn&rsquo;t receive
          confirmation in the app, email us with your booking date and we&rsquo;ll check it for you.
        </p>

        <h3 style={questionStyle}>How do I update my membership details?</h3>
        <p style={paragraphStyle}>
          Go to Profile &gt; Membership to update your details, or contact us if you need help with a membership
          issue.
        </p>

        <h3 style={questionStyle}>
          I&rsquo;m having trouble logging in or the app is crashing. What should I do?
        </h3>
        <p style={paragraphStyle}>
          Try updating to the latest version of the app from the App Store or Google Play. If the issue continues,
          email us with your device type and a description of the problem.
        </p>

        <h2 style={sectionTitleStyle}>Privacy</h2>
        <p style={paragraphStyle}>
          Read our{' '}
          <a href="/privacy" style={{ color: 'var(--teal-600)' }}>Privacy Policy</a> to see how we handle your data.
        </p>
      </div>
    </section>
    <Footer />
  </main>
);

export default SupportCpsPage;
