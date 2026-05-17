import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.png";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full h-[10vh] bg-[#020817] flex items-center justify-between px-6 md:px-8 sticky top-0 z-50 border-b border-green-500/10">
      
      <div className="flex items-center gap-2 cursor-pointer">
        <img src={Logo} alt="logo" className="w-9 md:w-10" />

        <h1 className="text-green-500 font-bold text-lg md:text-xl hover:scale-105 transition">
          TEYZIX CORE
        </h1>
      </div>

      <nav className="hidden md:block">
        <ul className="flex items-center gap-8 text-gray-300">
          
          <li>
            <Link to="/" className="hover:text-green-500 transition cursor-pointer">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-green-500 transition cursor-pointer">
              About
            </Link>
          </li>

          <li>
            <Link to="/services" className="hover:text-green-500 transition cursor-pointer">
              Services
            </Link>
          </li>

          <li>
            <Link to="/portfolio" className="hover:text-green-500 transition cursor-pointer">
              Portfolio
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-green-500 transition cursor-pointer">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <button className="hidden md:block bg-green-500 hover:bg-green-400 px-5 py-2 rounded-lg text-black font-semibold transition cursor-pointer">
        Get in Touch
      </button>

      <div
        className="md:hidden text-white cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={30} /> : <Menu size={30} />}
      </div>

      <div
        className={`absolute top-[10vh] left-0 w-full bg-[#071224] border-t border-green-500/10 md:hidden transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-8 text-gray-300">
          
          <li>
            <Link to="/" onClick={() => setOpen(false)} className="hover:text-green-500 transition cursor-pointer">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" onClick={() => setOpen(false)} className="hover:text-green-500 transition cursor-pointer">
              About
            </Link>
          </li>

          <li>
            <Link to="/services" onClick={() => setOpen(false)} className="hover:text-green-500 transition cursor-pointer">
              Services
            </Link>
          </li>

          <li>
            <Link to="/portfolio" onClick={() => setOpen(false)} className="hover:text-green-500 transition cursor-pointer">
              Portfolio
            </Link>
          </li>

          <li>
            <Link to="/contact" onClick={() => setOpen(false)} className="hover:text-green-500 transition cursor-pointer">
              Contact
            </Link>
          </li>

          <button className="bg-green-500 hover:bg-green-400 px-6 py-3 rounded-lg text-black font-semibold transition cursor-pointer">
            Get in Touch
          </button>
        </ul>
      </div>
    </header>
  );
}

export default Header;