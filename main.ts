import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, at most 200 characters, about a small good thing that happened today.
// Warmth: an unasked-for kindness. Surprise: the gift was never ordered.
// One concrete detail: 4 a.m., a fried banana, "for the road home".
const LINE =
  "At 4 a.m., the warung auntie slipped a still-warm fried banana into my bag and whispered, 'for the road home' — I hadn't even ordered it.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
try {
  mkdirSync(outDir, { recursive: true });
} catch {
  // Fall back to a local output dir when /output is not writable (local runs).
  mkdirSync("./output", { recursive: true });
}
const dir = (() => {
  try {
    mkdirSync(outDir, { recursive: true });
    return outDir;
  } catch {
    return "./output";
  }
})();
writeFileSync(join(dir, "entry.txt"), LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(dir, "entry.txt")}`);
