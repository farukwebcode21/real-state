import { assets } from "../assets/assets";
const Navbar = () => {
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
      </div>
    </div>
  );
};

export default Navbar;
