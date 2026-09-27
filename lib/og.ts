import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const colors = { paper: "#f1efe7", ink: "#0d0d0d", signal: "#ff4400" };

export async function ogFonts() {
  const [black, mono] = await Promise.all([
    readFile(join(process.cwd(), "assets/ArchivoBlack-Regular.ttf")),
    readFile(join(process.cwd(), "assets/IBMPlexMono-Medium.ttf")),
  ]);
  return [
    { name: "Archivo Black", data: black, weight: 900 as const, style: "normal" as const },
    { name: "Plex Mono", data: mono, weight: 500 as const, style: "normal" as const },
  ];
}
