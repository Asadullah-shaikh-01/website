"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaShieldAlt,
  FaUsersCog,
  FaRocket,
  FaTools,
  FaHandshake,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLightbulb className="text-purple-600 text-3xl" />,
    title: "Innovative Solutions",
    description:
      "Cutting-edge technologies to build future-proof, scalable, and efficient digital solutions tailored to your goals.",
  },
  {
    icon: <FaShieldAlt className="text-blue-600 text-3xl" />,
    title: "Security First",
    description:
      "We prioritize robust security protocols, encryption standards, and safe deployments to protect your data and apps.",
  },
  {
    icon: <FaUsersCog className="text-green-600 text-3xl" />,
    title: "Expert Team",
    description:
      "A team of certified developers, UI/UX designers, and engineers dedicated to delivering high-quality work.",
  },
  {
    icon: <FaRocket className="text-red-500 text-3xl" />,
    title: "Agile & Fast Delivery",
    description:
      "Our streamlined agile workflow ensures quick iterations, transparency, and faster time-to-market.",
  },
  {
    icon: <FaTools className="text-yellow-500 text-3xl" />,
    title: "Full-Stack Services",
    description:
      "From frontend interfaces to complex backends, APIs, cloud integration, and post-deployment support—we do it all.",
  },
  {
    icon: <FaHandshake className="text-pink-600 text-3xl" />,
    title: "Client Commitment",
    description:
      "We focus on your long-term success through transparent communication, reliable delivery, and lasting partnerships.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-24 px-6 bg-gradient-to-br from-[#e0f2f1] via-[#fce4ec] to-[#e1f5fe] text-gray-800">
      {/* Background Blobs */}
      <div className="absolute top-0 -left-24 w-[400px] h-[400px] bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center relative z-10 mb-16 pt-12">
        <motion.span
          className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 text-xs rounded-full mb-4"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ⭐ Trusted by 50+ brands
        </motion.span>

        {/* Animated Sparkle Heading */}
        <motion.div
          className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-800 mt-2"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {["🚀", "Why", "Choose", "Us"].map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-2"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              {word === "Choose" ? (
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 animate-glow">
                  {word}
                  <span className="absolute top-0 left-0 w-full h-full rounded-lg pointer-events-none animate-ping opacity-20 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 blur"></span>
                </span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          className="text-gray-600 text-lg max-w-3xl mx-auto mt-4"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          CipherNest delivers solutions that empower growth, optimize
          operations, and ensure your digital success.
        </motion.p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="rounded-3xl p-8 border border-gray-200 shadow-xl group transition-transform duration-300 hover:-translate-y-2 hover:ring-2 hover:ring-purple-300 bg-gradient-to-br from-white via-[#fdfbff] to-[#f0f5ff] hover:animate-pulse"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-md transition-transform duration-300"
            >
              {feature.icon}
            </motion.div>
            <h3 className="text-xl font-semibold text-center mt-6 mb-3 text-gray-800">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600 text-center">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 text-center relative z-10">
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-3 text-white font-semibold bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Start a Project 🚀
        </motion.a>
      </div>

      {/* Sparkle Animation Styles */}
      <style jsx>{`
        .animate-glow {
          animation: shimmer 3s infinite ease-in-out;
        }

        @keyframes shimmer {
          0% {
            text-shadow: 0 0 10px #ff66cc, 0 0 20px #cc99ff;
          }
          50% {
            text-shadow: 0 0 25px #ff66cc, 0 0 35px #cc99ff;
          }
          100% {
            text-shadow: 0 0 10px #ff66cc, 0 0 20px #cc99ff;
          }
        }
      `}</style>
    </section>
  );
}
