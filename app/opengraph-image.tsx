import { ImageResponse } from "next/og";

export const alt = "GINVIFY — Engineering Intelligence";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#050607",
          color: "#F2F4F5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 8, color: "#B7FF3C" }}>
          GINVIFY
        </div>
        <div style={{ marginTop: 24, fontSize: 64, fontWeight: 500 }}>
          Engineering Intelligence.
        </div>
        <div style={{ marginTop: 20, fontSize: 28, color: "#9AA3A8" }}>
          Web · AI · Automation · SaaS
        </div>
      </div>
    ),
    { ...size },
  );
}
