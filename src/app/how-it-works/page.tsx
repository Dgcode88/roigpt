import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  ArrowRight,
  Bot,
  CheckCircle,
  ClipboardCheck,
  Sparkles,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ConsultationButton from "@/components/consultation-button";

export default function HowItWorksPage() {
  const steps = [
    {
      icon: <ClipboardCheck className="h-6 w-6 text-primary" />,
      title: "1. Consultation & Assessment",
      description:
        "We start with a free 15-minute consultation to understand your business needs and identify the best automation opportunities.",
      detail:
        "During this call, we'll discuss your current processes, pain points, and goals. We'll ask questions about your business operations, customer service challenges, and marketing efforts to identify where AI automation can make the biggest impact.",
    },
    {
      icon: <Bot className="h-6 w-6 text-primary" />,
      title: "2. Custom Solution Design",
      description:
        "Our team designs a custom AI solution using make.com, ChatGPT, and aminos.ai that integrates with your existing systems.",
      detail:
        "Based on our assessment, we'll create a tailored solution that addresses your specific needs. This includes selecting the right AI tools, designing workflows, and planning integrations with your existing software and processes. You'll receive a detailed proposal outlining the solution, expected outcomes, and pricing.",
    },
    {
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      title: "3. Implementation & Training",
      description:
        "We implement your solution within 48 hours and provide simple training so you can manage it with ease.",
      detail:
        "Our technical team will handle all the setup and configuration, requiring minimal input from you. Once implemented, we'll provide a brief training session to show you how to use and monitor the system. The training is designed to be simple and non-technical, focusing on the day-to-day operations you need to know.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "4. Ongoing Optimization",
      description:
        "We continuously monitor and optimize your solution to ensure it delivers maximum ROI and adapts to your changing needs.",
      detail:
        "Your solution will be regularly monitored and fine-tuned for optimal performance. We'll provide monthly reports showing key metrics and ROI calculations. As your business evolves, we'll make adjustments to ensure your automation solution continues to meet your needs and deliver the best possible results.",
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
            <h1 className="text-4xl font-bold mb-4">How It Works</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We handle all the technical details so you can focus on running
              your business.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-[27px] top-10 bottom-10 w-[2px] bg-gradient-to-b from-primary/80 to-accent/80 hidden md:block" />

              <div className="space-y-12">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row gap-6 items-start"
                  >
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center z-10">
                      {step.icon}
                    </div>
                    <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 shadow-sm flex-1">
                      <h3 className="text-xl font-semibold mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {step.description}
                      </p>

                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem
                          value={`step-${index}`}
                          className="border-b-0"
                        >
                          <AccordionTrigger className="text-sm text-primary py-2 hover:no-underline">
                            Learn more
                          </AccordionTrigger>
                          <AccordionContent className="text-sm text-muted-foreground">
                            {step.detail}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 text-center">
              <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-bold mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Book your free 15-minute consultation and discover how our AI
                  solutions can transform your business.
                </p>
                <ConsultationButton size="lg" className="mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
