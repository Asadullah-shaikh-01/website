import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

function page() {
  return (
    <div>
      <Navbar />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default page;
