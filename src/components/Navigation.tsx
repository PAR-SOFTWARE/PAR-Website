import Image from "next/image";
import Link from "next/link";

const navItems = [
  { name: 'Work', href: '/#work' },
  { name: 'Services', href: '/#services' },
  { name: 'Studio', href: '/#studio' },
];

const Navigation = () => (
  <header className="site-header">
    <nav aria-label="Main" className="wrap site-nav">
      <Link href="/#top" className="brand">
        <Image src="/logo.png" alt="" width={36} height={36} priority />
        <span>PAR SOFTWARE</span>
      </Link>
      <div className="nav-links">
        {navItems.map((item) => (
          <Link key={item.name} href={item.href}>
            {item.name}
          </Link>
        ))}
      </div>
      <Link href="/#contact" className="btn sm">
        Start a project
        <svg
          aria-hidden="true"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </Link>
    </nav>
  </header>
);

export default Navigation;
