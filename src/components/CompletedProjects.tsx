"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import img1 from "../../public/images/E-COMMERCE-IAMGE-PROJECT.jpg";
import img2 from "../../public/images/MOBILE-APP-PROJECT.jpg";
import img3 from "../../public/images/CRM-BACKEND.webp";
import img4 from "../../public/images/INVENTORY-SYSTEM.jpg";
import img5 from "../../public/images/CHAT-SUPPORT-IMAGES.webp";
import img6 from "../../public/images/Analytics-Dashboard.webp";

const projects = [
  {
    title: "E-commerce Website",
    image: img1,
    gradient: "from-[#ffecd2] to-[#fcb69f]",
    description:
      "A complete B2C online store with cart, payment & admin dashboard.",
    tags: ["React", "Stripe", "Next.js", "MongoDB"],
  },
  {
    title: "Mobile App UI",
    image: img2,
    gradient: "from-[#c2e9fb] to-[#a1c4fd]",
    description: "Modern, responsive UI for Android & iOS mobile application.",
    tags: ["Figma", "React Native", "Tailwind"],
  },
  {
    title: "CRM Backend API",
    image: img3,
    gradient: "from-[#d4fc79] to-[#96e6a1]",
    description: "REST API for CRM with auth, logging, and sync capabilities.",
    tags: ["Node.js", "Express", "JWT", "PostgreSQL"],
  },
  {
    title: "Inventory System",
    image: img4,
    gradient: "from-[#fddb92] to-[#d1fdff]",
    description: "Stock & inventory management with tracking and reporting.",
    tags: ["Django", "SQLite", "Chart.js"],
  },
  {
    title: "Chat Support Feature",
    image: img5,
    gradient: "from-[#ffecd2] to-[#fcb69f]",
    description:
      "Live support chat for real-time communication on web & mobile.",
    tags: ["Socket.io", "React", "Firebase"],
  },
  {
    title: "Analytics Dashboard",
    image: img6,
    gradient: "from-[#fbc2eb] to-[#a6c1ee]",
    description: "Admin dashboard with analytics and user behavior tracking.",
    tags: ["Next.js", "Recharts", "Tailwind CSS"],
  },
];

export default function CompletedProjects() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-[#f7f7f7] via-[#f2f6ff] to-[#e8fbff] text-gray-800 transition-colors duration-300">
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white max-w-lg w-full rounded-xl p-6 shadow-2xl relative z-50"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-xl"
              >
                ✕
              </button>
              <div className="w-full h-60 relative rounded-xl overflow-hidden mb-4 group">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{selected.title}</h3>
              <p className="mb-4 text-gray-600">{selected.description}</p>
              <div className="flex flex-wrap gap-2">
                {selected.tags.map((tag: string, i: number) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          🎯 Our Completed Projects
        </h2>
        <p className="text-gray-600 text-lg">
          We've designed and delivered powerful digital experiences across
          industries—from e-commerce platforms to real-time dashboards. Each
          project reflects quality, innovation, and client satisfaction.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ rotateX: 5, rotateY: -5 }}
            onClick={() => setSelected(project)}
            className="bg-white/40 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.04] cursor-pointer p-6 transform hover:-translate-y-1"
          >
            <div
              className={`rounded-xl w-full h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden shadow-lg mb-5`}
            >
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-xl opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <h3 className="text-xl font-bold text-center mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 text-center mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-1 bg-gray-200 rounded-full text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <button className="inline-block px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:from-[#556cd6] hover:to-[#6b3bc5] shadow-lg hover:shadow-xl transition-all duration-300">
          View All Projects
        </button>
      </div>
    </section>
  );
}
