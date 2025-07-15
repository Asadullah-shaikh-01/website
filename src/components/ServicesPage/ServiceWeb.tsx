"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import img from "../../../public/images/webDevelopment.jpg";

export default function ServiceWeb() {
  const services = [
    "Responsive Website Design",
    "E-commerce Development",
    "Content Management Systems (CMS)",
    "Landing Page Design",
    "Website Redesign",
    "UI/UX Design",
    "SEO",
    "Performance Optimization",
    "Website Maintenance & Support",
  ];

  return (
    <section className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tight leading-snug">
            <span className="text-cyan-400">1.</span> Website Development
          </h2>

          <p className="text-gray-300 mb-10 text-lg leading-relaxed">
            We craft custom, user-focused websites that elevate your brand and
            maximize online presence. From pixel-perfect design to
            lightning-fast performance and SEO, we turn your vision into a
            seamless digital experience.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 border border-white/10 hover:border-cyan-400 rounded-lg px-4 py-3 text-sm text-white font-medium backdrop-blur-md transition shadow hover:shadow-cyan-500/30 cursor-pointer"
              >
                {service}
              </motion.div>
            ))}
          </div>

          <Link
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-400 hover:bg-cyan-300 text-black font-semibold rounded-full shadow-lg transition-all duration-300"
          >
            Develop a Website →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-lg">
            <Image
              src={img}
              alt="Website Preview"
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
