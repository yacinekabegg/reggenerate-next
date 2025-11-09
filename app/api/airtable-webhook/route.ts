// Assure le runtime Node (le SDK Airtable n'est pas Edge)
export const runtime = "nodejs";

import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  // 1) Sécurité : vérifie le secret envoyé par Airtable
  const secret = req.headers.get("x-airtable-secret");
  if (secret !== process.env.AIRTABLE_WEBHOOK_SECRET) {
    return new Response("Unauthorized", { status: 401 });
  }

  // 2) Optionnel : récupérer le slug envoyé par l’automation Airtable
  let slug: string | undefined;
  try {
    const body = await req.json();
    slug = body?.slug;
  } catch {
    // pas grave si pas de body
  }

  // 3) Revalide la liste + la page d’article (si slug fourni)
  try {
    revalidatePath("/blog");
    if (slug) revalidatePath(`/blog/${slug}`);
    return Response.json({ ok: true, slug });
  } catch (e) {
    return new Response("Revalidation failed", { status: 500 });
  }
}

// (facultatif) répondre 405 sur GET pour éviter les confusions
export async function GET() {
  return new Response("Method Not Allowed", { status: 405 });
}