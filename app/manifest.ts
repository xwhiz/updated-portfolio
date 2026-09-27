import type { MetadataRoute } from "next";

import { profile } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: profile.name,
    short_name: "Hamza",
    description: `${profile.name} — ${profile.headline}`,
    start_url: "/",
    display: "standalone",
    background_color: "#f1efe7",
    theme_color: "#f1efe7",
    icons: [{ src: "/icon", sizes: "512x512", type: "image/png" }],
  };
}
