"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowDownRight, Leaf, LockKeyhole, Sparkles } from "lucide-react";
import { RafikiBottomNav, RafikiHeader } from "@/components/rafiki-shell";
import { BreathingTool } from "@/components/rafiki/breathing-tool";
import { MoodCheckIn } from "@/components/rafiki/mood-check-in";
import { ExploreRafiki, PeerStory, SafetyNet, ScriptPreview } from "@/components/rafiki/support-sections";

export function RafikiSanctuary() {
  const [dimmed, setDimmed] = useState(false);

  return (
    <div className="rafiki-app" data-dimmed={dimmed} id="top">
      <RafikiHeader />
      <main className="rafiki-main">
        <section className="sanctuary-intro" aria-labelledby="welcome-heading">
          <div className="sanctuary-intro__copy">
            <p className="eyebrow"><span className="eyebrow__sun" aria-hidden="true"><Sparkles size={14} /></span> Rafiki Sanctuary</p>
            <h1 id="welcome-heading">Habari rafiki. <span>Take a slow breath.</span></h1>
            <p className="sanctuary-intro__description">A quiet corner for Kenyan secondary students navigating dawn preps, KCSE pressure, and boarding life. You don’t have to figure it all out alone.</p>
            <MoodCheckIn />
          </div>
          <aside className="sanctuary-scene" aria-label="A peaceful school courtyard at sunset">
            <Image
              className="sanctuary-scene__image"
              src="/images/rafiki-sanctuary.png"
              alt="A calm, tree-shaded Kenyan school courtyard in warm evening light."
              fill
              priority
              sizes="(max-width: 760px) 100vw, 42vw"
            />
            <div className="sanctuary-scene__shade" />
            <div className="sanctuary-scene__caption">
              <span><Leaf size={14} aria-hidden="true" /> Mambo ya boarding</span>
              <strong>A small pause belongs to you, too.</strong>
            </div>
            <span className="sanctuary-scene__badge"><LockKeyhole size={12} aria-hidden="true" /> Your space</span>
          </aside>
        </section>

        <div className="sanctuary-columns">
          <div className="sanctuary-column sanctuary-column--primary">
            <ExploreRafiki />
            <BreathingTool dimmed={dimmed} onDimToggle={() => setDimmed((current) => !current)} />
          </div>
          <div className="sanctuary-column sanctuary-column--support">
            <ScriptPreview />
            <PeerStory />
            <SafetyNet />
          </div>
        </div>

        <footer className="sanctuary-footer">
          <p><LockKeyhole size={14} aria-hidden="true" /> Mood choices stay in this tab. No account needed.</p>
          <a href="#top">Back to the top <ArrowDownRight size={14} aria-hidden="true" /></a>
        </footer>
      </main>
      <RafikiBottomNav />
    </div>
  );
}
