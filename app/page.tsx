import { BudgetPlanner } from "@/components/budget-planner";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <BudgetPlanner />
      </main>
      <footer className="site-footer">
        <div className="site-footer__inner">
          <a className="footer-brand" href="#top" aria-label="PesaZine home">
            <span className="brand-mark" aria-hidden="true">P</span>
            <span>PesaZine</span>
          </a>
          <p>Small money moves. Big-life energy.</p>
          <span className="footer-edition">MADE FOR REAL LIFE IN KENYA</span>
        </div>
      </footer>
    </>
  );
}
