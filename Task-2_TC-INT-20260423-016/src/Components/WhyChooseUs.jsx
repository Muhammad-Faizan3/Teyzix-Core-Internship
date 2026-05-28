import React from "react";
import {
  Zap,
  Lock,
  TrendingUp,
  Handshake,
  Globe,
  Wrench,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Zap size={38} />,
      title: "Fast Turnaround",
      description: "Agile cycles that deliver quality results without delay.",
    },
    {
      icon: <Lock size={38} />,
      title: "Secure by Default",
      description: "Security best practices baked into every line of code.",
    },
    {
      icon: <TrendingUp size={38} />,
      title: "Growth Focused",
      description: "Every decision is made with your growth as the north star.",
    },
    {
      icon: <Handshake size={38} />,
      title: "True Partnership",
      description: "Transparent communication and collaboration from day one.",
    },
    {
      icon: <Globe size={38} />,
      title: "Global Standards",
      description: "International-grade solutions with local understanding.",
    },
    {
      icon: <Wrench size={38} />,
      title: "Post-Launch Support",
      description: "We stay with you after launch — updates, fixes, scaling.",
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#020817] overflow-hidden text-white py-28 px-6">
      
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-green-500/10 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        <div className="text-center mb-24 cursor-pointer">
          <p className="text-green-400 uppercase tracking-[5px] text-sm font-semibold mb-5">
            Why Teyzix Core
          </p>

          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Built Different.{" "}
            <span className="text-green-400">Deliver Better.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-[#071224]/90 border border-green-500/20 rounded-2xl p-6 w-full h-auto min-h-[280px] flex flex-col items-start text-left cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-green-400/40 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]"
            >
              
              <div className="w-[65px] h-[65px] rounded-[18px] bg-green-500/10 flex items-center justify-center text-green-400 mb-6 transition group-hover:scale-110">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition">
                {item.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}