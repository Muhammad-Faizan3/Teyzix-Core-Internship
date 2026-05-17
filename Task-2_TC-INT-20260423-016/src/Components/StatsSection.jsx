import React from "react";

const stats = [
  { number: "50+", label: "PROJECTS DELIVERED" },
  { number: "30+", label: "HAPPY CLIENTS" },
  { number: "5+", label: "YEARS EXPERIENCE" },
  { number: "98%", label: "CLIENT SATISFACTION" },
];

const StatsSection = () => {
  return (
    <section className="w-full bg-black py-16">
      <div className="max-w-7xl mx-auto border border-cyan-900">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center py-14 px-6 bg-[#061326] border-b sm:border-b-0 lg:border-r border-cyan-900 last:border-r-0 cursor-pointer transition duration-300 hover:bg-[#081a33] hover:scale-[1.02]"
            >
              
              <h2 className="text-[#00ff66] text-5xl md:text-6xl font-extrabold transition duration-300 group-hover:scale-110">
                {item.number}
              </h2>

              <p className="mt-5 text-gray-400 tracking-widest text-sm md:text-base text-center group-hover:text-gray-300 transition">
                {item.label}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;