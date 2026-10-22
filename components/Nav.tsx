"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "HOME" },
  { href: "/how-to", label: "HOW TO PLAY" },
  { href: "/privacy", label: "PRIVACY" },
  { href: "/terms", label: "TERMS" },
];

export default function Nav() {
  const path = usePathname();
  return (
    <nav>
      <Link href="/" className="nav-brand">
        RULE <span>SHIFT</span>
      </Link>
      <div className="nav-links">
        {LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={path === l.href ? "active" : undefined}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer>
      <div>© {new Date().getFullYear()} Rule Shift. The climb never ends.</div>
      <div className="links">
        <Link href="/how-to">How to play</Link>
        <Link href="/privacy">Privacy policy</Link>
        <Link href="/terms">Terms &amp; conditions</Link>
      </div>
    </footer>
  );
}
