const fs = require("fs");
const path = require("path");

const mapPath = "./filexxx.js.map";
const outputDir = "./extracted_sources";

const raw = fs.readFileSync(mapPath, "utf8");
const map = JSON.parse(raw);

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

map.sources.forEach((src, i) => {
  const content = map.sourcesContent?.[i];
  if (!content) return;

  const safeName = src.replace(/[^a-zA-Z0-9_\-./]/g, "_");
  const fullPath = path.join(outputDir, safeName);

  const dir = path.dirname(fullPath);
  fs.mkdirSync(dir, { recursive: true });

  fs.writeFileSync(fullPath, content, "utf8");
  console.log(`Saved: ${fullPath}`);
});


// node .\extract-source.js