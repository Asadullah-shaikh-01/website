"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function HeroSection() {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-20 bg-gradient-to-br from-[#eaf6ff] via-white to-[#dff4ff]">
      {/* Background Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0"
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 40 },
            size: { value: 2 },
            move: { enable: true, speed: 0.5 },
            opacity: { value: 0.4 },
            color: { value: "#00c3ff" },
          },
        }}
      />

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-pink-300/40 via-purple-300/40 to-sky-300/40 blur-3xl"
        animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-sky-300/30 via-blue-300/30 to-indigo-300/30 blur-3xl"
        animate={{ x: [0, -60, 60, 0], y: [0, 40, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl w-full">
        {/* Left Side - Text */}
        <div className="space-y-6 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 bg-clip-text text-transparent"
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
            className="text-lg text-gray-700"
          >
            Zentronix delivers future-ready IT solutions with modern design,
            innovation, and technology to power your digital growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center md:justify-start space-x-4"
          >
            <Link href="/services">
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition">
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

        {/* Right Side - Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20"
        >
          <video
            className="w-full h-full object-cover"
            src="/videos/Background-video.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Gradient Overlay on Video */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
