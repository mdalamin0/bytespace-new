import React from "react";
import Link from "next/link";
import Logo from "../ui/Logo";
import Button from "../ui/Button";

export default function Footer() {
  const column1 = [
    { name: "Featured Courses", href: "/courses" },
    { name: "Featured Categories", href: "/categories" },
    { name: "Business", href: "/courses/business" },
    { name: "IT", href: "/courses/it" },
    { name: "Design", href: "/courses/design" },
  ];

  const column2 = [
    { name: "Development", href: "/courses/development" },
    { name: "Marketing", href: "/courses/marketing" },
    { name: "Photography", href: "/courses/photography" },
    { name: "Finance", href: "/courses/finance" },
    { name: "Sport", href: "/courses/sport" },
  ];

  const column3 = [
    { name: "Become a Creator", href: "/register" },
    { name: "Affiliate Program", href: "/affiliate" },
    { name: "Contact", href: "/contact" },
    { name: "Help", href: "/help" },
    { name: "About", href: "/about" },
  ];

  return (
    <footer className="w-full bg-white border-t border-gray-100 px-4 pt-16 pb-8 sm:px-6">
      <div className="container-app mx-auto ">
        <div className="grid grid-cols-1 items-start gap-12 pb-16 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col text-left lg:col-span-5">
            <Logo variant="dark" />

            <p className="mt-6 text-sm text-[#666666] max-w-[360px]">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <div className="mt-8 flex w-full max-w-[420px] items-center gap-3">
              <div className="flex flex-1 items-center rounded-full bg-white border border-gray-200 p-3 shadow-xs">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent px-2 text-sm text-gray-800 placeholder-gray-400 outline-none"
                />
              </div>

              <Button variant="primary">Subscribe</Button>
            </div>

            <p className="mt-6 text-[11px] leading-[1.6] text-[#8C8C8C] max-w-[360px]">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 text-left lg:col-span-7 lg:pl-12">
            <div className="flex flex-col gap-4">
              {column1.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="text-sm font-medium text-[#171717] hover:text-blue transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              {column2.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="text-sm font-medium text-[#171717] hover:text-blue transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              {column3.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="text-sm font-medium text-[#171717] hover:text-blue transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-gray-100 pt-8 sm:flex-row sm:items-center sm:justify-between text-xs font-medium text-[#666666]">
          <span className="text-left">
            © 2023 ByteSpace. All rights reserved.
          </span>

          <div className="flex items-center gap-6 justify-start sm:justify-end">
            <Link
              href="/privacy"
              className="hover:text-blue transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-blue transition-colors duration-200"
            >
              Terms of Service
            </Link>
            <button className="hover:text-blue transition-colors duration-200 cursor-pointer">
              Cookies Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
