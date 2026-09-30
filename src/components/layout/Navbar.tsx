"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { FiShoppingBag, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Creators", href: "/creators" },
  ];

  return (

    <header className="fixed top-0 left-0 z-50 w-full bg-transparent">
      <div className="container-app mx-auto flex h-20 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Logo variant="light" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[15px] font-medium text-white/90 transition hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/login"
            className="text-[15px] font-medium text-white/95 transition hover:text-white"
          >
            Sign In
          </Link>

          <Link
            href="/register"
            className="text-[15px] font-medium text-white/95 transition hover:text-white"
          >
            Join Us
          </Link>

          {/* Cart Icon */}
          <button type="button" className="relative flex items-center justify-center text-white text-xl transition hover:text-white/80">
            <FiShoppingBag />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
        type="button"
          className="flex items-center justify-center text-white text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-blue/95 backdrop-blur-lg md:hidden">
          <div className="container mx-auto flex flex-col gap-4 px-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4">
              <Link
                href="/login"
                className="text-base font-medium text-white py-1"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="text-base font-medium text-white py-1"
                onClick={() => setIsOpen(false)}
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
