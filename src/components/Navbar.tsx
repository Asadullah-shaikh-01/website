"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "../../public/images/zentronix.jpg";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Career", href: "/career" },
    { name: "Contact", href: "/contact" },
  ];

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" },
    }),
  };

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/80 border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-2 md:py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative p-[3px] rounded-xl"
          >
            {/* Outer Neon Ring */}
            <div className="absolute inset-0 rounded-xl neon-border neon-pulse" />

            {/* Inner Soft Glow */}
            <div className="absolute inset-0 rounded-xl neon-soft-glow" />

            {/* Glassmorphism Box */}
            <div className="relative px-3 py-2 rounded-xl bg-white/10 backdrop-blur-md shadow-lg flex items-center justify-center">
              <Image
                src={logo}
                alt="Company Logo"
                width={120}
                height={35}
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm font-semibold tracking-wide text-white">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={linkVariants}
              className="relative group"
            >
              <Link
                href={link.href}
                className="hover:text-pink-400 transition duration-200"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Theme + Buttons */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-gray-700 text-white hover:scale-110 transition"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-1 text-sm rounded-full bg-pink-500 text-white shadow-md hover:shadow-lg transition"
          >
            <Link href="/signup">Sign Up</Link>
          </motion.button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl text-white"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-black/90 px-6 py-4 space-y-3 text-sm text-white"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href={link.href}
                  className="block hover:text-pink-500 py-1"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

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
            filter: drop-shadow(0 0 8px rgba(255, 78, 205, 0.8))
              drop-shadow(0 0 12px rgba(168, 85, 247, 0.6))
              drop-shadow(0 0 16px rgba(59, 130, 246, 0.6));
          }
          50% {
            filter: drop-shadow(0 0 14px rgba(255, 78, 205, 1))
              drop-shadow(0 0 20px rgba(168, 85, 247, 0.9))
              drop-shadow(0 0 24px rgba(59, 130, 246, 0.9));
          }
        }
        .neon-border {
          background: linear-gradient(270deg, #ff4ecd, #a855f7, #3b82f6);
          background-size: 400% 400%;
        }
        .neon-pulse {
          animation: gradientMove 6s ease infinite,
            pulseGlow 3s ease-in-out infinite;
        }
        .neon-soft-glow {
          box-shadow: inset 0 0 20px rgba(255, 78, 205, 0.4),
            inset 0 0 40px rgba(168, 85, 247, 0.3),
            inset 0 0 60px rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </header>
  );
}
