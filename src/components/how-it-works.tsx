import {
  ArrowRight,
  Bot,
  CheckCircle,
  ClipboardCheck,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

export default function HowItWorks() {
  return (
    <section
      className="py-24 bg-gradient-to-b from-background/95 to-background relative"
      id="how-it-works"
    >
      {/* Glossy effect elements */}
      <div className="absolute top-20 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground">
            We handle all the technical details so you can focus on running your
            business.
          </p>
        </div>

        {/* Process diagram - visible on larger screens */}
        <div className="hidden lg:block max-w-4xl mx-auto mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[80%] h-[2px] bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20"></div>
          </div>
          <div className="flex justify-between relative z-10">
            {[
              {
                icon: <ClipboardCheck className="h-8 w-8 text-primary" />,
                label: "Consultation",
              },
              {
                icon: <Bot className="h-8 w-8 text-primary" />,
                label: "Solution Design",
              },
              {
                icon: <Sparkles className="h-8 w-8 text-primary" />,
                label: "Implementation",
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-primary" />,
                label: "Optimization",
              },
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center mb-2">
                  {step.icon}
                </div>
                <span className="text-sm font-medium">{step.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-[27px] top-10 bottom-10 w-[2px] bg-gradient-to-b from-primary/80 to-accent/80 hidden md:block" />

            <div className="space-y-12">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center z-10">
                  <ClipboardCheck className="h-6 w-6 text-primary" />
                </div>
                <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 shadow-sm flex-1">
                  <div className="md:flex items-start gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">
                        1. Consultation & Assessment
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        We start with a free 15-minute consultation to
                        understand your business needs and identify the best
                        automation opportunities.
                      </p>
                      <div className="flex items-center text-sm text-primary">
                        <span>No technical knowledge required</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                    <div className="hidden md:block flex-shrink-0 w-24 h-24 mt-2">
                      <Image
                        src="https://images.unsplash.com/photo-1552581234-26160f608093?w=200&q=80"
                        alt="Consultation"
                        width={100}
                        height={100}
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center z-10">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 shadow-sm flex-1">
                  <div className="md:flex items-start gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">
                        2. Custom Solution Design
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Our team designs a custom AI solution using make.com,
                        ChatGPT, and aminos.ai that integrates with your
                        existing systems.
                      </p>
                      <div className="flex items-center text-sm text-primary">
                        <span>We handle all the technical setup</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                    <div className="hidden md:block flex-shrink-0 w-24 h-24 mt-2">
                      <Image
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&q=80"
                        alt="Solution Design"
                        width={100}
                        height={100}
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center z-10">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 shadow-sm flex-1">
                  <div className="md:flex items-start gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">
                        3. Implementation & Training
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        We implement your solution within 48 hours and provide
                        simple training so you can manage it with ease.
                      </p>
                      <div className="flex items-center text-sm text-primary">
                        <span>Quick setup, minimal disruption</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                    <div className="hidden md:block flex-shrink-0 w-24 h-24 mt-2">
                      <Image
                        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=200&q=80"
                        alt="Implementation"
                        width={100}
                        height={100}
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center z-10">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 shadow-sm flex-1">
                  <div className="md:flex items-start gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">
                        4. Ongoing Optimization
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        We continuously monitor and optimize your solution to
                        ensure it delivers maximum ROI and adapts to your
                        changing needs.
                      </p>
                      <div className="flex items-center text-sm text-primary">
                        <span>Guaranteed results or your money back</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                    <div className="hidden md:block flex-shrink-0 w-24 h-24 mt-2">
                      <Image
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&q=80"
                        alt="Optimization"
                        width={100}
                        height={100}
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
