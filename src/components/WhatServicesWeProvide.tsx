"use client";

import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  FileText,
  BookOpen,
  Settings,
  MessageSquare,
  Cloud,
  X,
} from "lucide-react";
import Link from "next/link";

interface Service {
  title: string;
  icon: JSX.Element;
  description: string;
  colors: string;
}

const services: Service[] = [
  {
    title: "Website Development",
    icon: <Code size={28} />,
    description:
      "We design and develop custom websites that are responsive, fast, and SEO-friendly — from business sites to web apps.",
    colors: "from-[#3a0ca3] via-[#7209b7] to-[#f72585]",
  },
  {
    title: "Field Reports",
    icon: <FileText size={28} />,
    description:
      "Generate and manage real-time field reports using our intelligent platform — perfect for surveys, audits, and inspections.",
    colors: "from-[#0f2027] via-[#203a43] to-[#2c5364]",
  },
  {
    title: "LMS Services",
    icon: <BookOpen size={28} />,
    description:
      "Powerful and scalable Learning Management Systems to deliver training and manage learning content efficiently.",
    colors: "from-[#2b5876] to-[#4e4376]",
  },
  {
    title: "CMMS Services",
    icon: <Settings size={28} />,
    description:
      "Computerized Maintenance Management Systems tailored to streamline maintenance operations and asset tracking.",
    colors: "from-[#2980b9] to-[#6dd5fa]",
  },
  {
    title: "SMS Services",
    icon: <MessageSquare size={28} />,
    description:
      "Bulk and transactional SMS solutions with high deliverability, integrated APIs, and live tracking features.",
    colors: "from-[#ff6a00] to-[#ee0979]",
  },
  {
    title: "SaaS Development",
    icon: <Cloud size={28} />,
    description:
      "From concept to launch — we build scalable, secure, and modern SaaS products with complete cloud integration.",
    colors: "from-[#11998e] to-[#38ef7d]",
  },
];

export default function WhatServicesWeProvide() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section className="relative py-24 px-6 bg-[#0a0a1a] text-white overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500 blur-[140px] opacity-20 animate-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-700 blur-[140px] opacity-20 animate-pulse -z-10" />

      {/* Heading */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-500">
          🚀 What Services We Provide
        </h2>
        <p className="text-gray-300 text-lg mt-4">
          We craft scalable and elegant solutions tailored to your business.
        </p>
      </motion.div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-4 md:px-8">
        {services.map((service, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.05}
            transitionSpeed={1500}
            gyroscope
          >
            <motion.div
              onClick={() => setSelectedService(service)}
              className={`cursor-pointer group rounded-3xl p-6 shadow-xl border border-white/10 bg-gradient-to-br ${service.colors} hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition duration-300`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/10 text-white mb-5 group-hover:scale-110 transition">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-200 text-sm line-clamp-2">
                {service.description}
              </p>
            </motion.div>
          </Tilt>
        ))}
      </div>

      {/* CTA Button */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Link
          href="/services"
          className="inline-block px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-full hover:shadow-xl hover:scale-105 transition-all"
        >
          View All Services
        </Link>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#121222] max-w-md w-full rounded-2xl p-8 text-white shadow-2xl relative border border-white/10"
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 40 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-white/70 hover:text-pink-500 transition"
              >
                <X size={24} />
              </button>
              <div className="mb-4 flex items-center space-x-3">
                <div className="p-3 bg-white/10 rounded-full">
                  {selectedService.icon}
                </div>
                <h3 className="text-2xl font-bold">{selectedService.title}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {selectedService.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
