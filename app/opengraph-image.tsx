import { ImageResponse } from "next/og";
import { PERSONAL_INFO } from "@/lib/data";

export const alt = "Sabir Essaad — Full Stack & AI Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Preview image shown when the site link is shared (LinkedIn, WhatsApp, Slack…)
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
          padding: "80px",
          background: "radial-gradient(circle at 70% 40%, #0F3570 0%, #04183B 60%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 110,
            height: 110,
            borderRadius: 999,
            background: "linear-gradient(135deg, #0F3570, #2092E5)",
            fontSize: 44,
            fontWeight: 700,
          }}
        >
          SE
        </div>
        <div style={{ marginTop: 40, fontSize: 72, fontWeight: 700 }}>{PERSONAL_INFO.name}</div>
        <div style={{ marginTop: 16, fontSize: 36, color: "#B4C4DE", maxWidth: 900 }}>
          {PERSONAL_INFO.heroHeadline}
        </div>
      </div>
    ),
    size
  );
}
