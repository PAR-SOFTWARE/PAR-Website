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

      <div role="table" aria-label="Services" className="scorecard">
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
              {String(i + 1).padStart(2, '0')}
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
          <span role="cell">One studio</span>
          <span role="cell" className="sc-hide">
            One contract, one team, one number to call
          </span>
          <span role="cell" className="sc-hide">
            <a href="#contact">Book a call →</a>
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
