"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import img from "../../../public/images/fieldReports.png";

export default function ServiceFieldReports() {
  const services = [
    "Real-time Data Collection",
    "Offline Access Support",
    "Custom Form Templates",
    "Geo-tagging & Maps",
    "Photo & Video Uploads",
    "Role-based Access",
    "Report Analytics",
    "Automated Summaries",
    "PDF & Excel Export",
  ];

  return (
    <section className="bg-gradient-to-br from-purple-800 via-indigo-900 to-blue-900 py-24 text-white px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-white/10 backdrop-blur-md">
            <Image
              src={img}
              alt="Field Reports Preview"
              width={640}
              height={420}
              className="rounded-xl"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-extrabold mb-6 tracking-tight leading-snug">
            <span className="text-yellow-300">2.</span> Field Reports
          </h2>

          <p className="text-gray-200 mb-8 text-lg leading-relaxed">
            Our Field Reports solution simplifies on-ground data collection with
            intuitive tools like offline access, geo-tagging, and automated
            summaries. Get accurate insights, faster — right from the field.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 border border-white/10 hover:border-yellow-300 rounded-lg px-4 py-3 text-sm font-medium text-white backdrop-blur-md shadow hover:shadow-yellow-300/30 transition cursor-pointer"
              >
                {service}
              </motion.div>
            ))}
          </div>

          <Link
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-300 hover:bg-yellow-200 text-black font-semibold rounded-full shadow-lg transition-all duration-300"
          >
            Explore Field Reports →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
