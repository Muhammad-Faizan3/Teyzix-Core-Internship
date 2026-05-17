import React from "react";
import {
  Trophy,
  Lightbulb,
  Handshake,
  Sprout,
  Search,
} from "lucide-react";

const values = [
  {
    icon: Trophy,
    title: "Excellence in Execution",
    description:
      "We hold ourselves to the highest standard — clean code, refined design, and reliable delivery on every project.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We stay ahead of the curve, constantly applying the latest technologies that genuinely benefit our clients.",
  },
  {
    icon: Handshake,
    title: "Client Partnership",
    description:
      "We treat every client relationship as a long-term partnership — not just a transaction.",
  },
  {
    icon: Sprout,
    title: "Continuous Growth",
    description:
      "We grow with our clients, evolving our capabilities to match their expanding ambitions.",
  },
  {
    icon: Search,
    title: "Radical Transparency",
    description:
      "Honest communication, clear timelines, and no surprises — ever.",
  },
];

const ValuesSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#020817] py-24 px-4 sm:px-6 lg:px-8">
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full border border-green-500/10" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        
        <div className="text-center mb-20 cursor-pointer">
          <p className="text-[#00ff66] uppercase tracking-[4px] text-sm font-semibold mb-5">
            Our Values
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            What We Stand{" "}
            <span className="text-[#00ff66]">For</span>
          </h2>
        </div>

        <div className="space-y-8">
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group flex flex-col sm:flex-row items-start gap-5 p-4 rounded-2xl transition-all duration-300 hover:bg-[#061428]/40 hover:translate-x-1 cursor-pointer"
              >
                
                <div className="w-14 h-14 min-w-[56px] rounded-2xl bg-[#062032] border border-green-500/20 flex items-center justify-center group-hover:border-green-500/40 group-hover:scale-110 transition-all duration-300">
                  <Icon size={26} className="text-[#00ff66]" />
                </div>

                <div>
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-2 group-hover:text-[#00ff66] transition">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-base sm:text-lg leading-8 group-hover:text-gray-300 transition">
                    {item.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;