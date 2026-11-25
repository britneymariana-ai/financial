import Image from "next/image";
import { ArrowRight, UsersRound } from "lucide-react";
import { QuickQuizButton } from "@/components/quick-quiz-button";

export function CommunitySpotlight() {
  return (
    <section className="community-band" aria-labelledby="spotlight-title">
      <div className="community-grid page-width">
        <figure className="community-photo">
          <Image
            src="/images/student-spotlight.png"
            alt="Illustrative portrait of a Kenyan student in a maroon school sweater holding a handmade financial-literacy zine."
            fill
            sizes="(max-width: 760px) calc(100vw - 32px), (max-width: 1000px) 32vw, 300px"
          />
          <figcaption>ILLUSTRATIVE PORTRAIT</figcaption>
        </figure>
        <div className="community-copy">
          <p className="community-badge"><UsersRound size={13} aria-hidden="true" /> COMMUNITY SPOTLIGHT · ELDORET</p>
          <h2 id="spotlight-title">“We started a 6-person snack-and-stationery chama in Form 2. Nobody believed 30 bob a week could buy our revision books—until it did.”</h2>
          <div className="student-details">
            <p><strong>Amina K., 16</strong><span>PesaZine Student Contributor</span></p>
            <span className="student-details__place">FORM 2 · ELDORET</span>
          </div>
          <p className="student-impact">Six members × 30 bob each = KES 180 added to the chama every week.</p>
          <QuickQuizButton className="quiz-cta">
            Take the 2-Min Money IQ Quiz <ArrowRight size={16} aria-hidden="true" />
          </QuickQuizButton>
        </div>
      </div>
    </section>
  );
}
