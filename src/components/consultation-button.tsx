import { Button } from "@/components/ui/button";
import { CalendarClock } from "lucide-react";
import Link from "next/link";

interface ConsultationButtonProps {
  className?: string;
  variant?:
    | "default"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
}

export default function ConsultationButton({
  className = "",
  variant = "default",
  size = "default",
}: ConsultationButtonProps) {
  return (
    <Link href="/book-consultation">
      <Button variant={variant} size={size} className={`${className} group`}>
        <CalendarClock className="mr-2 h-4 w-4 group-hover:animate-pulse" />
        Book Free 15-Min Consultation
      </Button>
    </Link>
  );
}
