"use client";

import { useMemo, useState, type CSSProperties } from "react";
import Image from "next/image";
import {
  ArrowDownRight,
  ArrowRight,
  BusFront,
  Check,
  Lightbulb,
  PiggyBank,
  Sparkles,
  Wallet,
} from "lucide-react";

type BucketCardProps = {
  id: string;
  title: string;
  description: string;
  planned: number;
  actual: string;
  onActualChange: (value: string) => void;
  icon: typeof BusFront;
  tone: "green" | "orange" | "yellow";
  inputLabel: string;
  actualLabel: string;
};

const formatKes = (amount: number) => `KES ${Math.round(amount).toLocaleString("en-KE")}`;
const toAmount = (value: string) => Math.max(0, Math.min(200000, Number(value) || 0));

function BucketCard({
  id,
  title,
  description,
  planned,
  actual,
  onActualChange,
  icon: Icon,
  tone,
  inputLabel,
  actualLabel,
}: BucketCardProps) {
  const actualAmount = toAmount(actual);
  const progress = planned > 0 ? Math.min((actualAmount / planned) * 100, 100) : 0;
  const isOver = actualAmount > planned;

  return (
    <article className={`tracker-card tracker-card--${tone}`}>
      <div className="tracker-card__top">
        <span className={`bucket-icon bucket-icon--${tone}`} aria-hidden="true">
          <Icon size={19} strokeWidth={2.2} />
        </span>
        <span className="tracker-card__planned">PLAN <strong>{formatKes(planned)}</strong></span>
      </div>
      <h3>{title}</h3>
      <p className="tracker-card__description">{description}</p>
      <div className="tracker-progress-copy">
        <span>{isOver ? "Over plan" : `${Math.round(progress)}% of plan used`}</span>
        <span>{formatKes(actualAmount)}</span>
      </div>
      <div
        className={`progress-track${isOver ? " progress-track--over" : ""}`}
        role="progressbar"
        aria-label={`${title} ${actualLabel.toLowerCase()}`}
        aria-valuemin={0}
        aria-valuemax={planned || 1}
          aria-valuenow={Math.min(actualAmount, planned || 1)}
      >
        <span style={{ width: `${progress}%` }} />
      </div>
      <label className="tracker-input-label" htmlFor={id}>{inputLabel}</label>
      <div className="tracker-input">
        <span aria-hidden="true">KES</span>
        <input
          id={id}
          type="number"
          min="0"
          max="200000"
          step="50"
          inputMode="numeric"
          value={actual}
          onChange={(event) => onActualChange(event.target.value)}
          aria-label={inputLabel}
        />
      </div>
      {isOver && <p className="over-plan-note">A little over is okay. Adjust your plan if you need to.</p>}
    </article>
  );
}

function AmountField({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="amount-field">
      <label htmlFor={id}>{label}</label>
      <div className="currency-input">
        <span aria-hidden="true">KES</span>
        <input
          id={id}
          type="number"
          min="0"
          max="200000"
          step="100"
          inputMode="numeric"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
    </div>
  );
}

export function BudgetPlanner({ showHero = true }: { showHero?: boolean }) {
  const [monthlyMoney, setMonthlyMoney] = useState("4500");
  const [savingsPercent, setSavingsPercent] = useState(20);
  const [needsSpent, setNeedsSpent] = useState("850");
  const [wantsSpent, setWantsSpent] = useState("420");
  const [savedSoFar, setSavedSoFar] = useState("380");

  const plan = useMemo(() => {
    const income = toAmount(monthlyMoney);
    const savings = Math.round((income * savingsPercent) / 100);
    const spendable = income - savings;
    const essentials = Math.round(spendable * 0.625);
    const fun = spendable - essentials;
    const needsUsed = toAmount(needsSpent);
    const wantsUsed = toAmount(wantsSpent);
    const saved = toAmount(savedSoFar);
    const left = income - needsUsed - wantsUsed - saved;

    return {
      income,
      savings,
      essentials,
      fun,
      needsUsed,
      wantsUsed,
      saved,
      left,
      essentialsPercent: income ? (essentials / income) * 100 : 0,
      funPercent: income ? (fun / income) * 100 : 0,
      savingsPercent: income ? (savings / income) * 100 : 0,
    };
  }, [monthlyMoney, savingsPercent, needsSpent, wantsSpent, savedSoFar]);

  const ringStyle = {
    background: `conic-gradient(var(--green) 0% ${plan.essentialsPercent}%, var(--terra) ${plan.essentialsPercent}% ${plan.essentialsPercent + plan.funPercent}%, var(--amber) ${plan.essentialsPercent + plan.funPercent}% 100%)`,
  };

  return (
    <>
      {showHero && (
        <section className="hero page-width" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow"><span className="eyebrow-mark" aria-hidden="true" /> ISSUE 04 · KENYAN TEEN FINANCE</p>
            <h1 id="hero-title">Make your money <span>make sense.</span></h1>
            <p className="hero-description">
              A little plan for your pocket money can make room for the stuff you need, the things you love, and the goals you&apos;re saving for.
            </p>
            <a className="button-primary" href="#money-map">
              Build my money map <ArrowRight size={17} strokeWidth={2.5} aria-hidden="true" />
            </a>
            <ul className="hero-proof-points" aria-label="About the planner">
              <li><Check size={15} strokeWidth={2.8} aria-hidden="true" /> Zero bank jargon</li>
              <li><Check size={15} strokeWidth={2.8} aria-hidden="true" /> Built for real life</li>
              <li><Check size={15} strokeWidth={2.8} aria-hidden="true" /> 100% KES-real examples</li>
            </ul>
          </div>
          <figure className="hero-photo">
            <Image
              className="hero-photo__image"
              src="/images/student-budget-planning.png"
              alt="Three Kenyan high school students planning their pocket money together at a sunny school courtyard table."
              fill
              priority
              sizes="(max-width: 700px) calc(100vw - 32px), (max-width: 1200px) 42vw, 500px"
            />
            <div className="hero-photo__shade" aria-hidden="true" />
            <figcaption className="hero-photo__content">
              <div className="photo-pulse">
                <span>THIS WEEK&apos;S MONEY MOVE</span>
                <strong>Make a plan for the stuff that matters.</strong>
              </div>
              <span className="photo-age">AGES 14–17</span>
            </figcaption>
          </figure>
        </section>
      )}

      <section className="planner-section page-width" id="money-map" aria-labelledby="planner-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow section-eyebrow"><span className="section-index">01</span> START WITH YOUR REAL NUMBER</p>
            <h2 id="planner-title">Give every shilling a job.</h2>
            <p className="section-subtitle">Your plan should fit your life, not the other way around.</p>
          </div>
          <span className="editorial-note">ADJUST AS LIFE CHANGES <ArrowDownRight size={16} aria-hidden="true" /></span>
        </div>

        <div className="planner-grid">
          <div className="setup-card paper-card">
            <div className="card-kicker"><span className="step-number">1</span><span>SET YOUR POCKET MONEY</span></div>
            <AmountField
              id="monthly-money"
              label="How much money do you have for this month?"
              value={monthlyMoney}
              onChange={setMonthlyMoney}
            />
            <div className="quick-amounts" aria-label="Quick monthly amount choices">
              <span>QUICK PICK</span>
              {[2500, 4500, 6000].map((amount) => (
                <button
                  type="button"
                  key={amount}
                  className={toAmount(monthlyMoney) === amount ? "quick-amount quick-amount--active" : "quick-amount"}
                  onClick={() => setMonthlyMoney(String(amount))}
                  aria-pressed={toAmount(monthlyMoney) === amount}
                >
                  {formatKes(amount)}
                </button>
              ))}
            </div>

            <div className="setup-divider" />

            <div className="savings-control">
              <div className="savings-control__heading">
                <div>
                  <div className="card-kicker"><span className="step-number step-number--orange">2</span><span>PAY YOUR FUTURE SELF</span></div>
                  <label htmlFor="savings-range">How much do you want to save?</label>
                </div>
                <output className="savings-percent" htmlFor="savings-range">{savingsPercent}%</output>
              </div>
              <input
                id="savings-range"
                className="savings-range"
                type="range"
                min="5"
                max="50"
                step="1"
                value={savingsPercent}
                onChange={(event) => setSavingsPercent(Number(event.target.value))}
                style={{ "--range-progress": `${((savingsPercent - 5) / 45) * 100}%` } as CSSProperties}
                aria-describedby="savings-helper"
              />
              <div className="range-labels"><span>5% — start small</span><span>50% — big goal</span></div>
              <p className="savings-helper" id="savings-helper">
                That&apos;s <strong>{formatKes(plan.savings)}</strong> toward your goal this month.
              </p>
            </div>
          </div>

          <aside className="snapshot-card" aria-labelledby="snapshot-title">
            <div className="snapshot-card__top">
              <div>
                <p className="eyebrow snapshot-eyebrow">YOUR PLAN, AT A GLANCE</p>
                <h3 id="snapshot-title">A good split.</h3>
              </div>
              <span className="live-sticker"><span /> LIVE</span>
            </div>
            <div className="snapshot-overview">
              <div
                className="allocation-ring"
                style={ringStyle}
                role="img"
                aria-label={`Budget split: ${Math.round(plan.essentialsPercent)} percent essentials, ${Math.round(plan.funPercent)} percent fun, and ${Math.round(plan.savingsPercent)} percent savings`}
              >
                <div className="allocation-ring__center"><strong>100%</strong><span>PLANNED</span></div>
              </div>
              <div className="snapshot-total"><span>MONTHLY MONEY</span><strong>{formatKes(plan.income)}</strong><small>Every shilling has a place.</small></div>
            </div>
            <div className="allocation-list" aria-label="Monthly budget allocations">
              <div className="allocation-row"><span className="allocation-dot allocation-dot--green" /><span>Needs &amp; getting around</span><strong>{formatKes(plan.essentials)}</strong></div>
              <div className="allocation-row"><span className="allocation-dot allocation-dot--orange" /><span>Fun &amp; extras</span><strong>{formatKes(plan.fun)}</strong></div>
              <div className="allocation-row"><span className="allocation-dot allocation-dot--yellow" /><span>Savings goal</span><strong>{formatKes(plan.savings)}</strong></div>
            </div>
            <p className="snapshot-footnote"><Check size={14} strokeWidth={3} aria-hidden="true" /> Your plan adds up to 100%.</p>
          </aside>
        </div>
      </section>

      <section className="tracking-section page-width" id="track-spending" aria-labelledby="tracking-title">
        <div className="tracking-heading">
          <div>
            <p className="eyebrow section-eyebrow"><span className="section-index section-index--orange">02</span> CHECK IN AS YOU GO</p>
            <h2 id="tracking-title">Where&apos;s your money today?</h2>
            <p className="section-subtitle">Update the numbers when you spend or save. No judgement, just a clearer picture.</p>
          </div>
          <div className={`leftover-badge${plan.left < 0 ? " leftover-badge--over" : ""}`} aria-live="polite">
            <span>{plan.left < 0 ? "PAST YOUR PLAN BY" : "STILL IN YOUR PLAN"}</span>
            <strong>{formatKes(Math.abs(plan.left))}</strong>
            <small>{plan.left < 0 ? "You can tweak a number above." : "You decide what happens next."}</small>
          </div>
        </div>

        <div className="tracker-grid">
          <BucketCard
            id="needs-spent"
            title="Needs & getting around"
            description="Matatu fare, data bundles, lunch — the everyday stuff."
            planned={plan.essentials}
            actual={needsSpent}
            onActualChange={setNeedsSpent}
            icon={BusFront}
            tone="green"
            inputLabel="KES spent on needs and getting around"
            actualLabel="Spent so far"
          />
          <BucketCard
            id="fun-spent"
            title="Fun &amp; extras"
            description="A treat with your crew, a game, or a little something for you."
            planned={plan.fun}
            actual={wantsSpent}
            onActualChange={setWantsSpent}
            icon={Sparkles}
            tone="orange"
            inputLabel="KES spent on fun and extras"
            actualLabel="Spent so far"
          />
          <BucketCard
            id="saved-so-far"
            title="Savings goal"
            description="Keep your goal in sight. Small steps count, too."
            planned={plan.savings}
            actual={savedSoFar}
            onActualChange={setSavedSoFar}
            icon={PiggyBank}
            tone="yellow"
            inputLabel="KES saved toward your goal"
            actualLabel="Saved so far"
          />
        </div>
      </section>

      <section className="tip-section page-width" id="tip" aria-labelledby="tip-title">
        <div className="tip-card">
          <div className="tip-icon" aria-hidden="true"><Lightbulb size={25} strokeWidth={1.8} /></div>
          <div className="tip-copy">
            <p className="eyebrow">A POCKET-SIZE MONEY MOVE</p>
            <h2 id="tip-title">Save for the thing before the thing.</h2>
            <p>Got a goal? Move your savings aside when your pocket money comes in — even if it&apos;s just KES 50. It&apos;s easier to plan with what&apos;s left than hope there&apos;s something left later.</p>
          </div>
          <div className="tip-stamp"><Wallet size={20} aria-hidden="true" /><span>SMALL<br />STEPS<br />COUNT</span></div>
        </div>
        <p className="privacy-note">Your numbers update live and stay in this page session. They aren&apos;t saved after you leave.</p>
      </section>
    </>
  );
}
