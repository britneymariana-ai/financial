"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenText,
  Check,
  ChevronRight,
  Copy,
  Heart,
  PhoneCall,
  ShieldCheck,
  Sprout,
  Wind,
} from "lucide-react";

const scriptText = "Mum or Dad, I’m trying hard and want to do well in school. Lately I’ve been feeling weighed down and anxious. Could we talk to someone together about ways to manage it?";

const features = [
  {
    id: "check-in",
    title: "Am I okay?",
    text: "Untangle exam tiredness from feeling overwhelmed. No tests, just a gentle check-in.",
    action: "Check in",
    icon: Heart,
    tone: "clay",
  },
  {
    id: "scripts",
    title: "Safe scripts",
    text: "Find kind words for a parent, teacher, matron, or friend.",
    action: "Read scripts",
    icon: BookOpenText,
    tone: "amber",
  },
  {
    id: "reset",
    title: "Dorm reset",
    text: "Quiet grounding ideas for a shared room or a busy school day.",
    action: "Try a reset",
    icon: Wind,
    tone: "sage",
  },
  {
    id: "stories",
    title: "Real talk",
    text: "A reminder that other students can understand what this feels like.",
    action: "Read a story",
    icon: Sprout,
    tone: "neutral",
  },
];

export function ExploreRafiki() {
  return (
    <section className="explore-section" id="explore" aria-labelledby="explore-heading">
      <div className="section-heading">
        <div>
          <p className="eyebrow eyebrow--small">A little support, your way</p>
          <h2 id="explore-heading">Explore Rafiki Space</h2>
        </div>
        <span className="free-note">Free · no account</span>
      </div>
      <div className="feature-grid">
        {features.map(({ id, title, text, action, icon: Icon, tone }) => (
          <a className="feature-card" href={`#${id}`} key={title}>
            <span className={`feature-card__icon feature-card__icon--${tone}`}>
              <Icon size={19} strokeWidth={1.9} aria-hidden="true" />
            </span>
            <span className="feature-card__title">{title}</span>
            <span className="feature-card__text">{text}</span>
            <span className="feature-card__action">{action}<ArrowRight size={15} aria-hidden="true" /></span>
          </a>
        ))}
      </div>
    </section>
  );
}

export function ScriptPreview() {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");

  async function copyScript() {
    try {
      await navigator.clipboard.writeText(scriptText);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  }

  return (
    <section className="script-card" id="scripts" aria-labelledby="script-heading">
      <div className="section-kicker-row">
        <span className="topic-pill topic-pill--amber">A conversation starter</span>
        <BookOpenText className="script-card__icon" size={19} aria-hidden="true" />
      </div>
      <div>
        <h2 id="script-heading">How to talk to someone you trust</h2>
        <p className="section-description">If you’re not sure where to begin, you can borrow these words and make them your own.</p>
      </div>
      <blockquote className="script-quote">
        <span className="script-quote__label"><span aria-hidden="true">You</span> · A possible way to say it</span>
        <p>“{scriptText}”</p>
      </blockquote>
      <div className="script-card__footer">
        <button className="button button--subtle" type="button" onClick={copyScript}>
          {status === "copied" ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
          {status === "copied" ? "Copied" : "Copy script"}
        </button>
        <span className={status === "failed" ? "copy-status copy-status--error" : "sr-only"} role="status" aria-live="polite">
          {status === "copied" ? "Script copied to clipboard." : status === "failed" ? "Could not copy. You can select the script text instead." : ""}
        </span>
        <a className="text-link" href="#helplines">More support<ChevronRight size={15} aria-hidden="true" /></a>
      </div>
    </section>
  );
}

export function PeerStory() {
  const [supported, setSupported] = useState(false);

  return (
    <section className="peer-card" id="stories" aria-labelledby="peer-heading">
      <div className="section-kicker-row">
        <p className="eyebrow eyebrow--sage"><Heart size={15} aria-hidden="true" /> Real talk from peers</p>
        <span className="topic-pill topic-pill--clay">Exam pressure</span>
      </div>
      <h2 id="peer-heading">You’re not the only one</h2>
      <blockquote className="peer-quote">
        “During mock week in Form 3, my chest felt tight before evening prep. I thought I was being dramatic. Talking it through helped me find small ways to steady myself and ask for support.”
      </blockquote>
      <div className="peer-profile">
        <span className="peer-avatar" aria-hidden="true">W</span>
        <div className="peer-profile__details">
          <strong>Wanjiku K., 17</strong>
          <span>Form 3 · Nakuru County</span>
        </div>
        <span className="peer-profile__tag">Illustrative composite</span>
      </div>
      <p className="peer-disclaimer">This is a fictional example, not a real student’s quote. Names and details are illustrative.</p>
      <button
        className={`solidarity-button${supported ? " is-supported" : ""}`}
        type="button"
        aria-pressed={supported}
        onClick={() => setSupported((current) => !current)}
      >
        <Heart size={15} fill={supported ? "currentColor" : "none"} aria-hidden="true" />
        {supported ? "A little solidarity sent" : "Send a little solidarity"}
      </button>
    </section>
  );
}

export function SafetyNet() {
  return (
    <section className="safety-card" id="helplines" aria-labelledby="safety-heading">
      <div className="safety-card__heading">
        <span className="safety-card__icon"><ShieldCheck size={19} aria-hidden="true" /></span>
        <div>
          <h2 id="safety-heading">Always in your corner</h2>
          <p>Free youth helplines in Kenya</p>
        </div>
      </div>
      <p className="safety-card__copy">If things feel too heavy, a trained person is ready to listen. You can also reach out to a trusted adult near you.</p>
      <div className="helpline-grid">
        <a className="helpline-link helpline-link--childline" href="tel:116">
          <PhoneCall size={17} aria-hidden="true" />
          <span><strong>Call 116</strong><small>Childline Kenya · Toll-free</small></span>
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
        <a className="helpline-link helpline-link--redcross" href="tel:1199">
          <PhoneCall size={17} aria-hidden="true" />
          <span><strong>Call 1199</strong><small>Kenya Red Cross</small></span>
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
      <p className="safety-card__note">Rafiki is a gentle support space, not a diagnosis or emergency service. If you’re in immediate danger, go to a trusted adult or a nearby clinic or hospital.</p>
    </section>
  );
}
