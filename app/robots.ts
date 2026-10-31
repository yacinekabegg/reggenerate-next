import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

// Tous les robots sont autorisés, y compris ceux des IA (ChatGPT, Claude,
// Perplexity, Gemini) : on veut être lu et cité. Seule la refonte en
// préparation (/nouveau/) est exclue.
export default function robots(): MetadataRoute.Robots {
  const aiBots = [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "ClaudeBot",
    "Claude-SearchBot",
    "Claude-User",
    "PerplexityBot",
    "Perplexity-User",
    "Google-Extended",
    "Applebot-Extended",
    "CCBot",
  ];
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/nouveau/"] },
      ...aiBots.map((userAgent) => ({ userAgent, allow: "/", disallow: ["/nouveau/"] })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
