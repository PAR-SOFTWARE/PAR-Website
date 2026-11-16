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

const SupportCpsPage = () => (
  <>
    <Navigation />
    <main>
      <article className="legal">
        <p className="eyebrow">
          Support
        </p>
        <h1>
          CPS App Support
        </h1>
        <p>
          Need help with the CPS app? We&rsquo;re here to help.
        </p>

        <h2>Contact Us</h2>
        <p>
          Email us at{' '}
          <a href="mailto:ruben@parsoftware.co.za">ruben@parsoftware.co.za</a> or{' '}
          <a href="mailto:erik@parsoftware.co.za">erik@parsoftware.co.za</a>{' '}
          and we&rsquo;ll get back to you as soon as possible.
        </p>

        <h2>Frequently Asked Questions</h2>

        <h3>How do I book a river beat, stillwater session, or the Lakenvlei hut?</h3>
        <p>
          Open the app, go to Bookings, and select the date and location you want. Availability updates in real
          time.
        </p>

        <h3>How do I renew or check my fishing licence?</h3>
        <p>
          Go to your Profile to view your licence status and expiry date. You&rsquo;ll also get a reminder
          notification before it expires.
        </p>

        <h3>How do I submit a catch report?</h3>
        <p>
          After a session, go to Catch Reports and log your species counts, longest fish, and photos.
        </p>

        <h3>
          I made a hut booking payment but didn&rsquo;t get confirmation. What do I do?
        </h3>
        <p>
          Hut bookings are processed through PayFast. If your payment succeeded but you didn&rsquo;t receive
          confirmation in the app, email us with your booking date and we&rsquo;ll check it for you.
        </p>

        <h3>How do I update my membership details?</h3>
        <p>
          Go to Profile &gt; Membership to update your details, or contact us if you need help with a membership
          issue.
        </p>

        <h3>
          I&rsquo;m having trouble logging in or the app is crashing. What should I do?
        </h3>
        <p>
          Try updating to the latest version of the app from the App Store or Google Play. If the issue continues,
          email us with your device type and a description of the problem.
        </p>

        <h2>Privacy</h2>
        <p>
          Read our{' '}
          <a href="/privacy">Privacy Policy</a> to see how we handle your data.
        </p>
      </article>
    </main>
    <Footer />
  </>
);

export default SupportCpsPage;
