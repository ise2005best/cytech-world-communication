import Carousel from "./components/carousel";
import Button from "./components/button";
import Image from "next/image";
import { FiDisc } from "react-icons/fi";
import { TbAtom } from "react-icons/tb";
import { PiSnowflakeThin, PiSwatchesThin } from "react-icons/pi";
import { VscBroadcast } from "react-icons/vsc";
import { LuSlidersHorizontal } from "react-icons/lu";
import { MdOutlineArrowOutward } from "react-icons/md";
import { X } from "lucide-react";
interface PremiumEquipment {
  heading: string;
  description: string;
  icon: React.ReactNode;
}

const trustedPartners = [
  { src: "/logos/trusted-partners/MA_.png", alt: "MA Lighting grandMA" },
  { src: "/logos/trusted-partners/afrorevive.png", alt: "Afrorevive" },
  { src: "/logos/trusted-partners/claypacky logo.png", alt: "Claypaky" },
  { src: "/logos/trusted-partners/fos logo.png", alt: "FOS Technologies" },
  { src: "/logos/trusted-partners/outline logo.png", alt: "Outline" },
  { src: "/logos/trusted-partners/smoke factory_.png", alt: "Smoke Factory" },
  { src: "/logos/trusted-partners/BOLINO.png", alt: "Bolino" },
  { src: "/logos/trusted-partners/LITECLOGO.png", alt: "Litec" },
  { src: "/logos/trusted-partners/BALTIC.png", alt: "Baltic" },
];

const premiumEquipments: PremiumEquipment[] = [
  {
    heading: "Backline Equipment",
    description:
      "We provide the essential performance gear needed for artists and musicians, with setups prepared to match the technical requirements of each production.",
    icon: <FiDisc className="w-24 h-24 md:w-48 md:h-48" />,
  },
  {
    heading: "Line Array Speakers",
    description:
      "Our line array systems are configured to deliver consistent audio coverage, ensuring the sound remains balanced and suitable for production.",
    icon: <VscBroadcast className="w-24 h-24 md:w-48 md:h-48" />,
  },
  {
    heading: "Stage Lighting Systems",
    description:
      "Our lighting systems are planned and operated to support visibility, mood, and stage direction throughout the event.",
    icon: <PiSwatchesThin className="w-24 h-24 md:w-48 md:h-48" />,
  },
  {
    heading: "Stage & Truss Structures",
    description:
      "We design and set up strong and professional stage structures built to support every production. ",
    icon: <TbAtom className="w-24 h-24 md:w-48 md:h-48" />,
  },
  {
    heading: "Digital Mixing Consoles",
    description:
      "Our digital consoles give the production team full control over audio levels, routing, and live sound management from setup to showtime.",
    icon: <LuSlidersHorizontal className="w-24 h-24 md:w-48 md:h-48" />,
  },
  {
    heading: "Stage Effects Equipment",
    description:
      "We provide controlled stage effects that add atmosphere and impact while keeping the production safe, coordinated, and well-timed.",
    icon: <PiSnowflakeThin className="w-24 h-24 md:w-48 md:h-48" />,
  },
];

export default function Home() {
  return (
    <div className="bg-[#0F0F0F]">
      <Carousel />
      <div className="flex flex-col justify-center items-start py-12 mx-6 md:py-32 md:mx-36">
        <div className="flex flex-col items-start gap-6 md:gap-12">
          <h3 className="font-primary font-head uppercase text-4xl md:text-7xl max-w-4xl font-semibold text-white ">
            Premium Event Solutions
          </h3>

          <Button href="/about" variant="outline">
            About us
          </Button>
          <div className="flex flex-col leading-8">
            <p className="font-primary font-body text-base md:text-2xl text-white max-w-5xl">
              Cytech World Communication creates premium event experiences
              through world-class production and reliable technical support.
            </p>
            <p className="font-primary font-body text-base md:text-2xl text-white max-w-5xl">
              Since 2003, we have built a strong presence in the industry,
              delivering high-quality event solutions backed by years of
              hands-on experience in live events.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center mx-6 gap-6 md:mb-24 mb-10 md:flex-row md:ml-12 md:mr-0">
        <div className="bg-[#F0EFEF] pl-6 pr-6 py-8 w-full flex flex-col gap-6 rounded-2xl max-w-2xl md:pl-12 md:pr-0 md:py-14 md:w-[40%]">
          <h4 className="font-primary font-subheadings text-2xl max-w-md uppercase text-black">
            Built for Every Scale of Event
          </h4>
          <p className="font-primary font-body-wider text-base max-w-md text-black">
            Cytech World Communication is built to power events with the right
            expertise, equipment, and execution. From concept to showtime, we
            create event experiences that feel seamless and professionally
            delivered!
          </p>
          <Button href="/portfolio">Portfolio</Button>
        </div>
        <div className="relative flex h-64 min-w-0 w-full flex-row gap-4 overflow-x-auto snap-x snap-mandatory md:h-auto md:w-auto md:flex-1">
          {[
            "/assets/cytech.world.jpg",
            "/assets/cytech.world2.jpeg",
            "/assets/cytech.world3.jpg",
            "/assets/cytech.world4.png",
          ].map((src) => (
            <div
              key={src}
              className="relative h-full w-[75%] shrink-0 snap-start"
            >
              <Image
                src={src}
                alt="Event Image"
                fill
                sizes="50vw"
                className="rounded-xl object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-start gap-6 py-10 bg-[#ACACAC] md:gap-10 md:py-14">
        <div className="flex flex-col mx-6 gap-6 md:mx-36">
          <h4 className="font-primary font-headings text-2xl uppercase text-white md:text-4xl">
            Trusted Global Partners
          </h4>
          <p className="font-primary font-body-wide text-base text-white md:text-2xl">
            Behind every great production is the standard of the equipment used.
            We work with globally recognized brands such as Outline, Claypaky,
            FOS Technologies, Smoke Factory, MA Lighting grandMA, and others to
            bring precision, power, and professional-grade performance to every
            stage we handle.
          </p>
        </div>

        <div className="flex w-full flex-row flex-nowrap items-center justify-start gap-6 overflow-x-auto px-6 md:justify-center md:gap-12 md:px-0">
          {trustedPartners.map((partner) => (
            <div
              key={partner.alt}
              className="flex h-28 shrink-0 items-center justify-center md:h-24 w-32"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={2160}
                height={270}
                className="md:h-fit h-full w-full object-contain "
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col mx-6 py-10 md:mt-20 mt-10 max-w-6xl gap-6 md:mx-36 md:py-14">
        <h3 className="font-primary font-headings text-2xl uppercase text-white md:text-[40px]">
          Equipment Distribution & Installation
        </h3>
        <p className="font-primary font-body-wide text-base text-white md:text-2xl">
          As distributors of professional event equipment, we help clients
          source, purchase, and install systems from our trusted global
          partners. Whether you are building a venue, upgrading a church, or
          setting up a production space, Cytech can guide the process from order
          to installation.
        </p>
        <Button href="/services">Services</Button>
      </div>

      <div className="md:mt-10  flex flex-col mx-6 py-10 max-w-6xl gap-6 md:mx-36 md:py-14">
        <h3 className="font-primary font-headings text-2xl uppercase text-white md:text-[40px]">
          Premium Equipments
        </h3>
        <p className="font-primary font-body-wide text-base text-white md:text-2xl">
          Cytech World Communication provides the technical systems, equipment,
          and production support required to deliver events with structure and
          control.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {premiumEquipments.map((equipment) => (
            <div
              key={equipment.heading}
              className="group flex w-full flex-col gap-4 bg-black rounded-xl px-3 py-10 transition duration-300 md:max-w-135"
            >
              <div className="flex flex-row items-center justify-between border-b border-dashed border-gray-500 pb-4">
                <div className="flex flex-row gap-1 items-center">
                  <X className="w-6 h-6 max-md:hidden text-white transition duration-300 group-hover:text-primary" />
                  <h4 className="font-primary font-subheadings md:text-2xl text-xl uppercase text-white transition duration-300 group-hover:text-primary">
                    {equipment.heading}
                  </h4>
                </div>

                <div className="flex md:h-5 md:w-5 w-7 h-7 shrink-0 items-center justify-center rounded-sm border border-white transition duration-300 group-hover:border-primary">
                  <MdOutlineArrowOutward className="md:w-4 md:h-4 w-6 h-6 text-white transition duration-300 group-hover:text-primary" />
                </div>
              </div>

              <p className="font-primary font-body md:text-xl text-base text-[#949494]">
                {equipment.description}
              </p>
              {/* <div className="text-white max-md:hidden transition flex justify-center items-center duration-300 group-hover:text-primary">
                {equipment.icon}
              </div> */}
            </div>
          ))}
        </div>
      </div>

      <div className="py-10 bg-[#ACACAC] md:py-14">
        <div className="mx-6 flex flex-col max-w-5xl gap-6 md:mx-36 md:gap-10">
          <h3 className="font-primary font-headings text-2xl uppercase text-white md:text-[40px]">
            Work With us
          </h3>
          <p className="font-primary font-body-wide text-base text-white md:text-2xl">
            Cytech World Communication provides the experience, quality, and
            reliable support needed to bring your event to life. Power your next
            event with seamless execution and premium event solutions.
          </p>
          <Button href="/contact-us">Contact us</Button>
        </div>
      </div>
    </div>
  );
}
