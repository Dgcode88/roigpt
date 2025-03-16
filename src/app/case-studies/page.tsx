import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  ArrowRight,
  Bot,
  Clock,
  DollarSign,
  Share2,
  TrendingUp,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ConsultationButton from "@/components/consultation-button";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Local Retail Store",
      subtitle: "AI Chatbot Implementation",
      description:
        "How a small retail business automated customer service and increased after-hours sales",
      icon: <Bot className="h-6 w-6 text-primary" />,
      before: "20+ hours per week answering basic questions",
      after: "5 hours per week on complex inquiries only",
      roi: "320%",
      roiDetails: "$400/month investment saving $1,600 in staff time",
      additionalBenefit:
        "24/7 availability led to 15% increase in after-hours sales",
      link: "/case-studies/retail-store",
    },
    {
      title: "Service Business",
      subtitle: "Social Media Automation",
      description:
        "How a service-based business replaced their part-time social media manager with AI automation",
      icon: <Share2 className="h-6 w-6 text-primary" />,
      before: "$2,000/month on part-time social media manager",
      after: "$149/month for AI automation with better results",
      roi: "1,242%",
      roiDetails: "$149/month saving $1,851 plus 35% more engagement",
      additionalBenefit:
        "Consistent posting schedule led to 28% increase in leads",
      link: "/case-studies/service-business",
    },
    {
      title: "Professional Consultant",
      subtitle: "Email Marketing Automation",
      description:
        "How a consultant automated their email nurture sequence to convert more leads",
      icon: <Share2 className="h-6 w-6 text-primary" />,
      before: "8 hours per week managing email campaigns manually",
      after: "1 hour per week reviewing AI-generated content",
      roi: "450%",
      roiDetails: "$129/month generating an additional $5,800 in revenue",
      additionalBenefit: "Conversion rate increased from 2.3% to 6.8%",
      link: "/case-studies/professional-consultant",
    },
    {
      title: "E-commerce Store",
      subtitle: "Customer Support Chatbot",
      description:
        "How an online store reduced support tickets and increased sales with AI",
      icon: <Bot className="h-6 w-6 text-primary" />,
      before: "15+ hours per week answering support tickets",
      after: "3 hours per week on complex issues only",
      roi: "280%",
      roiDetails: "$99/month saving $1,200 in support time",
      additionalBenefit: "Cart abandonment rate decreased by 23%",
      link: "/case-studies/ecommerce-store",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="relative py-20 overflow-hidden">
        {/* Glossy effect elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">
              Real Results for Small Businesses
            </h1>
            <p className="text-muted-foreground">
              See how our AI solutions have delivered measurable ROI for
              businesses just like yours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                className="bg-background/50 backdrop-blur-sm border border-border/50 shadow-md hover:shadow-lg transition-all overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader className="relative">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 rounded-full bg-primary/10">
                      {study.icon}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {study.subtitle}
                    </span>
                  </div>
                  <CardTitle>{study.title}</CardTitle>
                  <CardDescription className="text-base">
                    {study.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-secondary/50 rounded-lg">
                      <h4 className="text-sm font-medium mb-1 flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        Before
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {study.before}
                      </p>
                    </div>
                    <div className="p-4 bg-secondary/50 rounded-lg">
                      <h4 className="text-sm font-medium mb-1 flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        After
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {study.after}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-primary/10 rounded-lg mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium flex items-center">
                        <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                        ROI
                      </h4>
                      <span className="text-sm font-bold text-primary">
                        {study.roi}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {study.roiDetails}
                    </p>
                  </div>

                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <h4 className="text-sm font-medium mb-1">
                      Additional Benefits
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {study.additionalBenefit}
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="relative">
                  <Link href={study.link} className="w-full">
                    <Button variant="outline" className="w-full group">
                      Read Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-8 shadow-md max-w-3xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">
                Want Results Like These For Your Business?
              </h2>
              <p className="text-muted-foreground mb-6">
                Book a free 15-minute consultation to see how our AI solutions
                can deliver similar ROI for your specific needs.
              </p>
              <ConsultationButton size="lg" className="mx-auto" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
