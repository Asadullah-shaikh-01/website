"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#eaf6ff] via-white to-[#e0f2ff] text-gray-900 flex flex-col items-center justify-center px-6 md:px-20 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-sky-100/20 to-transparent pointer-events-none animate-pulse" />

      <div className="relative z-10 max-w-4xl text-center space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm"
        >
          Transforming Ideas Into <br />{" "}
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent animate-pulse">
            Digital Excellence
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-700"
        >
          Ciphernest delivers future-ready IT solutions with modern design,
          innovation, and technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex justify-center space-x-4"
        >
          <Link href="/services">
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition duration-300">
              Explore Services
            </button>
          </Link>
          <Link href="/contact">
            <button className="px-6 py-3 rounded-full border border-gray-300 bg-white/80 text-gray-800 font-medium hover:bg-white transition">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
