// Redirections des anciennes pages traduites par Weglot (/en, /de, /ja...).
// Weglot n'est plus actif : ces adresses, encore connues de Google et
// visitées, répondraient en 404. On génère pour chacune une page de
// redirection immédiate vers la page française équivalente, avec l'URL
// canonique française, pour transmettre le trafic et le référencement.
// À supprimer le jour où de vraies versions traduites seront publiées.
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

let n = 0;
for (const lang of LANGS) {
  for (const p of paths) {
    const target = `${SITE}${p}`;
    const clean = p.replace(/\/$/, "");
    if (clean === "") {
      write(`${lang}.html`, target);
      write(`${lang}/index.html`, target);
    } else {
      write(`${lang}${clean}.html`, target);
      write(`${lang}${clean}/index.html`, target);
    }
    n++;
  }
}
console.log(`Redirections de langues : ${n} pages générées (${LANGS.length} langues).`);
