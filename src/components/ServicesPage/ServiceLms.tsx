"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import img from "../../../public/images/LMS.webp";

export default function ServiceLms() {
  const services = [
    "Course Management",
    "Student Enrollment",
    "Progress Tracking",
    "Interactive Quizzes",
    "Live Sessions",
    "Certificates & Badges",
    "Admin Dashboard",
    "Mobile Accessibility",
    "Content Scheduling",
  ];

  return (
    <section className="bg-gradient-to-br from-pink-700 via-red-800 to-rose-900 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-extrabold mb-6 tracking-tight leading-snug">
            <span className="text-pink-300">3.</span> LMS Services
          </h2>

          <p className="text-gray-200 mb-8 text-lg leading-relaxed">
            Our Learning Management System (LMS) empowers educators and
            businesses to deliver, track, and manage learning experiences
            efficiently — all through a customizable, user-friendly digital
            platform.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 border border-white/10 hover:border-pink-300 rounded-lg px-4 py-3 text-sm font-medium text-white backdrop-blur-md shadow hover:shadow-pink-400/30 transition cursor-pointer"
              >
                {service}
              </motion.div>
            ))}
          </div>

          <Link
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-pink-300 hover:bg-pink-200 text-black font-semibold rounded-full shadow-lg transition-all duration-300"
          >
            Explore LMS →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-lg">
            <Image
              src={img}
              alt="LMS Platform Preview"
              width={640}
              height={420}
              className="rounded-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
