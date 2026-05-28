import React from "react";
import { Target, Telescope } from "lucide-react";
import Logo from "../assets/logo.png";

export default function AboutSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#020817] py-20 px-4 sm:px-6 lg:px-10 text-white">
      
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-green-500/10 blur-[140px] rounded-full -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        <div>
          
          <p className="text-green-400 uppercase tracking-[4px] text-sm font-semibold mb-5">
            About Us
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight mb-8">
            A Studio Built on{" "}
            <span className="text-green-400">Purpose</span>
          </h2>

          <p className="text-[#7c8aa5] text-base sm:text-lg leading-8 mb-8">
            Teyzix Core is a modern tech studio focused on building scalable,
            high-performance digital products that help businesses grow faster.
          </p>

          <p className="text-[#7c8aa5] text-base sm:text-lg leading-8 mb-12">
            We blend cutting-edge technology with modern design to create
            impactful software solutions trusted by startups and enterprises.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            
            <div className="bg-[#071224] border border-green-500/20 rounded-2xl p-6 hover:border-green-400/40 hover:scale-105 transition duration-300 cursor-pointer">
              
              <div className="flex items-center gap-3 mb-4">
                <Target size={26} className="text-green-400" />

                <h3 className="text-2xl font-bold text-green-400">
                  Mission
                </h3>
              </div>

              <p className="text-[#7c8aa5] text-[15px] leading-7">
                Empower businesses with scalable digital solutions that create
                measurable growth.
              </p>
            </div>

            <div className="bg-[#071224] border border-green-500/20 rounded-2xl p-6 hover:border-green-400/40 hover:scale-105 transition duration-300 cursor-pointer">
              
              <div className="flex items-center gap-3 mb-4">
                <Telescope size={26} className="text-green-400" />

                <h3 className="text-2xl font-bold text-green-400">
                  Vision
                </h3>
              </div>

              <p className="text-[#7c8aa5] text-[15px] leading-7">
                Become a globally trusted tech studio for innovative digital
                products.
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center mt-10 lg:mt-0">
          
          <div className="absolute w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] bg-green-500/20 blur-[100px] rounded-full" />

          <div className="absolute w-[320px] sm:w-[460px] h-[320px] sm:h-[460px] border border-green-500/10 rounded-full" />

          <div className="relative text-center cursor-pointer hover:scale-105 transition duration-300">
            <img src={Logo} alt="Logo" className="mx-auto" />
          </div>
        </div>

      </div>
    </section>
  );
}