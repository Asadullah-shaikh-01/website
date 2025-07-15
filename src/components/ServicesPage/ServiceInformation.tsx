"use client";
import { FaLightbulb, FaProjectDiagram } from "react-icons/fa";
import { LuSparkles } from "react-icons/lu";

export default function ServiceInformation() {
  const items = [
    {
      icon: <FaLightbulb className="text-blue-500 text-4xl mb-4" />,
      title: "Full-Cycle Support",
      description:
        "We’re with you every step of the way. From concept to completion, our comprehensive services ensure your product ticks all the boxes and meets user expectations seamlessly.",
    },
    {
      icon: <FaProjectDiagram className="text-blue-500 text-4xl mb-4" />,
      title: "Unified Team Approach",
      description:
        "We operate as a cohesive unit, bringing together specialists from diverse fields. This integrated approach ensures that every aspect — from research and business analysis to design and development — is handled with precision.",
    },
    {
      icon: <LuSparkles className="text-blue-500 text-4xl mb-4" />,
      title: "Staying Ahead of the Curve",
      description:
        "At Sovorun, we prioritize modernity and innovation. By delivering comprehensive UI/UX designs, we help your business stay ahead in a competitive market.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-12">
          Our Comprehensive, Innovative Approach
        </h2>
        <div className="grid md:grid-cols-3 gap-12 text-left">
          {items.map((item, idx) => (
            <div key={idx}>
              <div className="flex justify-center md:justify-start">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
