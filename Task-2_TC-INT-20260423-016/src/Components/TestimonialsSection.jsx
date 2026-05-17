import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Khan",
    role: "CEO, RetailHub",
    initials: "AK",
    review:
      "Teyzix Core transformed our outdated platform into a blazing-fast product. Attention to detail and communication were outstanding throughout.",
  },
  {
    name: "Sara Malik",
    role: "Product Lead, Fintech Startup",
    initials: "SM",
    review:
      "The mobile app they built increased our user retention by 40%. Professional team, clean code, and delivered ahead of schedule.",
  },
  {
    name: "Rahul Joshi",
    role: "Founder, EduLearn",
    initials: "RJ",
    review:
      "Exceptional UI/UX work. They understood our brand vision immediately and executed it with creativity we did not expect. Highly recommend.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#020817] py-20 px-4 sm:px-6 lg:px-8">
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full border border-green-500/20" />
        <div className="absolute top-20 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full border border-green-500/10" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        
        <div className="text-center mb-16 cursor-pointer">
          <p className="text-[#00ff66] uppercase tracking-[4px] text-sm font-semibold mb-4">
            Client Stories
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            What Our{" "}
            <span className="text-[#00ff66]">Clients Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group bg-[#081225] border border-green-500/20 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-green-500/40 hover:shadow-[0_0_30px_rgba(0,255,102,0.12)] cursor-pointer"
            >
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-[#00ff66] text-[#00ff66] transition group-hover:scale-110"
                  />
                ))}
              </div>

              <div className="text-[#00ff66] text-5xl leading-none mb-4">
                "
              </div>

              <p className="text-gray-400 text-base leading-8 mb-10 group-hover:text-gray-300 transition">
                {item.review}
              </p>

              <div className="flex items-center gap-4">
                
                <div className="w-14 h-14 rounded-full bg-[#00cc55] flex items-center justify-center text-black font-bold text-lg cursor-pointer group-hover:scale-110 transition">
                  {item.initials}
                </div>

                <div>
                  <h4 className="text-white font-bold text-lg">
                    {item.name}
                  </h4>

                  <p className="text-gray-500 text-sm group-hover:text-gray-400 transition">
                    {item.role}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;