import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Zap } from "lucide-react";

export function EditorialHero() {
  return (
    <section className="editorial-hero page-width" id="top" aria-labelledby="hero-title">
      <div className="editorial-hero__copy">
        <p className="editorial-hero__eyebrow">
          <Zap size={14} fill="currentColor" aria-hidden="true" />
          <span>ISSUE 04 · KENYAN TEEN FINANCE</span>
        </p>
        <h1 id="hero-title">
          Money isn&apos;t a textbook. Let&apos;s decode how it actually works in Kenya.
        </h1>
        <p className="editorial-hero__description">
          From stretching 1,500 KES pocket money across half-term to dodging Fuliza fee traps and running a student chama—real talk for ages 14–17.
        </p>
        <div className="editorial-hero__actions">
          <Link className="button-primary" href="#daily-realities">
            Start a Scenario <ArrowRight size={17} strokeWidth={2.5} aria-hidden="true" />
          </Link>
          <Link className="button-secondary" href="#money-myths">
            Browse the Dictionary <BookOpen size={16} aria-hidden="true" />
          </Link>
        </div>
        <ul className="hero-proof-points" aria-label="About PesaZine">
          <li><CheckCircle2 size={14} aria-hidden="true" /> Zero bank jargon</li>
          <li><CheckCircle2 size={14} aria-hidden="true" /> Built by Kenyan students</li>
          <li><CheckCircle2 size={14} aria-hidden="true" /> 100% KES-real examples</li>
        </ul>
      </div>

      <figure className="editorial-hero__photo">
        <Image
          src="/images/student-budget-planning.png"
          alt="Three Kenyan high school students planning their pocket money together at a sunny school courtyard table."
          fill
          priority
          sizes="(max-width: 760px) calc(100vw - 32px), (max-width: 1200px) 42vw, 500px"
        />
        <div className="editorial-hero__shade" aria-hidden="true" />
        <figcaption className="editorial-hero__photo-caption">
          <div className="pulse-card">
            <span>THIS WEEK&apos;S PULSE</span>
            <strong>68% of teens</strong>
            <p>save via mobile wallets or home tins</p>
          </div>
          <span className="age-sticker">14–17 YRS</span>
        </figcaption>
      </figure>
    </section>
  );
}
