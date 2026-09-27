import { ImageResponse } from "next/og";

import { colors, ogFonts } from "@/lib/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default async function Icon() {
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
          fontSize: 340,
          letterSpacing: -12,
        }}
      >
        H<span style={{ color: colors.signal }}>.</span>
      </div>
    ),
    { ...size, fonts: await ogFonts() },
  );
}
