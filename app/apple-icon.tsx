import { ImageResponse } from "next/og";

import { colors, ogFonts } from "@/lib/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: colors.ink,
          color: colors.paper,
          fontFamily: "Archivo Black",
          fontSize: 120,
          letterSpacing: -4,
        }}
      >
        H<span style={{ color: colors.signal }}>.</span>
      </div>
    ),
    { ...size, fonts: await ogFonts() },
  );
}
