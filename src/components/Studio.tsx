import Image from 'next/image';

const founders = [
  { name: 'Ruben Brits', email: 'ruben@parsoftware.co.za', photo: '/team/ruben-brits.jpg' },
  { name: 'Erik Bernhardt', email: 'erik@parsoftware.co.za', photo: '/team/erik-bernhardt.jpg' },
];

const Studio = () => (
  <section id="studio" className="band">
    <div className="wrap section-pad studio-row">
      <div className="studio-copy">
        <p className="eyebrow accent">The studio</p>
        <h2 className="h-section">Two founders. Zero account managers.</h2>
        <p>
          Par Software is a small South African studio on purpose. You brief the engineers, the engineers
          build it, and nothing gets lost in between.
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
