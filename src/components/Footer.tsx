import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <footer className="site-footer">
    <div className="wrap">
      <div className="footer-top">
        <div className="footer-brand">
          <Image src="/logo.png" alt="Par Software logo" width={56} height={56} />
          <p>Software studio building for South Africa and beyond.</p>
        </div>
        <nav aria-label="Footer" className="footer-nav">
          <div>
            <span className="label">Studio</span>
            <Link href="/#work">Work</Link>
            <Link href="/#services">Services</Link>
          </div>
          <div>
            <span className="label">Support</span>
            <a href="/support/cps">CPS app support</a>
            <a href="/privacy">Privacy policy</a>
          </div>
          <div>
            <span className="label">Contact</span>
            <a href="mailto:ruben@parsoftware.co.za">ruben@parsoftware.co.za</a>
            <a href="mailto:erik@parsoftware.co.za">erik@parsoftware.co.za</a>
          </div>
        </nav>
      </div>
      <p aria-hidden="true" className="wordmark">
        par software
      </p>
      <div className="footer-base">
        <span>&copy; {new Date().getFullYear()} Par Software (Pty) Ltd</span>
        <span>South Africa</span>
      </div>
    </div>
  </footer>
);

export default Footer;
