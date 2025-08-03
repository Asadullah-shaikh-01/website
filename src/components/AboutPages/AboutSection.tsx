// components/AboutSection.tsx

"use client";
import { motion } from "framer-motion";
import { FaBullseye, FaLightbulb, FaHistory } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Vision and Mission */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            Our Vision & Mission
          </motion.h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We aim to revolutionize businesses with cutting-edge technology and
            user-centric solutions that drive growth and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1e293b] hover:shadow-xl hover:scale-[1.02] transition rounded-2xl p-8 border border-cyan-500/20 backdrop-blur"
          >
            <FaBullseye className="text-cyan-400 text-4xl mb-4" />
            <h3 className="text-2xl font-semibold text-cyan-300">Our Vision</h3>
            <p className="text-gray-300 mt-2">
              To become a global leader in digital transformation, delivering
              scalable, secure, and future-ready software solutions.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#1e293b] hover:shadow-xl hover:scale-[1.02] transition rounded-2xl p-8 border border-blue-500/20 backdrop-blur"
          >
            <FaLightbulb className="text-yellow-300 text-4xl mb-4" />
            <h3 className="text-2xl font-semibold text-yellow-200">
              Our Mission
            </h3>
            <p className="text-gray-300 mt-2">
              Empower clients by building innovative digital experiences that
              enhance productivity, scalability, and success.
            </p>
          </motion.div>
        </div>

        {/* Company History */}
        <div className="mt-16">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
          >
            Our Story
          </motion.h2>
          <div className="bg-[#1e293b] rounded-2xl p-8 shadow-lg border border-purple-500/20">
            <div className="flex items-start gap-4">
              <FaHistory className="text-purple-400 text-4xl mt-1" />
              <div>
                <h3 className="text-2xl font-semibold text-purple-300 mb-2">
                  Founded in 2021
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Zentronix was born from a shared passion for technology and
                  innovation. What started as a two-person team in a small
                  co-working space has now evolved into a full-fledged IT
                  powerhouse serving clients across industries.
                  <br />
                  <br />
                  Our journey reflects growth, commitment, and a relentless
                  drive to solve real-world problems using code and creativity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
