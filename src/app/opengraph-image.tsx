import { ImageResponse } from "next/og";
export const alt = "Farhan Adiwidya Pradana — Data, AI, Engineering, Strategy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: "64px 76px",
        background: "#f7f7f5",
        color: "#1a1a1a",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 23,
        }}
      >
        <span>farhan / portfolio</span>
        <span style={{ color: "#2563eb" }}>
          DATA · AI · ENGINEERING · STRATEGY
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 64,
          fontWeight: 500,
          letterSpacing: "-2px",
          lineHeight: 1.2,
        }}
      >
        <span>Hey, I’m Farhan.</span>
        <span style={{ color: "#2563eb", fontSize: 48 }}>
          I build with data, think in systems,
        </span>
        <span style={{ fontSize: 48 }}>and enjoy the process.</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 22,
          color: "#65656b",
        }}
      >
        <span>Farhan Adiwidya Pradana</span>
        <span>Computer Science · Universitas Gadjah Mada</span>
      </div>
    </div>,
    size,
  );
}
