"use client";

import { motion, AnimatePresence } from "framer-motion";

import React from "react";
import { AuroraBackground } from "../../components/ui/aurora-background";

export function ServiceHero() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Comprehensive IT Services
        </div>
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          for Business Growth
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 ">
          Explore our range of IT services designed to support your
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 ">
          business goals. From strategy to execution, we’re
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 ">
          committed to helping you grow and succeed.
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          know more
        </button>
      </motion.div>
    </AuroraBackground>
  );
}
export default ServiceHero;
