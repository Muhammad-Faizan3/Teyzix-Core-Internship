import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-[#020617] text-white relative overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,120,0.08),transparent_60%)]"></div>

      <section className="relative z-10 flex flex-col items-center justify-center text-center pt-28 pb-40 px-6 border-b border-green-500/20">
        
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Ready to Build Something{" "}
          <span className="text-green-400">Great?</span>
        </h1>

        <p className="mt-6 text-gray-400 text-lg max-w-3xl">
          Let's discuss your project and turn your idea into a high-performance digital product.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-5">
          
          <Link to="/contact">
            <button className="bg-green-400 hover:bg-green-500 text-black font-semibold px-10 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-green-500/20 cursor-pointer">
              Start a Project
            </button>
          </Link>

          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noreferrer"
          >
            <button className="border border-green-500/30 hover:border-green-400 hover:bg-green-500/10 px-10 py-4 rounded-xl font-semibold transition-all duration-300 cursor-pointer">
              WhatsApp Us
            </button>
          </a>
        </div>
      </section>

      <footer className="relative z-10 px-8 md:px-20 py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14">
          
          <div className="cursor-pointer">
            <div className="text-3xl font-extrabold text-green-400 leading-none hover:scale-105 transition">
              TEYZIX
              <br />
              <span className="text-white">CORE</span>
            </div>

            <p className="text-gray-400 mt-6 leading-8">
              A modern tech studio building scalable, high-performance digital solutions.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">
              COMPANY
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>
                <Link to="/" className="hover:text-green-400 cursor-pointer transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-green-400 cursor-pointer transition">
                  About
                </Link>
              </li>

              <li>
                <Link to="/services" className="hover:text-green-400 cursor-pointer transition">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/portfolio" className="hover:text-green-400 cursor-pointer transition">
                  Portfolio
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-green-400 cursor-pointer transition">
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">
              SERVICES
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li className="cursor-pointer hover:text-green-400 transition">Web Development</li>
              <li className="cursor-pointer hover:text-green-400 transition">Mobile Apps</li>
              <li className="cursor-pointer hover:text-green-400 transition">UI/UX Design</li>
              <li className="cursor-pointer hover:text-green-400 transition">Custom Software</li>
              <li className="cursor-pointer hover:text-green-400 transition">Graphic Design</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">
              CONNECT
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li className="cursor-pointer hover:text-green-400 transition">LinkedIn</li>
              <li className="cursor-pointer hover:text-green-400 transition">Instagram</li>
              <li className="cursor-pointer hover:text-green-400 transition">Facebook</li>
              <li className="cursor-pointer hover:text-green-400 transition">WhatsApp</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-green-500/20 mt-16 pt-8 text-center text-gray-500">
          © 2025 Teyzix Core. All rights reserved.
        </div>
      </footer>
    </div>
  );
}