import fs from "fs";
import path from "path";

const EXTENSIONS = ["webp", "png", "jpg", "jpeg"];

// Returns the public URL of an image dropped in /public (e.g. "avatar" -> "/avatar.jpg"), or null if absent
export function findPublicImage(name: string): string | null {
  for (const ext of EXTENSIONS) {
    const file = `${name}.${ext}`;
    if (fs.existsSync(path.join(process.cwd(), "public", file))) return `/${file}`;
  }
  return null;
}
