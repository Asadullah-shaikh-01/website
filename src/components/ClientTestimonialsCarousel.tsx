"use client";

import React, { useEffect, useRef, useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Testimonial {
  name: string;
  role: string;
  feedback: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Aarav Mehta",
    role: "Founder, StartLoop Technologies",
    feedback:
      "Partnering with your company was the best decision we made this year. The team transformed our vision into a fully functional product — on time and beyond expectations.",
  },
  {
    name: "Sophie Laurent",
    role: "Head of Marketing, UrbanLeaf",
    feedback:
      "Exceptional attention to detail, clear communication, and seamless delivery. Our e-commerce conversions increased by over 40% after the revamp.",
  },
  {
    name: "Ishaan Verma",
    role: "CTO, BookNest",
    feedback:
      "A scalable MVP built under tight deadlines. Delivered early, bug-free, and even helped us onboard our first 1000 users. Highly recommended!",
  },
  {
    name: "Riya Kapoor",
    role: "Product Lead, NovaApps",
    feedback:
      "They exceeded expectations in every area—design, dev, and strategy. Truly a partner, not just a vendor.",
  },
];

const ClientTestimonialsCarousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollIndex, setScrollIndex] = useState<number>(0);

  const scrollToIndex = (i: number) => {
    if (containerRef.current) {
      const width =
        containerRef.current.firstChild instanceof HTMLElement
          ? containerRef.current.firstChild.offsetWidth + 32
          : 0;
      containerRef.current.scrollTo({
        left: width * i,
        behavior: "smooth",
      });
      setScrollIndex(i);
    }
  };

  const handlePrev = () => {
    const newIndex =
      scrollIndex === 0 ? testimonials.length - 1 : scrollIndex - 1;
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (scrollIndex + 1) % testimonials.length;
    scrollToIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(interval);
  }, [scrollIndex]);

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-[#0f051d] via-[#1a103d] to-[#12061c] text-white overflow-hidden">
      {/* Blurred Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[10%] w-[400px] h-[400px] bg-pink-500 rounded-full blur-[200px] opacity-30 animate-pulse" />
        <div className="absolute bottom-[-15%] right-[5%] w-[400px] h-[400px] bg-purple-600 rounded-full blur-[200px] opacity-25 animate-pulse" />
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-14">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-500 animate-glow"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ✨ Hear What Our Clients Say
        </motion.h2>
        <motion.p
          className="text-gray-300 text-lg mt-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Powerful stories from our amazing partners.
        </motion.p>
      </div>

      {/* Navigation Buttons */}
      <div className="relative z-10 flex justify-center mb-6 space-x-4">
        <button
          onClick={handlePrev}
          className="text-white/70 hover:text-pink-500 transition-all p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          className="text-white/70 hover:text-pink-500 transition-all p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      {/* Testimonial Cards */}
      <div
        ref={containerRef}
        className="relative z-10 flex overflow-x-auto px-4 md:px-8 space-x-8 no-scrollbar snap-x snap-mandatory"
      >
        {testimonials.map((t, i) => (
          <Tilt
            key={i}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1500}
            className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[45%] lg:w-[30%] bg-gradient-to-br from-[#2b1d50]/70 to-[#1f0f3f]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl transition-transform duration-300 hover:shadow-purple-800/50"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <FaQuoteLeft className="text-pink-400 text-3xl mb-4" />
              <p className="text-gray-200 text-base leading-relaxed mb-6">
                {t.feedback}
              </p>
              <div>
                <h4 className="text-white font-semibold text-lg">{t.name}</h4>
                <p className="text-sm text-purple-400">{t.role}</p>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>

      <style jsx>{`
        .animate-glow {
          animation: glow-text 3s ease-in-out infinite;
        }
        @keyframes glow-text {
          0% {
            text-shadow: 0 0 10px #d946ef, 0 0 20px #7c3aed;
          }
          50% {
            text-shadow: 0 0 25px #d946ef, 0 0 35px #7c3aed;
          }
          100% {
            text-shadow: 0 0 10px #d946ef, 0 0 20px #7c3aed;
          }
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ClientTestimonialsCarousel;
