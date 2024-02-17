import MarketingFeature from "@/components/marketing/feature";
import MarketingFooter from "@/components/marketing/footer";
import MarketingHeader from "@/components/marketing/header";
import MarketingHeroSection from "@/components/marketing/hero-section";
import MarketingStories from "@/components/marketing/stories";
import MarketingTrusted from "@/components/marketing/trusted";
import useMetaDocument from "@/hooks/useMetaDocument";
import { createFileRoute } from "@tanstack/react-router";

const Marketing = () => {
  useMetaDocument("Marketing");

  return (
    <div className="flex flex-col min-h-screen">
      <MarketingHeader />
      <MarketingHeroSection />
      <MarketingFeature />
      <MarketingTrusted />
      <MarketingStories />
      <MarketingFooter />
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: Marketing,
});
