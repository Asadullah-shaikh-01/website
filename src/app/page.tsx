import ClientTestimonialsCarousel from "@/components/ClientTestimonialsCarousel";
import CompletedProjects from "@/components/CompletedProjects";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MeetOurTeam from "@/components/MeetOurTeam";
import Navbar from "@/components/Navbar";
import WhatServicesWeProvide from "@/components/WhatServicesWeProvide";
import WhyChooseUs from "@/components/WhyChooseUs";

import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CompletedProjects />
      <WhyChooseUs />
      <ClientTestimonialsCarousel />
      <WhatServicesWeProvide />
      <MeetOurTeam />
      <Footer />
    </>
  );
}

export default page;
