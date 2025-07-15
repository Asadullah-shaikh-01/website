"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import img from "../../../public/images/SMS.webp";

export default function ServiceSms() {
  const services = [
    "Student Information",
    "Attendance Tracking",
    "Timetable Management",
    "Exam & Grades",
    "Fee Collection",
    "Parent Communication",
    "Library Management",
    "Transport Tracking",
    "Reports & Analytics",
  ];

  return (
    <section className="bg-gradient-to-br from-indigo-700 via-purple-800 to-gray-900 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-extrabold mb-6 tracking-tight leading-snug">
            <span className="text-indigo-300">5.</span> SMS Services
          </h2>

          <p className="text-gray-200 mb-8 text-lg leading-relaxed">
            Our School Management System (SMS) simplifies administration with
            intuitive modules for student records, academics, communication, and
            finance — all in one efficient platform.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 border border-white/10 hover:border-indigo-300 rounded-lg px-4 py-3 text-sm font-medium text-white backdrop-blur-md shadow hover:shadow-indigo-400/30 transition cursor-pointer"
              >
                {service}
              </motion.div>
            ))}
          </div>

          <Link
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-300 hover:bg-indigo-200 text-black font-semibold rounded-full shadow-lg transition-all duration-300"
          >
            Explore SMS →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-lg">
            <Image
              src={img}
              alt="SMS Dashboard Preview"
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
