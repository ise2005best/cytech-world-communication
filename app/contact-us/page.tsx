import Button from "../components/button";
import ServiceRequestForm from "../components/service-request-form";

const ContactUs = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-start py-12 md:mt-28 mt-52 mx-6 md:py-32 md:mx-36 max-w-6xl">
        <h1 className="font-primary font-head uppercase text-[32px] md:text-7xl max-w-4xl font-semibold text-white">
          Work With Us
        </h1>
        <p className="font-primary font-desktop-body md:text-2xl text-sm text-white mt-6 md:mt-12">
          Every strong production starts with the right conversation. Share your
          event details with us, and our team will review your requirements,
          recommend the right technical approach, and guide you through the next
          steps.
        </p>
        <div className="flex flex-col md:gap-10 gap-6 mt-18 md:mt-24 justify-center md:mx-16">
          <h1 className="font-primary font-head uppercase text-[32px] md:text-[40px] max-w-4xl font-semibold text-white">
            Let&apos;s Build Your Next Production
          </h1>
          <p className="font-primary font-desktop-body md:text-2xl text-sm text-white">
            Use the form below to send us your brief. Whether you already know
            what you need or you are still figuring it out, we will help shape
            the right setup for your production.
          </p>
          <ServiceRequestForm />
        </div>
      </div>
      <div className="py-10 bg-[#ACACAC] md:py-14">
        <div className="mx-6 flex flex-col max-w-5xl gap-6 md:mx-36 md:gap-10">
          <h3 className="font-primary font-headings text-2xl uppercase text-white md:text-3xl">
            Explore Our Portfolio
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

export default ContactUs;
