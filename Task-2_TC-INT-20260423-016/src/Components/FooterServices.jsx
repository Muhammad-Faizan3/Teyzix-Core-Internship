import { Link } from "react-router-dom";

export default function FooterServices() {
  return (
    <footer className="relative overflow-hidden bg-[#050816] text-white">
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full border border-emerald-500/20"></div>
        <div className="absolute left-1/2 top-10 h-[550px] w-[550px] -translate-x-1/2 rounded-full border border-emerald-500/10"></div>
        <div className="absolute left-1/2 top-20 h-[400px] w-[400px] -translate-x-1/2 rounded-full border border-emerald-500/10"></div>
      </div>

      <div className="relative z-10 border-b border-emerald-500/20 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          
          <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Have a Project in{" "}
            <span className="text-emerald-400">Mind?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-400 sm:text-lg">
            Tell us about it — we'll build a solution tailored exactly to your needs.
          </p>

          <button className="mt-10 rounded-xl bg-emerald-400 px-8 py-4 text-lg font-semibold text-black shadow-[0_0_30px_rgba(0,255,150,0.5)] transition-all duration-300 hover:scale-105 hover:bg-emerald-300 cursor-pointer">
            Get a Free Quote
          </button>
        </div>
      </div>

      <div className="relative z-10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          <div>
            <h2 className="text-3xl font-extrabold text-emerald-400 cursor-pointer">
              TEYZIX
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              A modern tech studio building scalable, high-performance digital solutions for businesses worldwide.
            </p>

            <p className="mt-6 text-slate-300 cursor-pointer hover:text-emerald-400 transition">
              📩 contact@teyzixcore.com
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold uppercase tracking-wider text-white">
              Company
            </h3>

            <ul className="space-y-4 text-slate-400">
              <li>
                <Link to="/" className="transition hover:text-emerald-400 cursor-pointer">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="transition hover:text-emerald-400 cursor-pointer">
                  About
                </Link>
              </li>

              <li>
                <Link to="/portfolio" className="transition hover:text-emerald-400 cursor-pointer">
                  Portfolio
                </Link>
              </li>

              <li>
                <Link to="/contact" className="transition hover:text-emerald-400 cursor-pointer">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold uppercase tracking-wider text-white">
              Services
            </h3>

            <ul className="space-y-4 text-slate-400">
              <li className="hover:text-emerald-400 transition cursor-pointer">
                Web Development
              </li>

              <li className="hover:text-emerald-400 transition cursor-pointer">
                Mobile Apps
              </li>

              <li className="hover:text-emerald-400 transition cursor-pointer">
                UI/UX Design
              </li>

              <li className="hover:text-emerald-400 transition cursor-pointer">
                Custom Software
              </li>

              <li className="hover:text-emerald-400 transition cursor-pointer">
                Graphic Design
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold uppercase tracking-wider text-white">
              Connect
            </h3>

            <ul className="space-y-4 text-slate-400">
              <li className="hover:text-emerald-400 transition cursor-pointer">
                LinkedIn
              </li>

              <li className="hover:text-emerald-400 transition cursor-pointer">
                Instagram
              </li>

              <li className="hover:text-emerald-400 transition cursor-pointer">
                Threads
              </li>

              <li className="hover:text-emerald-400 transition cursor-pointer">
                Facebook
              </li>

              <li className="hover:text-emerald-400 transition cursor-pointer">
                WhatsApp
              </li>
            </ul>
          </div>

        </div>

        <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-emerald-500/20 pt-8 text-sm text-slate-500 md:flex-row">
          
          <p>
            © 2025 Teyzix Core. All rights reserved. — Core of Innovation.
          </p>

          <div className="flex items-center gap-6">
            <span className="cursor-pointer hover:text-emerald-400 transition">
              LinkedIn
            </span>

            <span className="cursor-pointer hover:text-emerald-400 transition">
              Instagram
            </span>

            <span className="cursor-pointer hover:text-emerald-400 transition">
              Facebook
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}