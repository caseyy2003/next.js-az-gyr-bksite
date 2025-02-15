import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export async function saveLeadToDatabase(lead: { name: string; email: string; phone: string }) {
  const { data, error } = await supabase.from("leads").insert([lead]);

  if (error) {
    console.error("Supabase Error:", error);
    throw new Error(`Failed to save lead. Supabase Error: ${error.message}`);
  }

  return data;
}
