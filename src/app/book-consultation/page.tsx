import { Metadata } from "next";
import ConsultationButton from "@/components/consultation-button";
import { CalendarClock, CheckCircle, Award, Shield, Clock } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Book Free Consultation - RoiGPT AI Automation",
  description:
    "Schedule your free 15-minute consultation to discover how AI automation can transform your small business. No obligation, custom solutions starting at $99/month.",
  keywords:
    "AI consultation, small business automation, chatbot consultation, social media automation, free consultation",
  openGraph: {
    title: "Book Free Consultation - RoiGPT AI Automation",
    description:
      "Schedule your free 15-minute consultation to discover how AI automation can transform your small business.",
    type: "website",
  },
};

export default function BookConsultationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Book Your Free Consultation
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover how AI automation can transform your business in just
                15 minutes. No obligation, no sales pressure - just actionable
                insights.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-background/50 backdrop-blur-sm border border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CalendarClock className="mr-2 h-5 w-5 text-primary" />
                    What to Expect
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "15-minute no-obligation assessment",
                      "Custom solution recommendation",
                      "Clear pricing with no hidden fees",
                      "Implementation timeline",
                      "ROI projection for your business",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-background/50 backdrop-blur-sm border border-border/50">
                <CardHeader>
                  <CardTitle>Why Choose RoiGPT?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Award className="w-6 h-6 text-primary" />
                      <div>
                        <p className="font-medium text-sm">
                          500+ Businesses Trust Us
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Proven track record
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-6 h-6 text-primary" />
                      <div>
                        <p className="font-medium text-sm">
                          Enterprise-Grade Security
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Your data is protected
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-6 h-6 text-primary" />
                      <div>
                        <p className="font-medium text-sm">48-Hour Setup</p>
                        <p className="text-xs text-muted-foreground">
                          Quick implementation
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-lg p-8 mb-8">
                <h2 className="text-xl font-semibold mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Click below to schedule your free consultation. We'll send you
                  a calendar link to choose a time that works best for you.
                </p>
                <ConsultationButton size="lg" className="mx-auto" />
              </div>

              <p className="text-sm text-muted-foreground">
                Limited availability - we only take on 5 new clients per month
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
