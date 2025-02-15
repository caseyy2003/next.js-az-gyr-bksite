import { NextResponse } from "next/server";
import { saveLeadToDatabase } from "@/utils/databaseService";
import { sendEmailToAdmin, sendEmailToLead } from "@/utils/emailService";

export async function POST(req: Request) {
  try {
    const lead = await req.json();
    if (!lead.name || !lead.email || !lead.phone) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Save to Neon PostgreSQL
    const savedLead = await saveLeadToDatabase(lead);

    // Send emails
    await sendEmailToAdmin(savedLead);
    await sendEmailToLead(savedLead);

    return NextResponse.json({ message: "Lead submitted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
