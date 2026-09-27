import { ImageResponse } from "next/og";

import { profile } from "@/lib/data";
import { colors, ogFonts } from "@/lib/og";

export const alt = `${profile.name} — ${profile.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const label = { fontFamily: "Plex Mono", fontSize: 22, letterSpacing: 3, textTransform: "uppercase" as const };

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: colors.paper,
          color: colors.ink,
          border: `12px solid ${colors.ink}`,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", padding: "32px 48px", borderBottom: `6px solid ${colors.ink}`, ...label }}>
          <span>{profile.headline}</span>
          <span>{profile.location}</span>
        </div>
        <div style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "flex-end", padding: "0 48px 36px" }}>
          <div style={{ display: "flex", fontFamily: "Archivo Black", fontSize: 150, lineHeight: 0.9, letterSpacing: -4 }}>
            MUHAMMAD
          </div>
          <div style={{ display: "flex", fontFamily: "Archivo Black", fontSize: 150, lineHeight: 0.9, letterSpacing: -4 }}>
            HAMZA<span style={{ color: colors.signal }}>.</span>
          </div>
        </div>
        <div style={{ display: "flex", background: colors.ink, color: colors.paper, padding: "22px 48px", ...label, textTransform: "none" }}>
          iOS SDKs · Full-stack platforms · ML systems
        </div>
      </div>
    ),
    { ...size, fonts: await ogFonts() },
  );
}
