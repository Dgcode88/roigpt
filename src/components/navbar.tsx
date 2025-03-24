import Link from "next/link";

import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import UserProfile from "./user-profile";
import Logo from "./logo";
import { ThemeSwitcher } from "./theme-switcher";
import ConsultationButton from "./consultation-button";

export default async function Navbar() {


  return (
    <nav className="w-full border-b border-border bg-background/80 backdrop-blur-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />

        <div className="hidden md:flex gap-6 items-center">
          <Link
            href="/"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Services
          </Link>
          <Link
            href="/how-it-works"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="/case-studies"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Case Studies
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Blog
          </Link>
        </div>

        <div className="flex gap-4 items-center">
          <ThemeSwitcher />

          {/* {user ? (
            <>
              <Link href="/dashboard" className="hidden md:block">
                <Button variant="outline" size="sm">
                  Dashboard
                </Button>
              </Link>
              <UserProfile />
            </>
          ) : (
            <> */}
              <div className="hidden md:block">
                <ConsultationButton size="sm" />
              </div>
              <Link href="/sign-in" className="hidden md:block">
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
              </Link>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            {/* </>
          )} */}
        </div>
      </div>
    </nav>
  );
}
