import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { createClient } from "../../supabase/server";
import HeroSection from "@/components/hero-section";
import ProblemSolution from "@/components/problem-solution";
import ServicesShowcase from "@/components/services-showcase";
import CaseStudies from "@/components/case-studies";
import HowItWorks from "@/components/how-it-works";
import CtaSection from "@/components/cta-section";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSolution />
      <ServicesShowcase />
      <CaseStudies />
      <HowItWorks />
      <CtaSection />
      <Footer />
    </div>
  );
}
