import { ImageResponse } from "next/og";

import { BRAND_COLORS } from "@/lib/brand-colors";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 28,
          background: BRAND_COLORS.background,
          color: BRAND_COLORS.foreground,
          fontSize: 32,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 56,
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          <span
            style={{
              width: 20,
              height: 20,
              borderRadius: 999,
              background: BRAND_COLORS.primary,
            }}
          />
          DevClub
        </div>
        <div
          style={{
            display: "flex",
            maxWidth: 880,
            textAlign: "center",
            fontSize: 38,
            fontWeight: 400,
            color: "#c9c9cc",
          }}
        >
          Torne-se Dev do zero ao avançado — Programação, IA, Dados e Automações
        </div>
      </div>
    ),
    { ...size }
  );
}
