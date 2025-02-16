import { NextResponse } from "next/server";
import { sendEmailToAdmin, sendEmailToLead } from "@/utils/emailService";
import { saveLeadToDatabase } from "@/utils/databaseService";

export async function POST(req: Request) {
  try {
    const leadData = await req.json();

    // Save lead to database
    const savedLead = await saveLeadToDatabase(leadData);

    // ✅ Ensure `savedLead` is not null before proceeding
    if (!savedLead) {
      return NextResponse.json({ error: "Failed to save lead" }, { status: 500 });
    }

    // ✅ Now that `savedLead` is guaranteed to exist, send emails
    await sendEmailToAdmin(savedLead);
    await sendEmailToLead(savedLead);

    return NextResponse.json({ message: "Lead submitted successfully" }, { status: 200 });

  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
