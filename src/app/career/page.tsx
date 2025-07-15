import { TimeLine } from "@/components/Carrer/TimeLine";
import Navbar from "@/components/Navbar";
import JoinFamily from "@/components/Carrer/JoinFamily";

import React from "react";
import Footer from "@/components/Footer";

function page() {
  return (
    <>
      <Navbar />
      <TimeLine />
      <JoinFamily />
      <Footer />
    </>
  );
}

export default page;
