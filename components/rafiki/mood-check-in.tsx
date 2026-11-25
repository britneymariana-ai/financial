"use client";

import { useState } from "react";
import { BatteryLow, Brain, CloudFog, Leaf, Sparkles } from "lucide-react";

const moods = [
  {
    id: "overwhelmed",
    label: "A bit overwhelmed",
    detail: "Too much at once",
    icon: CloudFog,
    tone: "clay",
  },
  {
    id: "exhausted",
    label: "Running on empty",
    detail: "Prep fatigue & low energy",
    icon: BatteryLow,
    tone: "amber",
  },
  {
    id: "anxious",
    label: "Anxious about exams",
    detail: "Mocks, marks & KCSE",
    icon: Brain,
    tone: "rose",
  },
  {
    id: "steady",
    label: "Feeling steady",
    detail: "Taking it day by day",
    icon: Leaf,
    tone: "sage",
  },
] as const;

type MoodId = (typeof moods)[number]["id"];

const responses: Record<MoodId, string> = {
  overwhelmed: "Pole pole, rafiki. One hour at a time is enough. A quiet reset is here when you need it.",
  exhausted: "Prep fatigue is real. If you can, give your eyes and mind a short rest during break.",
  anxious: "Your marks are one part of your story, not the whole of it. Let’s take one slow breath.",
  steady: "Glad you’re holding steady today. You can still save a script or share a little solidarity.",
};

export function MoodCheckIn() {
  const [selectedMood, setSelectedMood] = useState<MoodId | null>(null);

  return (
    <section className="mood-card" id="check-in" aria-labelledby="mood-heading">
      <div className="mood-card__heading">
        <div>
          <p className="eyebrow eyebrow--small"><Sparkles size={14} aria-hidden="true" /> A gentle check-in</p>
          <h2 id="mood-heading">How are you feeling right now?</h2>
        </div>
        <Leaf className="mood-card__leaf" size={21} aria-hidden="true" />
      </div>
      <p className="mood-card__hint">Tap a mood for a little encouragement. Nothing is saved.</p>
      <div className="mood-options" role="group" aria-label="Choose the mood closest to how you feel">
        {moods.map(({ id, label, detail, icon: Icon, tone }) => (
          <button
            className={`mood-option mood-option--${tone}${selectedMood === id ? " is-selected" : ""}`}
            type="button"
            key={id}
            aria-pressed={selectedMood === id}
            onClick={() => setSelectedMood(id)}
          >
            <span className="mood-option__icon"><Icon size={18} strokeWidth={1.9} aria-hidden="true" /></span>
            <span className="mood-option__copy">
              <span className="mood-option__label">{label}</span>
              <span className="mood-option__detail">{detail}</span>
            </span>
          </button>
        ))}
      </div>
      <p className="mood-response" role="status" aria-live="polite">
        <span className="mood-response__check" aria-hidden="true">✓</span>
        {selectedMood ? responses[selectedMood] : "Whatever you feel right now is valid. No judgment, no marks."}
      </p>
    </section>
  );
}
