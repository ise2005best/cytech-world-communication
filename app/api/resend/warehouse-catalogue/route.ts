import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { readFile, stat } from "fs/promises";
import path from "path";
import CatalogueRequestTemplate from "@/app/components/emails/catalogue-request-template";
import { catalogueRequestSchema } from "@/app/lib/schemas/catalogue-request";

const resend = new Resend(process.env.RESEND_API_KEY!);

// Define a mapping of equipment categories to their corresponding catalogue files (source and attachment name)
const catalogueFiles: Record<
  z.infer<typeof catalogueRequestSchema>["equipment"],
  { source: string; attachmentName: string }
> = {
  "Sound Systems": {
    source: "CYTECH_SOUND_2026_INVENTORY 2.pdf",
    attachmentName: "Cytech-Sound-Systems-Catalogue.pdf",
  },
  "Lighting Equipment & Fixtures": {
    source: "CYTECH_LIGHT_2026_INVENTORY.pdf",
    attachmentName: "Cytech-Lighting-Catalogue.pdf",
  },
  "Staging & Structures": {
    source: "CYTECH_STRUCTURES_2026_INVENTORY.pdf",
    attachmentName: "Cytech-Structures-Catalogue.pdf",
  },
  "Stage & Scaffolding Equipments": {
    source: "CYTECH_STAGE_SCAFFOLDING_2026_INVENTORY.pdf",
    attachmentName: "Cytech-Stage-Scaffolding-Catalogue.pdf",
  },
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validationResult = catalogueRequestSchema.safeParse(body);
    if (!validationResult.success) {
      const formattedErrors = z.treeifyError(validationResult.error);
      return NextResponse.json(
        { error: "An Error occured", details: formattedErrors },
        { status: 400 }
      );
    }
    const { fullName, email, equipment } = validationResult.data;
    const catalogueFile = catalogueFiles[equipment]
    const filePath = path.join(
      process.cwd(),
      "public",
      "pdfs",
      catalogueFile.source
    );
    // convert the file to a buffer so it can be attached to the email
    const [fileBuffer] = await Promise.all([
      readFile(filePath),
      stat(filePath),
    ]);

    const { data, error } = await resend.emails.send({
      from: "Cytech World Communication <no-reply@cytechworld.com>",
      to: [email],
      replyTo: "no-reply@cytechworld.com",
      subject: `Your ${equipment} catalogue is attached, ${fullName}`,
      react: CatalogueRequestTemplate({
        fullName,
        equipment,
      }),
      attachments: [
        {
          filename: catalogueFile.attachmentName,
          content: fileBuffer,
        },
      ],
    });
    if (error) {
      console.error("Email error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Catalogue sent — check your email shortly!",
      id: data?.id,
    });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { error: "Server error processing your request" },
      { status: 500 }
    );
  }
}
