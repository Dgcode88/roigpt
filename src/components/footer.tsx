import Link from "next/link";
import { Twitter, Linkedin, Facebook, Instagram } from "lucide-react";
import Logo from "./logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Services Column */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/chatbots"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  AI Chatbots
                </Link>
              </li>
              <li>
                <Link
                  href="/services/social-media"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Social Media Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/email-marketing"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Email Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/custom-solutions"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Custom Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/resources/guides"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  AI Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/faq"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/roi-calculator"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  ROI Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/book-consultation"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Book a Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  href="/gdpr"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  GDPR Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <div className="flex items-center mb-4 md:mb-0">
            <Logo />
            <div className="text-muted-foreground ml-4">
              © {currentYear} RoiGPT. All rights reserved.
            </div>
          </div>

          <div className="flex space-x-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="sr-only">Facebook</span>
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
