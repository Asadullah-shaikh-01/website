"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaSmile,
  FaCheckCircle,
  FaBriefcase,
  FaHeartbeat,
  FaHome,
  FaRocket,
  FaUsers,
  FaGlobe,
  FaLightbulb,
  FaBalanceScale,
} from "react-icons/fa";
import Image from "next/image";
import img1 from "../../../public/images/innovation.jpg";
import img2 from "../../../public/images/Team-Work.jpg";
import img3 from "../../../public/images/life.jpg";

const cultureData = [
  {
    id: 1,
    title: "Innovation at Every Step",
    description:
      "We nurture an environment where creativity meets technology. Our teams brainstorm, experiment, and innovate to deliver world-class IT solutions.",
    points: [
      "Encouraging creative ideas",
      "Adopting latest technologies",
      "Innovative problem-solving",
    ],
    icon: <FaLightbulb className="text-yellow-500 text-xl" />,
    image: img1,
  },
  {
    id: 2,
    title: "Teamwork & Collaboration",
    description:
      "At Zentronix, collaboration drives our success. We work together, share knowledge, and celebrate wins as one strong team.",
    points: [
      "Cross-functional collaboration",
      "Team-building activities",
      "Shared project ownership",
    ],
    icon: <FaUsers className="text-blue-500 text-xl" />,
    image: img2,
  },
  {
    id: 3,
    title: "Work-Life Balance",
    description:
      "We believe in balance. Our flexible schedules and fun events keep our team energized, creative, and ready to innovate.",
    points: [
      "Flexible working hours",
      "Wellness programs",
      "Celebrations & outings",
    ],
    icon: <FaBalanceScale className="text-green-500 text-xl" />,
    image: img3,
  },
];

export default function CareerHome() {
  return (
    <div className="bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#0f172a] text-white">
      {/* Hero Section */}
      <section className="text-center py-32 px-6 md:px-20 bg-gradient-to-r from-[#00F260] to-[#0575E6]">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-white text-transparent bg-clip-text drop-shadow-lg"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Build the Future With Us
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl max-w-2xl mx-auto text-white/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Join a team where innovation meets impact. Let’s shape the tech world
          together.
        </motion.p>
      </section>

      {/* Highlights Section */}
      <section className="py-24 px-6 bg-[#0f172a]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <FaLaptopCode size={48} className="text-cyan-400" />,
              title: "Engineering Excellence",
              desc: "We use bleeding-edge tools and industry best practices.",
            },
            {
              icon: <FaSmile size={48} className="text-pink-400" />,
              title: "People-First Culture",
              desc: "Mental wellness, flexibility & growth at the core.",
            },
            {
              icon: <FaCheckCircle size={48} className="text-green-400" />,
              title: "Growth-Driven Roles",
              desc: "Mentorship, ownership & opportunity for leadership.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center shadow-xl hover:scale-105 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-white/80">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Office Culture Gallery */}
      <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-b from-purple-50 via-white to-purple-50">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 pointer-events-none">
          <svg
            className="w-full h-full opacity-20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M40 0H0V40"
                  fill="none"
                  stroke="url(#grad)"
                  strokeWidth="0.5"
                />
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#9333EA" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating Gradient Blobs */}
        <motion.div
          className="absolute top-10 left-20 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-25"
          animate={{ y: [0, 30, 0], x: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 8 }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-25"
          animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 10 }}
        />

        {/* Section Content */}
        <div className="relative max-w-7xl mx-auto space-y-24">
          {cultureData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Parallax Image */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
                className="relative group overflow-hidden rounded-xl shadow-2xl"
              >
                <motion.div
                  initial={{ y: 0 }}
                  whileHover={{ y: -15 }}
                  transition={{ duration: 0.8 }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="rounded-xl object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500" />
              </motion.div>

              {/* Glassmorphism Text Card */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6 bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-lg"
              >
                <h3 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                  {item.icon} {item.title}
                </h3>
                <p className="text-lg text-gray-600">{item.description}</p>
                <ul className="space-y-3">
                  {item.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-gradient-to-tr from-[#1e293b] to-[#0f172a] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Perks & Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaBriefcase className="text-orange-400 text-4xl" />,
                title: "Remote Work",
              },
              {
                icon: <FaHeartbeat className="text-red-400 text-4xl" />,
                title: "Healthcare Plans",
              },
              {
                icon: <FaHome className="text-yellow-400 text-4xl" />,
                title: "WFH Stipends",
              },
            ].map((perk, i) => (
              <motion.div
                key={i}
                className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:scale-105 transition"
                whileHover={{ scale: 1.05 }}
              >
                <div className="mb-4">{perk.icon}</div>
                <h4 className="text-xl font-semibold text-white">
                  {perk.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Mission</h2>
          <p className="text-lg text-gray-700">
            We’re building the future of tech—AI, cloud platforms, and
            human-centered design. We empower our people to create with purpose
            and impact.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <FaUsers className="text-indigo-500 text-5xl mx-auto" />,
              title: "Inclusive",
            },
            {
              icon: <FaRocket className="text-pink-500 text-5xl mx-auto" />,
              title: "Bold Innovators",
            },
            {
              icon: <FaGlobe className="text-green-500 text-5xl mx-auto" />,
              title: "Global Impact",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow hover:scale-105 transition"
              whileHover={{ scale: 1.05 }}
            >
              {item.icon}
              <h4 className="text-2xl font-bold mt-4 mb-2">{item.title}</h4>
              <p className="text-gray-600">
                {index === 0
                  ? "We celebrate diversity. Everyone has a seat at the table."
                  : index === 1
                  ? "We ship fast, take risks & build bold."
                  : "Our impact spans continents with a shared mission."}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 text-center bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Shape What’s Next
        </motion.h2>
        <p className="mb-6 text-lg">
          Let’s innovate together. Apply now and join our tech movement.
        </p>
        <button className="bg-white text-[#0575E6] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition shadow-lg">
          View Open Roles
        </button>
      </section>
    </div>
  );
}
