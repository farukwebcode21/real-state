import { useState } from "react";
import { assets } from "../assets/assets";
import { useEffect } from "react";
const Navbar = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (active) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [active]);
  return (
    <div className="absolute top-0 left-0 z-10 w-full">
      <div className="container flex items-center justify-between px-6 py-4 mx-auto bg-transparent md:px-20 lg:px-32">
        <img src={assets.logo} alt="Logo" />
        <ul className="hidden text-white md:flex gap-7">
          <a className=" hover:text-gray-400" href="#home">
            Home
          </a>
          <a className="hover:text-gray-400" href="#about">
            About
          </a>
          <a className="hover:text-gray-400" href="#project">
            Project
          </a>
          <a className="hover:text-gray-400" href="#testimonails">
            Testimonails
          </a>
        </ul>
        <button className="hidden px-8 py-2 bg-white rounded-full md:block">
          Sign up
        </button>
        <img
          onClick={() => setActive(true)}
          src={assets.menu_icon}
          alt="meuicon"
          className="md:hidden w-7"
        />
      </div>
      {/* Mobile Menu */}
      <div
        className={` top-0 bottom-0 right-0 w-full overflow-hidden transition-all bg-gray-500 md:hidden ${
          active ? "fixed w-full" : "h-0 w-0"
        }`}
      >
        <div className="flex justify-end p-6 ursor-pointer t">
          <img
            onClick={() => setActive(false)}
            src={assets.cross_icon}
            alt="cross icon"
            className="w-6"
          />
        </div>
        <ul className="flex flex-col items-center gap-2 px-5 mt-5 text-lg font-medium">
          <a
            onClick={() => setActive(false)}
            href="#header"
            className="inline-block px-4 py-2 rounded-full"
          >
            Home
          </a>
          <a
            onClick={() => setActive(false)}
            href="#about"
            className="inline-block px-4 py-2 rounded-full"
          >
            About
          </a>
          <a
            onClick={() => setActive(false)}
            href="#project"
            className="inline-block px-4 py-2 rounded-full"
          >
            Project
          </a>
          <a
            onClick={() => setActive(false)}
            href="#testimonalis"
            className="inline-block px-4 py-2 rounded-full"
          >
            Testimonails
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
