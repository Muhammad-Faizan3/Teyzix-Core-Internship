import { useState } from "react";
import Logo from "../assets/logo.png";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full h-[10vh] flex items-center justify-between px-4 sticky top-0 ">
      
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="w-10" />
        <h1 className="font-bold text-green-800 font-mono text-lg">
          TEYZIX CORE
        </h1>
      </div>

      <nav className="hidden md:flex">
        <ul className="flex items-center gap-6">
          {["Home", "About", "Services", "Portfolio", "Contact"].map(
            (item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="text-gray-500 hover:text-green-800 hover:underline"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>

      <button className="hidden md:block bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
        Get in Touch
      </button>


      <div
        className="md:hidden text-3xl cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? "✖" : "☰"}
      </div>

      {open && (
        <div className="absolute top-[10vh] left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center gap-4 py-4">
            {["Home", "About", "Services", "Portfolio", "Contact"].map(
              (item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-green-800"
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
            <button className="bg-green-700 text-white px-4 py-2 rounded">
              Get in Touch
            </button>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;