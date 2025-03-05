import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../public/logo2.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-1 font-['Lexend_Tera']"
        >
          <Image src={logo} alt="logo" width={55} />
          <p className="text-2xl font-semibold space-x-2">
            <span className="text-green-800">Doctor</span>
            <span className="text-green-400">Care</span>
          </p>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-primary">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-primary">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-primary">
              Contact
            </Link>
          </li>
        </ul>

        {/* Sign Up & Login Buttons */}
        <div className="hidden md:flex space-x-2">
          <Link
            href="/login"
            className="px-4 py-2 border border-primary rounded-md bg-[#007E85] text-white border-none"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 bg-primary text-[#007E85] rounded-md bg-transparent border-none"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-base-100 p-4 space-y-2 shadow-md">
          <li>
            <Link href="/" className="block" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="block"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
