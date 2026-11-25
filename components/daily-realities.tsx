import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { QuickQuizButton } from "@/components/quick-quiz-button";

const feeStages = [
  { label: "Day 1", height: "29%" },
  { label: "Day 5", height: "49%" },
  { label: "Day 10", height: "72%" },
  { label: "Day 14", height: "96%" },
];

export function DailyRealities() {
  return (
    <section className="realities-band" id="daily-realities" aria-labelledby="realities-title">
      <div className="page-width">
        <div className="realities-heading">
          <div>
            <p className="section-kicker">01 / DAILY REALITIES</p>
            <h2 id="realities-title">Unpacking everyday Kenyan money</h2>
          </div>
          <p>Three real-life situations every teen runs into—broken down without the boring lecture.</p>
        </div>

        <div className="realities-grid">
          <article className="reality-card">
            <div className="reality-card__topline">
              <span className="topic-sticker topic-sticker--terra">M-PESA REALITY</span>
              <span className="reality-number">01</span>
            </div>
            <h3>The Fuliza Trap</h3>
            <p className="reality-card__copy">
              Borrowing 500 KES for data feels harmless—until a 50 KES daily maintenance fee quietly compounds over two weeks.
            </p>
            <figure className="fee-chart" role="img" aria-label="Illustration of a 50 KES daily fee adding up to 700 KES over 14 days.">
              <div className="fee-chart__heading">
                <span>FEE GROWTH (14 DAYS)</span>
                <strong>+700 KES</strong>
              </div>
              <div className="fee-chart__bars" aria-hidden="true">
                {feeStages.map((stage) => (
                  <span key={stage.label} style={{ height: stage.height }} />
                ))}
              </div>
              <figcaption className="fee-chart__labels" aria-hidden="true">
                {feeStages.map((stage) => <span key={stage.label}>{stage.label}</span>)}
              </figcaption>
            </figure>
            <QuickQuizButton className="text-link">
              Test this in Scenario Arena <ArrowRight size={15} aria-hidden="true" />
            </QuickQuizButton>
          </article>

          <article className="reality-card reality-card--green">
            <div className="reality-card__topline">
              <span className="topic-sticker topic-sticker--white">SQUAD SAVING</span>
              <span className="reality-number">02</span>
            </div>
            <h3>Chamas &amp; Table Banking</h3>
            <p className="reality-card__copy">
              How 5 classmates pooling 100 KES every Friday turns into 2,000 KES payouts—and the trust rules that keep it fair.
            </p>
            <div className="reality-photo">
              <Image
                src="/images/chama-table-banking.png"
                alt="Students working together around a school table, reviewing a notebook and pooled savings."
                width={720}
                height={540}
                sizes="(max-width: 760px) calc(100vw - 56px), (max-width: 1000px) 40vw, 340px"
              />
            </div>
            <details className="chama-glossary">
              <summary>
                Decode Chama terms <ArrowRight size={15} aria-hidden="true" />
              </summary>
              <p><strong>Chama</strong> means a group that saves together. <strong>Table banking</strong> is when members pool contributions and lend from the shared pot under agreed rules.</p>
            </details>
          </article>

          <article className="reality-card">
            <div className="reality-card__topline">
              <span className="topic-sticker topic-sticker--amber">HALF-TERM MATH</span>
              <span className="reality-number">03</span>
            </div>
            <h3>Pocket Money Pacing</h3>
            <p className="reality-card__copy">
              Making 1,500 KES last 45 days means about 33 KES a day. Here is one way to split needs, snacks, and an emergency stash.
            </p>
            <div className="split-preview" role="img" aria-label="A 1,500 KES example split: 750 for needs, 450 for wants, and 300 for savings.">
              <div className="split-preview__topline">
                <span>1,500 KES SPLIT</span>
                <strong>50 / 30 / 20</strong>
              </div>
              <div className="split-bar" aria-hidden="true">
                <span className="split-bar__needs" />
                <span className="split-bar__wants" />
                <span className="split-bar__stash" />
              </div>
              <div className="split-preview__labels" aria-hidden="true">
                <span>750 Needs</span><span>450 Wants</span><span>300 Stash</span>
              </div>
            </div>
            <Link className="text-link" href="/goal-vibes">
              Build your own split <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
