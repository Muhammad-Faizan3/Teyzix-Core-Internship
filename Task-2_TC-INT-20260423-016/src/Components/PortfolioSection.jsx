import {
  FaShoppingCart,
  FaChartBar,
  FaGraduationCap,
  FaHospital,
  FaPalette,
  FaTruck,
} from "react-icons/fa";

export default function PortfolioSection() {
  const projects = [
    {
      title: "ShopEase E-Commerce",
      description: "Modern multi-vendor marketplace with Stripe payments.",
      tags: ["Next.js", "Node.js"],
      result: "3x increase in conversions",
      icon: <FaShoppingCart />,
      gradient: "from-green-900 to-green-700",
    },
    {
      title: "FinTrack Dashboard",
      description: "Real-time financial analytics SaaS dashboard.",
      tags: ["React", "Python"],
      result: "70% faster reporting",
      icon: <FaChartBar />,
      gradient: "from-blue-900 to-blue-700",
    },
    {
      title: "EduLearn App",
      description: "Cross-platform e-learning mobile application.",
      tags: ["React Native", "Firebase"],
      result: "10k+ active learners",
      icon: <FaGraduationCap />,
      gradient: "from-purple-900 to-purple-700",
    },
    {
      title: "MediBook HMS",
      description: "Hospital management and appointment platform.",
      tags: ["React", "Django"],
      result: "Used in 5 hospitals",
      icon: <FaHospital />,
      gradient: "from-yellow-900 to-yellow-700",
    },
    {
      title: "BrandForge Identity",
      description:
        "Complete brand identity system including logo, typography, color palette, and full marketing kit.",
      tags: ["Adobe Illustrator", "Figma", "Brand Strategy"],
      result: "✨ Client raised $500K seed round after rebrand",
      icon: <FaPalette />,
      gradient: "from-rose-900 to-rose-700",
    },
    {
      title: "LogiTrack Fleet App",
      description:
        "Real-time fleet management and delivery tracking with GPS, driver assignment, and reporting.",
      tags: ["Flutter", "Google Maps API", "Node.js"],
      result: "📦 40% reduction in delivery delays",
      icon: <FaTruck />,
      gradient: "from-orange-900 to-orange-700",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#050816] py-20 px-4 sm:px-6 lg:px-8 text-white">
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full border border-emerald-500/20"></div>
        <div className="absolute left-1/2 top-10 h-[550px] w-[550px] -translate-x-1/2 rounded-full border border-emerald-500/10"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-emerald-400">
            OUR WORK
          </p>

          <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Projects That{" "}
            <span className="text-emerald-400">Speak for Themselves</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg text-slate-400">
            A selection of solutions we've built worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-emerald-500/20 bg-[#081226]/90 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] cursor-pointer"
            >
              
              <div
                className={`flex h-36 items-center justify-center bg-gradient-to-br ${project.gradient}`}
              >
                <div className="text-5xl text-white">
                  {project.icon}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 cursor-pointer hover:bg-emerald-500/20 transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 border-t border-emerald-500/10 pt-4">
                  <p className="text-sm font-semibold text-emerald-400">
                    {project.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}