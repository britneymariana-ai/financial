import { ArrowUpRight } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner page-width">
        <a className="brand" href="#top" aria-label="PesaZine home">
          <span className="brand-mark" aria-hidden="true">P</span>
          <span className="brand-word">PesaZine<span className="brand-period">.</span></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#top" aria-current="page">Home</a>
          <a href="#money-map">My money map</a>
          <a href="#track-spending">Track spending</a>
          <a href="#tip">Pocket tip</a>
        </nav>
        <a className="header-cta" href="#money-map">
          Start planning <ArrowUpRight size={15} strokeWidth={2.5} aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
