"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import img from "../../../public/images/Blockchain.png";

export default function BlockchainDevelopment() {
  const services = [
    "Smart Contract Development",
    "Decentralized Apps (dApps)",
    "NFT Integration",
    "Wallet Integration",
    "Blockchain Consulting",
    "Token Creation",
    "Private Blockchain",
    "Supply Chain Blockchain",
    "Security Audits",
  ];

  return (
    <section className="bg-gradient-to-br from-purple-800 via-indigo-900 to-gray-900 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-lg">
            <Image
              src={img}
              alt="Blockchain Development Preview"
              width={640}
              height={420}
              className="rounded-xl"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-extrabold mb-6 tracking-tight leading-snug">
            <span className="text-purple-300">10.</span> Blockchain Development
          </h2>

          <p className="text-gray-200 mb-8 text-lg leading-relaxed">
            Build secure, transparent, and scalable blockchain solutions
            including smart contracts, dApps, NFTs, and decentralized platforms—
            tailored to meet your enterprise and Web3 goals.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 border border-white/10 hover:border-purple-300 rounded-lg px-4 py-3 text-sm font-medium text-white backdrop-blur-md shadow hover:shadow-purple-400/30 transition cursor-pointer"
              >
                {service}
              </motion.div>
            ))}
          </div>

          <Link
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-300 hover:bg-purple-200 text-black font-semibold rounded-full shadow-lg transition-all duration-300"
          >
            Explore Blockchain →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
