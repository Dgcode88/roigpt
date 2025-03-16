import ConsultationButton from "./consultation-button";
import { Badge } from "./ui/badge";
import { Bot, Sparkles, TrendingUp, Award, Shield } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-background pt-20 pb-32">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1920&q=80"
          alt="Abstract background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>

      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 opacity-70 z-0" />

      {/* Glossy effect elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl z-0" />

      <div className="relative container mx-auto px-4 z-10">
        <div className="text-center max-w-4xl mx-auto">
          <Badge
            variant="outline"
            className="mb-6 px-4 py-1 border-primary/20 bg-primary/5"
          >
            <Sparkles className="mr-1 h-3 w-3 text-primary" />
            AI Automation for Small Businesses
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            AI Automation That
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              {" "}
              Pays For Itself
            </span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl font-medium">
              Without The Enterprise Price Tag
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Custom chatbots and social media automation for small businesses,
            starting at just $99/month. Get the power of enterprise AI at a
            fraction of the cost.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ConsultationButton size="lg" className="w-full sm:w-auto" />

            <a
              href="#case-studies"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 text-foreground bg-background border border-border rounded-lg hover:bg-secondary transition-colors text-lg font-medium"
            >
              <TrendingUp className="mr-2 h-5 w-5 text-primary" />
              See Results
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <div className="flex items-center bg-background/50 backdrop-blur-sm border border-border/30 rounded-full px-4 py-1.5">
              <Award className="w-4 h-4 text-primary mr-2" />
              <span className="text-xs font-medium">
                Trusted by 500+ businesses
              </span>
            </div>
            <div className="flex items-center bg-background/50 backdrop-blur-sm border border-border/30 rounded-full px-4 py-1.5">
              <Shield className="w-4 h-4 text-primary mr-2" />
              <span className="text-xs font-medium">
                Enterprise-grade security
              </span>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-primary" />
              <span>No technical skills required</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <span>Setup in under 48 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span>Measurable ROI in 30 days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
