// app/api/airtable-webhook/route.ts
export const runtime = "nodejs";
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  const secret = req.headers.get("x-airtable-secret");
  if (secret !== process.env.AIRTABLE_WEBHOOK_SECRET) {
    return new Response("Unauthorized", { status: 401 });
  }

  let slug: string | undefined;
  try {
    const body = await req.json();
    slug = typeof body?.slug === "string" ? body.slug : undefined;
  } catch {
    // pas de body, ce n'est pas bloquant
  }

  revalidatePath("/blog");
  if (slug) revalidatePath(`/blog/${slug}`);

  return Response.json({ ok: true, slug });
}

export async function GET() {
  return new Response("Method Not Allowed", { status: 405 });
}