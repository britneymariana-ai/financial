import { ChevronDown, Hand } from "lucide-react";

const myths = [
  {
    claim: "“Bread jumped from 50 to 65 KES just because shops are greedy.”",
    reality: "Global wheat prices, fuel transport costs, and inflation can push up bakery costs before bread reaches your local duka. That is why a 100 KES note may buy less today than it did two years ago.",
  },
  {
    claim: "“You need at least 10,000 KES to start saving seriously.”",
    reality: "Stashing 50 KES a week builds the same saving habit as a much bigger deposit. Small, consistent steps can add up over time.",
  },
  {
    claim: "“Fuliza is basically free money as long as you pay it back.”",
    reality: "A daily access fee can add up while a balance stays unpaid. Check the current fees and repayment timing before you borrow, then compare the total cost with your other options.",
  },
];

export function MythBusters() {
  return (
    <section className="myths-section page-width" id="money-myths" aria-labelledby="myths-title">
      <div className="myths-intro">
        <p className="section-kicker section-kicker--terra">02 / MYTH BUSTERS</p>
        <h2 id="myths-title">Money Myths vs. Reality</h2>
        <p>Tap any myth card to flip the street-smart reality behind everyday Kenyan prices and habits.</p>
        <div className="myths-hint"><Hand size={16} aria-hidden="true" /> Interactive quick-takes · Click to reveal</div>
      </div>
      <div className="myth-list">
        {myths.map((myth, index) => (
          <details className="myth-card" key={myth.claim} open={index === 0}>
            <summary>
              <span className="myth-badge">MYTH</span>
              <span className="myth-claim">{myth.claim}</span>
              <ChevronDown className="myth-chevron" size={17} aria-hidden="true" />
            </summary>
            <div className="myth-answer">
              <p className="myth-answer__label">REALITY CHECK</p>
              <p>{myth.reality}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
