"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ChevronDown } from "lucide-react";

const equipmentCategories = [
  "Backline Equipment",
  // "Line Array Speakers",
  // "Stage Lighting Systems",
  // "Stage & Truss Structures",
  // "Digital Mixing Consoles",
  // "Stage Effects Equipment",
] as const;

const catalogueRequestSchema = z.object({
  fullName: z.string().min(2, "Enter your full name"),
  email: z.email("Enter a valid email address"),
  equipment: z.enum(equipmentCategories, {
    message: "Select an equipment category",
  }),
});

type CatalogueRequestValues = z.infer<typeof catalogueRequestSchema>;

const fieldClassName =
  "w-full rounded-md border border-white bg-transparent px-4 pb-2 pt-6 font-secondary text-sm text-white outline-none transition duration-300 focus:border-primary";
const floatingLabelClassName =
  "absolute left-4 top-1 font-secondary text-xs font-light uppercase text-white";
const errorClassName = "font-secondary text-xs text-primary";

const CatalogueRequestForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CatalogueRequestValues>({
    resolver: zodResolver(catalogueRequestSchema),
  });

  const onSubmit = async (values: CatalogueRequestValues) => {
    console.log(values);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <p className="font-primary font-body text-base text-white md:text-2xl">
        Thanks — we&apos;ve received your request and will be in touch with the
        catalogue shortly.
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
          <label htmlFor="equipment" className={floatingLabelClassName}>
            Equipment Category
          </label>
          <select
            id="equipment"
            defaultValue=""
            {...register("equipment")}
            className={`appearance-none pr-10 ${fieldClassName}`}
          >
            <option value="" disabled>
              {""}
            </option>
            {equipmentCategories.map((category) => (
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
        {errors.equipment && (
          <p className={errorClassName}>{errors.equipment.message}</p>
        )}
      </div>

      <div className="flex items-center justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#1E1E1E] w-fit uppercase items-center text-white font-inter text-sm py-2.5 px-5 rounded-4xl hover:bg-gray-400 transition duration-300 disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Request"}
        </button>
      </div>
    </form>
  );
};

export default CatalogueRequestForm;
