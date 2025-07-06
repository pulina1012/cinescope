import Link from "next/link";
import { Logo } from "./logo";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";

export default function FooterArea() {
  return (
    <footer className="border-t border-primary/20 bg-primary/5 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo */}
          <div className="flex flex-col items-start">
            <Logo className="h-20 w-20 mt-5"/>
          </div>

          {/* Navigation Links */}
          <div>
            <h5 className="mb-4 text-sm font-semibold text-muted-foreground">
              Quick Links
            </h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/admin"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Admin
                </Link>
              </li>
                <li>
                <Link
                  href="/login"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h5 className="mb-4 text-sm font-semibold text-muted-foreground">
              Follow us on
            </h5>
            <div className="flex gap-3">
              <ul className="space-y-2 text-sm">
                <li>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-green-200"
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-green-200"
                  >
                    <Instagram className="h-4 w-4" />
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-green-200"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-border pt-4 text-center text-sm text-muted-foreground">
          © 2025 CineScope. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
