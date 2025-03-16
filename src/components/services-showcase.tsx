import { Bot, MessageSquare, Share2, Zap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import ConsultationButton from "./consultation-button";
import Image from "next/image";

export default function ServicesShowcase() {
  return (
    <section
      className="py-24 bg-gradient-to-b from-background to-background/95 relative"
      id="services"
    >
      {/* Glossy effect elements */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Our AI Solutions</h2>
          <p className="text-muted-foreground">
            Powerful automation tools designed specifically for small
            businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Chatbot Service */}
          <Card className="bg-background/50 backdrop-blur-sm border border-border/50 shadow-md hover:shadow-lg transition-all overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="relative pb-0">
              <div className="p-3 rounded-full bg-primary/10 w-fit mb-4">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">AI Chatbots</CardTitle>
              <CardDescription className="text-base">
                24/7 customer service without the staffing costs
              </CardDescription>
            </CardHeader>
            <CardContent className="relative pt-6">
              <div className="mb-6 rounded-lg overflow-hidden border border-border/50 shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80"
                  alt="AI Chatbot Interface"
                  width={600}
                  height={300}
                  className="object-cover w-full h-[160px]"
                />
              </div>

              <ul className="space-y-3">
                {[
                  {
                    icon: <MessageSquare className="h-4 w-4 text-primary" />,
                    text: "Answer customer questions instantly",
                  },
                  {
                    icon: <Zap className="h-4 w-4 text-primary" />,
                    text: "Qualify leads while you sleep",
                  },
                  {
                    icon: <Bot className="h-4 w-4 text-primary" />,
                    text: "Reduce support ticket volume by 60%",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1">{item.icon}</div>
                    <span className="text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
                <p className="text-sm font-medium mb-2">
                  Starting at $99/month
                </p>
                <p className="text-xs text-muted-foreground">
                  Includes setup, training, and ongoing optimization
                </p>
              </div>
            </CardContent>
            <CardFooter className="relative">
              <Link href="/services/chatbots" className="w-full">
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Social Media Automation */}
          <Card className="bg-background/50 backdrop-blur-sm border border-border/50 shadow-md hover:shadow-lg transition-all overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="relative pb-0">
              <div className="p-3 rounded-full bg-primary/10 w-fit mb-4">
                <Share2 className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">
                Social Media Automation
              </CardTitle>
              <CardDescription className="text-base">
                Consistent posting without the time investment
              </CardDescription>
            </CardHeader>
            <CardContent className="relative pt-6">
              <div className="mb-6 rounded-lg overflow-hidden border border-border/50 shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80"
                  alt="Social Media Dashboard"
                  width={600}
                  height={300}
                  className="object-cover w-full h-[160px]"
                />
              </div>

              <ul className="space-y-3">
                {[
                  {
                    icon: <Zap className="h-4 w-4 text-primary" />,
                    text: "AI-generated content tailored to your brand",
                  },
                  {
                    icon: <Share2 className="h-4 w-4 text-primary" />,
                    text: "Scheduled posting across all platforms",
                  },
                  {
                    icon: <MessageSquare className="h-4 w-4 text-primary" />,
                    text: "Automated engagement with followers",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1">{item.icon}</div>
                    <span className="text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
                <p className="text-sm font-medium mb-2">
                  Starting at $149/month
                </p>
                <p className="text-xs text-muted-foreground">
                  Includes content creation, scheduling, and analytics
                </p>
              </div>
            </CardContent>
            <CardFooter className="relative">
              <Link href="/services/social-media" className="w-full">
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <ConsultationButton className="mx-auto" />
        </div>
      </div>
    </section>
  );
}
