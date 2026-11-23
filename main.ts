// post-x-promote-make-your-own-bounty-01 — entrypoint.
//
// Copies the entry's files (POST.json, photo.jpg, POST_DRAFT.md) from the
// repository into the output directory the grader reads. Node 22 standard
// library only: no network, no secrets, deterministic. The house reads the
// post itself from POST.json; nothing this program writes about the post
// counts.
import { cpSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

const BOT_DIR = resolve(process.env.MAKEFUN_BOT_DIR ?? ".");
const OUT_DIR = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "out");
const FILES = ["POST.json", "photo.jpg", "POST_DRAFT.md"];

mkdirSync(OUT_DIR, { recursive: true });

for (const name of FILES) {
  const src = join(BOT_DIR, name);
  if (!existsSync(src)) {
    throw new Error(`missing entry file: ${src}`);
  }
  const dest = join(OUT_DIR, name);
  cpSync(src, dest);
  const bytes = readFileSync(dest).length;
  console.log(`copied ${name} (${bytes} bytes) -> ${OUT_DIR}`);
}

console.log("done.");

// Fail fast when the handed-in post address is not usable JSON.
const post = JSON.parse(readFileSync(join(OUT_DIR, "POST.json"), "utf8"));
if (typeof post !== "object" || post === null || typeof post.url !== "string") {
  throw new Error("POST.json must be an object with a string url");
}
console.log(`post url: ${post.url}`);
