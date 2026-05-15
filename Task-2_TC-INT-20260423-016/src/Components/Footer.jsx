// App.jsx
export default function Footer() {
  return (
    <div className="bg-[#020617] text-white min-h-screen relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,120,0.08),transparent_60%)]"></div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center pt-28 pb-40 px-6 border-b border-green-500/20">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Ready to Build Something{" "}
          <span className="text-green-400">Great?</span>
        </h1>

        <p className="mt-6 text-gray-400 text-lg max-w-3xl">
          Let's discuss your project and turn your idea into a
          high-performance digital product.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-5">
          <button className="bg-green-400 hover:bg-green-500 text-black font-semibold px-10 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-green-500/20">
            Start a Project
          </button>

          <button className="border border-green-500/30 hover:border-green-400 hover:bg-green-500/10 px-10 py-4 rounded-xl font-semibold transition-all duration-300">
            WhatsApp Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-8 md:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14">
          {/* Logo + About */}
          <div>
            <div className="text-3xl font-extrabold text-green-400 leading-none">
              TEYIX
              <br />
              <span className="text-white">CORE</span>
            </div>

            <p className="text-gray-400 mt-6 leading-8">
              A modern tech studio building scalable, high-performance
              digital solutions for businesses worldwide.
            </p>

            <p className="mt-6 text-gray-300">
              📩 contact@teyzixcore.com
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-6 tracking-wide">
              COMPANY
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-green-400 cursor-pointer">
                Home
              </li>
              <li className="hover:text-green-400 cursor-pointer">
                About
              </li>
              <li className="hover:text-green-400 cursor-pointer">
                Portfolio
              </li>
              <li className="hover:text-green-400 cursor-pointer">
                Contact
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6 tracking-wide">
              SERVICES
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-green-400 cursor-pointer">
                Web Development
              </li>
              <li className="hover:text-green-400 cursor-pointer">
                Mobile Apps
              </li>
              <li className="hover:text-green-400 cursor-pointer">
                UI/UX Design
              </li>
              <li className="hover:text-green-400 cursor-pointer">
                Custom Software
              </li>
              <li className="hover:text-green-400 cursor-pointer">
                Graphic Design
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold text-lg mb-6 tracking-wide">
              CONNECT
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-green-400 cursor-pointer">
                LinkedIn
              </li>
              <li className="hover:text-green-400 cursor-pointer">
                Instagram
              </li>
              <li className="hover:text-green-400 cursor-pointer">
                Threads
              </li>
              <li className="hover:text-green-400 cursor-pointer">
                Facebook
              </li>
              <li className="hover:text-green-400 cursor-pointer">
                WhatsApp
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-500/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>
            © 2025 Teyzix Core. All rights reserved. — Core of
            Innovation.
          </p>

          <div className="flex gap-6 mt-5 md:mt-0">
            <span className="hover:text-green-400 cursor-pointer">
              LinkedIn
            </span>
            <span className="hover:text-green-400 cursor-pointer">
              Instagram
            </span>
            <span className="hover:text-green-400 cursor-pointer">
              Facebook
            </span>
          </div>
        </div>

        {/* Floating WhatsApp Button */}
        <button className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl shadow-green-500/30 transition-all">
          💬
        </button>
      </footer>
    </div>
  );
}