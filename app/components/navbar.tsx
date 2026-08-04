"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./button";

const navLinks = [
  { href: "/about-us", label: "About us" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-transparent backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-y-4 md:py-12 md:px-14 py-14 px-6 md:flex-nowrap">
        <Link href="/">
         <Image
          src="/logos/WHITE_LOGO.png"
          alt="Logo"
          width={853}
          height={466}
          loading="eager"
          className="order-1 h-16 w-auto"
        />
        </Link>
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
                  className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <div className="order-2 md:order-3">
          <Button href="/contact-us" variant="outline">
            Contact us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
