import React from "react";
import Logo from "../assets/logo.png";

export default function MainSection() {
  return (
    <div className="w-full min-h-screen bg-[#020817] text-white overflow-hidden relative">
      
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-green-500/20 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 flex flex-col lg:flex-row items-center justify-between gap-10">
        
        <div className="max-w-2xl">
          
          <div className="inline-flex items-center gap-2 border border-green-500/30 bg-green-500/10 px-5 py-2 rounded-full text-green-400 text-sm font-semibold mb-8 cursor-pointer hover:scale-105 transition">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            CORE OF INNOVATION
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            We Build{" "}
            <span className="text-green-400">Digital Solutions</span>{" "}
            That Drive Growth
          </h1>

          <p className="text-gray-400 text-lg leading-9 mt-8 max-w-xl">
            Teyzix Core is a modern tech studio crafting scalable,
            high-performance web apps, mobile solutions, and custom software for businesses worldwide.
          </p>

          <div className="flex gap-5 mt-10 flex-wrap">
            
            <button className="bg-green-500 hover:bg-green-400 text-black font-semibold px-8 py-4 rounded-xl shadow-[0_0_25px_rgba(34,197,94,0.5)] transition cursor-pointer">
              Start a Project
            </button>

            <button className="border border-green-500/30 hover:bg-green-500/10 px-8 py-4 rounded-xl font-semibold transition cursor-pointer">
              View Our Work
            </button>
          </div>
        </div>

        <div className="relative flex items-center justify-center cursor-pointer">
          
          <div className="absolute w-[500px] h-[500px] bg-green-500/20 blur-[120px] rounded-full"></div>

          <div className="absolute w-[450px] h-[450px] border border-green-500/20 rounded-full"></div>

          <div className="relative text-center hover:scale-105 transition duration-300">
            <img src={Logo} alt="logo" className="mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}