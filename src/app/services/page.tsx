import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BlockchainDevelopment from "@/components/ServicesPage/BlockchainDevelopment";
import CrmSolution from "@/components/ServicesPage/CrmSolution";
import ErpSolution from "@/components/ServicesPage/ErpSolution";
import ServiceAppDevelopment from "@/components/ServicesPage/ServiceAppDevelopment";
import ServiceCmms from "@/components/ServicesPage/ServiceCmms";
import ServiceEndSection from "@/components/ServicesPage/ServiceEndSection";
import ServiceFieldReports from "@/components/ServicesPage/ServiceFieldReports";
import ServiceHero from "@/components/ServicesPage/ServiceHero";
import ServiceInformation from "@/components/ServicesPage/ServiceInformation";
import ServiceLms from "@/components/ServicesPage/ServiceLms";
import ServiceSaasDevelopment from "@/components/ServicesPage/ServiceSaasDevelopment";
import ServiceWeb from "@/components/ServicesPage/ServiceWeb";
import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <ServiceHero />
      <ServiceInformation />
      <ServiceWeb />
      <ServiceFieldReports />
      <ServiceLms />
      <ServiceCmms />
      <ServiceSaasDevelopment />
      <ServiceAppDevelopment />
      <ErpSolution />
      <CrmSolution />
      <BlockchainDevelopment />
      <ServiceEndSection />
      <Footer />
    </>
  );
}

export default page;
