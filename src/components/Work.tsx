import Image from 'next/image';

const BrowserBar = ({ title }: { title: string }) => (
  <div className="browser-bar">
    <i />
    <i />
    <i />
    <span>{title}</span>
  </div>
);

const Tags = ({ items }: { items: string[] }) => (
  <ul className="tags">
    {items.map((t) => (
      <li key={t}>{t}</li>
    ))}
  </ul>
);

const Work = () => (
  <section id="work" className="band work">
    <div className="wrap section-pad">
      <div className="section-head">
        <h2 className="h-section" style={{ maxWidth: '16ch' }}>
          Things we&rsquo;ve shipped.
        </h2>
        <p className="eyebrow" style={{ letterSpacing: '.1em' }}>
          Selected work · 03
        </p>
      </div>

      <div>
        <article className="work-row">
          <div className="w-text">
            <p className="kicker">01 · Mobile app</p>
            <h3>Cape Piscatorial Society</h3>
            <p>
              A members&rsquo; app for a Cape fly-fishing society. Book river beats, stillwaters and the
              Lakenvlei hut, check licence status, log catches and pay through PayFast, all from a phone on
              the riverbank.
            </p>
            <Tags items={['iOS & Android', 'Bookings', 'PayFast']} />
          </div>
          <div className="w-media phones">
            <Image
              className="phone"
              src="/work/cps-home.jpg"
              alt="CPS app home screen: make a day booking or apply for membership"
              width={600}
              height={1299}
              sizes="(max-width: 820px) 25vw, 180px"
            />
            <Image
              className="phone d1 raised"
              src="/work/cps-booking.jpg"
              alt="CPS app booking screen: pick river or dam, a date and a beat"
              width={600}
              height={1299}
              sizes="(max-width: 820px) 25vw, 180px"
            />
            <Image
              className="phone d2"
              src="/work/cps-profile.jpg"
              alt="CPS app profile screen with digital membership card"
              width={600}
              height={1299}
              sizes="(max-width: 820px) 25vw, 180px"
            />
          </div>
        </article>

        <article className="work-row">
          <div className="w-text">
            <p className="kicker">02 · Web platform</p>
            <h3>Spoor</h3>
            <p>
              Reconciliation and allocation for a vehicle value-added-products administrator. Spoor replaces
              manual spreadsheet matching with a reviewed, auditable workflow the finance team can trust at
              month-end.
            </p>
            <Tags items={['Automation', 'Finance ops', 'Web app']} />
          </div>
          <div className="w-media browser">
            <BrowserBar title="Spoor · Home" />
            <Image
              src="/work/spoor-home.jpg"
              alt="Spoor home screen: unallocated receipts and payover transactions, items to review and month-end status for November 2026"
              width={1440}
              height={1080}
              sizes="(max-width: 820px) 100vw, 700px"
              style={{ objectPosition: 'left top' }}
            />
          </div>
        </article>

        <article className="work-row">
          <div className="w-text">
            <p className="kicker">03 · Brand &amp; website</p>
            <h3>Will&rsquo;s Oven</h3>
            <p>
              A brand system and online home for a founder-led bakery making stone-ground Ezekiel bread,
              flour and rusks, built to tell the story behind an ancient recipe and turn readers into regular
              customers.
            </p>
            <Tags items={['Brand system', 'Website', 'Food & retail']} />
          </div>
          <div className="w-media browser">
            <BrowserBar title="Will's Oven · Home" />
            <Image
              src="/work/wills-oven-home.jpg"
              alt="Will's Oven home page: Ezekiel bread from an ancient recipe, with a photo of a loaf being sliced on a wooden board"
              width={1440}
              height={900}
              sizes="(max-width: 820px) 100vw, 700px"
              style={{ objectPosition: 'center top' }}
            />
          </div>
        </article>
      </div>
    </div>
  </section>
);

export default Work;
