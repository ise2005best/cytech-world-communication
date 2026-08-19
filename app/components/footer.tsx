import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className="bg-[#141414] flex flex-row md:gap-10 gap-4 px-2 py-10 md:px-8">
        <div className="flex w-1/2 flex-col gap-5 border-r border-dashed border-[#474747] md:px-8 px-4 md:w-2/5">
          <Image
            src="/logos/WHITE_LOGO.png"
            alt="Logo"
            width={853}
            height={466}
            loading="eager"
            className="h-20 w-auto xl:h-64 lg:h-56 md:h-44 mix-blend-overlay"
          />
          <div className="flex flex-col gap-2 mt-6">
            <p className="font-tertiary capitalize text-sm font-light text-[#474747]">
              © 2026 cytech world communication,
            </p>
            <p className="font-tertiary capitalize text-sm font-light text-[#474747]">
              All Rights Reserved.
            </p>
          </div>

          <div className="mt-auto flex flex-row gap-5 pt-8">
            <a
              href="https://www.instagram.com/cytech.world?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="text-[#474747] transition duration-300"
                size={24}
              />
            </a>
            <a
              href="https://www.youtube.com/c/CytechWorldCommunication"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube
                className="text-[#474747] transition duration-300"
                size={24}
              />
            </a>
          </div>
        </div>
        <div className="flex w-1/2 md:flex-row flex-col gap-6 text-[#474747] md:w-3/5 xl:gap-16 md:gap-6">
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="font-secondary font-medium uppercase text-sm transition duration-300 hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/portfolio"
              className="font-secondary font-medium uppercase text-sm transition duration-300 hover:text-white"
            >
              Portfolio
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              href="/about-us"
              className="font-secondary font-medium uppercase text-sm transition duration-300 hover:text-white"
            >
              About
            </Link>
            <Link
              href="/services"
              className="font-secondary font-medium uppercase text-sm transition duration-300 hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/book-us"
              className="font-secondary font-medium uppercase text-sm transition duration-300 hover:text-white"
            >
              Book Us
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-secondary font-medium uppercase text-sm ">
              Contact Us
            </p>
            <Link
              href="tel:+2348023424402"
              className="font-secondary font-medium uppercase text-sm transition duration-300 hover:text-white"
            >
              +2348023424402
            </Link>
            <Link
              href="mailto:cytechsound@yahoo.com"
              className="font-secondary font-medium uppercase text-sm transition duration-300 hover:text-white"
            >
              cytechsound@yahoo.com
            </Link>
          </div>
           <div className="flex flex-col gap-3">
            <p className="font-secondary font-medium uppercase text-sm ">
             Main Office
            </p>
            <p
              className="font-secondary font-medium uppercase xl:max-w-5/6 text-sm "
            >
              23 Col. Asieluwe St, Ifako-Ijaiye, Lagos 101232, Lagos
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
