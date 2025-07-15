import AboutHero from "@/components/AboutPages/AboutHero";
import AboutSection from "@/components/AboutPages/AboutSection";
import { AboutTestimonials } from "@/components/AboutPages/AboutTestimonials";
import ContactUs from "@/components/AboutPages/ContactUs";
import MeetTeamIntro from "@/components/AboutPages/MeetTeamIntro";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
// import { Spotlight } from "@/components/AboutPages/Spotlight";
import WhyChooseUs from "@/components/WhyChooseUs";

import { Contact } from "lucide-react";
import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <AboutSection />
      <MeetTeamIntro />
      <AboutTestimonials />
      <WhyChooseUs />
      <ContactUs />
      <Footer />
    </>
  );
}

export default page;
