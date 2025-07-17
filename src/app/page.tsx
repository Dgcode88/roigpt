import { Metadata } from "next";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import ProblemSolution from "@/components/problem-solution";
import ServicesShowcase from "@/components/services-showcase";
import CaseStudies from "@/components/case-studies";
import HowItWorks from "@/components/how-it-works";
import CtaSection from "@/components/cta-section";

export const metadata: Metadata = {
  title: "AI Automation That Pays For Itself - RoiGPT",
  description:
    "Transform your small business with affordable AI automation. Custom chatbots and social media automation starting at $99/month. Guaranteed ROI in 30 days or money back.",
  keywords:
    "AI automation, small business automation, chatbots, social media automation, ROI guarantee, affordable AI solutions",
  openGraph: {
    title: "AI Automation That Pays For Itself - RoiGPT",
    description:
      "Transform your small business with affordable AI automation. Custom chatbots and social media automation starting at $99/month.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "AI Automation for Small Businesses",
      },
    ],
  },
};

export default async function Home() {


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
