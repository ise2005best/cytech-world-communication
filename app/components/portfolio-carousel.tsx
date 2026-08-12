"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PortfolioSlide = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

const slides: PortfolioSlide[] = [
  {
    src: "/assets/portfolio-images/davido_portfolio.png",
    alt: "Davido Five Tour",
    title: "Davido five Tour",
    description:
      "Cytech delivered full-scale production across five stops on the Nigerian leg of Davido's 5ive Alive Tour in 2025 — complete sound, stage, lighting, and screen builds in Enugu, Akwa Ibom, Abuja, and Ibadan, with console support extending to Yola. Spanning stadium venues from Michael Okpara Square to Eagle Square, the team managed rapid multi-city turnarounds while holding production quality steady at every stop. It's a clear showcase of Cytech's capacity to run large-format touring production across multiple markets without compromising on scale or precision.",
  },
  {
    src: "/assets/portfolio-images/navy_70th.png",
    alt: "NAVY 7OTH ANNIVERSARY",
    title: "NAVY 7OTH ANNIVERSARY",
    description:
      "The team delivered full-stack production — sound, stage and structure, lighting, and screens — for the International Fleet Review at Eko Atlantic Waterfront, the centrepiece event of the Nigerian Navy's 70th anniversary celebrations in 2026. Staged for a mixed indoor-outdoor audience that included President Bola Tinubu, naval chiefs, and international delegations alongside a fleet parade of vessels from Nigeria and partner nations, the event demanded state-occasion precision on a compressed build timeline. Cytech delivered the complete production stack on schedule, reinforcing the company's readiness to execute at the highest levels of national ceremony.",
  },
  {
    src: "/assets/carousel-images/vodun days benin.png",
    alt: "Vodun Days Benin",
    title: "Vodun Days 2025",
    description:
      "The team delivered the sound, stage, and lighting build for the beachfront concert stage at Vodun Days 2025 in Ouidah, Benin — the festival's flagship evening showcase for headline acts performing before Beninese and international audiences. The project meant full crossborder logistics, moving equipment and crew from Nigeria to execute an open-air coastal build to international festival standards. It stands as proof of Cytech's capacity to deliver world-class production beyond Nigeria's borders.",
  },
  {
    src: "/assets/carousel-images/rema_.png",
    alt: "Rema",
    title: "REMA HEIS TOUR 2024",
    description:
      "Cytech delivered the sound and stage build for Rema's HEIS show at Tafawa Balewa Square, Lagos — one of the most anticipated dates on the Afro-rave star's homecoming run. Playing to a sold-out, capacity crowd, the production called for a stage engineered to match Rema's high-energy live show and a sound rig built to hold up at full volume across the square. The result was a tight, high-impact build that matched the scale of one of Lagos's most in-demand concert dates.",
  },
  {
    src: "/assets/portfolio-images/chaos_in_the_ring.png",
    alt: "Chaos in the Ring",
    title: "Chaos in the Ring",
    description:
      "Cytech delivered the ring-side sound and PA system for 'Chaos in the Ring,' Nigeria's first globally televised professional boxing event, staged at Mobolaji Johnson Arena, Lagos, on October 1, 2025 — Nigeria's 65th Independence Day. Broadcast live worldwide on DAZN, the night drew a VIP-heavy crowd including the Lagos State Governor and federal ministers, with performances from Naira Marley and D'banj between bouts. Delivering clear, broadcast-grade audio for a night watched across continents, Our build helped anchor one of the biggest sporting occasions in Nigeria's recent history.",
  },
  {
    src: "/assets/carousel-images/the experience_ copy.png",
    alt: "The Experience 2008/Till Date",
    title: "The Experience 2008/Till Date",
    description:
      "Cytech has delivered full main-stage production — sound, stage and structure, lighting, and screens — for The Experience, Africa's largest gospel concert, since 2008. For the 20th edition, held at Tafawa Balewa Square, Lagos, on December 5, 2025, the build ran from 7 PM straight through to dawn for a crowd of at least 200,000 holding up through a full night of continuous performances across a lineup of Nigerian and international worship artists. Seventeen years running production for one of the continent's largest annual gatherings speaks to the trust and consistency we bring to marathon, large-format live events",
  },
  {
    src: "/assets/portfolio-images/unusal_praise.png",
    alt: "The Unusual Praise",
    title: "The Unusual Praise",
    description:
      "For multiple years running, the team has delivered full production — sound, stage and structure, lighting, and screens — for Unusual Praise in Lagos, most recently at the 2025 edition held at Tafawa Balewa Square on December 12. Africa's largest Catholic praise and worship gathering, the all-night event ran from 5 PM through to daybreak, closing with Holy Mass before thousands of worshippers. That recurring partnership reflects the trust built by delivering complete, reliable production for one of Lagos's biggest annual faith gatherings.",
  },
  {
    src: "/assets/portfolio-images/nsppd.png",
    alt: "NSPPD",
    title: "NSPPD 2025",
    description:
      "The team delivered sound, stage, and lighting production for the NSPPD Nigeria Prayer Conference in Lagos, one of the largest single-night prayer gatherings the city has seen - famously described online as the night 'Lagos shut down.' Held at Tafawa Balewa Square under Pastor Jerry Eze's Streams of Joy International, the event paired an overflowing openair crowd with live worship ministrations from leading gospel artists. Holding up to that scale of turnout on a single-night build reinforced the team's readiness for Lagos's biggest faithbased gatherings.",
  },
  {
    src: "/assets/carousel-images/AFRIMA-MUSIC-VILLAGE-CONCERT-23-2048x1365 2.png",
    alt: "AFRIMA Music Village Concert",
    title: "AFRIMA Awards/Village",
    description:
      "The team delivered full production — sound, stage and structure, lighting, and screens — for the AFRIMA Music Award and Village Concert, the open-air centrepiece of the 9th All Africa Music Awards week, held in Lagos on January 9, 2026. Organised in partnership with the African Union Commission, the concert brought together fans and performers from across the continent ahead of the main awards night, which broadcasts to over 80 countries. Running a complete four-category build for a pan-African, multi-day production reinforced the team's capacity to deliver at continental scale.",
  },
];

const getServerSnapshot = () => 0;

const PortfolioCarousel = () => {
  // Desktop: instant content swap, driven by plain state, navigated via
  // the flanking chevrons.
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = (index: number) => {
    setSelectedIndex(((index % slides.length) + slides.length) % slides.length);
  };
  const scrollNext = () => scrollTo(selectedIndex + 1);
  const scrollPrev = () => scrollTo(selectedIndex - 1);

  const activeSlide = slides[selectedIndex];

  // Mobile: a real swipeable Embla carousel with autoplay.
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  ]);

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = emblaApi.plugins()?.autoplay;
    if (!autoplay) return;

    const desktopQuery = window.matchMedia("(min-width: 1024px)");

    const syncAutoplay = () => {
      if (desktopQuery.matches) {
        autoplay.stop();
      } else {
        autoplay.play();
      }
    };

    syncAutoplay();
    desktopQuery.addEventListener("change", syncAutoplay);
    return () => desktopQuery.removeEventListener("change", syncAutoplay);
  }, [emblaApi]);

  const subscribe = useCallback(
    (callback: () => void) => {
      if (!emblaApi) return () => {};
      emblaApi.on("select", callback);
      emblaApi.on("reInit", callback);
      return () => {
        emblaApi.off("select", callback);
        emblaApi.off("reInit", callback);
      };
    },
    [emblaApi],
  );

  const getSnapshot = useCallback(
    () => emblaApi?.selectedScrollSnap() ?? 0,
    [emblaApi],
  );

  const mobileSelectedIndex = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const mobileScrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
      emblaApi?.plugins()?.autoplay?.reset();
    },
    [emblaApi],
  );

  return (
    <div className="w-full">
      <div className="lg:flex hidden flex-col items-center gap-8 lg:flex-row group transition-all duration-300 hover:gap-0">
        <button
          onClick={scrollPrev}
          aria-label="Previous slide"
          className="flex h-28 w-28 items-center justify-center"
        >
          <ChevronLeft size={100} strokeWidth={1} />
        </button>

        <div className="flex flex-col gap-4 lg:w-1/2">
          <h3 className="font-primary font-headings uppercase text-2xl lg:text-4xl font-semibold text-white">
            {activeSlide.title}
          </h3>
          <p className="font-primary text-base lg:text-2xl font-light text-white max-w-xl mt-8">
            {activeSlide.description}
          </p>
        </div>
        <div className="relative h-64 w-full overflow-hidden rounded-2xl lg:h-150 lg:w-1/2 transition-[height] duration-300 group-hover:h-160">
          <Image
            src={activeSlide.src}
            alt={activeSlide.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover  "
          />
        </div>
        <button
          onClick={scrollNext}
          aria-label="Next slide"
          className="flex h-28 w-28 items-center justify-center"
        >
          <ChevronRight size={100} strokeWidth={1} />
        </button>
      </div>

      <div className="lg:hidden">
        <div
          className="relative h-[50vh] w-full overflow-hidden border-y border-gray-500 border-dashed"
          ref={emblaRef}
        >
          <div className="flex h-full">
            {slides.map((slide) => (
              <div
                key={slide.src}
                className="relative h-full min-w-0 flex-[0_0_100%]"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-x-0 top-10 px-6 ">
                  <h3 className="font-primary font-headings uppercase text-2xl font-semibold text-white">
                    {slide.title}
                  </h3>
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-10 px-6 pb-6 pt-16">
                  <p className="font-primary text-sm font-light text-white/80 mt-2 line-clamp-5">
                    {slide.description}
                  </p>
                </div>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
                  <div className="hidden max-lg:flex items-center gap-2">
                    {slides.map((slide, index) => (
                      <button
                        key={slide.src}
                        onClick={() => mobileScrollTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === mobileSelectedIndex
                            ? "w-3 p-2 border border-white"
                            : "w-2 bg-[#949494]"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCarousel;
