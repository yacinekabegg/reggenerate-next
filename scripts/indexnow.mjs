// IndexNow : prévient Bing (et donc la recherche de ChatGPT), Yandex, Seznam...
// des pages nouvelles du jour, juste après le déploiement.
// Pages envoyées : celles du sitemap dont la date (lastmod) est aujourd'hui
// ou hier (articles publiés ce jour-là, pages mises à jour la veille d'un
// déploiement). Rien à envoyer : on s'arrête.
const HOST = "reggenerate.circulegg.fr";
const KEY = "f825792ae8af0f29ee060363e39546b3";
const SITEMAP = `https://${HOST}/sitemap.xml`;

const today = new Date().toISOString().slice(0, 10);
const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
const force = process.argv.includes("--all");

const res = await fetch(SITEMAP, { cache: "no-store" });
if (!res.ok) {
  console.log(`Sitemap illisible (${res.status}), IndexNow ignoré.`);
  process.exit(0);
}
const xml = await res.text();
const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => ({
  loc: (m[1].match(/<loc>([^<]+)<\/loc>/) || [])[1],
  lastmod: ((m[1].match(/<lastmod>([^<]+)<\/lastmod>/) || [])[1] || "").slice(0, 10),
}));
const urls = entries
  .filter((e) => e.loc && (force || e.lastmod === today || e.lastmod === yesterday))
  .map((e) => e.loc);

if (!urls.length) {
  console.log(`Aucune page datée du ${yesterday} ou du ${today} : rien à envoyer à IndexNow.`);
  process.exit(0);
}

const r = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls }),
});
console.log(`IndexNow : ${r.status} pour ${urls.length} page(s) :`, urls.join(", "));
