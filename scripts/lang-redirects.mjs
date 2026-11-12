// Redirections des anciennes pages traduites par Weglot (/en, /de, /ja...).
// Weglot n'est plus actif : ces adresses, encore connues de Google et
// visitées, répondraient en 404. On génère pour chacune une page de
// redirection immédiate vers la page française équivalente, avec l'URL
// canonique française, pour transmettre le trafic et le référencement.
// Le site anglais (/en) existe désormais : ses vraies pages ne sont jamais
// écrasées (on saute toute adresse dont une version .html ou /index.html
// existe déjà). Seules les anciennes adresses /en sans équivalent anglais
// (vieux articles) sont redirigées vers la page française.
import fs from "fs";
import path from "path";

const OUT = path.join(process.cwd(), "out");
const SITE = "https://reggenerate.circulegg.fr";
const LANGS = ["en", "de", "es", "it", "pt", "ja", "zh", "ar", "fa"];

const sitemap = fs.readFileSync(path.join(OUT, "sitemap.xml"), "utf8");
const paths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((m) => m[1].replace(SITE, "") || "/")
  .filter((p) => p.startsWith("/"));

const page = (target) => `<!doctype html>
<html lang="fr"><head><meta charset="utf-8">
<title>Reggenerate™</title>
<link rel="canonical" href="${target}">
<meta http-equiv="refresh" content="0; url=${target}">
<script>location.replace(${JSON.stringify(target)})</script>
</head><body><a href="${target}">${target}</a></body></html>
`;

function write(rel, target) {
  const file = path.join(OUT, rel);
  if (fs.existsSync(file)) return; // ne jamais écraser une vraie page
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, page(target));
}

// Une vraie page existe-t-elle déjà, sous l'une ou l'autre forme ?
function exists(base) {
  return fs.existsSync(path.join(OUT, `${base}.html`)) || fs.existsSync(path.join(OUT, base, "index.html"));
}

let n = 0;
for (const lang of LANGS) {
  for (const p of paths) {
    if (p.startsWith("/en/") || p === "/en") continue; // pages anglaises : pas des cibles
    const target = `${SITE}${p}`;
    const clean = p.replace(/\/$/, "");
    const base = clean === "" ? lang : `${lang}${clean}`;
    if (exists(base)) continue; // vraie page traduite : on ne touche à rien
    write(`${base}.html`, target);
    write(`${base}/index.html`, target);
    n++;
  }
}
console.log(`Redirections de langues : ${n} pages générées (${LANGS.length} langues).`);

// Anciennes pages d'articles jamais rédigées (« Article en cours de rédaction ») :
// supprimées du site, chaque adresse redirige vers l'article publié le plus
// proche. Liste dans lib/retired-blog-redirects.json (ancien slug → nouveau).
// Ici on écrase volontairement : une adresse retirée redirige toujours, même si
// une fiche Airtable portant ce slug était réactivée par erreur.
const retired = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), "lib", "retired-blog-redirects.json"), "utf8"),
);
let r = 0;
for (const [oldSlug, newSlug] of Object.entries(retired)) {
  const target = `${SITE}/blog/${newSlug}`;
  if (!exists(`blog/${newSlug}`)) {
    console.warn(`⚠️ Article cible absent du site : /blog/${newSlug} (redirection depuis /blog/${oldSlug})`);
  }
  for (const rel of [`blog/${oldSlug}.html`, `blog/${oldSlug}/index.html`]) {
    const file = path.join(OUT, rel);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, page(target));
  }
  r++;
}
console.log(`Redirections d'articles retirés : ${r} anciennes adresses redirigées.`);
