"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaRocket } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import SparkleCanvas from "./SparkleCanvas"; // Adjust path accordingly

export default function ServiceEndSection() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative bg-black text-white py-40 px-6 overflow-hidden">
      <SparkleCanvas />

      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-teal-500 opacity-20 rounded-full blur-[150px] z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-fuchsia-500 opacity-20 rounded-full blur-[150px] z-0" />

      <div className="relative z-10 max-w-5xl mx-auto text-center bg-white/5 border border-white/10 backdrop-blur-md px-10 py-20 rounded-3xl shadow-2xl">
        <motion.div
          className="flex justify-center items-center gap-3 mb-4"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FaRocket className="text-teal-400 text-5xl animate-bounce-slow" />
        </motion.div>

        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-500 mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Let's Launch Your Next Big Idea ✨
        </motion.h2>

        <motion.p
          className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Join hands with a team that crafts cutting-edge solutions with real
          impact. Design, code, brand, and deliver — with brilliance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-br from-purple-400 to-pink-400 hover:from-teal-400 hover:to-blue-400 text-black font-semibold rounded-full text-lg shadow-lg hover:shadow-teal-500/40 transition-transform transform hover:scale-105 duration-300"
          >
            Start Your Project →
          </Link>
        </motion.div>
      </div>

      {showTop && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-white text-black shadow-lg hover:bg-teal-400 transition-all duration-300"
        >
          <IoIosArrowUp className="text-xl" />
        </motion.button>
      )}
    </section>
  );
}
