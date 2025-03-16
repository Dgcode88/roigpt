import { ArrowRight, Clock, DollarSign, TrendingUp, Star } from "lucide-react";
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
import Image from "next/image";

export default function CaseStudies() {
  return (
    <section className="py-24 bg-background relative" id="case-studies">
      {/* Glossy effect elements */}
      <div className="absolute top-40 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Real Results for Small Businesses
          </h2>
          <p className="text-muted-foreground">
            See how our AI solutions have delivered measurable ROI for
            businesses just like yours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Case Study 1 */}
          <Card className="bg-background/50 backdrop-blur-sm border border-border/50 shadow-md hover:shadow-lg transition-all overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative h-48 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=80"
                alt="Retail store customer service"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              <div className="absolute bottom-4 left-4 bg-primary/90 text-white text-xs font-medium px-2 py-1 rounded">
                Retail Case Study
              </div>
            </div>
            <CardHeader className="relative">
              <CardTitle>Local Retail Store</CardTitle>
              <CardDescription>
                Implemented AI chatbot for customer service
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
                    20+ hours per week answering basic questions
                  </p>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <h4 className="text-sm font-medium mb-1 flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    After
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    5 hours per week on complex inquiries only
                  </p>
                </div>
              </div>

              <div className="p-4 bg-primary/10 rounded-lg mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-medium flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                    ROI
                  </h4>
                  <span className="text-sm font-bold text-primary">320%</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  $400/month investment saving $1,600 in staff time
                </p>
              </div>

              <div className="p-4 bg-secondary/50 rounded-lg">
                <h4 className="text-sm font-medium mb-1">
                  Additional Benefits
                </h4>
                <p className="text-xs text-muted-foreground">
                  24/7 availability led to 15% increase in after-hours sales
                </p>
              </div>

              {/* Client testimonial */}
              <div className="mt-6 flex items-start gap-3 p-4 bg-background/80 border border-border/50 rounded-lg">
                <div className="flex-shrink-0">
                  <Image
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=retail"
                    alt="Client"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-xs italic text-muted-foreground">
                    "The chatbot has completely transformed how we handle
                    customer inquiries. It's like having an extra team member
                    working 24/7."
                  </p>
                  <p className="text-xs font-medium mt-1">
                    Sarah Johnson, Store Manager
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="relative">
              <Link href="/case-studies/retail-store" className="w-full">
                <Button variant="outline" className="w-full group">
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Case Study 2 */}
          <Card className="bg-background/50 backdrop-blur-sm border border-border/50 shadow-md hover:shadow-lg transition-all overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative h-48 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1552581234-26160f608093?w=800&q=80"
                alt="Service business social media"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              <div className="absolute bottom-4 left-4 bg-primary/90 text-white text-xs font-medium px-2 py-1 rounded">
                Service Business Case Study
              </div>
            </div>
            <CardHeader className="relative">
              <CardTitle>Service Business</CardTitle>
              <CardDescription>
                Implemented social media automation
              </CardDescription>
            </CardHeader>
            <CardContent className="relative">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <h4 className="text-sm font-medium mb-1 flex items-center">
                    <DollarSign className="h-4 w-4 mr-2 text-primary" />
                    Before
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    $2,000/month on part-time social media manager
                  </p>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <h4 className="text-sm font-medium mb-1 flex items-center">
                    <DollarSign className="h-4 w-4 mr-2 text-primary" />
                    After
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    $149/month for AI automation with better results
                  </p>
                </div>
              </div>

              <div className="p-4 bg-primary/10 rounded-lg mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-medium flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                    ROI
                  </h4>
                  <span className="text-sm font-bold text-primary">1,242%</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  $149/month saving $1,851 plus 35% more engagement
                </p>
              </div>

              <div className="p-4 bg-secondary/50 rounded-lg">
                <h4 className="text-sm font-medium mb-1">
                  Additional Benefits
                </h4>
                <p className="text-xs text-muted-foreground">
                  Consistent posting schedule led to 28% increase in leads
                </p>
              </div>

              {/* Client testimonial */}
              <div className="mt-6 flex items-start gap-3 p-4 bg-background/80 border border-border/50 rounded-lg">
                <div className="flex-shrink-0">
                  <Image
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=service"
                    alt="Client"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-xs italic text-muted-foreground">
                    "We're getting more engagement with less effort. The
                    AI-generated content is consistently on-brand and our leads
                    have increased dramatically."
                  </p>
                  <p className="text-xs font-medium mt-1">
                    Michael Chen, Marketing Director
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="relative">
              <Link href="/case-studies/service-business" className="w-full">
                <Button variant="outline" className="w-full group">
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
