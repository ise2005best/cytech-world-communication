import type { Metadata } from "next";
import Button from "../components/button";
import CatalogueRequestForm from "../components/catalogue-request-form";
import { X } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "From equipment distribution and installation to full production execution and live event operation — explore the technical systems and support Cytech World Communication brings to every event.",
  alternates: {
    canonical: "/services",
  },
};

const offerings = [
  "Technical Production Support",
  "Equipment Rental",
  "Equipment Distribution & Installation",
  "Full Production Execution",
  "Production Planning",
  "Live Event Operation",
  "Training & Technical Development",
];

const Services = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-start py-12 md:mt-28 mt-52 mx-6 md:py-32 md:mx-36 max-w-6xl xl:mx-auto">
        <h1 className="font-primary font-head uppercase text-[32px] md:text-7xl max-w-4xl font-semibold text-white">
          premium production
        </h1>
        <p className="font-primary font-desktop-body md:text-2xl text-sm text-white mt-6 md:mt-12">
          Cytech World Communication provides the technical systems, equipment,
          and production support required to deliver events with structure and
          control. Our work covers the planning, setup, operation, and delivery
          of live productions, ensuring every project is built around the right
          technical approach.
        </p>
        <div className="flex flex-col md:gap-10 gap-6 mt-6 md:mt-12">
          <h3 className="font-primary font-headings uppercase md:text-[40px] text-2xl text-white">
            Equipment Distribution & Installation
          </h3>
          <p className="font-primary font-desktop-body md:text-2xl text-sm text-white">
            As distributors of professional event equipment, we help clients
            source, purchase, and install systems from our trusted global
            partners. Whether you are building a venue, upgrading a church, or
            setting up a production space, Cytech can guide the entire process
            from order to installation.
          </p>
          <p className="font-primary font-desktop-body md:text-2xl text-sm text-white ">
            Our team handles installation, system integration, testing, and
            technical setup to ensure every component performs reliably and
            efficiently. From event centres and clubs to churches, studios, and
            corporate spaces, we deliver solutions built for your environment.
          </p>
          <Button href="contact-us" variant="dark">
            {" "}
            Contact Us
          </Button>
        </div>

        <div className="flex flex-col md:gap-10 gap-6 mt-16 md:mt-28">
          <h3 className="font-primary font-headings uppercase md:text-[40px] text-2xl text-white">
            What We Offer
          </h3>
          <div className="flex flex-col gap-4">
            {offerings.map((offering) => (
              <div key={offering} className="flex flex-row items-center gap-1">
                <X className="md:w-8 md:h-8 w-6 h-6"  />
                <p className="font-primary font-body-wider md:text-2xl text-base text-white">
                  {offering}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full flex-col md:gap-10 gap-6 mt-16 md:mt-28 items-center justify-center mx-auto">
          <p className="font-primary font-headings uppercase md:text-[40px] text-2xl text-white">
            warehouse catalogue
          </p>
          <p className="font-primary font-desktop-body md:text-2xl text-sm text-white max-w-4xl ">
            Fill in your details to access our full equipment catalogue. This
            helps us understand what you are looking for and recommend the right
            production support where needed.
          </p>
          <div className="w-full md:max-w-3xl xl:max-w-4xl">
            <CatalogueRequestForm />
          </div>
        </div>
      </div>
      <div className="py-10 bg-[#ACACAC] md:py-14">
        <div className="mx-6 flex flex-col max-w-5xl gap-6 md:mx-36 md:gap-10">
          <h3 className="font-primary font-headings text-2xl uppercase text-white md:text-3xl">
            Work With Us
          </h3>
          <p className="font-primary font-body-wide text-base text-white md:text-2xl">
            Cytech World Communication provides the experience, quality, and
            reliable support needed to bring your event to life. Power your next
            event with seamless execution and premium event solutions.
          </p>
          <Button href="/contact-us">Contact Us</Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
