"use client";

import { motion } from "framer-motion";
import {
  FaRocket,
  FaPuzzlePiece,
  FaMagic,
  FaShieldAlt,
  FaUserFriends,
} from "react-icons/fa";

const features = [
  {
    title: "Tailored Strategies",
    desc: "Solutions crafted uniquely for your business vision and market.",
    icon: <FaPuzzlePiece className="text-3xl text-blue-400" />,
  },
  {
    title: "Cutting-Edge Tech",
    desc: "Latest tools & trends to future-proof your systems and growth.",
    icon: <FaRocket className="text-3xl text-purple-400" />,
  },
  {
    title: "Next-Gen Support",
    desc: "Always-on experts ready to guide and solve anytime, anywhere.",
    icon: <FaUserFriends className="text-3xl text-pink-400" />,
  },
  {
    title: "Proven Security",
    desc: "Multi-layered protection for peace of mind and reliability.",
    icon: <FaShieldAlt className="text-3xl text-green-400" />,
  },
  {
    title: "Creative Excellence",
    desc: "We blend design with logic for stunning digital experiences.",
    icon: <FaMagic className="text-3xl text-yellow-400" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative z-10 py-24 px-6 md:px-20 bg-[#0a0a0a] overflow-hidden">
      {/* Animated Blobs Background */}
      <div className="absolute top-[-200px] left-[-200px] w-[400px] h-[400px] bg-purple-600 rounded-full mix-blend-screen blur-[150px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-200px] right-[-200px] w-[400px] h-[400px] bg-blue-500 rounded-full mix-blend-screen blur-[150px] opacity-30 animate-pulse"></div>

      {/* Section Heading */}
      <div className="text-center mb-20 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600"
        >
          Why Choose Ciphernest?
        </motion.h2>
        <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
          Transform your ideas into reality with a team that delivers
          brilliance, speed, and innovation.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
        {features.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 hover:shadow-blue-500/30 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {item.title}
            </h3>
            <p className="text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA Input Box */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-24 bg-white/10 backdrop-blur-xl rounded-xl p-10 max-w-2xl mx-auto text-center border border-white/10"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Ready to elevate your business?
        </h3>
        <p className="text-gray-300 mb-6">
          Get in touch for a free consultation with our experts.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 rounded-lg border border-white/20 bg-black/40 text-white w-full md:w-[70%] focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400"
          />
          <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold px-6 py-3 rounded-lg hover:scale-105 transition-all">
            Get Quote
          </button>
        </div>
      </motion.div>
    </section>
  );
}
