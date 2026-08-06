import { z } from "zod";

export const equipmentCategories = [
  "Sound Systems",
  "Lighting Equipment & Fixtures",
  "Staging & Structures",
  "Stage & Scaffolding Equipments",
] as const;

export const catalogueRequestSchema = z.object({
  fullName: z.string().min(2, "Enter your full name"),
  email: z.email("Enter a valid email address"),
  equipment: z.enum(equipmentCategories, {
    message: "Select an equipment category",
  }),
});

export type CatalogueRequestValues = z.infer<typeof catalogueRequestSchema>;