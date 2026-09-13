import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 20,
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
