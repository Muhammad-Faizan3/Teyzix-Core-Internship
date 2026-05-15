import React from "react";
import {
  Globe,
  Smartphone,
  Palette,
  Settings,
  Check,
  Image,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Globe size={32} />,
      title: "Web Development",
      description:
        "Modern, fast, conversion-ready websites built with the latest frameworks.",
      features: ["Next.js / React", "Performance Optimized", "SEO Ready"],
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile App Development",
      description:
        "Cross-platform apps delivering seamless experiences on iOS and Android.",
      features: ["React Native / Flutter", "Native Performance", "App Store Ready"],
    },
    {
      icon: <Palette size={32} />,
      title: "UI/UX Design",
      description:
        "Intuitive, beautiful interfaces designed to convert visitors into customers.",
      features: ["User Research", "Figma Prototypes", "Design Systems"],
    },
    {
      icon: <Settings size={32} />,
      title: "Custom Software",
      description:
        "Tailored software solutions engineered for your business workflows.",
      features: ["Scalable Architecture", "API Integrations", "Cloud Deployment"],
    },
    {
      icon: <Image size={32} />,
      title: "Graphic Design",
      description:
        "Compelling visuals that tell your brand story and make an impression.",
      features: ["Brand Identity", "Social Media Assets", "Print & Digital"],
    },
  ];

  // Split services: first 4 cards, then last card
  const firstRowServices = services.slice(0, 4);
  const secondRowServices = services.slice(4, 5);

  return (
    <section className="relative min-h-screen bg-[#020817] text-white overflow-hidden py-24 px-6">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-green-500/10 blur-[140px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-green-400 uppercase tracking-[4px] text-sm font-semibold mb-4">
            What We Do
          </p>

          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Services Built for{" "}
            <span className="text-green-400">Scale</span>
          </h2>

          <p className="text-gray-400 text-lg mt-6 max-w-3xl mx-auto leading-9">
            From concept to launch — we handle every layer of your digital
            product with precision and expertise.
          </p>
        </div>

        {/* First Row - 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {firstRowServices.map((service, index) => (
            <div
              key={index}
              className="bg-[#081225]/90 border border-green-500/20 rounded-3xl p-8 hover:border-green-400/40 hover:shadow-[0_0_40px_rgba(34,197,94,0.15)] transition duration-300 h-full flex flex-col"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 mb-8">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold mb-5">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-400 text-lg leading-8 mb-8">
                {service.description}
              </p>

              {/* Features - pushes to bottom if needed */}
              <ul className="space-y-4 mt-auto">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <Check size={18} className="text-green-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Second Row - 1 Card (same width as first row cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            {secondRowServices.map((service, index) => (
              <div
                key={index}
                className="bg-[#081225]/90 border border-green-500/20 rounded-3xl p-8 hover:border-green-400/40 hover:shadow-[0_0_40px_rgba(34,197,94,0.15)] transition duration-300 h-full flex flex-col"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 mb-8">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold mb-5">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-400 text-lg leading-8 mb-8">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-4 mt-auto">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <Check size={18} className="text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}