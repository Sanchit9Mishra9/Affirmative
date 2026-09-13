import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#012160",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#F5F5F1",
          fontSize: 96,
          fontFamily: "Georgia, serif",
          fontWeight: 400,
          lineHeight: 1,
        }}
      >
        T
      </div>
    ),
    size
  );
}
