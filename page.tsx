import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import LensingBrain from "@/components/LensingBrain";
import HowItWorks from "@/components/HowItWorks";
import WatchList from "@/components/WatchList";
import IntelligenceExample from "@/components/IntelligenceExample";
import OpportunitySection from "@/components/OpportunitySection";
import AssistantPreview from "@/components/AssistantPreview";
import AuditToContinuous from "@/components/AuditToContinuous";
import AudienceSection from "@/components/AudienceSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <LensingBrain />
        <HowItWorks />
        <WatchList />
        <IntelligenceExample />
        <OpportunitySection />
        <AssistantPreview />
        <AuditToContinuous />
        <AudienceSection />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
