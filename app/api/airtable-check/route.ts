import { NextResponse } from "next/server";
import Airtable from "airtable";

export async function GET() {
  const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_TABLE_NAME, AIRTABLE_VIEW_NAME } = process.env;
  const info = {
    hasApiKey: !!AIRTABLE_API_KEY,
    hasBaseId: !!AIRTABLE_BASE_ID,
    table: AIRTABLE_TABLE_NAME,
    view: AIRTABLE_VIEW_NAME,
  };

  try {
    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
      return NextResponse.json({ ok: false, info, error: "Missing envs" }, { status: 500 });
    }
    const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);
    const recs = await base(AIRTABLE_TABLE_NAME ?? "Posts")
      .select({ view: AIRTABLE_VIEW_NAME ?? "PublishedView", maxRecords: 1 })
      .firstPage();

    return NextResponse.json({ ok: true, info, sampleCount: recs.length });
  } catch (e: any) {
    return NextResponse.json({ ok: false, info, error: e?.message ?? String(e) }, { status: 500 });
  }
}