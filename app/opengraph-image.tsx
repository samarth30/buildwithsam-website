import { ImageResponse } from "next/og";

import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = site.title;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#f7f7f5",
          padding: "80px 90px",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 1,
            textTransform: "uppercase",
            color: "#5a5a56",
          }}
        >
          {site.role}
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 650,
            letterSpacing: -2,
            color: "#111111",
            marginTop: 18,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            fontSize: 28,
            lineHeight: 1.4,
            color: "#5a5a56",
            marginTop: 28,
            maxWidth: 920,
          }}
        >
          Backend, data, and agent systems. Not a blockchain developer.
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 24,
            color: "#111111",
            fontWeight: 600,
          }}
        >
          buildwithsam.co
        </div>
      </div>
    ),
    size,
  );
}
