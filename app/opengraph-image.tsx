import { ImageResponse } from "next/og";

export const alt = "Trugro Advisors — defence strategy consulting in India";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#012160",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            color: "#B9F227",
            fontSize: 18,
            letterSpacing: 6,
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Defence strategy consulting
        </div>
        <div
          style={{
            color: "#F5F5F1",
            fontSize: 92,
            fontFamily: "Georgia, serif",
            lineHeight: 0.95,
            letterSpacing: -2,
          }}
        >
          Trugro
        </div>
        <div
          style={{
            color: "rgba(245,245,241,0.78)",
            fontSize: 28,
            marginTop: 28,
            maxWidth: 720,
          }}
        >
          Building Defence Enterprises Today
        </div>
      </div>
    ),
    size
  );
}
