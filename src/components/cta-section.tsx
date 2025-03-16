import {
  ArrowRight,
  CalendarClock,
  CheckCircle,
  Award,
  Shield,
  Clock,
} from "lucide-react";
import ConsultationButton from "./consultation-button";
import Image from "next/image";

export default function CtaSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0 opacity-5">
        <Image
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80"
          alt="Abstract background"
          fill
          className="object-cover"
        />
      </div>

      {/* Glossy effect elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto bg-background/70 backdrop-blur-md border border-border/50 rounded-xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Automate Your Business?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of small businesses that have transformed their
              operations with our affordable AI solutions.
            </p>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex flex-col items-center p-4 bg-background/50 backdrop-blur-sm border border-border/30 rounded-lg">
              <Award className="w-8 h-8 text-primary mb-2" />
              <span className="text-sm font-medium">500+ Businesses</span>
              <span className="text-xs text-muted-foreground">
                Trust our solutions
              </span>
            </div>
            <div className="flex flex-col items-center p-4 bg-background/50 backdrop-blur-sm border border-border/30 rounded-lg">
              <Shield className="w-8 h-8 text-primary mb-2" />
              <span className="text-sm font-medium">100% Secure</span>
              <span className="text-xs text-muted-foreground">
                Enterprise-grade security
              </span>
            </div>
            <div className="flex flex-col items-center p-4 bg-background/50 backdrop-blur-sm border border-border/30 rounded-lg">
              <Clock className="w-8 h-8 text-primary mb-2" />
              <span className="text-sm font-medium">48-Hour Setup</span>
              <span className="text-xs text-muted-foreground">
                Quick implementation
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center">
                <CalendarClock className="mr-2 h-5 w-5 text-primary" />
                Book Your Free Consultation
              </h3>
              <ul className="space-y-3">
                {[
                  "15-minute no-obligation assessment",
                  "Custom solution recommendation",
                  "Clear pricing with no hidden fees",
                  "Implementation timeline",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center">
                <ArrowRight className="mr-2 h-5 w-5 text-primary" />
                Our Guarantee
              </h3>
              <div className="p-5 bg-primary/10 rounded-lg border border-primary/20">
                <p className="font-medium mb-2">ROI Guarantee</p>
                <p className="text-sm text-muted-foreground mb-4">
                  If our solution doesn't deliver measurable ROI within 90 days,
                  we'll refund your investment.
                </p>
                <p className="font-medium mb-2">No Long-Term Contracts</p>
                <p className="text-sm text-muted-foreground">
                  Month-to-month service with no cancellation fees or long-term
                  commitments.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <ConsultationButton size="lg" className="mx-auto" />
            <p className="mt-4 text-sm text-muted-foreground">
              Limited availability - we only take on 5 new clients per month
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
