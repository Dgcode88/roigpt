import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Clock, DollarSign, Users, Bot, Sparkles, Zap } from "lucide-react";
import Image from "next/image";

export default function ProblemSolution() {
  return (
    <section
      className="py-24 bg-background relative overflow-hidden"
      id="problem-solution"
    >
      {/* Glossy effect elements */}
      <div className="absolute top-40 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Small Business Challenges</h2>
          <p className="text-muted-foreground">
            Common pain points that are holding your business back and how our
            AI solutions solve them.
          </p>
        </div>

        {/* Visual comparison - visible on larger screens */}
        <div className="hidden lg:flex justify-center mb-16">
          <div className="relative max-w-4xl w-full">
            <div className="absolute inset-0 flex items-center">
              <div className="h-[2px] bg-gradient-to-r from-red-500/50 via-yellow-500/50 to-green-500/50 w-full"></div>
            </div>
            <div className="flex justify-between relative">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center mb-2">
                  <Clock className="h-6 w-6 text-red-500" />
                </div>
                <span className="text-sm font-medium">Overwhelmed</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-yellow-500/20 border border-yellow-500/50 flex items-center justify-center mb-2">
                  <DollarSign className="h-6 w-6 text-yellow-500" />
                </div>
                <span className="text-sm font-medium">Constrained</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center mb-2">
                  <Sparkles className="h-6 w-6 text-green-500" />
                </div>
                <span className="text-sm font-medium">Automated</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Problem 1 */}
          <Card className="bg-background/50 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-md transition-all overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="h-32 relative overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1483389127117-b6a2102724ae?w=800&q=80"
                alt="Busy business owner"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-70" />
            </div>
            <CardHeader className="relative">
              <div className="p-3 rounded-full bg-primary/10 w-fit mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Limited Time</CardTitle>
              <CardDescription>
                Spending too many hours on repetitive tasks instead of growing
                your business
              </CardDescription>
            </CardHeader>
            <CardContent className="relative">
              <div className="flex items-start gap-4 mt-4 p-4 bg-secondary/50 rounded-lg">
                <Zap className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Our Solution</h4>
                  <p className="text-sm text-muted-foreground">
                    Automate customer service and social media tasks, saving 15+
                    hours per week
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Problem 2 */}
          <Card className="bg-background/50 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-md transition-all overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="h-32 relative overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80"
                alt="Budget planning"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-70" />
            </div>
            <CardHeader className="relative">
              <div className="p-3 rounded-full bg-primary/10 w-fit mb-4">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Budget Constraints</CardTitle>
              <CardDescription>
                Can't afford enterprise-level automation tools or dedicated
                staff
              </CardDescription>
            </CardHeader>
            <CardContent className="relative">
              <div className="flex items-start gap-4 mt-4 p-4 bg-secondary/50 rounded-lg">
                <Sparkles className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Our Solution</h4>
                  <p className="text-sm text-muted-foreground">
                    Affordable monthly plans with no long-term contracts and
                    guaranteed ROI
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Problem 3 */}
          <Card className="bg-background/50 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-md transition-all overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="h-32 relative overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80"
                alt="Technical complexity"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-70" />
            </div>
            <CardHeader className="relative">
              <div className="p-3 rounded-full bg-primary/10 w-fit mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Technical Complexity</CardTitle>
              <CardDescription>
                Lack of technical expertise to implement AI solutions
              </CardDescription>
            </CardHeader>
            <CardContent className="relative">
              <div className="flex items-start gap-4 mt-4 p-4 bg-secondary/50 rounded-lg">
                <Bot className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Our Solution</h4>
                  <p className="text-sm text-muted-foreground">
                    We handle all the technical setup and maintenance - you just
                    enjoy the results
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
