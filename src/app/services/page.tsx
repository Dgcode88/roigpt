import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Bot, BrainCircuit, Share2, Sparkles, Zap } from "lucide-react";
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

export default function ServicesPage() {
  const services = [
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      title: "AI Chatbots",
      description: "24/7 customer service without the staffing costs",
      features: [
        "Answer customer questions instantly",
        "Qualify leads while you sleep",
        "Reduce support ticket volume by 60%",
        "Seamless integration with your website",
        "Customized to match your brand voice",
      ],
      price: "Starting at $99/month",
      link: "/services/chatbots",
    },
    {
      icon: <Share2 className="h-8 w-8 text-primary" />,
      title: "Social Media Automation",
      description: "Consistent posting without the time investment",
      features: [
        "AI-generated content tailored to your brand",
        "Scheduled posting across all platforms",
        "Automated engagement with followers",
        "Content calendar management",
        "Performance analytics and reporting",
      ],
      price: "Starting at $149/month",
      link: "/services/social-media",
    },
    {
      icon: <BrainCircuit className="h-8 w-8 text-primary" />,
      title: "Email Marketing Automation",
      description: "Personalized email campaigns that convert",
      features: [
        "AI-driven email sequence creation",
        "Personalized content for each recipient",
        "Automated follow-ups based on behavior",
        "A/B testing to optimize performance",
        "Detailed conversion tracking",
      ],
      price: "Starting at $129/month",
      link: "/services/email-marketing",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: "Custom AI Solutions",
      description: "Tailored automation for your specific needs",
      features: [
        "Custom workflow automation",
        "Integration with your existing systems",
        "Data analysis and reporting",
        "Process optimization",
        "Ongoing support and refinement",
      ],
      price: "Custom pricing",
      link: "/services/custom-solutions",
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
              Our AI Automation Services
            </h1>
            <p className="text-muted-foreground">
              Powerful, affordable solutions designed specifically for small
              businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-background/50 backdrop-blur-sm border border-border/50 shadow-md hover:shadow-lg transition-all overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader className="relative pb-0">
                  <div className="p-3 rounded-full bg-primary/10 w-fit mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative pt-6">
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Zap className="h-4 w-4 text-primary mt-1" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
                    <p className="text-sm font-medium mb-2">{service.price}</p>
                    <p className="text-xs text-muted-foreground">
                      Includes setup, training, and ongoing optimization
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="relative">
                  <Link href={service.link} className="w-full">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-8 shadow-md max-w-3xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">
                Not Sure Which Service Is Right For You?
              </h2>
              <p className="text-muted-foreground">
                Book a free 15-minute consultation and we'll help you identify
                the best solution for your business needs.
              </p>
            </div>
            <div className="flex justify-center">
              <ConsultationButton size="lg" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
