import type { Metadata } from "next";
import { BudgetPlanner } from "@/components/budget-planner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Goal & Vibes | PesaZine",
  description: "Build a practical KES pocket-money plan, track spending, and set a saving goal with PesaZine.",
};

export default function GoalVibesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="goal-vibes-intro page-width" aria-labelledby="goal-vibes-title">
          <p className="section-kicker">GOAL &amp; VIBES · YOUR MONEY MAP</p>
          <h1 id="goal-vibes-title">Turn pocket money into a plan.</h1>
          <p>Start with what you have, make a plan that feels real, and keep room for the things you care about.</p>
        </section>
        <BudgetPlanner showHero={false} />
      </main>
      <SiteFooter />
    </>
  );
}
