"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin } from "lucide-react";

const team = [
  {
    name: "Aarav Mehta",
    role: "CEO & Co-Founder",
    image: "/team/aarav.jpg",
    bio: "Visionary leader driving innovation and culture with 10+ years of startup experience.",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Riya Kapoor",
    role: "Lead Designer",
    image: "/team/riya.jpg",
    bio: "Pixel-perfect UI/UX creator with a passion for accessibility and creative storytelling.",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Ishaan Verma",
    role: "CTO",
    image: "/team/ishaan.jpg",
    bio: "Full-stack architect and cloud-native engineer building scalable infrastructure.",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Sophie Laurent",
    role: "Marketing Director",
    image: "/team/sophie.jpg",
    bio: "Creative marketing strategist with a proven record in B2B tech campaigns.",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
];

export default function MeetOurTeam() {
  return (
    <section className="relative py-24 px-6 bg-[#09090f] text-white overflow-hidden">
      {/* Glow blobs */}
      <div className="absolute top-[-10%] left-[-5%] w-80 h-80 bg-purple-500 blur-[120px] opacity-20 animate-pulse -z-10" />
      <div className="absolute bottom-[-10%] right-[-5%] w-80 h-80 bg-pink-500 blur-[120px] opacity-20 animate-pulse -z-10" />

      {/* Heading */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
          ✨ Meet Our Amazing Team
        </h2>
        <p className="text-gray-400 text-lg mt-4 max-w-xl mx-auto">
          The passionate people crafting digital experiences behind the scenes.
        </p>
      </motion.div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-4 md:px-8">
        {team.map((member, i) => (
          <motion.div
            key={i}
            className="relative group rounded-3xl p-6 bg-[#0f0f1c] border border-white/10 shadow-[0_0_30px_#ffffff0a] hover:shadow-[0_0_60px_#a855f7aa] transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {/* Avatar with gradient ring */}
            <div className="relative w-24 h-24 mx-auto mb-5">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-spin-slow blur-sm"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#111] z-10">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Name & Role */}
            <h3 className="text-xl font-semibold text-center mb-1">
              {member.name}
            </h3>
            <p className="text-sm text-pink-400 text-center">{member.role}</p>

            {/* Hover Bio Preview */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-3xl flex flex-col justify-center items-center text-center p-6">
              <p className="text-sm text-gray-300">{member.bio}</p>
              <div className="mt-4 flex gap-4 text-white/70">
                <a href={member.linkedin} target="_blank">
                  <Linkedin
                    className="hover:text-pink-400 transition"
                    size={20}
                  />
                </a>
                <a href={member.twitter} target="_blank">
                  <Twitter
                    className="hover:text-pink-400 transition"
                    size={20}
                  />
                </a>
                <a href={member.github} target="_blank">
                  <Github
                    className="hover:text-pink-400 transition"
                    size={20}
                  />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <a
          href="/team"
          className="inline-block px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:shadow-lg hover:scale-105 transition"
        >
          View Full Team
        </a>
      </motion.div>
    </section>
  );
}
