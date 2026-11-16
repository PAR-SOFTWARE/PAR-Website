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

const DeleteAccountPage = () => (
  <>
    <Navigation />
    <main>
      <article className="legal">
        <p className="eyebrow">
          Support &middot; CPS App
        </p>
        <h1>
          Delete Your Account
        </h1>
        <p>
          The CPS app (Cape Piscatorial Society) is developed and published by Par Software (Pty) Ltd. This page
          explains how to request deletion of your CPS app account and what happens to your data when you do.
        </p>

        <h2>How to Request Deletion</h2>
        <ol>
          <li>Open the CPS app and go to Profile.</li>
          <li>
            Tap <strong>Delete Account</strong>. If this option is not visible in your version of the app, send a
            deletion request by email instead (see below).
          </li>
          <li>Confirm the request when prompted.</li>
        </ol>
        <p>
          Alternatively, email{' '}
          <a href="mailto:ruben@parsoftware.co.za">ruben@parsoftware.co.za</a> or{' '}
          <a href="mailto:erik@parsoftware.co.za">erik@parsoftware.co.za</a>{' '}
          from the address linked to your account, with the subject line &ldquo;Delete My Account&rdquo;. We will
          confirm your identity and process the request within 30 days.
        </p>

        <h2>What Gets Deleted</h2>
        <ul>
          <li>Your name, email address, and account credentials</li>
          <li>Membership and licence details linked to your profile</li>
          <li>Beat, stillwater, and hut bookings associated with your account</li>
          <li>Catch reports and photos you submitted</li>
        </ul>

        <h2>What May Be Retained</h2>
        <p>
          Some information is kept after account deletion where required for legal, financial, or club-administration
          reasons:
        </p>
        <ul>
          <li>
            Payment records related to hut bookings (processed via PayFast), retained for up to 5 years to meet
            South African financial record-keeping requirements
          </li>
          <li>
            Aggregated or anonymised catch data used for CPS conservation reporting, which no longer identifies you
          </li>
          <li>Records we are legally required to retain, kept only for the minimum period required by law</li>
        </ul>
        <p>
          Once these retention periods lapse, the remaining data is permanently deleted.
        </p>

        <h2>Privacy Policy</h2>
        <p>
          For more detail on what we collect and how it&rsquo;s used, see our{' '}
          <a href="/privacy">Privacy Policy</a>.
        </p>
      </article>
    </main>
    <Footer />
  </>
);

export default DeleteAccountPage;
