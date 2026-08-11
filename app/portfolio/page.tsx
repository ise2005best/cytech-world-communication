import Link from "next/link";
import Button from "../components/button";
import PortfolioCarousel from "../components/portfolio-carousel";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore selected productions powered by Cytech World Communication, from major stages to high-scale event experiences. Each project reflects the equipment, team, and technical execution behind our work.",
  alternates: {
    canonical: "/services",
  },
};
const Portfolio = () => {
  return (
    <div className="bg-[#1E1E1E]">
      <div className="relative h-[90vh] w-full overflow-hidden rounded-2xl">
        <div
          className="absolute inset-0 grayscale-50 opacity/60 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/cytech.world2.jpeg')" }}
        />
        <div className="pointer-events-none" />
        <div className="flex flex-col px-16 absolute bottom-1/4 left-0">
          <h1 className="md:text-7xl font-4xl font-headings uppercase  font-primary">
            Behind the stage
          </h1>
          <p className="font-primary md:text-2xl text-base font-body-wide text-white mt-6 md:mt-12">
            Explore selected productions powered by Cytech World Communication,
            from major stages to high-scale event experiences. Each project
            reflects the equipment, team, and technical execution behind our
            work.
          </p>
        </div>
      </div>
      <div className="lg:h-1 border-b border-gray-500 border-dashed lg:py-10 " />
      <div className="flex flex-col h-full justify-center items-start py-12 lg:mx-4  ">
        <PortfolioCarousel />
      </div>
       <div className="lg:h-1 border-b border-gray-500 border-dashed lg:py-10 " />
      <div className="py-12 mx-6 md:py-32 md:mx-36 max-w-6xl">
        <div className="flex flex-col gap-8">
          <p className="font-primary font-header-wide font-black uppercase md:text-[40px] text-2xl text-white ">
            Explore Our Warehouse Catalogue
          </p>
          <div className="flex flex-col gap-3 font-primary font-desktop-body md:text-2xl text-sm text-white">
            <p>
              Looking for specific production equipment? Access our full
              warehouse catalogue to view available sound, lighting, staging,
              screen, effects, and technical production equipment for your next
              event.
            </p>
          
          </div>
            <Link href="/" className="bg-white uppercase font-secondary md:text-sm text-xs py-2.5 px-2 rounded-4xl w-fit text-black">
              Access Catalogue
            </Link>
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

export default Portfolio;
