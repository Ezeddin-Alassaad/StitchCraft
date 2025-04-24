"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Scissors } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200 dark:bg-black/80 dark:border-neutral-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="flex items-center text-coral-600 space-x-2"
            >
              <Scissors className="h-6 w-6" />
              <span className="font-playfair text-xl font-bold">StitchCraft</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link 
                  href="/" 
                  className="font-medium text-neutral-600 hover:text-coral-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/workshops" 
                  className="font-medium text-neutral-600 hover:text-coral-500 transition-colors"
                >
                  Workshops
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="font-medium text-neutral-600 hover:text-coral-500 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="font-medium text-neutral-600 hover:text-coral-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-neutral-600 hover:text-coral-500 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-white dark:bg-neutral-900 transition-transform duration-300 ease-in-out transform",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="pt-20 pb-6 px-6">
          <nav>
            <ul className="space-y-6">
              <li>
                <Link 
                  href="/" 
                  className="block text-xl font-medium text-neutral-900 dark:text-white hover:text-coral-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/workshops" 
                  className="block text-xl font-medium text-neutral-900 dark:text-white hover:text-coral-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Workshops
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="block text-xl font-medium text-neutral-900 dark:text-white hover:text-coral-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="block text-xl font-medium text-neutral-900 dark:text-white hover:text-coral-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}