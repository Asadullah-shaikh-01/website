"use client";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaPython,
  FaPhp,
  FaJava,
  FaAngular,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { cn } from "@/lib/utils";

const techIcons = [
  { icon: <FaHtml5 />, color: "text-orange-400", label: "HTML5" },
  { icon: <FaCss3Alt />, color: "text-blue-400", label: "CSS3" },
  { icon: <FaJs />, color: "text-yellow-400", label: "JavaScript" },
  { icon: <SiTypescript />, color: "text-blue-500", label: "TypeScript" },
  { icon: <FaReact />, color: "text-cyan-400", label: "React.js" },
  { icon: <SiNextdotjs />, color: "text-white", label: "Next.js" },
  { icon: <SiTailwindcss />, color: "text-sky-400", label: "Tailwind CSS" },
  { icon: <FaNodeJs />, color: "text-green-500", label: "Node.js" },
  { icon: <SiMongodb />, color: "text-green-400", label: "MongoDB" },
  { icon: <FaDatabase />, color: "text-purple-400", label: "SQL / Databases" },
  { icon: <FaPython />, color: "text-blue-300", label: "Python" },
  { icon: <FaJava />, color: "text-red-500", label: "Java" },
  { icon: <FaPhp />, color: "text-indigo-400", label: "PHP" },
  { icon: <FaAngular />, color: "text-red-400", label: "Angular" },
  { icon: <FaGitAlt />, color: "text-orange-500", label: "Git" },
];

export default function AboutHero() {
  return (
    <section className="relative bg-[#0f172a] text-white py-38 px-6 md:px-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center">
        <div className="w-[900px] h-[900px] bg-gradient-to-br from-cyan-500 to-blue-700 opacity-10 blur-[120px] rounded-[40%]" />
      </div>

      <div className="max-w-6xl mx-auto text-center space-y-10">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text drop-shadow-md"
        >
          Crafting Future-Ready Digital Solutions
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto"
        >
          Zentronix transforms ideas into powerful digital products using the
          latest technologies, frameworks, and future-first thinking.
        </motion.p>

        {/* CTA */}
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-md shadow-md hover:shadow-xl transition-all duration-300"
        >
          Let’s Build Together
        </motion.a>

        {/* Carousel */}
        <div className="relative w-full overflow-hidden mt-16 group">
          <motion.div
            className="flex gap-6 min-w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
          >
            {[...techIcons, ...techIcons].map((tech, index) => (
              <div
                key={index}
                className="bg-[#1e293b] hover:bg-[#233046] border border-cyan-500/20 px-6 py-4 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-cyan-500/20 transition rounded-md min-w-[140px]"
              >
                <div className={cn("text-3xl mb-2", tech.color)}>
                  {tech.icon}
                </div>
                <span className="text-sm text-gray-300">{tech.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
