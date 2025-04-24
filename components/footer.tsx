"use client";

import { useState } from "react";
import Link from "next/link";
import { Scissors, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to your API
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      // Reset subscription status after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-100 dark:bg-neutral-900">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Scissors className="h-6 w-6 text-coral-600" />
              <span className="font-playfair text-xl font-bold">StitchCraft</span>
            </Link>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-xs">
              Elevate your sewing skills with our expert-led workshops designed for all levels.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-coral-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-coral-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-coral-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-600 dark:text-neutral-400 hover:text-coral-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/workshops" className="text-neutral-600 dark:text-neutral-400 hover:text-coral-500 transition-colors">
                  Workshops
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-600 dark:text-neutral-400 hover:text-coral-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-600 dark:text-neutral-400 hover:text-coral-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Workshop Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/workshops?category=Basics" className="text-neutral-600 dark:text-neutral-400 hover:text-coral-500 transition-colors">
                  Beginner Basics
                </Link>
              </li>
              <li>
                <Link href="/workshops?category=Patterns" className="text-neutral-600 dark:text-neutral-400 hover:text-coral-500 transition-colors">
                  Pattern Making
                </Link>
              </li>
              <li>
                <Link href="/workshops?category=Sustainable" className="text-neutral-600 dark:text-neutral-400 hover:text-coral-500 transition-colors">
                  Sustainable Fashion
                </Link>
              </li>
              <li>
                <Link href="/workshops?category=Couture" className="text-neutral-600 dark:text-neutral-400 hover:text-coral-500 transition-colors">
                  Couture Techniques
                </Link>
              </li>
              <li>
                <Link href="/workshops?category=Specialty" className="text-neutral-600 dark:text-neutral-400 hover:text-coral-500 transition-colors">
                  Specialty Workshops
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              Get updates on new workshops and sewing tips.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coral-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-coral-500 text-white px-4 py-2 rounded-md hover:bg-coral-600 transition-colors"
              >
                Subscribe
              </button>
              {isSubscribed && (
                <p className="text-teal-600 text-sm">Thank you for subscribing!</p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-neutral-200 dark:border-neutral-800 mt-12 pt-8 text-center text-neutral-600 dark:text-neutral-400 text-sm">
          <p>&copy; {currentYear} StitchCraft Workshops. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy" className="hover:text-coral-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-coral-500 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}