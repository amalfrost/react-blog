import { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { FaBlog, FaUser } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Blogs", icon: <FaBlog className="inline-block mr-2" />, path: "/blog" },
    { label: "About Me", icon: <FaUser className="inline-block mr-2" />, path: "/about" },
  ];

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-600 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo (Redirects to Home) */}
        <Link to="/" className="text-2xl font-bold cursor-pointer hover:text-gray-300 transition">
          Amal
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-8">
          {menuItems.map((item, index) => (
            <li key={index} className="relative group flex items-center">
              <Link
                to={item.path}
                className="cursor-pointer hover:text-gray-300 transition flex items-center"
              >
                {item.icon}
                {item.label}
              </Link>
              <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoMdClose className="cursor-pointer hover:text-white" /> : <RxHamburgerMenu className="cursor-pointer hover:text-white" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="sm:hidden mt-4 flex flex-col gap-3 pl-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="cursor-pointer hover:text-gray-300 transition flex items-center"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {item.icon}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
