import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { serviceRequestSchema } from "@/app/lib/schemas/service-request";
import ContactUsTemplate from "@/app/components/emails/contact-us-template";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validationResult = serviceRequestSchema.safeParse(body);
    if (!validationResult.success) {
      const formattedErrors = z.treeifyError(validationResult.error);
      return NextResponse.json(
        { error: "An Error occured", details: formattedErrors },
        { status: 400 }
      );
    }
    const { fullName, email, phone, serviceCategory, details } =
      validationResult.data;
    const { data, error } = await resend.emails.send({
      from: "Cytech World Communication <no-reply@cytechworld.com>",
      to: ["support@cytechworld.com", "cytechworldcommunication@gmail.com"],
      replyTo: email,
      subject: `New service request from ${fullName}`,
      react: ContactUsTemplate({
        fullName,
        email,
        phone,
        serviceCategory,
        details,
      }),
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
      message: "Message Received, we would be in touch shortly!",
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
