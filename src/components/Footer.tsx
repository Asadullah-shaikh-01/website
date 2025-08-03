"use client";

import React, { useEffect, useState } from "react";
import logo from "../../public/images/zentronix.jpg";
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
import Image from "next/image";

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
      {/* Background blobs */}
      <div className="absolute top-[-50px] left-[-50px] w-96 h-96 bg-purple-500 rounded-full blur-[120px] opacity-20 -z-10" />
      <div className="absolute bottom-[-50px] right-[-50px] w-96 h-96 bg-pink-500 rounded-full blur-[120px] opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Premium Neon Logo */}
        <div className="flex flex-col">
          <div className="flex items-center justify-start mb-6">
            <div className="relative p-[4px] rounded-xl neon-hover">
              {/* Outer Neon Ring */}
              <div className="absolute inset-0 rounded-xl neon-border neon-pulse neon-rotate" />
              {/* Inner Soft Glow */}
              <div className="absolute inset-0 rounded-xl neon-soft-glow" />
              {/* Glass Box */}
              <div className="relative px-5 py-4 rounded-xl bg-white/10 backdrop-blur-md shadow-lg flex items-center justify-center">
                <Image
                  src={logo}
                  alt="Company Logo"
                  width={160}
                  height={60}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
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

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a
                href="mailto:hello@zentronic.com"
                className="hover:text-pink-400 transition"
              >
                hello@zentronic.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a
                href="mailto:support@zentronic.com"
                className="hover:text-pink-400 transition"
              >
                support@zentronic.com
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

      {/* Bottom */}
      <div className="mt-14 border-t border-white/10 pt-6 text-sm text-center text-gray-500">
        &copy; {new Date().getFullYear()} Zentronic Solutions. All rights
        reserved.
      </div>

      {/* Scroll to Top */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full shadow-xl hover:scale-110 transition z-50"
        >
          <ChevronUp className="text-white" />
        </button>
      )}

      {/* Neon Glow CSS */}
      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes pulseGlow {
          0%,
          100% {
            filter: drop-shadow(0 0 10px rgba(255, 78, 205, 0.9))
              drop-shadow(0 0 16px rgba(168, 85, 247, 0.8))
              drop-shadow(0 0 20px rgba(59, 130, 246, 0.8));
          }
          50% {
            filter: drop-shadow(0 0 20px rgba(255, 78, 205, 1))
              drop-shadow(0 0 28px rgba(168, 85, 247, 1))
              drop-shadow(0 0 36px rgba(59, 130, 246, 1));
          }
        }
        @keyframes slowRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .neon-border {
          background: linear-gradient(270deg, #ff4ecd, #a855f7, #3b82f6);
          background-size: 400% 400%;
        }
        .neon-pulse {
          animation: gradientMove 6s ease infinite,
            pulseGlow 2.5s ease-in-out infinite;
        }
        .neon-rotate {
          animation: slowRotate 20s linear infinite;
        }
        .neon-soft-glow {
          box-shadow: inset 0 0 25px rgba(255, 78, 205, 0.5),
            inset 0 0 50px rgba(168, 85, 247, 0.4),
            inset 0 0 70px rgba(59, 130, 246, 0.4);
          transition: all 0.3s ease-in-out;
        }
        .neon-hover:hover .neon-soft-glow {
          box-shadow: inset 0 0 40px rgba(255, 78, 205, 0.8),
            inset 0 0 70px rgba(168, 85, 247, 0.7),
            inset 0 0 90px rgba(59, 130, 246, 0.7);
        }
        .neon-hover:hover {
          transform: scale(1.07);
        }
      `}</style>
    </footer>
  );
}
