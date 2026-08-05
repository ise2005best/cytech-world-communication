"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ChevronDown } from "lucide-react";

const serviceCategories = [
  "Technical Production Support",
  // "Equipment Rental",
  // "Equipment Distribution & Installation",
  // "Full Production Execution",
  // "Production Planning",
  // "Live Event Operation",
  // "Training & Technical Development",
] as const;

const serviceRequestSchema = z.object({
  fullName: z.string().min(2, "Enter your full name"),
  email: z.email("Enter a valid email address"),
  phone: z.string().min(7, "Enter a valid phone number"),
  serviceCategory: z.enum(serviceCategories, {
    message: "Select a service category",
  }),
  details: z.string().min(10, "Tell us a bit more about what you need"),
});

type ServiceRequestValues = z.infer<typeof serviceRequestSchema>;

const fieldClassName =
  "w-full rounded-md border border-white bg-transparent px-4 pb-2 pt-6 font-secondary text-sm text-white outline-none transition duration-300 focus:border-primary";
const floatingLabelClassName =
  "absolute left-4 top-1 font-secondary text-xs font-light uppercase text-white";
const errorClassName = "font-secondary text-xs text-primary";

const ServiceRequestForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ServiceRequestValues>({
    resolver: zodResolver(serviceRequestSchema),
  });

  const onSubmit = async (values: ServiceRequestValues) => {
    console.log(values);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <p className="font-primary font-body text-base text-white md:text-2xl">
        Thanks — we&apos;ve received your brief and will be in touch shortly.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex w-full flex-col gap-6"
    >
      <div className="flex flex-col gap-2">
        <div className="relative">
          <label htmlFor="fullName" className={floatingLabelClassName}>
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            {...register("fullName")}
            className={fieldClassName}
          />
        </div>
        {errors.fullName && (
          <p className={errorClassName}>{errors.fullName.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <div className="relative">
          <label htmlFor="email" className={floatingLabelClassName}>
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            {...register("email")}
            className={fieldClassName}
          />
        </div>
        {errors.email && (
          <p className={errorClassName}>{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <div className="relative">
          <label htmlFor="phone" className={floatingLabelClassName}>
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            {...register("phone")}
            className={fieldClassName}
          />
        </div>
        {errors.phone && (
          <p className={errorClassName}>{errors.phone.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2 ">
        <h3 className="font-primary font-subheadings uppercase text-2xl text-white">
          Service Required
        </h3>
        <p className="font-primary font-desktop-body md:text-base text-xs text-white">
          Tell us what kind of support your production needs.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <div className="relative">
          <label htmlFor="serviceCategory" className={floatingLabelClassName}>
            Service Category
          </label>
          <select
            id="serviceCategory"
            defaultValue=""
            {...register("serviceCategory")}
            className={`appearance-none pr-10 ${fieldClassName}`}
          >
            <option value="" disabled>
              {""}
            </option>
            {serviceCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <ChevronDown
            size={18}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/4 text-white"
          />
        </div>
        {errors.serviceCategory && (
          <p className={errorClassName}>{errors.serviceCategory.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <div className="relative">
          <label htmlFor="details" className={floatingLabelClassName}>
            Tell Us What You Need
          </label>
          <textarea
            id="details"
            rows={8}
            {...register("details")}
            className={fieldClassName}
          />
        </div>
        {errors.details && (
          <p className={errorClassName}>{errors.details.message}</p>
        )}
      </div>

      <div className="flex items-center justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#1E1E1E] w-fit uppercase items-center text-white font-secondary text-sm py-2.5 px-5 rounded-4xl hover:bg-gray-200 transition duration-300 disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Request"}
        </button>
      </div>
    </form>
  );
};

export default ServiceRequestForm;
