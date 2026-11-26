import { CommunitySpotlight } from "@/components/community-spotlight";
import { DailyRealities } from "@/components/daily-realities";
import { EditorialHero } from "@/components/editorial-hero";
import { MythBusters } from "@/components/myth-busters";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <EditorialHero />
        <DailyRealities />
        <MythBusters />
        <CommunitySpotlight />
      </main>
      <SiteFooter />
    </>
  );
}
