import { mkdir, writeFile, readFile, access } from "node:fs/promises";

const API = "https://api.pexels.com/v1/search";
const OUT = new URL("../src/assets/images/", import.meta.url);
const KEY = process.env.PEXELS_API_KEY;
const FORCE = process.argv.includes("--force");

if (!KEY) {
  console.error("PEXELS_API_KEY is missing. Add it to .env.");
  process.exit(1);
}

const IMAGES = [
  { name: "hero", id: 6587896, width: 2400 },
  { name: "service-kitchen", query: "modern kitchen renovation", orientation: "landscape" },
  { name: "service-bathroom", query: "luxury bathroom interior", orientation: "landscape" },
  { name: "service-basement", query: "finished basement living room", orientation: "landscape" },
  { name: "service-interior", query: "interior design living room", orientation: "landscape" },
  { name: "service-carpentry", query: "carpenter woodworking", orientation: "landscape" },
  { name: "service-full-home", query: "modern house interior renovation", orientation: "landscape" },
  { name: "featured", query: "modern living room open concept", orientation: "portrait", pick: 1 },
  { name: "city-toronto", query: "toronto skyline", orientation: "landscape" },
  { name: "city-vancouver", query: "vancouver skyline", orientation: "landscape" },
  { name: "city-calgary", query: "calgary skyline", orientation: "landscape" },
  { name: "city-ottawa", query: "ottawa parliament", orientation: "landscape" },
  { name: "team-founder", query: "mature businessman portrait", orientation: "portrait" },
  { name: "team-designer", query: "professional woman portrait office", orientation: "portrait" },
  { name: "team-manager", query: "construction manager portrait", orientation: "portrait" },
  { name: "work-kitchen", query: "white kitchen island interior", orientation: "portrait" },
  { name: "work-bathroom", query: "modern bathroom freestanding bathtub", orientation: "portrait" },
  { name: "work-basement", query: "basement living room", orientation: "portrait" },
  { name: "work-living", query: "luxury living room fireplace", orientation: "portrait" },
];

const exists = (url) => access(url).then(() => true, () => false);

async function search({ id, query, orientation, pick = 0 }) {
  if (id) {
    const res = await fetch(`https://api.pexels.com/v1/photos/${id}`, { headers: { Authorization: KEY } });
    if (!res.ok) throw new Error(`Pexels photo ${id} failed: ${res.status} ${res.statusText}`);
    return res.json();
  }
  const params = new URLSearchParams({ query, orientation, per_page: "10" });
  const res = await fetch(`${API}?${params}`, { headers: { Authorization: KEY } });
  if (!res.ok) throw new Error(`Pexels search "${query}" failed: ${res.status} ${res.statusText}`);
  const { photos } = await res.json();
  const photo = photos?.[pick];
  if (!photo) throw new Error(`Pexels search "${query}" returned no photo at index ${pick}`);
  return photo;
}

async function download(photo, width) {
  const url = `${photo.src.original}?auto=compress&cs=tinysrgb&fm=jpg&w=${width}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download ${url} failed: ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

await mkdir(OUT, { recursive: true });
const creditsFile = new URL("credits.json", OUT);
const credits = (await exists(creditsFile))
  ? JSON.parse(await readFile(creditsFile, "utf8"))
  : {};
let failed = 0;

for (const img of IMAGES) {
  const file = new URL(`${img.name}.jpg`, OUT);
  if (!FORCE && (await exists(file))) {
    console.log(`skip ${img.name} (exists)`);
    continue;
  }
  try {
    const photo = await search(img);
    await writeFile(file, await download(photo, img.width ?? 1600));
    credits[img.name] = { photographer: photo.photographer, url: photo.url, alt: photo.alt };
    console.log(`ok   ${img.name} ← ${photo.photographer}`);
  } catch (err) {
    failed++;
    console.error(`fail ${img.name}: ${err.message}`);
  }
}

if (Object.keys(credits).length) {
  await writeFile(creditsFile, JSON.stringify(credits, null, 2) + "\n");
}
process.exit(failed ? 1 : 0);
