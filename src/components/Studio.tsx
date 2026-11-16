import Image from 'next/image';

const founders = [
  { name: 'Ruben Brits', email: 'ruben@parsoftware.co.za', photo: '/team/ruben-brits.jpg' },
  { name: 'Erik Bernhardt', email: 'erik@parsoftware.co.za', photo: '/team/erik-bernhardt.jpg' },
];

const Studio = () => (
  <section id="studio" className="band">
    <div className="wrap section-pad studio-row">
      <div className="studio-copy">
        <h2 className="eyebrow accent">The studio</h2>
        <p className="studio-lede">
          Par Software is Ruben and Erik. We&rsquo;ve built software together for six years and delivered 20
          projects for 10 clients. We stay small on purpose: when you call, you get the engineer who wrote
          your code, and your brief never passes through a middleman.
        </p>
        <ul className="principles">
          <li>The person you brief writes the code.</li>
          <li>We quote before we build. In writing.</li>
          <li>Your data is your data. Full stop.</li>
        </ul>
      </div>

      <div className="founders">
        {founders.map((f) => (
          <div className="founder" key={f.email}>
            <Image src={f.photo} alt={f.name} width={640} height={800} sizes="(max-width: 820px) 100vw, 300px" />
            <div>
              <h3>{f.name}</h3>
              <a href={`mailto:${f.email}`}>{f.email}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Studio;
