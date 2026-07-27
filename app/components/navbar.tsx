"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about-us", label: "About us" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-y-4 py-10 px-8 md:flex-nowrap">
        <Image
          src="/logos/WHITE_LOGO.png"
          alt="Logo"
          width={853}
          height={466}
          loading="eager"
          className="order-1 h-16 w-auto"
        />

        <div className="order-3 flex w-full items-center mt-4 md:mt-0 justify-center gap-10 md:order-2 md:w-auto md:justify-start">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-white font-primary text-sm font-wide-medium transition duration-300 hover:text-gray-300"
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-[#FF9500] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <div className="order-2 md:order-3">
          <button className="bg-[#1E1E1E]/20 border-gray-300 border uppercase text-white font-secondary text-sm py-2.5 px-5 rounded-4xl hover:bg-gray-200 transition duration-300">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
