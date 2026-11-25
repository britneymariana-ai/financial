"use client";

import { useEffect, useRef, useState } from "react";
import { Moon, Pause, Play, VolumeX, Wind } from "lucide-react";

const phases = [
  { title: "Pumua ndani", subtitle: "Breathe in gently", className: "breath-orb--inhale" },
  { title: "Shikilia", subtitle: "Hold softly", className: "breath-orb--hold" },
  { title: "Toa polepole", subtitle: "Breathe out slowly", className: "breath-orb--exhale" },
  { title: "Tulia", subtitle: "Rest for a moment", className: "breath-orb--rest" },
];

const exerciseLength = 120;

type BreathingToolProps = {
  dimmed: boolean;
  onDimToggle: () => void;
};

export function BreathingTool({ dimmed, onDimToggle }: BreathingToolProps) {
  const [isRunning, setIsRunning] = useState(false);
  const [phaseIndex, setPhaseIndex] = useState(-1);
  const [secondsRemaining, setSecondsRemaining] = useState(exerciseLength);
  const remainingRef = useRef(exerciseLength);

  useEffect(() => {
    if (!isRunning) return;

    const interval = window.setInterval(() => {
      const next = Math.max(remainingRef.current - 1, 0);
      remainingRef.current = next;
      setSecondsRemaining(next);

      if (next > 0 && next % 4 === 0) {
        setPhaseIndex(((exerciseLength - next) / 4) % phases.length);
      }

      if (next === 0) {
        window.clearInterval(interval);
        setIsRunning(false);
        setPhaseIndex(-1);
      }
    }, 1000);

    return () => window.clearInterval(interval);
  }, [isRunning]);

  function toggleExercise() {
    if (isRunning) {
      setIsRunning(false);
      return;
    }

    if (secondsRemaining === 0) {
      remainingRef.current = exerciseLength;
      setSecondsRemaining(exerciseLength);
      setPhaseIndex(0);
    } else {
      remainingRef.current = secondsRemaining;
      setPhaseIndex((current) => (current < 0 ? 0 : current));
    }

    setIsRunning(true);
  }

  const activePhase = phaseIndex >= 0 ? phases[phaseIndex] : null;
  const PlayIcon = isRunning ? Pause : Play;
  const timerLabel = `${Math.floor(secondsRemaining / 60)}:${String(secondsRemaining % 60).padStart(2, "0")}`;

  return (
    <section className="breathing-card" id="reset" aria-labelledby="breathing-heading">
      <div className="section-kicker-row">
        <p className="eyebrow eyebrow--sage"><span className="live-dot" aria-hidden="true" /> Quiet dorm tool</p>
        <span className="quiet-label"><VolumeX size={14} aria-hidden="true" /> No sound</span>
      </div>
      <div className="breathing-card__intro">
        <span className="breathing-card__icon"><Wind size={19} aria-hidden="true" /></span>
        <div>
          <h2 id="breathing-heading">A silent two-minute reset</h2>
          <p>Pumua ndani, shikilia, toa. A gentle box-breathing rhythm you can do quietly on your bunk.</p>
        </div>
      </div>

      <div className="breathing-stage">
        <div className="breath-orb-wrap">
          <div className={`breath-orb${activePhase ? ` ${activePhase.className}` : ""}`}>
            {activePhase ? (
              <span className="breath-orb__words" role="status" aria-live="polite">
                <strong>{activePhase.title}</strong>
                <small>{activePhase.subtitle}</small>
              </span>
            ) : secondsRemaining === 0 ? (
              <span className="breath-orb__words">
                <strong>Asante, rafiki</strong>
                <small>You made space to pause</small>
              </span>
            ) : (
              <span className="breath-orb__words">
                <strong>Tap to start</strong>
                <small>There’s no wrong pace</small>
              </span>
            )}
          </div>
        </div>
        <div className="breathing-controls">
          <button className="button button--primary" type="button" onClick={toggleExercise}>
            <PlayIcon size={17} aria-hidden="true" />
            {isRunning ? "Pause cycle" : secondsRemaining === 0 ? "Start again" : phaseIndex < 0 ? "Begin quiet cycle" : "Resume cycle"}
          </button>
          <span className="breathing-timer" aria-label={`${Math.floor(secondsRemaining / 60)} minutes ${secondsRemaining % 60} seconds remaining`}>
            {timerLabel}
          </span>
          <button
            className={`button button--icon${dimmed ? " is-active" : ""}`}
            type="button"
            onClick={onDimToggle}
            aria-label={dimmed ? "Turn off dim mode" : "Turn on dim mode"}
            aria-pressed={dimmed}
            title="Dim the screen for a quiet moment"
          >
            <Moon size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
      <p className="breathing-footnote">Try it at your own pace. You can pause whenever you want.</p>
    </section>
  );
}
