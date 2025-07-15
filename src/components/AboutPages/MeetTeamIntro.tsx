"use client";

import React from "react";
import { motion } from "framer-motion";
import { KeyRound } from "lucide-react";

export default function MeetTeamIntro() {
  return (
    <section className="relative px-6 py-24 sm:py-32 bg-gradient-to-b from-[#101828] via-[#0c1325] to-[#0c0f1f] text-white overflow-hidden">
      {/* Soft radial glows */}
      <div className="absolute top-[-100px] left-[-120px] w-[300px] h-[300px] bg-[#7c3aed] rounded-full blur-[140px] opacity-20 -z-10" />
      <div className="absolute bottom-[-80px] right-[-100px] w-[300px] h-[300px] bg-[#ec4899] rounded-full blur-[140px] opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        {/* Left side: title and badge */}
        <motion.div
          className="md:col-span-5"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-pink-400 uppercase tracking-wide">
            <span className="bg-pink-500/10 p-1.5 rounded-full">
              <KeyRound className="w-4 h-4 text-pink-400" />
            </span>
            People Behind Solutions
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-white">
            Meet the <span className="text-purple-400">Experts</span> Behind{" "}
            <br />
            Our{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
              Solutions
            </span>
          </h2>
        </motion.div>

        {/* Right side: description */}
        <motion.div
          className="md:col-span-7"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="relative p-6 sm:p-8 rounded-xl bg-[#121827]/50 border-l-4 border-pink-500 shadow-lg">
            <p className="text-gray-300 text-lg leading-relaxed">
              At <span className="text-white font-semibold">Ciphernest</span>,
              we know that exceptional results come from exceptional minds. Our
              team consists of creative developers, strategic marketers,
              visionary designers, and agile project managers. We collaborate,
              innovate, and solve problems together—driving growth for startups
              and enterprises alike.
            </p>
            <div className="absolute top-0 left-[-14px] h-full w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-transparent rounded" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
