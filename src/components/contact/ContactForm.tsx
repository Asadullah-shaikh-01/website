"use client";

import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative py-40 px-6 bg-[#0f172a] text-white overflow-hidden">
      {/* Decorative glow blobs */}
      <div className="absolute -top-64 -left-64 w-[600px] h-[600px] bg-gradient-to-tr from-pink-500 via-purple-600 to-indigo-600 rounded-full blur-[180px] opacity-40 animate-spin-slow z-0" />
      <div className="absolute -bottom-64 -right-64 w-[600px] h-[600px] bg-gradient-to-tr from-sky-400 via-cyan-500 to-teal-400 rounded-full blur-[180px] opacity-40 animate-pulse z-0" />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto backdrop-blur-2xl bg-white/5 border border-white/10 px-10 py-20 md:px-20 md:py-24 rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.35)]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <div className="flex justify-center mb-8">
          <div className="shadow-[0_20px_40px_rgba(255,255,255,0.1)] rounded-full overflow-hidden">
            <Player
              autoplay
              loop
              src="https://lottie.host/0ebd48ec-bfc1-4bcb-87f6-7689e93e9d1e/g4z4eS2TCO.json"
              style={{ height: "120px", width: "120px" }}
            />
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-500 to-teal-400 animate-text-glow">
          Let's Create Something Amazing Together
          <div className="mt-2 w-24 h-1 bg-gradient-to-r from-pink-400 to-cyan-300 mx-auto rounded-full animate-pulse" />
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {["name", "email", "number"].map((field, i) => (
            <div className="relative" key={i}>
              <input
                type={
                  field === "email"
                    ? "email"
                    : field === "number"
                    ? "tel"
                    : "text"
                }
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                placeholder={`Your ${
                  field.charAt(0).toUpperCase() + field.slice(1)
                }`}
                className="peer w-full bg-white/10 text-white border border-white/20 focus:border-cyan-300 rounded-xl px-5 pt-6 pb-2 placeholder-transparent outline-none backdrop-blur-xl shadow-lg focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 transition-all duration-300"
              />
              <label className="absolute left-5 top-2 text-sm text-white/70 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-300 transition-all">
                {`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
              </label>
            </div>
          ))}

          <div className="relative md:col-span-2">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              required
              placeholder="Your Message"
              className="peer w-full bg-white/10 text-white border border-white/20 focus:border-indigo-300 rounded-xl px-5 pt-6 pb-2 placeholder-transparent outline-none backdrop-blur-xl shadow-lg focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 transition-all duration-300"
            ></textarea>
            <label className="absolute left-5 top-2 text-sm text-white/70 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-300 transition-all">
              Your Message
            </label>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:col-span-2 mt-6 w-full py-4 px-10 bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-purple-500 text-white font-bold rounded-full text-xl shadow-xl hover:shadow-cyan-500/40 transition-all animate-glow"
          >
            ✨ Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
