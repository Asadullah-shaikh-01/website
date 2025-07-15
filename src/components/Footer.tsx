"use client";

import React, { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  ChevronUp,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#11121c] text-white pt-20 pb-10 px-6 overflow-hidden z-10">
      <div className="absolute top-[-50px] left-[-50px] w-96 h-96 bg-purple-500 rounded-full blur-[120px] opacity-20 -z-10" />
      <div className="absolute bottom-[-50px] right-[-50px] w-96 h-96 bg-pink-500 rounded-full blur-[120px] opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-pink-600 text-white font-bold flex items-center justify-center rounded-full shadow-md">
              C
            </div>
            <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              CipherNest
            </span>
          </div>
          <p className="text-gray-400 text-sm">
            Innovative IT partner providing SaaS, CRM, and scalable digital
            products that empower businesses.
          </p>
        </div>

        {/* Sitemap */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Sitemap</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link href="/" className="hover:text-pink-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-pink-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-pink-400 transition">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-pink-400 transition">
                Meet the Team
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-pink-400 transition">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-pink-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a
                href="mailto:hello@ciphernest.com"
                className="hover:text-pink-400 transition"
              >
                hello@ciphernest.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a
                href="mailto:support@ciphernest.com"
                className="hover:text-pink-400 transition"
              >
                support@ciphernest.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a
                href="mailto:info@ciphernest.com"
                className="hover:text-pink-400 transition"
              >
                info@ciphernest.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a
                href="mailto:sales@ciphernest.com"
                className="hover:text-pink-400 transition"
              >
                sales@ciphernest.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a
                href="mailto:hr@ciphernesttechnologies.com"
                className="hover:text-pink-400 transition"
              >
                hr@ciphernesttechnologies.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Mumbai, India
            </li>
          </ul>

          <div className="flex gap-4 mt-4 text-white/70">
            <a href="#" className="hover:text-pink-500 transition">
              <Facebook />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <Twitter />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <Linkedin />
            </a>
          </div>
        </div>

        {/* Language + Subscribe */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Language</h4>
          <div className="relative group">
            <select
              className="appearance-none w-full bg-[#19192a] text-white px-5 py-3 rounded-xl shadow-inner border border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm transition-all"
              defaultValue="en"
            >
              <option value="en">🌐 English</option>
              <option value="hi">🇮🇳 हिन्दी</option>
              <option value="es">🇪🇸 Español</option>
              <option value="fr">🇫🇷 Français</option>
            </select>
            <div className="pointer-events-none absolute top-1/2 right-4 transform -translate-y-1/2 text-white/60 group-focus-within:text-pink-500 transition">
              ▼
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm text-gray-400 mb-2">Subscribe for updates</p>
            <form className="flex border border-white/10 rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Email address"
                className="bg-[#19192a] text-sm px-4 py-2 flex-1 text-white placeholder:text-gray-500 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 px-4 py-2 text-sm text-white transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-14 border-t border-white/10 pt-6 text-sm text-center text-gray-500">
        &copy; {new Date().getFullYear()} Ciphernest. All rights reserved.
      </div>

      {/* Scroll to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full shadow-xl hover:scale-110 transition z-50"
        >
          <ChevronUp className="text-white" />
        </button>
      )}
    </footer>
  );
}
