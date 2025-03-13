import { NextResponse } from "next/server";
import { saveLeadToDatabase } from "@/utils/databaseService";

export async function POST(req: Request) {
  try {
    const body = await req.json(); // Parse JSON request body
    const savedLead = await saveLeadToDatabase(body); // Save to database
    return NextResponse.json(savedLead, { status: 200 });
  } catch (error) {
    console.error("Error saving lead:", error);
    return NextResponse.json({ error: "Failed to save lead" }, { status: 500 });
  }
}