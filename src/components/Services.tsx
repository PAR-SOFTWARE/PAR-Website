import Scorecard from './Scorecard';

// Hand-drawn shapes, so no two marks look stamped from the same mould.
const circles = [
  'M31 5C17 2 4 8 4 17c1 9 15 13 28 11 11-2 15-11 10-18-4-5-13-7-24-4',
  'M28 4C14 4 3 10 5 18c2 8 17 11 29 9 10-2 14-10 9-16-4-5-12-7-22-5',
  'M33 6C19 1 5 7 4 16c0 10 14 13 27 12 12-1 16-10 11-17-3-5-11-7-21-5',
];
const PencilCircle = ({ i }: { i: number }) => (
  <svg className="sc-mark" aria-hidden="true" viewBox="0 0 48 32" style={{ rotate: `${(i % 3) * 4 - 4}deg` }}>
    <path d={circles[i % 3]} pathLength={1} />
  </svg>
);

const services = [
  {
    name: 'AI automation',
    does: "Takes the repetitive work off your team's desk: workflows that read, sort, match and route the way your people do.",
    includes: 'Process automation · ML · Predictive analytics',
  },
  {
    name: 'Web platforms',
    does: 'Fast, search-friendly sites and web apps built to convert visitors and carry real load.',
    includes: 'Responsive · SEO · Performance',
  },
  {
    name: 'Mobile apps',
    does: 'iOS and Android apps people keep on their home screen, for bookings, payments and field data.',
    includes: 'iOS & Android · Cross-platform',
  },
  {
    name: 'Custom software',
    does: "The system off-the-shelf tools can't give you, built around how your business actually runs.",
    includes: 'Bespoke · Scalable · Integrations',
  },
  {
    name: 'Data & dashboards',
    does: 'Get your numbers out of spreadsheets and into live dashboards your managers will actually open.',
    includes: 'Analytics · BI · Real-time',
  },
  {
    name: 'Security & compliance',
    does: 'POPIA-minded data handling, access control and audits baked in from the first commit.',
    includes: 'Data protection · Audits',
  },
];

const Services = () => (
  <section id="services" className="services">
    <div className="wrap section-pad">
      <div className="section-head">
        <div>
          <p className="eyebrow">Services</p>
          <h2 className="h-section">Six things we do. All of them in-house.</h2>
        </div>
        <p>No subcontractors, no offshore handoff. Every line below is built by the two people who quoted it.</p>
      </div>

      <Scorecard>
        <div role="row" className="sc-row sc-head">
          <span role="columnheader">No.</span>
          <span role="columnheader">Service</span>
          <span role="columnheader" className="sc-hide">
            What it does
          </span>
          <span role="columnheader" className="sc-hide">
            Includes
          </span>
        </div>

        {services.map((s, i) => (
          <div role="row" className="sc-row" key={s.name}>
            <span role="cell" className="sc-no">
              <span className="sc-num">
                {String(i + 1).padStart(2, '0')}
                <PencilCircle i={i} />
              </span>
            </span>
            <span role="cell" className="sc-name">
              {s.name}
            </span>
            <span role="cell" className="sc-hide">
              {s.does}
            </span>
            <span role="cell" className="sc-hide sc-incl">
              {s.includes}
            </span>
          </div>
        ))}

        <div role="row" className="sc-row sc-total">
          <span role="cell">Total</span>
          <span role="cell">
            <span className="sc-num">
              One studio
              <svg className="sc-mark sc-underline" aria-hidden="true" viewBox="0 0 120 12" preserveAspectRatio="none">
                <path d="M2 5c30-3 70-3 116-1M8 10c28-2 62-2 104 0" pathLength={1} />
              </svg>
            </span>
          </span>
          <span role="cell" className="sc-hide">
            One contract, one team, one number to call
          </span>
          <span role="cell" className="sc-hide">
            <a href="#contact">Book a call →</a>
          </span>
        </div>
      </Scorecard>
    </div>
  </section>
);

export default Services;
