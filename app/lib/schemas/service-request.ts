import { z } from "zod";

export const serviceCategories = [
  "Technical Support",
  "Equipment Rental",
  "Equipment Installation & Distribution ",
  "Production Planning & Execution",
  "Training & Technical Development",
  "Live Event Operation",
  "Other",
] as const;

export const serviceRequestSchema = z.object({
  fullName: z.string().min(2, "Enter your full name"),
  email: z.email("Enter a valid email address"),
  phone: z.string().min(7, "Enter a valid phone number"),
  serviceCategory: z.enum(serviceCategories, {
    message: "Select a service category",
  }),
  details: z.string().min(10, "Tell us a bit more about what you need"),
});

export type ServiceRequestValues = z.infer<typeof serviceRequestSchema>;
