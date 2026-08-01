"use client";

import { useCallback, useSyncExternalStore } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CiLocationOn } from "react-icons/ci";

export type CarouselSlide = {
  src: string;
  alt: string;
  title: string;
  location: string;
};

const defaultSlides: CarouselSlide[] = [
  {
    src: "/assets/carousel-images/davido@0.5x.png",
    alt: "Davido Five Tour",
    title: "Davido 5ive Tour",
    location: "ENUGU, AKWA-IBOM, YOLA, ABUJA AND IBADAN",
  },
  {
    src: "/assets/carousel-images/the experience_ copy.png",
    alt: "The Experience 2008/2026",
    title: "The Experience 2008/2026",
    location: "Lagos, Nigeria",
  },
  {
    src: "/assets/carousel-images/vodun days benin.png",
    alt: "Vodun Days Benin",
    title: "Vodun Days 2025",
    location: "COTONOU, BENIN",
  },
  {
    src: "/assets/carousel-images/AFRIMA-MUSIC-VILLAGE-CONCERT-23-2048x1365 2.png",
    alt: "AFRIMA Music Village Concert",
    title: "AFRIMA Awards/Village",
    location: "Lagos, Nigeria",
  },
  {
    src: "/assets/carousel-images/TAPE 2026.png",
    alt: "TAPE 2026",
    title: "TAPE 2026",
    location: "Lagos, Nigeria",
  },
  {
    src: "/assets/carousel-images/WIZKID 2026.png",
    alt: "Wizkid 2026",
    title: "Future Fest: Wizkid",
    location: "Lagos, Nigeria",
  },
  {
    src: "/assets/carousel-images/rema_.png",
    alt: "Rema",
    title: "REMA HEIS TOUR 2024",
    location: "Lagos, Nigeria",
  },
  {
    src: "/assets/carousel-images/detty december fest.png",
    alt: "Detty December Fest",
    title: "Detty December 2025",
    location: "Lagos, Nigeria",
  },
];

const getServerSnapshot = () => 0;

const Carousel = ({ slides = defaultSlides }: { slides?: CarouselSlide[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  ]);

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

  const selectedIndex = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
    emblaApi?.plugins()?.autoplay?.reset();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
    emblaApi?.plugins()?.autoplay?.reset();
  }, [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
      emblaApi?.plugins()?.autoplay?.reset();
    },
    [emblaApi],
  );

  const activeSlide = slides[selectedIndex];

  return (
    <div className="lg:h-screen h-[90vh] lg:px-5 lg:py-10 py-5 rounded-full w-full">
      <div className="relative h-full overflow-hidden lg:rounded-2xl lg:border lg:border-none">
        <div className="h-full overflow-hidden opacity-90 bg-[#1E1E1E]/37" ref={emblaRef}>
          <div className="flex h-full">
            {slides.map((slide) => (
              <div className="relative h-full min-w-0 flex-[0_0_100%] " key={slide.src}>
                <div className="relative h-full w-full">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="100vw"
                    className="object-cover  "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-x-0 top-1/2 -translate-y-1/4 md:bg-linear-to-t from-black/90 via-black/50 to-transparent px-6 pb-6 pt-6 md:top-auto md:bottom-0 md:translate-y-0 md:px-16 md:pb-8 md:pt-20">
          <h1 className="font-primary font-head uppercase md:text-[80px] md:wrap-break-word text-[40px] max-w-3xl font-semibold text-white ">
            {activeSlide.title}
          </h1>
          <p className="font-primary font-caption md:text-sm text-xs text-white">
            <CiLocationOn className="inline-block mr-2 w-5 h-5 text-white" />
            {activeSlide.location}
          </p>

          <div className="mt-48 flex items-center justify-center md:mt-6 md:justify-between">
            <div className="flex items-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.src}
                  onClick={() => scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? "w-3 p-2 border border-white"
                      : "w-2 bg-[#949494]"
                  }`}
                />
              ))}
            </div>

            <div className="flex max-md:hidden  items-center gap-32">
              <button
                onClick={scrollPrev}
                aria-label="Previous slide"
                className="flex h-10 w-10 items-center justify-center text-white transition duration-300"
              >
                <ChevronLeft size={46} strokeWidth={1.5} />
              </button>
              <button
                onClick={scrollNext}
                aria-label="Next slide"
                className="flex h-10 w-10 items-center justify-center rounded-full text-white transition duration-300 hover:bg-white/40"
              >
                <ChevronRight size={46} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
