'use client';

import { useState } from 'react';

const needOptions = ['AI automation', 'Web platform', 'Mobile app', 'Custom software', 'Not sure yet'];

const timings = [
  { label: 'First reply', value: 'Within 2 hours' },
  { label: 'Ballpark estimate', value: 'Within 24 hours' },
  { label: 'Detailed quote', value: 'After a scoping call' },
  { label: 'Support', value: '24/7' },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' });
  const [needs, setNeeds] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const toggleNeed = (label: string) =>
    setNeeds((n) => (n.includes(label) ? n.filter((x) => x !== label) : [...n, label]));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, needs }),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="wrap contact">
      <div className="contact-copy">
        <h2 className="h-hero accent-text">
          What&rsquo;s slowing you down?
        </h2>
        <p>Tell us what&rsquo;s eating your team&rsquo;s week. We&rsquo;ll tell you, honestly, whether software fixes it.</p>
        <dl className="timings">
          {timings.map((t) => (
            <div key={t.label}>
              <dt className="label">{t.label}</dt>
              <dd>{t.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {status === 'success' ? (
        <div className="enquiry form-done" role="status">
          <h3>Sent. Thank you.</h3>
          <p>One of us will reply within 2 hours.</p>
        </div>
      ) : (
        <form aria-label="Project enquiry" className="enquiry" onSubmit={handleSubmit}>
          <div className="pair">
            <label>
              Name
              <input type="text" name="name" autoComplete="name" required value={form.name} onChange={set('name')} />
            </label>
            <label>
              Company
              <input
                type="text"
                name="company"
                autoComplete="organization"
                value={form.company}
                onChange={set('company')}
              />
            </label>
          </div>
          <label>
            Email
            <input type="email" name="email" autoComplete="email" required value={form.email} onChange={set('email')} />
          </label>
          <fieldset>
            <legend>What do you need?</legend>
            <div className="chips">
              {needOptions.map((label) => (
                <button
                  key={label}
                  type="button"
                  className="chip"
                  aria-pressed={needs.includes(label)}
                  onClick={() => toggleNeed(label)}
                >
                  {label}
                </button>
              ))}
            </div>
          </fieldset>
          <label>
            The problem, in a few lines
            <textarea name="message" rows={4} required value={form.message} onChange={set('message')} />
          </label>
          {status === 'error' && (
            <p className="form-error" role="alert">
              That didn&rsquo;t send. Try again, or email ruben@parsoftware.co.za directly.
            </p>
          )}
          <button type="submit" className="btn" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : "Send it. We'll reply within 2 hours"}
          </button>
        </form>
      )}
    </section>
  );
};

export default Contact;
