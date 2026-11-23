import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, at most 200 characters, about a small good thing that happened today.
// Warmth: an unasked-for kindness. Surprise: the gift was never ordered.
// One concrete detail: 4 a.m., a fried banana, "for the road home".
const LINE =
  "At 4 a.m., the warung auntie slipped a still-warm fried banana into my bag and whispered, 'for the road home' — I hadn't even ordered it.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
// Coordinator's second pass: the first try/catch mkdir was dead code — the
// IIFE below already mkdirs with the same fallback. Removed the duplicate
// so the output-dir resolution happens exactly once.
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
