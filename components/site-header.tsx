"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, UserRound, X } from "lucide-react";
import { QuickQuizButton } from "@/components/quick-quiz-button";

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="site-header__inner page-width">
        <Link className="brand" href="/" aria-label="PesaZine home" onClick={closeMobileMenu}>
          <span className="brand-mark" aria-hidden="true">P</span>
          <span className="brand-word">PesaZine<span className="brand-period">.</span></span>
        </Link>
        <nav
          id="primary-navigation"
          className={`main-nav${mobileMenuOpen ? " main-nav--open" : ""}`}
          aria-label="Main navigation"
        >
          <Link href="/" aria-current={pathname === "/" ? "page" : undefined} onClick={closeMobileMenu}>Home</Link>
          <Link href="/#daily-realities" onClick={closeMobileMenu}>Scenario Arena</Link>
          <Link href="/#money-myths" onClick={closeMobileMenu}>Unfiltered Dictionary</Link>
          <Link href="/goal-vibes" aria-current={pathname === "/goal-vibes" ? "page" : undefined} onClick={closeMobileMenu}>Goal &amp; Vibes</Link>
        </nav>
        <div className="header-actions">
          <QuickQuizButton className="header-cta">Quick Quiz</QuickQuizButton>
          <Link className="profile-cta" href="/goal-vibes" aria-label="Open your money plan">
            <UserRound size={16} aria-hidden="true" />
          </Link>
        </div>
        <button
          className="menu-toggle"
          type="button"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
        >
          {mobileMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}
