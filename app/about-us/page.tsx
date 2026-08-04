import Image from "next/image";
import Link from "next/link";
import Button from "../components/button";

const featuredEvents = [
  { label: "The Experience 2008 till date", slug: "the-experience" },
  { label: "TAPE 2026", slug: "tape-2026" },
  { label: "Navy 70th Anniversary", slug: "navy-70th-anniversary" },
  { label: "DAVIDO 5IVE TOUR", slug: "davido-5ive-tour" },
  { label: "AFRIMA Awards", slug: "afrima-awards" },
  { label: "GTCO Food and Drink Festival", slug: "gtco-food-and-drink-festival" },
  { label: "Unusual Praise", slug: "unusual-praise" },
  { label: "Vodun Days Cotonou 2025", slug: "vodun-days-cotonou-2025" },
  { label: "REMA HEIS TOUR LAGOS", slug: "rema-heis-tour-lagos" },
  { label: "Lagos Countdown", slug: "lagos-countdown" },
  { label: "Future Fest : Wizkid", slug: "future-fest-wizkid" },
  { label: "Detty Dec Fest", slug: "detty-dec-fest" },
  { label: "Nigerian Idol", slug: "nigerian-idol" },
  { label: "Livespot X Festival 2019 : CARDI B", slug: "livespot-x-festival-2019-cardi-b" },
];

const AboutUs = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-start py-12 mt-28 mx-6 md:py-32 md:mx-36 max-w-6xl">
        <h3 className="font-primary font-head uppercase text-4xl md:text-7xl max-w-4xl font-semibold text-white">
          The Engine Behind Every Stage
        </h3>
        <div className="flex flex-col gap-6 font-primary font-desktop-body md:text-2xl text-base text-white mt-6 md:mt-12">
          <p>
            Founded in 2003 by Cyril Atie Utomoibor, Cytech World Communication
            has grown into one of the most trusted names in event production.
            With decades of hands-on experience, we have built our reputation by
            supporting productions that demand reliability, technical knowledge,
            and a team that understands the pressure behind every stage.
          </p>
          <p>
            Our work is powered by high-grade production equipment sourced from
            trusted global manufacturers and operated by an experienced
            technical crew. From screens and lighting to sound, staging,
            effects, and full production support, every setup is handled with
            the level of quality required to deliver a smooth and well-built
            event experience.
          </p>
          <p>
            Over the years, Cytech has become the name behind many of the events
            people remember. Our work has powered major productions including:
          </p>
        </div>
        <div className="flex flex-col gap-6 font-primary font-headings md:text-2xl text-base text-white mt-6 md:mt-12">
          {featuredEvents.map((event) => (
            <Link
              key={event.slug}
              href={`/portfolio#${event.slug}`}
              className="w-fit transition duration-300 hover:text-primary"
            >
              {event.label}
            </Link>
          ))}
        </div>
        <p className="font-primary font-desktop-body md:text-2xl text-base text-white mt-6 md:mt-12">
          And several major government, cultural, faith-based, and entertainment
          productions, our work continues to stand where the biggest moments
          happen.
        </p>
        <div className="flex flex-col gap-8">
          <p className="font-primary font-header-wide font-black uppercase md:text-[40px] text-2xl text-white mt-6 md:mt-12">
            Our Brand Ecosystem
          </p>
          <div className="flex flex-col gap-3 font-primary font-desktop-body md:text-2xl text-base text-white">
            <p>
              We continue to expand beyond event production through brands built
              to serve the future of entertainment.
            </p>
            <p>
              Introducing,{" "}
              <span className="font-black font-display uppercase">
                Afrorevive
              </span>{" "}
              operates as a subsidiary of Cytech, focused on concert screen
              rentals and event ticketing, creator tools, vendor access, and
              digital event management.
            </p>
            <Image
              src="/logos/trusted-partners/afrorevive.png"
              alt="Afrorevive"
              width={853}
              height={466}
              loading="eager"
              className="h-20 w-fit"
            />
          </div>
        </div>
      </div>
      <div className="py-10 bg-[#ACACAC] md:py-14">
        <div className="mx-6 flex flex-col max-w-5xl gap-6 md:mx-36 md:gap-10">
          <h3 className="font-primary font-headings text-2xl uppercase text-white md:text-3xl">
            Explore our Portfolio
          </h3>
          <p className="font-primary font-body-wide text-base text-white md:text-2xl">
            Our portfolio shows the scale, detail, and consistency behind the
            productions we power. Explore our past projects and see how Cytech
            World Communication brings major event experiences to life.
          </p>
          <Button href="/portfolio">Portfolio</Button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
