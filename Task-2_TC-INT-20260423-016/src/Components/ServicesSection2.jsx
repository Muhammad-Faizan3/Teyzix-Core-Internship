export default function ServicesSection2() {
  const services = [
    {
      title: "Web Development",
      description:
        "We build modern, lightning-fast websites and web applications. Every project is built for performance, SEO, and conversions — not just aesthetics.",
      tags: ["Next.js", "React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      features: [
        "E-commerce Platforms",
        "SaaS Dashboards",
        "Landing Pages",
        "Corporate Websites",
        "Web Portals",
        "REST APIs",
      ],
      icon: "🌐",
    },
    {
      title: "UI/UX Design",
      description:
        "Clean, modern, and conversion-focused interfaces designed to improve user experience and business growth.",
      tags: ["Figma", "UI Design", "UX Research", "Wireframes", "Prototyping"],
      features: [
        "Mobile Apps",
        "Web Apps",
        "Design Systems",
        "User Flows",
        "Dashboards",
        "Landing Pages",
      ],
      icon: "🎨",
    },
    {
      title: "Mobile Development",
      description:
        "High-performance mobile applications for Android and iOS with seamless user experiences.",
      tags: ["React Native", "Expo", "Firebase", "Android", "iOS"],
      features: [
        "Cross Platform",
        "App Store Deploy",
        "Authentication",
        "Push Notifications",
        "API Integration",
        "Realtime Apps",
      ],
      icon: "📱",
    },
    {
      title: "Digital Marketing",
      description:
        "Data-driven digital marketing strategies to increase traffic, leads, and brand visibility.",
      tags: ["SEO", "Google Ads", "Analytics", "Social Media", "Content"],
      features: [
        "SEO Optimization",
        "Paid Campaigns",
        "Social Growth",
        "Email Marketing",
        "Brand Strategy",
        "Lead Generation",
      ],
      icon: "🚀",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#050816] py-20 px-4 sm:px-6 lg:px-8 text-white">
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full border border-emerald-500/20"></div>
        <div className="absolute left-1/2 top-10 h-[550px] w-[550px] -translate-x-1/2 rounded-full border border-emerald-500/10"></div>
        <div className="absolute left-1/2 top-20 h-[400px] w-[400px] -translate-x-1/2 rounded-full border border-emerald-500/10"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        
        <div className="mb-16 text-center cursor-pointer">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-emerald-400">
            OUR SERVICES
          </p>

          <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Everything You Need to{" "}
            <span className="text-emerald-400">Dominate Digitally</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg text-slate-400">
            Full-stack digital services engineered for performance, scalability, and real business outcomes.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-emerald-500/20 bg-[#081226]/90 p-6 sm:p-8 shadow-[0_0_40px_rgba(0,255,150,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] cursor-pointer"
            >
              
              <div className="flex flex-col sm:flex-row items-start gap-5">
                
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-cyan-500 text-3xl shadow-lg shadow-cyan-500/30 cursor-pointer hover:scale-105 transition">
                  {service.icon}
                </div>

                <div className="w-full">
                  
                  <h3 className="text-2xl font-bold text-white cursor-pointer">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
                    {service.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400 ring-1 ring-emerald-500/20 cursor-pointer hover:bg-emerald-500/20 transition"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {service.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-slate-300 cursor-pointer hover:text-emerald-400 transition"
                      >
                        <div className="h-2 w-2 rounded-full bg-emerald-400"></div>

                        <span className="text-sm sm:text-base">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}