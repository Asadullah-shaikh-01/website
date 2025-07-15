"use client";

import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";

export default function ContactUs() {
  return (
    <section className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] py-24 px-6 md:px-20 overflow-hidden">
      {/* Stars Background Overlay */}
      <div className="absolute inset-0 bg-[url('/stars-bg.jpg')] bg-cover bg-center opacity-10 mix-blend-screen"></div>

      {/* Container */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Ready to Grow Your Business?
          </h2>
          <h3 className="text-3xl font-semibold text-cyan-400 mb-4">
            Contact Us!
          </h3>
          <p className="text-gray-300 text-lg max-w-md">
            We are the people behind real digital solutions. Let’s make your
            next project extraordinary.
          </p>
        </motion.div>

        {/* Right Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl w-full"
        >
          <div className="mb-4 relative">
            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-black/40 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 outline-none"
            />
          </div>
          <div className="mb-4 relative">
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-black/40 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 outline-none"
            />
          </div>
          <div className="mb-6 relative">
            <FaCommentDots className="absolute left-4 top-4 text-gray-400" />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full pl-10 pr-4 pt-4 rounded-lg bg-black/40 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 outline-none resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 rounded-lg hover:scale-105 transition-transform duration-300 shadow-md"
          >
            ✨ Get Quote Now
          </button>
        </motion.form>
      </div>
    </section>
  );
}
