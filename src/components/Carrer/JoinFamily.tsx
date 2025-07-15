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
} from "react-icons/fa";
import Image from "next/image";

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
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
            Glimpses of Our Culture
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((id) => (
              <motion.div
                key={id}
                className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={`/images/office${id}.jpg`}
                  alt={`Office ${id}`}
                  width={600}
                  height={400}
                  className="object-cover w-full h-64"
                />
              </motion.div>
            ))}
          </div>
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
