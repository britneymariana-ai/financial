"use client";

import {
  BookOpenText,
  Heart,
  Home,
  Leaf,
  Phone,
  ShieldCheck,
  Wind,
} from "lucide-react";

const quickLinks = [
  { href: "#explore", label: "Explore" },
  { href: "#scripts", label: "Safe scripts" },
  { href: "#stories", label: "Peer stories" },
];

export function RafikiHeader() {
  function leaveQuickly() {
    window.location.replace("https://www.google.com/search?q=school+study+notes");
  }

  return (
    <header className="rafiki-header">
      <div className="rafiki-header__inner">
        <a className="rafiki-brand" href="#top" aria-label="Rafiki Sanctuary home">
          <span className="rafiki-brand__mark" aria-hidden="true">
            <Leaf size={19} strokeWidth={2.2} />
          </span>
          <span className="rafiki-brand__word">rafiki<span>.</span></span>
          <span className="rafiki-brand__descriptor">SANCTUARY</span>
        </a>

        <nav className="rafiki-desktop-nav" aria-label="Main navigation">
          {quickLinks.map((link) => (
            <a href={link.href} key={link.href}>{link.label}</a>
          ))}
        </nav>

        <button className="quick-exit" type="button" onClick={leaveQuickly}>
          <ShieldCheck size={17} aria-hidden="true" />
          <span>Quick exit</span>
          <span className="sr-only">opens a neutral school-notes search page</span>
        </button>
      </div>
    </header>
  );
}

const mobileLinks = [
  { href: "#top", label: "Home", icon: Home },
  { href: "#check-in", label: "Check-in", icon: Heart },
  { href: "#scripts", label: "Scripts", icon: BookOpenText },
  { href: "#reset", label: "Reset", icon: Wind },
  { href: "#helplines", label: "Helplines", icon: Phone },
];

export function RafikiBottomNav() {
  return (
    <nav className="rafiki-bottom-nav" aria-label="Quick navigation">
      {mobileLinks.map(({ href, label, icon: Icon }, index) => (
        <a
          className="rafiki-bottom-nav__link"
          href={href}
          key={href}
          aria-current={index === 0 ? "page" : undefined}
        >
          <Icon size={19} strokeWidth={1.9} aria-hidden="true" />
          <span>{label}</span>
        </a>
      ))}
    </nav>
  );
}
